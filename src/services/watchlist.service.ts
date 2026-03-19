import { authHeaders } from "@/utils/auth-helpers";
import { FlightResult } from "@/types/flight";

const API_BASE = "http://localhost:3000/watchlist";

export type WatchlistItem = {
  _id: string;
  flightId: string;
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  airlineName: string;
  airlineLogo: string;
  initialPrice: number;
  currentPrice: number;
  priceDiff: number;
  currency: string;
  status: "active" | "price_dropped" | "price_increased";
  passengers: number;
  tripType: "one-way" | "round-trip";
  savedAt: string;
};

export const watchlistService = {
  async getWatchlist(): Promise<WatchlistItem[]> {
    const res = await fetch(API_BASE, { headers: authHeaders() });
    if (res.status === 401) throw new Error("UNAUTHORIZED");
    if (!res.ok) throw new Error("Failed to fetch watchlist");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  },

  async addToWatchlist(
    flight: FlightResult,
    numOfPassengers: string,
    tripType: string,
  ): Promise<WatchlistItem> {
    const firstItinerary = flight.itineraries.find(i => i.type === "outbound");
    const returnItinerary = flight.itineraries.find(i => i.type === "inbound");
    const passengers = parseInt(numOfPassengers.split(" ")[0] || "1", 10);

    const stableId = [
        flight.airline.name,
        firstItinerary?.departure.iataCode,
        firstItinerary?.arrival.iataCode,
        firstItinerary?.departure.date,
        firstItinerary?.departure.time,
        firstItinerary?.arrival.time,
        returnItinerary?.departure.time,
        returnItinerary?.arrival.time,
        Math.round(flight.price.amount),
    ].join("-");

    const payload = {
      searchId: flight.search_id,
      flightId: stableId, // using stableId instead of flight.id
      origin: firstItinerary?.departure.iataCode,
      destination: firstItinerary?.arrival.iataCode,
      initialPrice: flight.price.amount,
      currency: flight.price.currency,
      departureDate: firstItinerary?.departure.date,
      returnDate: returnItinerary?.departure.date,
      airlineName: flight.airline.name,
      airlineLogo: flight.airline.logo,
      passengers,
      tripType,
    };

    //console.log(flight.itineraries);

    const res = await fetch(API_BASE, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(payload),
    });

    if (res.status === 401) throw new Error("UNAUTHORIZED");
    if (!res.ok) throw new Error("Failed to add to watchlist");
    return res.json();
  },

  async removeFromWatchlist(watchlistId: string): Promise<void> {
    const res = await fetch(`${API_BASE}/${watchlistId}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    if (res.status === 401) throw new Error("UNAUTHORIZED");
    if (!res.ok) throw new Error("Failed to remove from watchlist");
  },
};
