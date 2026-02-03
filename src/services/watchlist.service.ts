// import { getUserId, authHeaders } from "@/app/auth/auth";
// import { FlightResult } from "../types/flight";



// const API_BASE = "http://localhost:3000/watchlist";

// export async function getWatchlist() {

//   const res = await fetch(`${API_BASE}`, {
//     headers: authHeaders(),
//   });
//   if (!res.ok) throw new Error("Failed to fetch watchlist");
//   return res.json();
// }

// export async function addToWatchlist(flight: FlightResult) {
//   const res = await fetch(API_BASE, {
//     method: "POST",
//     headers: authHeaders(),
//     body: JSON.stringify({
//       searchId: flight.search_id,
//       flightId: flight.id,
//       origin: flight.originCode,
//       destination: flight.destinationCode,
//       initialPrice: flight.price,
//       departureDate: flight.departure.date,
//       airlineName: flight.airlineName,
//     }),
//   });
//   if (res.status === 401) {
//     throw new Error("UNAUTHORIZED");
//   }

//   if (!res.ok) throw new Error("Failed to add to watchlist");
//   return res.json();
// }

// export async function removeFromWatchlist(flightId: string) {
//   const res = await fetch(`${API_BASE}/${flightId}`, { 
//     method: "DELETE",
//     headers: authHeaders(),
//   });

//   if (res.status === 401) throw new Error("UNAUTHORIZED");
//   if (!res.ok) throw new Error("Failed to remove from watchlist");
//   return res.json();
// }

// export async function toggleWatchlist(
//   flight: FlightResult,
//   isCurrentlyAdded: boolean
// ) {
//   return isCurrentlyAdded
//     ? removeFromWatchlist(flight._id!)
//     : addToWatchlist(flight);
// }

import { authHeaders } from "@/utils/auth-helpers";
import { FlightResult } from "@/types/flight";
import { mapWatchlistToFlightResult } from "./mappers/flight.mapper";


const API_BASE = "http://localhost:3000/watchlist";

export const watchlistService = {
  async getWatchlist() {
    const res = await fetch(API_BASE, {
      headers: authHeaders(),
    });
    if (!res.ok) throw new Error("Failed to fetch watchlist");
    const data = await res.json()
    return Array.isArray(data) ? data.map(mapWatchlistToFlightResult) : [];
  },

  async addToWatchlist(flight: FlightResult) {
    const firstItinerary = flight.itineraries[0];
    const payload = {
      searchId: flight.search_id,
      flightId: flight.id,
      origin: firstItinerary.departure.iataCode,
      destination: firstItinerary.arrival.iataCode,
      initialPrice: flight.price.amount,
      currency: flight.price.currency,
      departureDate: firstItinerary.departure.date,
      airlineName: flight.airline.name,
    };

    const res = await fetch(API_BASE, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify(payload),
    });

    console.log(res)

    if (res.status === 401) throw new Error("UNAUTHORIZED");
    if (!res.ok) throw new Error("Failed to add to watchlist");
    
    return res.json();
  },

  async removeFromWatchlist(idInDb: string) {
    const res = await fetch(`${API_BASE}/${idInDb}`, { 
      method: "DELETE",
      headers: authHeaders(),
    });

    if (res.status === 401) throw new Error("UNAUTHORIZED");
    if (!res.ok) throw new Error("Failed to remove from watchlist");
    return res.json();
  },

  async toggleWatchlist(flight: FlightResult, isCurrentlyAdded: boolean) {
    return isCurrentlyAdded
      ? this.removeFromWatchlist(flight.id)
      : this.addToWatchlist(flight);
  }
};