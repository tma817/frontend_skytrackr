"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { FlightResult } from "@/types/flight";
import PredictionGraph from "@/components/PredictionGraph";
import { useBookingStore, ConfirmedPrice } from "@/store/useBookingStore";
import BookingSummary from "@/components/BookingSummary";

export default function TicketDetailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams<{ id: string }>();
  const setFlightStore = useBookingStore((state) => state.setFlight);
  const setConfirmedPrice = useBookingStore((state) => state.setConfirmedPrice);

  const [flight, setFlight] = useState<FlightResult | null>(null);
  const [loading, setLoading] = useState(true);

  const id = params?.id;
  const searchId = searchParams.get("searchId");
  const pax = searchParams.get("numOfPassengers") ?? "1";

  const handleProceed = () => {
    if (!flight) return;
    setFlightStore(flight);
    router.push(`/checkout/pax?searchId=${searchId}&flightId=${flight.id}&pax=${pax}`);
  };

  useEffect(() => {
    if (!id || !searchId) {
      setLoading(false);
      return;
    }

    async function fetchAll() {
      try {
        const [detailRes, priceRes] = await Promise.all([
          fetch(`http://localhost:3000/flights/${id}?searchId=${searchId}`),
          fetch(`http://localhost:3000/flights/confirm-price?searchId=${searchId}&flightId=${id}`, {
            method: "POST",
          }),
        ]);

        if (detailRes.ok) {
          const data = await detailRes.json();
          setFlight(data);
          setFlightStore(data);
        }

        if (priceRes.ok) {
          const priceData: ConfirmedPrice = await priceRes.json();
          setConfirmedPrice(priceData);
        }
      } catch (err) {
        console.error("Error fetching ticket:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, [id, searchId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
        <span className="ml-3 text-sm font-medium">Loading flight details...</span>
      </div>
    );
  }

  if (!flight) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-xl font-semibold">Flight not found</h1>
        <button onClick={() => router.back()} className="text-cyan-600 font-bold text-sm">
          Go back
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50/30 pb-12">
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="grid grid-cols-12 gap-8">

          {/* ── LEFT: Flight Journey ── */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {flight.itineraries.map((itinerary, itIdx) => (
              <div key={itIdx} className="rounded-2xl border bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between border-b pb-6">
                  <div className="flex items-center gap-4">
                    {flight.airline.logo ? (
                      <img src={flight.airline.logo} alt={flight.airline.name} className="h-12 w-12 object-contain" />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-sm font-black text-slate-400">
                        {flight.airline.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <h1 className="text-xl font-bold text-slate-900">
                        {itinerary.type === "outbound" ? "Departure Flight" : "Return Flight"}
                      </h1>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                        {flight.airline.name} · {flight.cabin} Class
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-xs text-slate-400 font-bold uppercase">
                    {itinerary.duration} Total
                  </div>
                </div>

                {/* Summary row */}
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-slate-900">{itinerary.departure.time}</p>
                    <p className="text-sm font-bold text-slate-500">{itinerary.departure.iataCode}</p>
                    {itinerary.departure.terminal && (
                      <p className="text-xs text-slate-400">Terminal {itinerary.departure.terminal}</p>
                    )}
                    <p className="text-xs text-slate-400 mt-0.5">{itinerary.departure.date}</p>
                  </div>

                  <div className="flex flex-col items-center flex-1 px-10 text-center">
                    <div className="relative w-full border-t-2 border-dashed border-slate-200 flex justify-center">
                      <div className="absolute -top-3 px-2">
                        <span className="text-cyan-500 text-xl">✈</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">
                      {itinerary.stops === 0 ? "Non-stop" : `${itinerary.stops} Stop(s)`}
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-black text-slate-900">{itinerary.arrival.time}</p>
                    <p className="text-sm font-bold text-slate-500">{itinerary.arrival.iataCode}</p>
                    {itinerary.arrival.terminal && (
                      <p className="text-xs text-slate-400">Terminal {itinerary.arrival.terminal}</p>
                    )}
                    <p className="text-xs text-slate-400 mt-0.5">{itinerary.arrival.date}</p>
                  </div>
                </div>

                {/* Segments */}
                <div className="mt-10 space-y-6">
                  {itinerary.segments.map((segment, sIdx) => (
                    <div key={sIdx}>
                      <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-5">
                        <div className="grid grid-cols-3 items-center">
                          <div>
                            <p className="text-lg font-bold">{segment.departure.iataCode}</p>
                            <p className="text-sm font-medium text-slate-600">{segment.departure.time}</p>
                            <p className="text-[10px] text-slate-400">{segment.departure.date}</p>
                            {segment.departure.terminal && (
                              <p className="text-[10px] text-slate-400">T{segment.departure.terminal}</p>
                            )}
                          </div>
                          <div className="text-center">
                            <p className="text-[10px] font-bold text-slate-400 italic">{segment.duration}</p>
                            <div className="h-px bg-slate-200 my-1 w-full" />
                            <p className="text-[10px] text-slate-500 font-bold uppercase">
                              {segment.carrierCode}{segment.flightNumber}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">{segment.arrival.iataCode}</p>
                            <p className="text-sm font-medium text-slate-600">{segment.arrival.time}</p>
                            <p className="text-[10px] text-slate-400">{segment.arrival.date}</p>
                            {segment.arrival.terminal && (
                              <p className="text-[10px] text-slate-400">T{segment.arrival.terminal}</p>
                            )}
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center text-[11px] text-slate-500 border-t pt-3">
                          <span>Aircraft: <b>{segment.aircraft}</b></span>
                        </div>
                      </div>
                      {segment.layover && (
                        <div className="my-4 flex items-center justify-center">
                          <div className="bg-orange-50 text-orange-600 text-[10px] font-bold px-4 py-1 rounded-full border border-orange-100 uppercase tracking-tighter">
                            Layover: {segment.layover}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Summary ── */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-8 flex flex-col gap-5">
              <BookingSummary onContinue={handleProceed} />
              <div className="rounded-2xl border bg-white shadow-sm z-0">
                <PredictionGraph />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
