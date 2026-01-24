// "use client";

// import Image from "next/image";
// import { useMemo } from "react";
// import { useRouter, useSearchParams, useParams } from "next/navigation";
// import SearchBar from "../../components/SearchBar";
// import { getFlightById } from "../../lib/demoFlights";

// export default function TicketDetailPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const params = useParams<{ id: string }>();

//   const idRaw = params?.id;
//   const id = Array.isArray(idRaw) ? idRaw[0] : idRaw;

//   const from = searchParams.get("from") ?? "YYZ";
//   const to = searchParams.get("to") ?? "ORD";
//   const date = searchParams.get("date") ?? "Depart - Return";
//   const pax = searchParams.get("pax") ?? "1 adult";

//   const flight = useMemo(() => {
//     if (!id) return undefined;
//     return getFlightById(String(id));
//   }, [id]);

//   const handleSearch = (payload: {
//     from: string;
//     to: string;
//     dateRange: string;
//     passengers: string;
//   }) => {
//     const qs = new URLSearchParams({
//       from: payload.from,
//       to: payload.to,
//       date: payload.dateRange,
//       pax: payload.passengers,
//     });
//     router.push(`/search?${qs.toString()}`);
//   };

//   const goBackToSearch = () => {
//     const qs = new URLSearchParams({ from, to, date, pax });
//     router.push(`/search?${qs.toString()}`);
//   };

//   const goTicketDetails2 = () => {
//     const qs = new URLSearchParams({
//       id: flight?.id ?? "",
//       from,
//       to,
//       date,
//       pax,
//     });

//     const url = `/ticket-details2?${qs.toString()}`;
//     console.log("Going to:", url);
//     router.push(url);
//   };

//   if (!flight) {
//     return (
//       <main className="min-h-screen">
//         <div className="mx-auto max-w-6xl px-8 py-16">
//           <h1 className="text-xl font-semibold">Ticket not found</h1>
//           <p className="mt-2 text-sm text-gray-500">id: {String(id)}</p>
//           <button
//             type="button"
//             className="mt-4 rounded-lg border px-4 py-2 hover:bg-gray-50"
//             onClick={goBackToSearch}
//           >
//             Back to search
//           </button>
//         </div>
//       </main>
//     );
//   }

//   const title = `${flight.fromCity} - ${flight.toCity} (Round Trip)`;

//   return (
//     <main className="min-h-screen">
//       {}
//       <div className="border-b">
//         <div className="bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50">
//           <div className="mx-auto max-w-6xl px-8 py-8">
//             <div className="text-sm text-gray-700">
//               <span className="font-medium text-gray-900">{from}</span> →{" "}
//               <span className="font-medium text-gray-900">{to}</span>
//               <span className="mx-2 text-gray-300">|</span>
//               <span>{date}</span>
//               <span className="mx-2 text-gray-300">|</span>
//               <span>{pax}</span>
//             </div>

//             <SearchBar
//               className="mt-4"
//               defaultFrom={from}
//               defaultTo={to}
//               defaultDateRange={date}
//               defaultPassengers={pax}
//               onSearch={handleSearch}
//             />

//             <div className="mt-3 flex flex-wrap gap-2">
//               {["Max price", "Stops", "Times", "Airlines", "Seat class", "Round trip", "More"].map(
//                 (t) => (
//                   <button
//                     key={t}
//                     type="button"
//                     className="rounded-md border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 shadow-sm hover:bg-gray-50"
//                   >
//                     {t} <span className="ml-1 text-gray-400">▾</span>
//                   </button>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Ticket Details */}
//       <div className="mx-auto max-w-6xl px-8 py-10">
//         <div className="rounded-xl border bg-white p-8">
//           <div className="text-xs text-gray-500">Ticket Details</div>
//           <h1 className="mt-2 text-3xl font-semibold text-gray-900">{title}</h1>

//           <div className="mt-6 grid grid-cols-12 gap-8">
//             <div className="col-span-7">
//               <div className="space-y-3 text-sm text-gray-800">
//                 <div>
//                   <span className="font-semibold">Price:</span>{" "}
//                   <span>${flight.price.toLocaleString()}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold">Airline:</span>{" "}
//                   <span>{flight.airline}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold">Flight Number:</span>{" "}
//                   <span>{flight.flightNumber ?? "—"}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold">Aircraft:</span>{" "}
//                   <span>{flight.aircraft ?? "—"}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold">Cabin Class:</span>{" "}
//                   <span>{flight.cabinClass ?? "—"}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold">Flight Duration:</span>{" "}
//                   <span>{flight.duration}</span>
//                 </div>
//                 <div>
//                   <span className="font-semibold">Number of Stops:</span>{" "}
//                   <span>{flight.stopsCount ?? (flight.stops.includes("2") ? 2 : 1)}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="col-span-5">
//               <div className="relative h-[180px] w-full overflow-hidden rounded-lg border">
//                 <Image
//                   src={flight.heroImage ?? "/images/hero-bg.png"}
//                   alt="destination"
//                   fill
//                   className="object-cover"
//                 />
//               </div>

//               {/* 여기만 확실히 */}
//               <button
//                 type="button"
//                 className="mt-4 w-full rounded-lg bg-black px-4 py-3 text-sm font-medium text-white hover:bg-black/90"
//                 onClick={goTicketDetails2}
//               >
//                 Book Now
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* AI Prediction */}
//         <div className="mt-8 rounded-xl border bg-white p-8">
//           <div className="text-sm font-semibold text-gray-900">AI Prediction</div>

//           <div className="mt-4 grid grid-cols-12 gap-6">
//             <div className="col-span-5 rounded-lg border bg-white p-4">
//               <h3 className="text-sm font-semibold text-gray-900">Price grid (flexible dates)</h3>

//               <div className="mt-3 overflow-hidden rounded-md border">
//                 <table className="w-full text-xs">
//                   <thead className="bg-gray-50 text-gray-600">
//                     <tr>
//                       <th className="p-2 text-left"></th>
//                       {["2/12", "2/13", "2/14", "2/15", "2/16"].map((d) => (
//                         <th key={d} className="p-2 text-center font-medium">
//                           {d}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       ["3/7", ["$837", "$592", "$592", "$1,308", "$837"]],
//                       ["3/8", ["$837", "$592", "$592", "$837", "$1,308"]],
//                       ["3/9", ["$624", "$592", "$624", "$592", "$624"]],
//                       ["3/10", ["$1,308", "$624", "$624", "$837", "$837"]],
//                       ["3/11", ["$592", "$624", "$1,308", "$837", "$624"]],
//                     ].map(([row, vals]) => (
//                       <tr key={row as string} className="border-t">
//                         <td className="p-2 text-gray-600">{row as string}</td>
//                         {(vals as string[]).map((v, idx) => (
//                           <td key={idx} className="p-2 text-center text-gray-700">
//                             {v}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="mt-6">
//                 <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
//                   <span>Price rating</span>
//                   <span className="rounded-full bg-black px-2 py-0.5 text-xs text-white">
//                     Buy soon
//                   </span>
//                 </div>

//                 <p className="mt-3 text-sm text-gray-700">
//                   We recommend booking soon. The average cost of this flight is $750, but could rise
//                   in the next few weeks.
//                 </p>

//                 <p className="mt-2 text-xs text-gray-500">
//                   Trippa analyzes thousands of flights, prices, and trends to ensure you get the best deal.
//                 </p>
//               </div>
//             </div>

//             <div className="col-span-7 rounded-lg border bg-white p-4">
//               <h3 className="text-sm font-semibold text-gray-900">Price Prediction</h3>
//               <div className="mt-3 flex h-[220px] items-center justify-center rounded-md border bg-gray-50 text-xs text-gray-500">
//                 Graph placeholder (later)
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { FlightResult } from "@/app/search/page";
export default function TicketDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams<{ id: string }>();
  const [flight, setFlight] = useState<FlightResult | null>(null);
  const [loading, setLoading] = useState(true);

  const id = params?.id;
  const searchId = searchParams.get("searchId");
  const from = searchParams.get("from") ?? "";
  const to = searchParams.get("to") ?? "";
  const date = searchParams.get("date") ?? "";
  const pax = searchParams.get("pax") ?? "1";

  useEffect(() => {
    async function fetchTicketDetail() {
      if (!id || !searchId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3000/flights/${id}?searchId=${searchId}`
        );
        
        if (!res.ok) throw new Error("Failed to fetch flight detail");
        
        const data = await res.json();
        setFlight(data);
      } catch (error) {
        console.error("Error fetching ticket:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTicketDetail();
  }, [id, searchId]);

  const goBackToSearch = () => {
    const qs = new URLSearchParams({ from, to, date, pax });
    router.push(`/search?${qs.toString()}`);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black"></div>
        <span className="ml-3 text-sm font-medium">Loading ticket details...</span>
      </div>
    );
  }

  if (!flight) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto max-w-6xl px-8 py-16 text-center">
          <h1 className="text-xl font-semibold text-slate-900">Ticket not found</h1>
          <p className="mt-2 text-sm text-slate-500 italic">ID: {id} | Session: {searchId}</p>
          <button
            type="button"
            className="mt-6 rounded-xl bg-slate-900 px-6 py-2 text-sm font-bold text-white transition-transform active:scale-95"
            onClick={goBackToSearch}
          >
            Back to search
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50/30">
      {/* Header Info Section */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-8 py-6">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <span className="text-slate-900 font-bold uppercase">{flight.originCode}</span>
            <span className="text-slate-300">→</span>
            <span className="text-slate-900 font-bold uppercase">{flight.destinationCode}</span>
            <span className="mx-2 h-4 w-[1px] bg-slate-200"></span>
            <span>{flight.departure.date}</span>
            <span className="mx-2 h-4 w-[1px] bg-slate-200"></span>
            <span>{pax} Passenger(s)</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-8 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Main Content: Flight Info */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between border-b pb-6">
                <div className="flex items-center gap-4">
                  <img src={flight.airlineLogo} alt={flight.airlineName} className="h-12 w-12 object-contain" />
                  <div>
                    <h1 className="text-xl font-bold text-slate-900">{flight.airlineName}</h1>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      {flight.travelerPricings[0].cabin} Class
                    </p>
                  </div>
                </div>
                <div className="text-right">
                    <p className="text-sm text-slate-400 font-medium">Flight ID</p>
                    <p className="text-sm font-bold text-slate-900">#{flight.id}</p>
                </div>
              </div>

              {/* Journey Details */}
              <div className="mt-8 flex items-center justify-between">
                <div className="text-center md:text-left">
                  <p className="text-3xl font-black tracking-tighter text-slate-900">{flight.departure.time}</p>
                  <p className="text-sm font-bold text-slate-500 uppercase">{flight.departure.iataCode}</p>
                  <p className="text-xs text-slate-400 mt-1">{flight.departure.date}</p>
                </div>

                <div className="flex flex-col items-center flex-1 px-10">
                    <span className="text-xs font-bold text-slate-400 mb-2">{flight.duration}</span>
                    <div className="relative w-full border-t-2 border-dashed border-slate-200 flex justify-center">
                        <div className="absolute -top-3 bg-white px-2">
                             <svg className="h-5 w-5 text-cyan-500 rotate-90" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                            </svg>
                        </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-[0.2em]">{flight.stops}</span>
                </div>

                <div className="text-center md:text-right">
                  <p className="text-3xl font-black tracking-tighter text-slate-900">{flight.arrival.time}</p>
                  <p className="text-sm font-bold text-slate-500 uppercase">{flight.arrival.iataCode}</p>
                  <p className="text-xs text-slate-400 mt-1">{flight.arrival.date}</p>
                </div>
              </div>
            </div>

            {/* AI Predictions Placeholder */}
            <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center bg-slate-50/50">
                <p className="text-sm font-medium text-slate-400">Detailed Journey & Fare Rules coming soon...</p>
            </div>
          </div>

          {/* Sidebar: Price & Action */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-8 rounded-2xl border bg-white p-6 shadow-sm">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Fare Summary</h3>
               <div className="mt-4 flex items-end justify-between border-b pb-6">
                  <div>
                    <p className="text-xs text-slate-500">Price per adult</p>
                    <p className="text-4xl font-black tracking-tighter text-cyan-700">
                        {flight.price.toLocaleString()} <span className="text-lg font-bold">{flight.currency}</span>
                    </p>
                  </div>
               </div>

               <div className="py-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Base Fare</span>
                    <span className="font-bold">${(flight.price * 0.85).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Taxes & Fees</span>
                    <span className="font-bold">${(flight.price * 0.15).toFixed(2)}</span>
                  </div>
               </div>

               <button
                 type="button"
                 className="w-full rounded-xl bg-slate-900 py-4 text-base font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-black active:scale-95"
                 onClick={() => router.push(`/checkout?id=${flight.id}&searchId=${flight.search_id}`)}
               >
                 Confirm & Book
               </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}