// app/search/page.tsx
"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "../components/SearchBar";
import { getFlightsForRoute, FlightResult } from "../lib/demoFlights";

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

  const from = searchParams.get("from") ?? "YYZ";
  const to = searchParams.get("to") ?? "ORD";
  const date = searchParams.get("date") ?? "Depart - Return";
  const pax = searchParams.get("pax") ?? "1 adult";

  const baseResults = useMemo(() => getFlightsForRoute(from, to), [from, to]);

  // ✅ Filters (필수 느낌만)
  const [bestValue, setBestValue] = useState(true);
  const [membersDeals, setMembersDeals] = useState(false);

  const [budget, setBudget] = useState<"any" | "150" | "250" | "350" | "1000">("any");
  const [rating, setRating] = useState<"any" | "1" | "2" | "3" | "4" | "5">("any");

  const filtered = useMemo(() => {
    let list: FlightResult[] = [...baseResults];

    if (bestValue) {
      // tag 있는 애들 위로만
      list.sort((a, b) => (b.tag ? 1 : 0) - (a.tag ? 1 : 0));
    }

    if (membersDeals) {
      list = list.filter((x) => x.price < 800);
    }

    if (budget === "150") list = list.filter((x) => x.price < 150);
    if (budget === "250") list = list.filter((x) => x.price >= 150 && x.price <= 250);
    if (budget === "350") list = list.filter((x) => x.price > 250 && x.price <= 350);
    if (budget === "1000") list = list.filter((x) => x.price <= 1000);

    // rating은 아직 데이터 없어서 UI만 유지
    void rating;

    return list;
  }, [baseResults, bestValue, membersDeals, budget, rating]);

  const handleSearch = (payload: {
    from: string;
    to: string;
    dateRange: string;
    passengers: string;
  }) => {
    const qs = new URLSearchParams({
      from: payload.from,
      to: payload.to,
      date: payload.dateRange,
      pax: payload.passengers,
    });
    router.push(`/search?${qs.toString()}`);
  };

  const goTicket = (flightId: string) => {
    // ✅ search context 유지한 채로 ticket detail 이동
    const qs = new URLSearchParams({ from, to, date, pax });
    router.push(`/ticket/${flightId}?${qs.toString()}`);
  };

  return (
    <main className="min-h-screen">
      {/* 상단 배경 + SearchBar */}
      <div className="border-b">
        <div className="bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50">
          <div className="mx-auto max-w-6xl px-8 py-8">
            <div className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">{from}</span> →{" "}
              <span className="font-medium text-gray-900">{to}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span>{date}</span>
              <span className="mx-2 text-gray-300">|</span>
              <span>{pax}</span>
            </div>

            <SearchBar
              className="mt-4"
              defaultFrom={from}
              defaultTo={to}
              defaultDateRange={date}
              defaultPassengers={pax}
              onSearch={handleSearch}
            />

            <div className="mt-3 flex flex-wrap gap-2">
              {["Max price", "Stops", "Times", "Airlines", "Seat class", "More"].map((t) => (
                <button
                  key={t}
                  className="rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm hover:bg-gray-50"
                  type="button"
                >
                  {t} <span className="ml-1 text-gray-400">▾</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 본문 */}
      <div className="mx-auto max-w-6xl px-8 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* LEFT FILTERS */}
          <aside className="col-span-3">
            <h2 className="text-sm font-semibold text-gray-900">Filters</h2>

            <div className="mt-4 border-b pb-4">
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-900">Deals</span>
                <span className="text-gray-400">▾</span>
              </div>

              <div className="mt-3 space-y-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={bestValue}
                    onChange={(e) => setBestValue(e.target.checked)}
                  />
                  Best value
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={membersDeals}
                    onChange={(e) => setMembersDeals(e.target.checked)}
                  />
                  Members deals
                </label>
              </div>
            </div>

            <div className="mt-4 border-b pb-4">
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-900">Your Budget</span>
                <span className="text-gray-400">▾</span>
              </div>

              <div className="mt-3 space-y-2 text-sm text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="budget"
                    checked={budget === "150"}
                    onChange={() => setBudget("150")}
                  />
                  Less than $150
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="budget"
                    checked={budget === "250"}
                    onChange={() => setBudget("250")}
                  />
                  $150 - $250
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="budget"
                    checked={budget === "350"}
                    onChange={() => setBudget("350")}
                  />
                  $250 - $350
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="budget"
                    checked={budget === "1000"}
                    onChange={() => setBudget("1000")}
                  />
                  $500 - $1000
                </label>

                <button
                  type="button"
                  className="mt-1 text-xs text-blue-600 hover:underline"
                  onClick={() => setBudget("any")}
                >
                  Show more
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-900">Rating</span>
                <span className="text-gray-400">▾</span>
              </div>

              <div className="mt-3 space-y-2 text-sm text-gray-700">
                {["1", "2", "3", "4", "5"].map((r) => (
                  <label key={r} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="rating"
                      checked={rating === r}
                      onChange={() => setRating(r as any)}
                    />
                    {r} Star{r !== "1" ? "s" : ""}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* RESULTS */}
          <section className="col-span-9">
            <div className="space-y-3">
              {filtered.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => goTicket(f.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm hover:border-gray-300 hover:shadow transition">
                    <div className="flex items-center gap-3">
                      {airlineBadge(f.airline)}

                      <div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm font-semibold text-gray-900">{f.duration}</div>
                          <div className="text-sm text-gray-700">{f.airline}</div>
                        </div>

                        <div className="mt-1 text-xs text-gray-500">
                          {f.tag ? f.tag : ""}
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-700">{f.time}</div>

                    <div className="text-right">
                      <div className="text-xs text-gray-600">{f.stops}</div>
                      <div className="text-xs text-gray-400">{f.note ?? ""}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">
                        ${f.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400">round trip</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* 아래쪽 섹션 */}
            <div className="mt-10 grid grid-cols-12 gap-6">
              <div className="col-span-5 rounded-lg border bg-white p-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Price grid (flexible dates)
                </h3>

                <div className="mt-3 overflow-hidden rounded-md border">
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="p-2 text-left"></th>
                        {["2/12", "2/13", "2/14", "2/15", "2/16"].map((d) => (
                          <th key={d} className="p-2 text-center font-medium">
                            {d}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["3/7", ["$837", "$592", "$592", "$1,308", "$837"]],
                        ["3/8", ["$837", "$592", "$592", "$837", "$1,308"]],
                        ["3/9", ["$624", "$592", "$624", "$592", "$624"]],
                        ["3/10", ["$1,308", "$624", "$624", "$837", "$837"]],
                        ["3/11", ["$592", "$624", "$1,308", "$837", "$624"]],
                      ].map(([row, vals]) => (
                        <tr key={row as string} className="border-t">
                          <td className="p-2 text-gray-600">{row as string}</td>
                          {(vals as string[]).map((v, idx) => (
                            <td key={idx} className="p-2 text-center text-gray-700">
                              {v}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-span-3 rounded-lg border bg-white p-4">
                <h3 className="text-sm font-semibold text-gray-900">Price history</h3>
                <div className="mt-3 flex h-32 items-center justify-center rounded-md border bg-gray-50 text-xs text-gray-500">
                  Chart placeholder
                </div>
              </div>

              <div className="col-span-4 rounded-lg border bg-white p-4">
                <h3 className="text-sm font-semibold text-gray-900">AI Prediction</h3>
                <div className="mt-3 flex h-32 items-center justify-center rounded-md border bg-gray-50 text-xs text-gray-500">
                  Prediction placeholder
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border bg-white p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                <span>Price rating</span>
                <span className="rounded-full bg-black px-2 py-0.5 text-xs text-white">
                  Buy soon
                </span>
              </div>

              <p className="mt-3 text-sm text-gray-700">
                We recommend booking soon. The average cost of this flight is $750, but could rise
                in the next few weeks.
              </p>

              <p className="mt-2 text-xs text-gray-500">
                This is placeholder text (later: AI model prediction + trend summary).
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
