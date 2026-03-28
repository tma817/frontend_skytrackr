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
            className="font-sans group relative w-full cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:border-sky-300"
        >
            {/* Low seats urgency banner */}
            {lowSeats && (
                <div className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-rose-500 px-5 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">
                        Only {flight.numberOfBookableSeats} seat{flight.numberOfBookableSeats === 1 ? "" : "s"} left at this price
                    </span>
                </div>
            )}

            <div className="flex flex-col md:flex-row">
                {/* Left: Itineraries */}
                <div className="flex-1 p-5 md:p-6">
                    {/* Airline row */}
                    <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            {flight.airline.logo ? (
                                <img
                                    src={flight.airline.logo}
                                    alt={flight.airline.name}
                                    className="h-9 w-9 object-contain rounded-lg border border-gray-100 p-0.5"
                                />
                            ) : (
                                <div className="h-9 w-9 rounded-lg bg-gray-900 flex items-center justify-center text-[10px] font-black text-white">
                                    {flight.airline.name.slice(0, 2).toUpperCase()}
                                </div>
                            )}
                            <div>
                                <span className="text-sm font-bold text-gray-900">{flight.airline.name}</span>
                                {flight.lastTicketingDate && (
                                    <p className="text-[10px] text-gray-400 mt-0.5">Book by {flight.lastTicketingDate}</p>
                                )}
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="flex items-center gap-1.5">
                            {flight.refundable && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                                    <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" /></svg>
                                    Refundable
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Itinerary rows */}
                    <div className="space-y-4">
                        {flight.itineraries.map((itinerary, idx) => (
                            <ItineraryRow key={idx} itinerary={itinerary} showLabel={flight.itineraries.length > 1} index={idx} />
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="hidden md:flex flex-col items-center justify-center py-6">
                    <div className="h-full w-px bg-gray-100" />
                </div>
                <div className="md:hidden h-px w-full bg-gray-100" />

                {/* Right: Price panel */}
                <div className="flex flex-col justify-center items-center p-6 min-w-[200px] gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Total price</span>
                    <div className="text-[2rem] font-black text-gray-900 leading-none">
                        {money(flight.price.amount, flight.price.currency)}
                    </div>

                    {flight.pricePerPerson != null && flight.pricePerPerson !== flight.price.amount && (
                        <span className="text-xs text-gray-400">
                            {money(flight.pricePerPerson, flight.price.currency)} / person
                        </span>
                    )}

                    {/* Cabin + Baggage pills */}
                    <div className="flex items-center gap-1.5 mt-1 flex-wrap justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                            {flight.cabin}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M6 20h12M8 10V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6M9 20v2M15 20v2" />
                                <rect x="5" y="6" width="14" height="14" rx="2" />
                            </svg>
                            {flight.baggage.checked > 0
                                ? `${flight.baggage.checked} bag${flight.baggage.checked > 1 ? "s" : ""}`
                                : "Carry-on"}
                        </span>
                    </div>

                    <button className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-black active:scale-95">
                        Select
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    {onToggle && (
                        <button
                            onClick={(e) => { e.stopPropagation(); onToggle(); }}
                            title={isAdded ? "Remove from watchlist" : "Add to watchlist"}
                            className={`w-full flex items-center justify-center gap-1.5 rounded-xl border px-6 py-2 text-xs font-bold transition-all active:scale-95 ${
                                isAdded
                                    ? "border-sky-200 bg-sky-50 text-sky-600 hover:bg-sky-100"
                                    : "border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            <svg className="h-3.5 w-3.5" fill={isAdded ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            {isAdded ? "Watching" : "Watch price"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

function ItineraryRow({ itinerary, showLabel, index }: { itinerary: FlightItinerary; showLabel: boolean; index: number }) {
    const isDirect = itinerary.stops === 0;

    return (
        <div className="flex items-center gap-3">

            {/* Departure */}
            <div className={`shrink-0 ${showLabel ? "w-16" : "w-20"}`}>
                <div className="text-xl font-black text-gray-900 leading-none">{itinerary.departure.time}</div>
                <div className="text-xs font-bold text-gray-400 mt-0.5">{itinerary.departure.iataCode}</div>
                {itinerary.departure.terminal && (
                    <div className="text-[10px] text-gray-300">T{itinerary.departure.terminal}</div>
                )}
            </div>

            {/* Timeline */}
            <div className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] font-semibold text-gray-400">{itinerary.duration}</span>
                <div className="flex w-full items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300 shrink-0" />
                    <div className="relative h-px flex-1">
                        <div className="absolute inset-0 border-t-2 border-dashed border-gray-200" />
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1">
                            <svg
                                className={`h-3.5 w-3.5 text-gray-300 ${itinerary.type === "inbound" ? "rotate-[270deg]" : "rotate-90"}`}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300 shrink-0" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wide ${isDirect ? "text-emerald-500" : "text-amber-500"}`}>
                    {isDirect ? "Non-stop" : `${itinerary.stops} stop${itinerary.stops > 1 ? "s" : ""}`}
                </span>
            </div>

            {/* Arrival */}
            <div className={`shrink-0 text-right ${showLabel ? "w-16" : "w-20"}`}>
                <div className="text-xl font-black text-gray-900 leading-none">{itinerary.arrival.time}</div>
                <div className="text-xs font-bold text-gray-400 mt-0.5">{itinerary.arrival.iataCode}</div>
                {itinerary.arrival.terminal && (
                    <div className="text-[10px] text-gray-300">T{itinerary.arrival.terminal}</div>
                )}
            </div>
        </div>
    );
}
