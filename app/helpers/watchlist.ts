import { getCookie } from "cookies-next";
import { getUserId } from "@/app/auth/auth";

const API_BASE = "/watchlist";


function authHeaders() {
  const token = getCookie("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };
}


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

  const res = await fetch(`${API_BASE}/${userId}/${flightId}`, {
    method: "POST",
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to add to watchlist");

  return res.json();
}


export async function removeFromWatchlist(flightId: string) {
  const userId = getUserId();
  if (!userId) throw new Error("User not logged in");

  const res = await fetch(`${API_BASE}/${userId}/${flightId}`, {
    method: "DELETE",
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Failed to remove from watchlist");

  return res.json();
}


export async function toggleWatchlist(flightId: string, isCurrentlyAdded: boolean) {
  return isCurrentlyAdded
    ? removeFromWatchlist(flightId)
    : addToWatchlist(flightId);
}
