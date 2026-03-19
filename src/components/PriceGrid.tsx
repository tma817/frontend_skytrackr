"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface PricePoint {
  date: string;
  price: number;
}

interface PriceGridProps {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  currency?: string;
  oneWay?: boolean;
  numOfPassengers?: string;
}

import { API_BASE as API } from "@/utils/api";

async function fetchPriceGrid(
  origin: string,
  destination: string,
  departureDate: string,
  currency: string,
  oneWay: boolean
): Promise<PricePoint[]> {
  const qs = new URLSearchParams({
    origin,
    destination,
    departureDate,
    currency,
    oneWay: String(oneWay),
  });
  const res = await fetch(`${API}/flights/price-grid?${qs}`);
  if (!res.ok) throw new Error("Failed to load price grid");
  const json = await res.json();
  return json.data as PricePoint[];
}

/** Pick N dates centred on `center` that exist in the price map */
function centeredDates(center: string, allDates: string[], n = 7): string[] {
  const idx = allDates.indexOf(center);
  if (idx === -1) {
    // center date has no price — take first n
    return allDates.slice(0, n);
  }
  const half = Math.floor(n / 2);
  let start = Math.max(0, idx - half);
  let end = start + n;
  if (end > allDates.length) {
    end = allDates.length;
    start = Math.max(0, end - n);
  }
  return allDates.slice(start, end);
}

function fmtDate(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function fmtPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

// ─── One-way: table strip ─────────────────────────────────────────────────────

function OnewayStrip({
  data,
  selectedDate,
  currency,
  onSelect,
}: {
  data: PricePoint[];
  selectedDate: string;
  currency: string;
  onSelect: (date: string) => void;
}) {
  if (!data.length)
    return (
      <p className="text-sm text-slate-400 py-4 text-center">
        No price data available.
      </p>
    );

  const map = Object.fromEntries(data.map((d) => [d.date, d.price]));
  const allDates = data.map((d) => d.date);
  const dates = centeredDates(selectedDate, allDates, 7);
  const prices = dates.map((d) => map[d]).filter((p) => p != null) as number[];
  const minPrice = prices.length ? Math.min(...prices) : -1;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse table-fixed text-center text-sm">
        <thead>
          <tr>
            {dates.map((date) => {
              const isSelected = date === selectedDate;
              const d = new Date(date + "T00:00:00");
              const dow = d.toLocaleDateString("en-US", { weekday: "short" });
              const dayMonth = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
              return (
                <th
                  key={date}
                  className={`border px-2 py-2 font-semibold
                    ${isSelected
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-100 text-slate-500 border-slate-200"
                    }`}
                >
                  <div className="text-[10px] uppercase tracking-wide">{dow}</div>
                  <div className="text-xs font-bold mt-0.5">{dayMonth}</div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dates.map((date) => {
              const price = map[date];
              const isSelected = date === selectedDate;
              const isCheapest = price != null && price === minPrice && !isSelected;
              return (
                <td
                  key={date}
                  onClick={() => price != null && onSelect(date)}
                  className={`border px-2 py-3 font-black transition-colors
                    ${price == null ? "text-slate-300 bg-white border-slate-100 cursor-default" :
                      isSelected ? "bg-blue-50 text-blue-700 border-blue-200 cursor-pointer" :
                      isCheapest ? "bg-emerald-50 text-emerald-700 border-emerald-200 cursor-pointer hover:bg-emerald-100" :
                      "bg-white text-slate-800 border-slate-100 cursor-pointer hover:bg-slate-50"
                    }`}
                >
                  {price != null ? (
                    <>
                      <div className="text-sm">{fmtPrice(price, currency)}</div>
                      {isCheapest && (
                        <div className="text-[9px] font-black uppercase text-emerald-600 mt-0.5 tracking-wide">
                          Cheapest
                        </div>
                      )}
                      {isSelected && (
                        <div className="text-[9px] font-black uppercase text-blue-500 mt-0.5 tracking-wide">
                          Selected
                        </div>
                      )}
                    </>
                  ) : (
                    <span className="text-slate-300">–</span>
                  )}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// ─── Round-trip: 2-D grid ─────────────────────────────────────────────────────

function RoundtripGrid({
  depData,
  retData,
  selectedDep,
  selectedRet,
  currency,
  onSelect,
}: {
  depData: PricePoint[];
  retData: PricePoint[];
  selectedDep: string;
  selectedRet: string;
  currency: string;
  onSelect: (dep: string, ret: string) => void;
}) {
  const depMap = Object.fromEntries(depData.map((d) => [d.date, d.price]));
  const retMap = Object.fromEntries(retData.map((d) => [d.date, d.price]));

  const depDates = centeredDates(selectedDep, depData.map((d) => d.date), 7);
  const retDates = centeredDates(selectedRet, retData.map((d) => d.date), 7);

  if (!depDates.length || !retDates.length) {
    return <p className="text-sm text-slate-400 py-8 text-center">No price data available.</p>;
  }

  // find global min to highlight cheapest cell
  const allSums = depDates.flatMap((dep) =>
    retDates
      .filter((ret) => ret > dep)
      .map((ret) => (depMap[dep] ?? 0) + (retMap[ret] ?? 0))
  );
  const minSum = Math.min(...allSums);

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse text-xs">
        <thead>
          <tr>
            <th className="border border-slate-200 bg-slate-100 p-2 text-slate-500 min-w-[72px]">
              <span className="text-[10px]">Return ↓ / Dep →</span>
            </th>
            {depDates.map((d) => (
              <th
                key={d}
                className={`border border-slate-200 p-2 font-bold text-center min-w-[80px] ${
                  d === selectedDep ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
                }`}
              >
                {fmtDate(d)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {retDates.map((ret) => (
            <tr key={ret}>
              <td
                className={`border border-slate-200 p-2 font-bold text-center ${
                  ret === selectedRet ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
                }`}
              >
                {fmtDate(ret)}
              </td>
              {depDates.map((dep) => {
                const invalid = ret <= dep;
                const sum = invalid ? null : (depMap[dep] ?? 0) + (retMap[ret] ?? 0);
                const isSelected = dep === selectedDep && ret === selectedRet;
                const isCheapest = !invalid && sum === minSum && !isSelected;

                return (
                  <td
                    key={dep}
                    onClick={() => !invalid && onSelect(dep, ret)}
                    className={`border border-slate-200 p-2 text-center transition-colors
                      ${invalid
                        ? "bg-slate-50 text-slate-200 cursor-default"
                        : isSelected
                        ? "bg-blue-500 text-white font-black cursor-pointer"
                        : isCheapest
                        ? "bg-emerald-100 text-emerald-700 font-black cursor-pointer"
                        : "bg-white text-slate-700 hover:bg-slate-50 cursor-pointer"
                      }`}
                  >
                    {invalid ? "–" : sum != null ? fmtPrice(sum, currency) : "–"}
                    {isCheapest && (
                      <div className="text-[9px] font-black text-emerald-600 leading-none mt-0.5">Best</div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-slate-400 mt-2">
        * Round-trip price shown as cheapest outbound + cheapest return for each date combination.
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PriceGrid({
  origin,
  destination,
  departureDate,
  returnDate,
  currency = "CAD",
  oneWay = true,
  numOfPassengers = "1",
}: PriceGridProps) {
  const router = useRouter();
  const [depData, setDepData] = useState<PricePoint[]>([]);
  const [retData, setRetData] = useState<PricePoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!origin || !destination || !departureDate) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    const fetches: Promise<void>[] = [
      fetchPriceGrid(origin, destination, departureDate, currency, true)
        .then(setDepData)
        .catch(() => setDepData([])),
    ];

    if (!oneWay && returnDate) {
      fetches.push(
        fetchPriceGrid(destination, origin, returnDate, currency, true)
          .then(setRetData)
          .catch(() => setRetData([]))
      );
    }

    Promise.all(fetches)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [origin, destination, departureDate, returnDate, currency, oneWay]);

  const navigate = (dep: string, ret?: string) => {
    const qs = new URLSearchParams({
      from: origin,
      to: destination,
      tripType: oneWay ? "oneway" : "roundtrip",
      departure: dep,
      numOfPassengers,
    });
    if (ret) qs.set("return", ret);
    router.push(`/search?${qs.toString()}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12 gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-black" />
        <span className="text-sm text-slate-500">Loading prices…</span>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-sm text-red-500 py-8">{error}</p>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          {origin} → {destination}
          {!oneWay && returnDate && ` · ${destination} → ${origin}`}
        </p>
        <span className="text-[10px] text-slate-300">Click a date to search</span>
      </div>

      {oneWay ? (
        <OnewayStrip
          data={depData}
          selectedDate={departureDate}
          currency={currency}
          onSelect={(date) => navigate(date)}
        />
      ) : (
        <RoundtripGrid
          depData={depData}
          retData={retData}
          selectedDep={departureDate}
          selectedRet={returnDate ?? ""}
          currency={currency}
          onSelect={(dep, ret) => navigate(dep, ret)}
        />
      )}
    </div>
  );
}
