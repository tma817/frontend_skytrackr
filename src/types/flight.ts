
export interface FlightLocation {
    time: string;
    date: string;
    iataCode: string;
    terminal?: string;
    cityName?: string | null;
    airportName?: string | null;
}

export interface FlightSegment {
    departure: {
        [x: string]: any;
        iataCode: string;
        terminal?: string;
        at: string;
        time: string;
        date: string;
    };
    arrival: {
        [x: string]: any;
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
    pricePerPerson?: number;
    numberOfBookableSeats?: number | null;
    lastTicketingDate?: string | null;
    refundable?: boolean;
    itineraries: FlightItinerary[];
    cabin: string;
    baggage: {
        checked: number;
    };
}
