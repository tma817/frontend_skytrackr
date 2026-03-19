"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { watchlistService, WatchlistItem } from "@/services/watchlist.service";
import { predictionService, PricePrediction } from "@/services/prediction.service";
import { getAccessToken } from "@/utils/auth-helpers";

const STATUS_CONFIG = {
  price_dropped:   { label: "Price Dropped", dot: "bg-emerald-500", text: "text-emerald-600", bg: "bg-emerald-50" },
  price_increased: { label: "Price Up",      dot: "bg-red-500",     text: "text-red-500",     bg: "bg-red-50" },
  active:          { label: "Tracking",      dot: "bg-slate-300",   text: "text-slate-400",   bg: "bg-slate-50" },
} as const;

const TREND_CONFIG = {
  rising:  { label: "Rising",  cls: "text-red-500",     icon: "↑" },
  falling: { label: "Falling", cls: "text-emerald-600", icon: "↓" },
  stable:  { label: "Stable",  cls: "text-slate-500",   icon: "→" },
  unknown: { label: "—",       cls: "text-slate-400",   icon: "" },
} as const;

const REC_CONFIG = {
  buy_now:   { label: "Buy Now",   cls: "bg-slate-900 text-white" },
  wait:      { label: "Wait",      cls: "bg-blue-600 text-white" },
  uncertain: { label: "Uncertain", cls: "bg-slate-100 text-slate-500" },
} as const;

type PredictionState = PricePrediction | "loading" | "error";

export default function WatchlistPage() {
  const router = useRouter();
  const [items, setItems] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [removing, setRemoving] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [predictions, setPredictions] = useState<Record<string, PredictionState>>({});

  useEffect(() => {
    if (!getAccessToken()) { router.replace("/login"); return; }
    watchlistService.getWatchlist()
      .then((data) => {
        setItems(data);
        const init: Record<string, PredictionState> = {};
        data.forEach((i) => { init[i._id] = "loading"; });
        setPredictions(init);
        data.forEach((item) => {
          predictionService.predictPrice(item.origin, item.destination, item.departureDate, item.currency)
            .then((p) => setPredictions((prev) => ({ ...prev, [item._id]: p })))
            .catch(() => setPredictions((prev) => ({ ...prev, [item._id]: "error" })));
        });
      })
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
      setPredictions((prev) => { const n = { ...prev }; delete n[id]; return n; });
    } catch { setError("Failed to remove item."); }
    finally { setRemoving(null); }
  }

  function handleSearchAgain(item: WatchlistItem) {
    const qs = new URLSearchParams({
      from: item.origin, to: item.destination,
      tripType: item.tripType === "round-trip" ? "roundtrip" : "oneway",
      departure: item.departureDate,
      numOfPassengers: String(Math.max(1, parseInt(String(item.passengers)) || 1)),
    });
    router.push(`/search?${qs.toString()}`);
  }

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F8FA]">

      {/* Header */}
      <div className="border-b bg-white px-8 py-5">
        <div className="mx-auto max-w-3xl flex items-center justify-between">
          <div>
            <h1 className="text-lg font-black text-slate-900 tracking-tight">Watchlist</h1>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {items.length} flight{items.length !== 1 ? "s" : ""} · price alerts every 6 hours
            </p>
          </div>
          <button onClick={() => router.push("/profile")} className="text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors">
            ← Profile
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-8">
        {error && (
          <p className="mb-6 text-xs text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">{error}</p>
        )}

        {items.length === 0 && !error ? (
          <div className="py-20 text-center">
            <p className="text-slate-400 text-sm">No flights in your watchlist yet.</p>
            <button onClick={() => router.push("/")} className="mt-4 rounded-xl bg-black px-5 py-2.5 text-sm font-bold text-white hover:opacity-80 transition-opacity">
              Search flights
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
            {items.map((item) => {
              const s = STATUS_CONFIG[item.status] ?? STATUS_CONFIG.active;
              const dropped = item.priceDiff < 0;
              const increased = item.priceDiff > 0;
              const pred = predictions[item._id];

              return (
                <div key={item._id} className="px-5 py-5">

                  {/* ── Main row ── */}
                  <div className="flex items-center gap-4">
                    {/* Logo */}
                    <div className="shrink-0">
                      {item.airlineLogo ? (
                        <img src={item.airlineLogo} alt={item.airlineName} className="h-9 w-9 object-contain" />
                      ) : (
                        <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-[9px] font-black text-slate-400">
                          {item.airlineName?.slice(0, 2).toUpperCase() ?? "–"}
                        </div>
                      )}
                    </div>

                    {/* Route — primary info */}
                    <div className="flex-1 min-w-0">
                      {/* Big route */}
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-slate-900 tracking-tight">{item.origin}</span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xl font-black text-slate-900 tracking-tight">{item.destination}</span>
                      </div>
                      {/* Secondary meta — clearly smaller + lighter */}
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        <span className="text-[11px] text-slate-400">{item.airlineName}</span>
                        <span className="text-slate-200 text-[11px]">·</span>
                        <span className="text-[11px] text-slate-400">{item.departureDate}</span>
                        <span className="text-slate-200 text-[11px]">·</span>
                        <span className="text-[11px] text-slate-400">{item.passengers} pax</span>
                        <span className="text-slate-200 text-[11px]">·</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded ${s.bg} ${s.text}`}>
                          {item.tripType === "round-trip" ? "RT" : "OW"}
                        </span>
                      </div>
                    </div>

                    {/* Price — right side */}
                    <div className="text-right shrink-0">
                      <p className="text-2xl font-black text-slate-900 tracking-tight">
                        <span className="text-sm font-bold text-slate-400 mr-0.5">{item.currency}</span>{item.currentPrice.toFixed(0)}
                      </p>
                      {dropped && (
                        <p className="text-[11px] font-bold text-emerald-600 mt-0.5">▼ {Math.abs(item.priceDiff).toFixed(0)} saved</p>
                      )}
                      {increased && (
                        <p className="text-[11px] font-bold text-red-500 mt-0.5">▲ {item.priceDiff.toFixed(0)} up</p>
                      )}
                      {!dropped && !increased && (
                        <div className="flex items-center justify-end gap-1 mt-0.5">
                          <div className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                          <span className="text-[10px] text-slate-400">{s.label}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ── AI Prediction ── */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    {pred === "loading" && (
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 animate-spin rounded-full border-2 border-slate-200 border-t-slate-400 shrink-0" />
                        <span className="text-[11px] text-slate-400">Analyzing prices…</span>
                      </div>
                    )}

                    {pred === "error" && (
                      <span className="text-[11px] text-slate-400">Prediction unavailable.</span>
                    )}

                    {pred && pred !== "loading" && pred !== "error" && (
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                          {/* Trend */}
                          <span className={`text-[11px] font-black ${TREND_CONFIG[pred.trend].cls}`}>
                            {TREND_CONFIG[pred.trend].icon} {TREND_CONFIG[pred.trend].label}
                          </span>
                          {/* Recommendation */}
                          <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${REC_CONFIG[pred.recommendation].cls}`}>
                            {REC_CONFIG[pred.recommendation].label}
                          </span>
                          {/* Price range */}
                          {pred.priceRange && (
                            <span className="text-[11px] text-slate-500 font-medium">
                              {item.currency} {pred.priceRange.low.toFixed(0)}–{pred.priceRange.high.toFixed(0)}
                            </span>
                          )}
                          {/* Confidence */}
                          <span className="text-[10px] text-slate-400 capitalize">{pred.confidence} confidence</span>
                        </div>
                        {pred.reasoning && (
                          <p className="text-[11px] text-slate-400 leading-relaxed w-full mt-1">{pred.reasoning}</p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* ── Actions ── */}
                  <div className="mt-3 flex gap-2">
                    <button onClick={() => handleSearchAgain(item)} className="rounded-lg bg-slate-900 px-4 py-1.5 text-xs font-bold text-white hover:opacity-80 transition-opacity">
                      Search again
                    </button>
                    <button onClick={() => handleRemove(item._id)} disabled={removing === item._id} className="rounded-lg border border-slate-200 px-4 py-1.5 text-xs font-bold text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50">
                      {removing === item._id ? "Removing…" : "Remove"}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
