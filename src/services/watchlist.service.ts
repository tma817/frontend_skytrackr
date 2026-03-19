import { authHeaders } from "@/utils/auth-helpers";
import { FlightResult } from "@/types/flight";
import { API_BASE as BASE } from "@/utils/api";

const API_BASE = `${BASE}/watchlist`;

export type WatchlistItem = {
  _id: string;
  searchId: string;
  flightId: string;
  origin: string;
  destination: string;
  departureDate: string;
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
    const firstItinerary = flight.itineraries[0];
    const passengers = parseInt(numOfPassengers.split(" ")[0] || "1", 10);
    const payload = {
      searchId: flight.search_id,
      flightId: flight.id,
      origin: firstItinerary.departure.iataCode,
      destination: firstItinerary.arrival.iataCode,
      initialPrice: flight.price.amount,
      currency: flight.price.currency,
      departureDate: firstItinerary.departure.date,
      airlineName: flight.airline.name,
      airlineLogo: flight.airline.logo,
      passengers,
      tripType,
    };

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
