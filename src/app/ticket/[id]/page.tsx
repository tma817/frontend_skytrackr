"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { API_BASE } from "@/utils/api";
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
    if (!id || !searchId) { setLoading(false); return; }
    async function fetchAll() {
      try {
        const [detailRes, priceRes] = await Promise.all([
          fetch(`${API_BASE}/flights/${id}?searchId=${searchId}`),
          fetch(`${API_BASE}/flights/confirm-price?searchId=${searchId}&flightId=${id}`, { method: "POST" }),
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
      <div className="flex min-h-screen items-center justify-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-slate-800" />
        <span className="text-sm text-slate-400 font-medium tracking-wide">Loading flight details</span>
      </div>
    );
  }

  if (!flight) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-slate-400 text-sm">Flight not found.</p>
        <button onClick={() => router.back()} className="text-xs font-bold text-slate-900 underline underline-offset-4">
          Go back
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] pb-16 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* ── LEFT: Flight Journey ── */}
          <div className="col-span-12 lg:col-span-8 space-y-5">
            {flight.itineraries.map((itinerary, itIdx) => (
              <div key={itIdx} className="bg-white rounded-3xl overflow-hidden shadow-sm border">
                
                {/* ── Top bar: airline + trip label + duration ── */}
                <div className="flex items-center justify-between px-8 py-5 border-b">
                  <div className="flex items-center gap-3">
                    {flight.airline.logo ? (
                      <img src={flight.airline.logo} alt={flight.airline.name} className="h-8 w-8 object-contain" />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500">
                        {flight.airline.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-black text-slate-900 leading-none">
                        {flight.airline.name}
                      </p>
                      <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest mt-0.5">
                        {flight.cabin} Class
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${
                      itinerary.type === "outbound"
                        ? "bg-black text-white"
                        : "bg-black text-white"
                    }`}>
                      {itinerary.type === "outbound" ? "Departure" : "Return"}
                    </span>
                    <span className="text-xs font-bold text-slate-400">{itinerary.duration}</span>
                  </div>
                </div>

                {/* ── Main route display ── */}
                <div className="px-8 py-8">
                  <div className="flex items-center gap-0">

                    {/* Departure */}
                    <div className="shrink-0 w-32">
                      <p className="text-5xl font-black text-slate-900 tabular-nums leading-none">
                        {itinerary.departure.time}
                      </p>
                      <p className="text-base font-black text-slate-700 mt-2">{itinerary.departure.iataCode}</p>
                      {itinerary.departure.cityName && (
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">{itinerary.departure.cityName}</p>
                      )}
                      {itinerary.departure.airportName && (
                        <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{itinerary.departure.airportName}</p>
                      )}
                      {itinerary.departure.terminal && (
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">
                          Terminal {itinerary.departure.terminal}
                        </p>
                      )}
                      <p className="text-[11px] text-slate-400 mt-0.5">{itinerary.departure.date}</p>
                    </div>

                    {/* Flight arc */}
                    <div className="flex-1 flex flex-col items-center px-4 gap-2">
                      <div className="w-full flex items-center gap-0">
                        {/* Left dot */}
                        <div className="h-2 w-2 rounded-full bg-slate-300 shrink-0" />
                        {/* Line */}
                        <div className="flex-1 h-px bg-slate-200 relative">
                          {/* Center plane */}
                          <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-1">
                            <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                            </svg>
                          </div>
                        </div>
                        {/* Right dot */}
                        <div className="h-2 w-2 rounded-full bg-slate-900 shrink-0" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {itinerary.stops === 0 ? "Non-stop" : `${itinerary.stops} stop${itinerary.stops > 1 ? "s" : ""}`}
                      </p>
                    </div>

                    {/* Arrival */}
                    <div className="shrink-0 w-32 text-right">
                      <p className="text-5xl font-black text-slate-900 tabular-nums leading-none">
                        {itinerary.arrival.time}
                      </p>
                      <p className="text-base font-black text-slate-700 mt-2">{itinerary.arrival.iataCode}</p>
                      {itinerary.arrival.cityName && (
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">{itinerary.arrival.cityName}</p>
                      )}
                      {itinerary.arrival.airportName && (
                        <p className="text-[10px] text-slate-400 mt-0.5 leading-snug">{itinerary.arrival.airportName}</p>
                      )}
                      {itinerary.arrival.terminal && (
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mt-0.5">
                          Terminal {itinerary.arrival.terminal}
                        </p>
                      )}
                      <p className="text-[11px] text-slate-400 mt-0.5">{itinerary.arrival.date}</p>
                    </div>
                  </div>
                </div>

                {/* ── Segments timeline ── */}
                {itinerary.segments.length > 0 && (
                  <div className="border-t border-slate-100 px-8 py-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-5">
                      Flight Segments
                    </p>

                    {itinerary.segments.map((segment, sIdx) => {
                      const isLast = sIdx === itinerary.segments.length - 1;
                      return (
                        <div key={sIdx}>
                          {/* ── Segment row ── */}
                          <div className="flex items-stretch gap-4">
                            {/* Dot + line */}
                            <div className="flex flex-col items-center shrink-0 w-5">
                              <div className="h-5 w-5 rounded-full border-[2.5px] border-slate-800 bg-white shrink-0 mt-3" />
                              <div className="w-0.5 bg-slate-200 flex-1 mt-1" />
                            </div>
                            {/* Segment card */}
                            <div className="flex-1 bg-slate-50 rounded-2xl px-5 py-4 mb-3">
                              <div className="flex items-center gap-3">
                                {/* Departure */}
                                <div className="shrink-0 w-[88px]">
                                  <p className="text-xl font-black text-slate-900 tabular-nums leading-none">{segment.departure.time}</p>
                                  <p className="text-sm font-black text-slate-700 mt-1">{segment.departure.iataCode}</p>
                                  {segment.departure.cityName && (
                                    <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{segment.departure.cityName}</p>
                                  )}
                                  <p className="text-[10px] text-slate-400 mt-0.5">
                                    {segment.departure.terminal ? `T${segment.departure.terminal} · ` : ""}{segment.departure.date}
                                  </p>
                                </div>
                                {/* Center */}
                                <div className="flex-1 flex flex-col items-center gap-1.5">
                                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{segment.duration}</span>
                                  <div className="w-full flex items-center gap-1">
                                    <div className="flex-1 h-px bg-slate-300" />
                                    <svg className="h-3 w-3 text-slate-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                                    </svg>
                                    <div className="flex-1 h-px bg-slate-300" />
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="bg-white border text-slate-700 text-[10px] font-black px-2 py-0.5 rounded-lg">
                                      {segment.carrierCode}{segment.flightNumber}
                                    </span>
                                  </div>
                                </div>
                                {/* Arrival */}
                                <div className="shrink-0 w-[88px] text-right">
                                  <p className="text-xl font-black text-slate-900 tabular-nums leading-none">{segment.arrival.time}</p>
                                  <p className="text-sm font-black text-slate-700 mt-1">{segment.arrival.iataCode}</p>
                                  {segment.arrival.cityName && (
                                    <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{segment.arrival.cityName}</p>
                                  )}
                                  <p className="text-[10px] text-slate-400 mt-0.5">
                                    {segment.arrival.terminal ? `T${segment.arrival.terminal} · ` : ""}{segment.arrival.date}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ── Layover row ── */}
                          {segment.layover && (
                            <div className="flex items-stretch gap-4">
                              {/* Orange circle with clock inside */}
                              <div className="flex flex-col items-center shrink-0 w-5">
                                <div className="h-5 w-5 rounded-full bg-orange-400 flex items-center justify-center shrink-0 mt-2">
                                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
                                  </svg>
                                </div>
                                <div className="w-0.5 bg-slate-200 flex-1 mt-1" />
                              </div>
                              {/* Layover content */}
                              <div className="flex-1 flex items-center gap-2 py-2 mb-3">
                                <div>
                                  <p className="text-xs font-black text-orange-500 uppercase tracking-wide leading-none">{segment.layover} layover</p>
                                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">Connecting in {segment.arrival.cityName ?? segment.arrival.iataCode}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* ── Arrived (after last segment) ── */}
                          {isLast && (
                            <div className="flex items-center gap-4">
                              <div className="flex justify-center shrink-0 w-5">
                                <div className="h-5 w-5 rounded-full bg-slate-900 shrink-0" />
                              </div>
                              <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest py-2">
                                Arrived · {itinerary.arrival.iataCode}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* ── Amenities / Baggage strip ── */}
                <div className="border-t border-slate-100 px-8 py-4 flex items-center gap-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                    <svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 3H5a2 2 0 00-2 2v16a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-4M9 3a2 2 0 012-2h2a2 2 0 012 2M9 3h6"/>
                    </svg>
                    {flight.baggage?.checked ?? 0} checked bag{(flight.baggage?.checked ?? 0) !== 1 ? "s" : ""} included
                  </div>
                  <div className="w-px h-3 bg-slate-200" />
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                    <svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                    </svg>
                    {flight.refundable ? "Refundable" : "Non-refundable"}
                  </div>
                  {flight.lastTicketingDate && (
                    <>
                      <div className="w-px h-3 bg-slate-200" />
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-semibold">
                        <svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        Book by {flight.lastTicketingDate}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Summary ── */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-8 flex flex-col gap-4">
              <BookingSummary onContinue={handleProceed} />
              <div className="rounded-3xl border bg-white shadow-sm overflow-hidden">
                <PredictionGraph
                  origin={flight.itineraries[0].departure.iataCode}
                  destination={flight.itineraries[0].arrival.iataCode}
                  departureDate={flight.itineraries[0].departure.date}
                  returnDate={flight.itineraries[1]?.departure?.date}
                  currentPrice={flight.price.amount}
                  currency={flight.price.currency}
                  oneWay={flight.itineraries.length === 1}
                />
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </main>
  );
}
