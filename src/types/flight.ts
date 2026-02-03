
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
