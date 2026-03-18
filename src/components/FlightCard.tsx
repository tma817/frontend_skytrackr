import { FlightResult, FlightItinerary } from "@/types/flight";
import money from "@/utils/money";

interface FlightCardProps {
    flight: FlightResult;
    onClick: () => void;
    isAdded?: boolean;
    onToggle?: () => void;
}

export default function FlightCard({ flight, onClick, isAdded, onToggle }: FlightCardProps) {
    const lowSeats = flight.numberOfBookableSeats != null && flight.numberOfBookableSeats <= 5;

    return (
        <div
            onClick={onClick}
            className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
        >
            {/* Low seats urgency banner */}
            {lowSeats && (
                <div className="bg-red-50 border-b border-red-100 px-5 py-1.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold text-red-600">
                        Only {flight.numberOfBookableSeats} seat{flight.numberOfBookableSeats === 1 ? "" : "s"} left at this price
                    </span>
                </div>
            )}

            <div className="flex flex-col md:flex-row">
                {/* Left: Itineraries */}
                <div className="flex-1 p-5 space-y-5 border-b md:border-b-0 md:border-r border-slate-100">
                    {/* Airline row */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {flight.airline.logo ? (
                                <img
                                    src={flight.airline.logo}
                                    alt={flight.airline.name}
                                    className="h-8 w-8 object-contain"
                                />
                            ) : (
                                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400">
                                    {flight.airline.name.slice(0, 2).toUpperCase()}
                                </div>
                            )}
                            <span className="text-sm font-bold text-slate-700">{flight.airline.name}</span>
                        </div>

                        {/* Badges */}
                        <div className="flex items-center gap-1.5">
                            {flight.refundable && (
                                <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                                    Refundable
                                </span>
                            )}
                            {flight.lastTicketingDate && (
                                <span className="text-[10px] font-medium text-slate-400">
                                    Book by {flight.lastTicketingDate}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Itinerary rows */}
                    {flight.itineraries.map((itinerary, idx) => (
                        <ItineraryRow key={idx} itinerary={itinerary} />
                    ))}
                </div>

                {/* Right: Price panel */}
                <div className="bg-slate-50/50 p-6 flex flex-col justify-center items-center min-w-[190px] gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total</span>
                    <div className="text-3xl font-black text-cyan-700">
                        {money(flight.price.amount, flight.price.currency)}
                    </div>

                    {flight.pricePerPerson != null && flight.pricePerPerson !== flight.price.amount && (
                        <span className="text-[11px] text-slate-400 font-medium">
                            {money(flight.pricePerPerson, flight.price.currency)} / person
                        </span>
                    )}

                    <div className="mt-1 text-[10px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-200 rounded">
                        {flight.cabin}
                    </div>

                    {/* Baggage */}
                    <div className="flex items-center gap-1 mt-1">
                        <svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M6 20h12M8 10V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6M9 20v2M15 20v2" />
                            <rect x="5" y="6" width="14" height="14" rx="2" />
                        </svg>
                        
                        <span className="text-[11px] text-slate-500 font-medium">
                            {flight.baggage.checked > 0
                                ? `${flight.baggage.checked} checked bag${flight.baggage.checked > 1 ? "s" : ""}`
                                : "Carry-on only"}
                        </span>
                    </div>

                    <button className="mt-5 w-full flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-lg">
                        Select
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>

                    {/* Watchlist button */}
                    {onToggle && (
                        <button
                            onClick={(e) => { e.stopPropagation(); onToggle(); }}
                            title={isAdded ? "Remove from watchlist" : "Add to watchlist"}
                            className={`mt-2 w-full flex items-center justify-center gap-1.5 rounded-xl border px-6 py-2 text-xs font-bold transition-all active:scale-95 ${
                                isAdded
                                    ? "border-cyan-300 bg-cyan-50 text-cyan-700 hover:bg-cyan-100"
                                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                        >
                            <svg className="h-3.5 w-3.5" fill={isAdded ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            {isAdded ? "Watching" : "Watch"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

function ItineraryRow({ itinerary }: { itinerary: FlightItinerary }) {
    const isDirect = itinerary.stops === 0;

    return (
        <div className="flex items-center gap-4">
            {/* Departure */}
            <div className="w-20 shrink-0">
                <div className="text-lg font-bold text-slate-900 leading-tight">{itinerary.departure.time}</div>
                <div className="text-[11px] font-semibold text-slate-500">{itinerary.departure.iataCode}</div>
                {itinerary.departure.terminal && (
                    <div className="text-[10px] text-slate-400">T{itinerary.departure.terminal}</div>
                )}
                <div className="text-[10px] text-slate-400 mt-0.5">{itinerary.departure.date}</div>
            </div>

            {/* Timeline */}
            <div className="flex-1 flex flex-col items-center">
                <span className="text-[10px] font-medium text-slate-400 mb-1">{itinerary.duration}</span>
                <div className="flex w-full items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-300 shrink-0" />
                    <div className="relative h-px flex-1 border-t-2 border-dashed border-slate-200">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1">
                            <svg
                                className={`h-3 w-3 text-slate-300 ${itinerary.type === "inbound" ? "rotate-[270deg]" : "rotate-90"}`}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-300 shrink-0" />
                </div>
                <span className={`mt-1 text-[10px] font-bold uppercase tracking-tighter ${isDirect ? "text-green-500" : "text-orange-400"}`}>
                    {isDirect ? "Direct" : `${itinerary.stops} Stop${itinerary.stops > 1 ? "s" : ""}`}
                </span>
            </div>

            {/* Arrival */}
            <div className="w-20 shrink-0 text-right">
                <div className="text-lg font-bold text-slate-900 leading-tight">{itinerary.arrival.time}</div>
                <div className="text-[11px] font-semibold text-slate-500">{itinerary.arrival.iataCode}</div>
                {itinerary.arrival.terminal && (
                    <div className="text-[10px] text-slate-400">T{itinerary.arrival.terminal}</div>
                )}
                <div className="text-[10px] text-slate-400 mt-0.5">{itinerary.arrival.date}</div>
            </div>
        </div>
    );
}
