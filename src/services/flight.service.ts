import { FlightResult } from "@/types/flight";
import { mapFlightOfferToFlightResult } from "./mappers/flight.mapper";



export type SearchFlightsInput = {
  from: string;            // origin
  to: string;              // destination
  departure: string;       // departureDate
  returnDate?: string;     // returnDate
  numOfPassengers: string; // "1 adult"
  page: number;
  limit?: number;
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

  return new URLSearchParams({
    origin: input.from,
    destination: input.to,
    departureDate: input.departure,
    returnDate: input.returnDate ?? "",
    adults,
    page: String(input.page),
    limit: String(input.limit ?? 5),
  });
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