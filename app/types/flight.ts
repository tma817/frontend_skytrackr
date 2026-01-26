interface FlightLocation {
  time: string;
  date: string;
  iataCode: string;
  terminal?: string;
}

interface TravelerPricing {
  fareOption: string;
  travelerType: string;
  cabin: string;
  amenities?: any[];
}

interface FlightSegment {
  departure: any;
  arrival: any;
  carrierCode: string;
  flightNumber: string;
  aircraft: string;
  duration: string;
}

export interface FlightResult {
  _id: string;
  id: string;
  search_id: string;
  airlineName: string;
  airlineLogo: string;
  departure: FlightLocation;
  arrival: FlightLocation;
  originCode: string;
  destinationCode: string;
  duration: string;
  price: number;
  currency: string;
  stops: string;
  segments: FlightSegment[];
  travelerPricings: TravelerPricing[];
}