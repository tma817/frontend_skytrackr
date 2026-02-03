"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import FlightCard from "@/components/FlightCard";
import { watchlistService } from "@/services/watchlist.service";
import type { FlightResult } from "../../types/flight";
import { useSearchFlights } from "@/hooks/useSearchFlights";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // ===== Read query from URL =====
  const from = searchParams.get("from") ?? "";
  const to = searchParams.get("to") ?? "";
  const tripType = (searchParams.get("tripType") ?? "oneway").toLowerCase();
  const departure = searchParams.get("departure") ?? "";
  const returnDate = searchParams.get("return") ?? "";
  const numOfPassengers = searchParams.get("numOfPassengers") ?? "1 adult";

  // ===== Flights via Hook =====
  const {
    flights,
    loading,
    loadingMore,
    hasMore,
    loadMore,
    error,
  } = useSearchFlights({
    from,
    to,
    departure,
    returnDate,
    numOfPassengers,
  });

  // ===== Local UI filters (UI concern only) =====
  const [bestValue, setBestValue] = useState(true);
  const [membersDeals, setMembersDeals] = useState(false);
  const [budget, setBudget] = useState<"any" | "150" | "250" | "350" | "1000">("any");
  const [rating, setRating] = useState<"any" | "1" | "2" | "3" | "4" | "5">("any");

  // ===== Watchlist =====
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [watchlistBusy, setWatchlistBusy] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await watchlistService.getWatchlist();
        if (mounted) setWatchlist(data);
      } catch (err) {
        console.error(err);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const handleToggleWatchlist = async (f: FlightResult) => {
    setWatchlistBusy(true);
    const isAdded = watchlist.includes(f.id);

    try {
      await watchlistService.toggleWatchlist(f, isAdded);
      setWatchlist((prev) =>
        isAdded ? prev.filter((id) => id !== f.id) : [...prev, f.id]
      );
    } catch (err: any) {
      if (err?.message === "UNAUTHORIZED") {
        alert("Please login to use this feature");
        router.push("/login");
      }
    } finally {
      setWatchlistBusy(false);
    }
  };

  // ===== Navigation =====
  const handleSearch = (payload: any) => {
    const qs = new URLSearchParams({
      from: payload.from ?? "",
      to: payload.to ?? "",
      tripType: (payload.tripType ?? payload.trip ?? "oneway").toLowerCase(),
      departure:
        payload.departure ??
        payload.departureDate ??
        payload.dateRange?.from ??
        "",
      return:
        payload.return ??
        payload.returnDate ??
        payload.dateRange?.to ??
        "",
      numOfPassengers: payload.numOfPassengers ?? payload.passengers ?? "1 adult",
    });

    router.push(`/search?${qs.toString()}`);
  };

  const goTicket = (flightId: string, searchId: string) => {
    const qs = new URLSearchParams({
      searchId,
      from,
      to,
      tripType,
      departure,
      return: returnDate,
      numOfPassengers,
    });

    router.push(`/ticket/${flightId}?${qs.toString()}`);
  };

  const filtered = flights;

  return (
    <main className="min-h-screen">
      {/* ===== Header + SearchBar ===== */}
      <div className="border-b">
        <div className="bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50 px-8 py-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">{from}</span> →{" "}
              <span className="font-medium text-gray-900">{to}</span>
              <span className="mx-2 text-gray-300">|</span>
              {tripType === "roundtrip" ? (
                <span>{departure} ~ {returnDate}</span>
              ) : (
                <span>{departure}</span>
              )}
              <span className="mx-2 text-gray-300">|</span>
              <span>{numOfPassengers}</span>
            </div>

            <SearchBar
              className="mt-4"
              defaultFrom={from}
              defaultTo={to}
              defaultPassengers={numOfPassengers}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </div>

      {/* ===== Body ===== */}
      <div className="mx-auto max-w-6xl px-8 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* ===== Filters (UI only) ===== */}
          <aside className="col-span-3">
            <h2 className="text-sm font-semibold text-gray-900">Filters</h2>
            <div className="mt-4 border-b pb-4">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={bestValue}
                  onChange={(e) => setBestValue(e.target.checked)}
                />
                Best value
              </label>
            </div>
          </aside>

          {/* ===== Flights List ===== */}
          <section className="col-span-9">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />
                <p className="mt-4 text-gray-500 font-medium">
                  Searching for best flights...
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-20 text-red-600 ">{error}</div>
            ) : filtered.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                {filtered.map((f) => (
                  <FlightCard
                    key={f.id}
                    flight={f}
                    onClick={() => goTicket(f.id, f.search_id!)}
                    isAdded={watchlist.includes(f.id)}
                    onToggle={() => handleToggleWatchlist(f)}
                  />
                ))}

                {hasMore && (
                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={loadMore}
                      disabled={loadingMore || watchlistBusy}
                      className="rounded-lg border px-5 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-60"
                    >
                      {loadingMore ? "Loading..." : "Load more flights"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed rounded-xl">
                <p className="text-gray-500">
                  No flights found for this route. Try another date.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
