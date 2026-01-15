// app/ticket/[id]/page.tsx
"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import SearchBar from "../../components/SearchBar";
import { getFlightById } from "../../lib/demoFlights";

export default function TicketDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams<{ id: string }>();

  // ✅ id 안전하게 문자열로
  const idRaw = params?.id;
  const id = Array.isArray(idRaw) ? idRaw[0] : idRaw;

  const from = searchParams.get("from") ?? "YYZ";
  const to = searchParams.get("to") ?? "ORD";
  const date = searchParams.get("date") ?? "Depart - Return";
  const pax = searchParams.get("pax") ?? "1 adult";

  const flight = useMemo(() => {
    if (!id) return undefined;
    return getFlightById(String(id));
  }, [id]);

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

  if (!flight) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-8 py-16">
          <h1 className="text-xl font-semibold">Ticket not found</h1>
          <p className="mt-2 text-sm text-gray-500">id: {String(id)}</p>
          <button
            className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-50"
            onClick={() => router.push(`/search?from=${from}&to=${to}&date=${date}&pax=${pax}`)}
          >
            Back to search
          </button>
        </div>
      </main>
    );
  }

  const title = `${flight.fromCity} - ${flight.toCity} (Round Trip)`;

  return (
    <main className="min-h-screen">
      {/* 상단 SearchBar 영역 */}
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
              {["Max price", "Stops", "Times", "Airlines", "Seat class", "Round trip", "More"].map(
                (t) => (
                  <button
                    key={t}
                    className="rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm hover:bg-gray-50"
                    type="button"
                  >
                    {t} <span className="ml-1 text-gray-400">▾</span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Details */}
      <div className="mx-auto max-w-6xl px-8 py-10">
        <div className="rounded-xl border bg-white p-8">
          <div className="text-xs text-gray-500">Ticket Details</div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-900">{title}</h1>

          <div className="mt-6 grid grid-cols-12 gap-8">
            <div className="col-span-7">
              <div className="space-y-3 text-sm text-gray-800">
                <div>
                  <span className="font-semibold">Price:</span>{" "}
                  <span>${flight.price.toLocaleString()}</span>
                </div>
                <div>
                  <span className="font-semibold">Airline:</span>{" "}
                  <span>{flight.airline}</span>
                </div>
                <div>
                  <span className="font-semibold">Flight Number:</span>{" "}
                  <span>{flight.flightNumber ?? "—"}</span>
                </div>
                <div>
                  <span className="font-semibold">Aircraft:</span>{" "}
                  <span>{flight.aircraft ?? "—"}</span>
                </div>
                <div>
                  <span className="font-semibold">Cabin Class:</span>{" "}
                  <span>{flight.cabinClass ?? "—"}</span>
                </div>
                <div>
                  <span className="font-semibold">Flight Duration:</span>{" "}
                  <span>{flight.duration}</span>
                </div>
                <div>
                  <span className="font-semibold">Number of Stops:</span>{" "}
                  <span>{flight.stopsCount ?? (flight.stops.includes("2") ? 2 : 1)}</span>
                </div>
              </div>
            </div>

            <div className="col-span-5">
              <div className="relative h-[180px] w-full overflow-hidden rounded-lg border">
                <Image
                  src={flight.heroImage ?? "/images/hero-bg.png"}
                  alt="destination"
                  fill
                  className="object-cover"
                />
              </div>

              <button
                className="mt-4 w-full rounded-lg bg-black px-4 py-3 text-sm font-medium text-white hover:bg-black/90"
                onClick={() => router.push(`/checkout/payment?id=${flight.id}`)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* AI Prediction */}
        <div className="mt-8 rounded-xl border bg-white p-8">
          <div className="text-sm font-semibold text-gray-900">AI Prediction</div>

          <div className="mt-4 grid grid-cols-12 gap-6">
            <div className="col-span-5 rounded-lg border bg-white p-4">
              <h3 className="text-sm font-semibold text-gray-900">Price grid (flexible dates)</h3>

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

              <div className="mt-6">
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
                  Trippa analyzes thousands of flights, prices, and trends to ensure you get the best deal.
                </p>
              </div>
            </div>

            <div className="col-span-7 rounded-lg border bg-white p-4">
              <h3 className="text-sm font-semibold text-gray-900">Price Prediction</h3>
              <div className="mt-3 flex h-[220px] items-center justify-center rounded-md border bg-gray-50 text-xs text-gray-500">
                Graph placeholder (later)
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
