import { FlightResult, FlightSegment } from "@/types/flight";
import { formatDuration, splitAt } from "@/utils/date";

function mapSegment(s: any): FlightSegment {
    return {
        departure: {
            ...s.departure,
            ...splitAt(s.departure.at),
        },
        arrival: {
            ...s.arrival,
            ...splitAt(s.arrival.at),
        },
        carrierCode: s.carrierCode,
        flightNumber: s.flightNumber,
        aircraft: s.aircraft,
        duration: s.duration.startsWith('PT') ? formatDuration(s.duration) : s.duration,
        layover: s.layover,
    };
}

export function mapFlightOfferToFlightResult(f: any): FlightResult {
    if (!f.itineraries || f.itineraries.length === 0) {
        throw new Error("Dữ liệu chuyến bay không hợp lệ (Missing itineraries)");
    }

    return {
        id: f.id,
        search_id: f.search_id,
        airline: {
            name: f.airline?.name || "Unknown Airline",
            logo: f.airline?.logo || "",
        },
        price: {
            amount: f.price?.amount || 0,
            currency: f.price?.currency || "CAD",
        },
        itineraries: f.itineraries.map((it: any) => ({
            type: it.type,
            duration: it.duration,
            stops: it.stops,
            departure: {
                ...it.departure,
            },
            arrival: {
                ...it.arrival,
            },
            segments: it.segments.map((s: any) => mapSegment(s)),
        })),
        cabin: f.cabin || "ECONOMY",
        baggage: {
            checked: f.baggage?.checked || 0,
        },
    };
}


export function mapWatchlistToFlightResult(dbItem: any): FlightResult {
    return {
        id: dbItem.flightId || dbItem._id,
        search_id: dbItem.searchId,
        airline: {
            name: dbItem.airlineName || dbItem.airline?.name || "Unknown Airline",
            logo: dbItem.airlineLogo || dbItem.airline?.logo || "https://www.gstatic.com/flights/airline_logos/70px/default.png",
        },
        price: {
            amount: dbItem.currentPrice || dbItem.initialPrice || 0,
            currency: dbItem.currency || "CAD",
        },
        itineraries: dbItem.itineraries || [
            {
                departure: { iataCode: dbItem.origin, date: dbItem.departureDate },
                arrival: { iataCode: dbItem.destination },
                segments: [],
                stops: 0,
                duration: ""
            }
        ],
        cabin: dbItem.cabin || "ECONOMY",
        baggage: { checked: 0 }
    };
}