import { getUserId, authHeaders } from "@/app/auth/auth";
import { FlightResult } from "../types/flight";



const API_BASE = "http://localhost:3000/watchlist";

export async function getWatchlist() {

  const res = await fetch(`${API_BASE}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch watchlist");
  return res.json();
}

export async function addToWatchlist(flight: FlightResult) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      searchId: flight.search_id,
      flightId: flight.id,
      origin: flight.originCode,
      destination: flight.destinationCode,
      initialPrice: flight.price,
      departureDate: flight.departure.date,
      airlineName: flight.airlineName,
    }),
  });
  if (res.status === 401) {
    throw new Error("UNAUTHORIZED");
  }

  if (!res.ok) throw new Error("Failed to add to watchlist");
  return res.json();
}

export async function removeFromWatchlist(flightId: string) {
  const res = await fetch(`${API_BASE}/${flightId}`, { 
    method: "DELETE",
    headers: authHeaders(),
  });

  if (res.status === 401) throw new Error("UNAUTHORIZED");
  if (!res.ok) throw new Error("Failed to remove from watchlist");
  return res.json();
}

export async function toggleWatchlist(
  flight: FlightResult,
  isCurrentlyAdded: boolean
) {
  return isCurrentlyAdded
    ? removeFromWatchlist(flight._id)
    : addToWatchlist(flight);
}
