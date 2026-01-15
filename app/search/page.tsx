"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "../components/SearchBar";

type FlightResult = {
  id: string;
  airline: string;
  duration: string;
  time: string;
  stops: string;
  price: number;
  note?: string;
  layover?: string;
  tag?: string;
};

const ALL_RESULTS: FlightResult[] = [
  {
    id: "123",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: "1 stop",
    price: 624,
    note: "round trip",
    layover: "2h 45m in HNL",
    tag: "value",
  },
  {
    id: "234",
    airline: "Japan Airlines",
    duration: "18h 22m",
    time: "7:35AM - 12:15PM",
    stops: "1 stop",
    price: 663,
    note: "round trip",
    layover: "50m in HKG",
  },
  {
    id: "345",
    airline: "Delta",
    duration: "18h 52m",
    time: "9:47AM - 4:15PM",
    stops: "1 stop",
    price: 756,
    note: "round trip",
    layover: "4h 05m in ICN",
  },
  {
    id: "456",
    airline: "Korean Air",
    duration: "22h 37m",
    time: "6:45PM - 7:15PM",
    stops: "2 stops",
    price: 989,
    note: "round trip",
    tag: "Arrives next day",
    layover: "2h 45m in PVG",
  },
];

export default function SearchPage() {
  const router = useRouter();
  const sp = useSearchParams();

  const [from, setFrom] = useState("YYZ");
  const [to, setTo] = useState("ORD");
  const [date, setDate] = useState("Depart - Return");
  const [pax, setPax] = useState("1 adult");

  const [bestValue, setBestValue] = useState(true);
  const [membersDeals, setMembersDeals] = useState(false);

  // ✅ URL query -> state로 반영 (새로고침/공유 링크도 OK)
  useEffect(() => {
    const qFrom = sp.get("from");
    const qTo = sp.get("to");
    const qDate = sp.get("date");
    const qPax = sp.get("pax");

    if (qFrom) setFrom(qFrom);
    if (qTo) setTo(qTo);
    if (qDate) setDate(qDate);
    if (qPax) setPax(qPax);
  }, [sp]);

  const results = useMemo(() => {
    let r = [...ALL_RESULTS];

    if (bestValue) r = r.filter((x) => x.price <= 1000);
    if (membersDeals) r = r.filter((x) => x.price <= 800);

    return r;
  }, [bestValue, membersDeals]);

  const updateUrl = (next: { from: string; to: string; date: string; pax: string }) => {
    const qs = new URLSearchParams({
      from: next.from,
      to: next.to,
      date: next.date,
      pax: next.pax,
    });
    router.push(`/search?${qs.toString()}`);
  };

  // ✅ SearchBar에서 Search 누르면 여기로 들어와서 즉시 반영됨
  const handleSearch = (params: {
    from: string;
    to: string;
    dateRange: string;
    passengers: string;
  }) => {
    const nextFrom = params.from || "YYZ";
    const nextTo = params.to || "ORD";
    const nextDate = params.dateRange || "Depart - Return";
    const nextPax = params.passengers || "1 adult";

    setFrom(nextFrom);
    setTo(nextTo);
    setDate(nextDate);
    setPax(nextPax);

    updateUrl({ from: nextFrom, to: nextTo, date: nextDate, pax: nextPax });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Top hero bg */}
      <div className="relative border-b">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-r from-yellow-100 via-white to-pink-100 opacity-80" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6 py-6">
          <div className="text-sm text-gray-600">
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

          <div className="mt-4 flex flex-wrap gap-2">
            {["Max price", "Stops", "Times", "Airlines", "Seat class", "More"].map((item) => (
              <button
                key={item}
                className="rounded-md border border-gray-300 bg-white/80 px-3 py-1 text-sm text-gray-700 hover:bg-white"
              >
                {item} <span className="text-gray-400">▾</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Filters */}
          <aside className="col-span-12 md:col-span-3">
            <div className="text-sm font-semibold text-gray-900">Filters</div>

            <div className="mt-4 space-y-6">
              <div>
                <div className="flex items-center justify-between text-sm font-medium text-gray-800">
                  <span>Deals</span>
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

              <div>
                <div className="flex items-center justify-between text-sm font-medium text-gray-800">
                  <span>Your Budget</span>
                  <span className="text-gray-400">▾</span>
                </div>

                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Less than $150
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    $150 - $250
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    $250 - $350
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    $500 - $1000
                  </label>

                  <button className="pt-2 text-xs text-blue-600 hover:underline">
                    Show more
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm font-medium text-gray-800">
                  <span>Rating</span>
                  <span className="text-gray-400">▾</span>
                </div>

                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  {["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"].map((r, i) => (
                    <label key={r} className="flex items-center gap-2">
                      <input type="radio" name="rating" defaultChecked={i === 4} />
                      {r}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <section className="col-span-12 md:col-span-9">
            <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
              {results.map((r) => (
                <Link
                  key={r.id}
                  href={`/ticket/${r.id}`}
                  className="group flex items-center justify-between gap-6 border-b border-gray-100 px-5 py-4 last:border-b-0 hover:bg-gray-50"
                >
                  <div className="flex min-w-[220px] items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xs">
                      ✈️
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">{r.duration}</div>
                      <div className="text-sm font-medium text-gray-900">{r.airline}</div>
                      <div className="text-xs text-gray-400">{r.tag ?? "\u00A0"}</div>
                    </div>
                  </div>

                  <div className="hidden md:block min-w-[170px] text-sm text-gray-700">
                    {r.time}
                    <div className="text-xs text-gray-400">{r.tag === "Arrives next day" ? "Arrives next day" : "\u00A0"}</div>
                  </div>

                  <div className="hidden md:block min-w-[110px] text-sm text-gray-700">
                    {r.stops}
                    <div className="text-xs text-gray-400">{r.layover ?? "\u00A0"}</div>
                  </div>

                  <div className="min-w-[90px] text-right">
                    <div className="text-sm font-semibold text-gray-900">${r.price}</div>
                    <div className="text-xs text-gray-400">{r.note ?? ""}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-center text-sm font-semibold text-gray-900">AI Prediction</h3>
              <div className="mt-4 rounded-lg border border-gray-200 bg-white p-5 text-sm text-gray-600">
                Placeholder: Price grid + price history chart UI will go here.
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
