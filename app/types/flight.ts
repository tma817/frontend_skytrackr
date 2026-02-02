import { formatDuration, splitAt } from "../helpers/helpers";

export interface FlightLocation {
    time: string;
    date: string;
    iataCode: string;
    terminal?: string;
}

export interface FlightSegment {
    departure: {
        iataCode: string;
        terminal?: string;
        at: string;
        time: string;
        date: string;
    };
    arrival: {
        iataCode: string;
        terminal?: string;
        at: string;
        time: string;
        date: string;
    };
    carrierCode: string;
    flightNumber: string;
    aircraft: string;
    duration: string;
    layover?: string; 
}

export interface FlightItinerary {
    type: 'outbound' | 'inbound';
    duration: string;
    stops: number;
    departure: FlightLocation;
    arrival: FlightLocation;
    segments: FlightSegment[];
}

export interface FlightResult {
    id: string;
    search_id: string;
    airline: {
        name: string;
        logo: string;
    };
    price: {
        amount: number;
        currency: string;
    };
    itineraries: FlightItinerary[];
    cabin: string;
    baggage: {
        checked: number;
    };
}

// --- MAPPERS (Chuyển đổi dữ liệu API sang Interface Frontend) ---
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