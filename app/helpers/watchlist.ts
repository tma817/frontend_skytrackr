import { getUserId, authHeaders } from "@/app/auth/auth";


const API_BASE = "http://localhost:3000/watchlist";

export async function getWatchlist() {
  const userId = getUserId();
  if (!userId) throw new Error("User not logged in");

  const res = await fetch(`${API_BASE}/${userId}`, {
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to fetch watchlist");
  return res.json();
}

export async function addToWatchlist(flightId: string) {
  const userId = getUserId();
  if (!userId) throw new Error("User not logged in");

  const res = await fetch(API_BASE, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      user_id: userId,
      flight_number: flightId,
    }),
  });

  if (!res.ok) throw new Error("Failed to add to watchlist");
  return res.json();
}

export async function removeFromWatchlist(flightId: string) {
  const userId = getUserId();
  if (!userId) throw new Error("User not logged in");

  const res = await fetch(`${API_BASE}/${flightId}/${userId}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to remove from watchlist");
  return res.json();
}

export async function toggleWatchlist(
  flightId: string,
  isCurrentlyAdded: boolean
) {
  return isCurrentlyAdded
    ? removeFromWatchlist(flightId)
    : addToWatchlist(flightId);
}
