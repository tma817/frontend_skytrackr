import { FlightResult } from "@/types/flight";
import { mapFlightOfferToFlightResult } from "./mappers/flight.mapper";



export type FilterParams = {
  maxPrice?: number;
  stops?: number;        // 0 = direct, 1 = 1 stop
  cabin?: string;        // ECONOMY | PREMIUM_ECONOMY | BUSINESS | FIRST
  timeFrom?: string;     // HH:mm
  timeTo?: string;       // HH:mm
};

export type SearchFlightsInput = {
  from: string;
  to: string;
  departure: string;
  returnDate?: string;
  numOfPassengers: string;
  page: number;
  limit?: number;
  filters?: FilterParams;
};

export type SearchFlightsOutput = {
  items: FlightResult[];
  hasMore: boolean;
};

function parseAdultCount(label: string): string {
  return (label.split(" ")[0] || "1").trim();
}

function buildSearchParams(input: SearchFlightsInput): URLSearchParams {
  const adults = parseAdultCount(input.numOfPassengers);
  const f = input.filters ?? {};

  const params = new URLSearchParams({
    origin: input.from,
    destination: input.to,
    departureDate: input.departure,
    adults,
    page: String(input.page),
    limit: String(input.limit ?? 5),
  });

  if (input.returnDate) params.set("returnDate", input.returnDate);

  if (f.maxPrice !== undefined) params.set("maxPrice", String(f.maxPrice));
  if (f.stops !== undefined) params.set("stops", String(f.stops));
  if (f.cabin) params.set("cabin", f.cabin);
  if (f.timeFrom) params.set("timeFrom", f.timeFrom);
  if (f.timeTo) params.set("timeTo", f.timeTo);

  return params;
}


export const flightService = {
  async searchFlights(input: SearchFlightsInput): Promise<SearchFlightsOutput> {
    if (!input.from || !input.to || !input.departure) {
      return { items: [], hasMore: false };
    }

    const params = buildSearchParams(input);

    const response = await fetch(
      `http://localhost:3000/flights/search?${params.toString()}`
    );

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`Search failed (${response.status}) ${text}`);
    }

    const data = await response.json();

    return {
      items: Array.isArray(data?.items)
        ? data.items.map(mapFlightOfferToFlightResult)
        : [],
      hasMore: !!data?.hasMore,
    };
  },
};