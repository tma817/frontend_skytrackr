"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "../components/SearchBar";
interface FlightResult {
  id: string;
  airline: string;
  duration: string;
  time: string;
  price: number;
  stops: string;
  tag?: string;
  note?: string;
}

function airlineBadge(airline: string) {
  const letter = airline.trim().charAt(0).toUpperCase();
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
      {letter}
    </div>
  );
}

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from") ?? "";
  const to = searchParams.get("to") ?? "";
  const date = searchParams.get("date") ?? "";
  const pax = searchParams.get("pax") ?? "1 adult";

  const [flights, setFlights] = useState<FlightResult[]>([]);
  const [loading, setLoading] = useState(true);

  const [bestValue, setBestValue] = useState(true);
  const [membersDeals, setMembersDeals] = useState(false);
  const [budget, setBudget] = useState<"any" | "150" | "250" | "350" | "1000">("any");
  const [rating, setRating] = useState<"any" | "1" | "2" | "3" | "4" | "5">("any");

  useEffect(() => {
    const fetchFlights = async () => {
      if (!from || !to) return;
      
      setLoading(true);
      try {
        const adultCount = pax.split(" ")[0];

        const qs = new URLSearchParams({
          origin: from,
          destination: to,
          date: date,
          adults: adultCount,
        });

        const response = await fetch(`http://localhost:3000/flights/search?${qs.toString()}`);
        const data = await response.json();
        console.log(data)
        setFlights(data);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [from, to, date, pax]);

  // const filtered = useMemo(() => {
  //   let list = [...flights];

  //   if (bestValue) {
  //     list.sort((a, b) => (b.tag ? 1 : 0) - (a.tag ? 1 : 0));
  //   }

  //   if (membersDeals) {
  //     list = list.filter((x) => x.price < 800);
  //   }

  //   if (budget !== "any") {
  //     const b = parseInt(budget);
  //     list = list.filter((x) => x.price <= b);
  //   }

  //   return list;
  // }, [flights, bestValue, membersDeals, budget]);
  const filtered = flights
  const handleSearch = (payload: any) => {
    const qs = new URLSearchParams({
      from: payload.from,
      to: payload.to,
      date: payload.dateRange,
      pax: payload.passengers,
    });
    router.push(`/search?${qs.toString()}`);
  };

  const goTicket = (flightId: string) => {
    const qs = new URLSearchParams({ from, to, date, pax });
    router.push(`/ticket/${flightId}?${qs.toString()}`);
  };

  return (
    <main className="min-h-screen">
      <div className="border-b">
        <div className="bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50 px-8 py-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">{from}</span> →{" "}
              <span className="font-medium text-gray-900">{to}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span>{date}</span>
            </div>

            <SearchBar
              className="mt-4"
              defaultFrom={from}
              defaultTo={to}
              defaultDateRange={date}
              defaultPassengers={pax}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-8 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar Filters */}
          <aside className="col-span-3">
             <h2 className="text-sm font-semibold text-gray-900">Filters</h2>
             <div className="mt-4 border-b pb-4">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={bestValue} onChange={(e) => setBestValue(e.target.checked)} />
                  Best value
                </label>
             </div>
          </aside>

          <section className="col-span-9">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black"></div>
                <p className="mt-4 text-gray-500 font-medium">Searching for best flights...</p>
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.length > 0 ? (
                  filtered.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => goTicket(f.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm hover:border-gray-400 transition">
                        <div className="flex items-center gap-3">
                          {airlineBadge(f.airline)}
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-gray-900">{f.time}</span>
                              <span className="text-sm text-gray-600">{f.airline}</span>
                            </div>
                            <div className="text-xs text-blue-600">{f.tag}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-gray-900">${f.price.toLocaleString()}</div>
                          <div className="text-xs text-gray-400">{f.stops}</div>
                        </div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-20 border-2 border-dashed rounded-xl">
                    <p className="text-gray-500">No flights found for this route. Try another date.</p>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}