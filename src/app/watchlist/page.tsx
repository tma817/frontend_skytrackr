"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { watchlistService, WatchlistItem } from "@/services/watchlist.service";
import { getAccessToken } from "@/utils/auth-helpers";

const STATUS_CONFIG = {
  price_dropped: { label: "Price Dropped", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  price_increased: { label: "Price Up", className: "bg-red-50 text-red-600 border-red-200" },
  active: { label: "Tracking", className: "bg-slate-100 text-slate-600 border-slate-200" },
} as const;

export default function WatchlistPage() {
  const router = useRouter();
  const [items, setItems] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [removing, setRemoving] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!getAccessToken()) {
      router.replace("/login");
      return;
    }
    watchlistService
      .getWatchlist()
      .then(setItems)
      .catch((err) => {
        if (err.message === "UNAUTHORIZED") router.replace("/login");
        else setError("Failed to load watchlist.");
      })
      .finally(() => setLoading(false));
  }, [router]);

  async function handleRemove(id: string) {
    setRemoving(id);
    try {
      await watchlistService.removeFromWatchlist(id);
      setItems((prev) => prev.filter((i) => i._id !== id));
    } catch {
      setError("Failed to remove item. Try again.");
    } finally {
      setRemoving(null);
    }
  }

  function handleSearchAgain(item: WatchlistItem) {
    const qs = new URLSearchParams({
      from: item.origin,
      to: item.destination,
      tripType: item.tripType === "round-trip" ? "roundtrip" : "oneway",
      departure: item.departureDate,
      numOfPassengers: String(item.passengers),
    });
    router.push(`/search?${qs.toString()}`);
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/40 py-10 px-4">
      <div className="mx-auto max-w-3xl space-y-4">

        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-xl font-black text-slate-900">Watchlist</h1>
            <p className="text-xs text-slate-400 mt-0.5">
              {items.length} flight{items.length !== 1 ? "s" : ""} tracked · price alerts every 6 hours
            </p>
          </div>
          <button
            onClick={() => router.push("/profile")}
            className="text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors"
          >
            ← Back to profile
          </button>
        </div>

        {error && (
          <p className="text-xs text-red-500 font-medium bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        {items.length === 0 && !error ? (
          <div className="rounded-2xl border bg-white shadow-sm py-20 text-center">
            <p className="text-slate-400 text-sm">No flights in your watchlist yet.</p>
            <button
              onClick={() => router.push("/")}
              className="mt-4 rounded-xl bg-black px-5 py-2.5 text-sm font-bold text-white hover:opacity-80 transition-opacity"
            >
              Search flights
            </button>
          </div>
        ) : (
          items.map((item) => {
            const statusCfg = STATUS_CONFIG[item.status] ?? STATUS_CONFIG.active;
            const dropped = item.priceDiff < 0;
            const increased = item.priceDiff > 0;

            return (
              <div key={item._id} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
                {/* Status bar */}
                <div className={`px-5 py-2 border-b flex items-center justify-between ${
                  item.status === "price_dropped"
                    ? "bg-emerald-50/60 border-emerald-100"
                    : item.status === "price_increased"
                    ? "bg-red-50/60 border-red-100"
                    : "bg-slate-50/60 border-slate-100"
                }`}>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border ${statusCfg.className}`}>
                    {statusCfg.label}
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    Saved {new Date(item.savedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>

                <div className="p-5 flex items-center gap-5">
                  {/* Airline logo */}
                  {item.airlineLogo ? (
                    <img src={item.airlineLogo} alt={item.airlineName} className="h-10 w-10 object-contain shrink-0" />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 shrink-0">
                      {item.airlineName?.slice(0, 2).toUpperCase() ?? "–"}
                    </div>
                  )}

                  {/* Route info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-black text-slate-900">{item.origin}</span>
                      <svg className="h-3.5 w-3.5 text-slate-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                      <span className="text-lg font-black text-slate-900">{item.destination}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        {item.tripType}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.airlineName} · {item.departureDate} · {item.passengers} passenger{item.passengers !== 1 ? "s" : ""}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-right shrink-0">
                    <div className="text-2xl font-black text-cyan-700">
                      {item.currency} {item.currentPrice.toFixed(0)}
                    </div>
                    {item.priceDiff !== 0 && (
                      <p className={`text-xs font-bold mt-0.5 ${dropped ? "text-emerald-600" : "text-red-500"}`}>
                        {dropped ? "▼" : "▲"} {Math.abs(item.priceDiff).toFixed(0)} from {item.initialPrice.toFixed(0)}
                      </p>
                    )}
                    {item.priceDiff === 0 && (
                      <p className="text-xs text-slate-400 mt-0.5">No change</p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="px-5 pb-4 flex gap-2">
                  <button
                    onClick={() => handleSearchAgain(item)}
                    className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white hover:opacity-80 transition-opacity"
                  >
                    Search again
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    disabled={removing === item._id}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-bold text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50"
                  >
                    {removing === item._id ? "Removing…" : "Remove"}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
