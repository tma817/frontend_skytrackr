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
import { authHeaders } from "@/app/auth/auth";
import { FlightResult } from "../types/flight";

const API_BASE = "http://localhost:3000/watchlist";

export async function getWatchlist() {
  const res = await fetch(`${API_BASE}`, {
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error("Failed to fetch watchlist");
  const data = await res.json();
  // Nếu backend trả về array string IDs, giữ nguyên. 
  // Nếu trả về object, hãy đảm bảo map đúng ID.
  return data;
}

export async function addToWatchlist(flight: FlightResult) {
  // Lấy origin/destination từ itinerary đầu tiên
  const firstItinerary = flight.itineraries[0];
  
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      searchId: flight.search_id,
      flightId: flight.id,
      origin: firstItinerary.departure.iataCode,       // Sửa từ flight.originCode
      destination: firstItinerary.arrival.iataCode,   // Sửa từ flight.destinationCode
      initialPrice: flight.price.amount,              // Sửa từ flight.price
      currency: flight.price.currency,                // Thêm currency cho chuẩn
      departureDate: firstItinerary.departure.date,    // Sửa từ flight.departure.date
      airlineName: flight.airline.name,               // Sửa từ flight.airlineName
    }),
  });

  if (res.status === 401) throw new Error("UNAUTHORIZED");
  if (!res.ok) throw new Error("Failed to add to watchlist");
  
  return res.json();
}

export async function removeFromWatchlist(idInDb: string) {
  // Lưu ý: Thường Watchlist trong DB dùng _id (MongoDB) hoặc id riêng
  const res = await fetch(`${API_BASE}/${idInDb}`, { 
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
  // Nếu đã add, dùng ID của bản ghi trong Watchlist để xóa
  // Nếu chưa, dùng toàn bộ object flight để add
  return isCurrentlyAdded
    ? removeFromWatchlist(flight.id) // Hoặc flight._id tùy vào backend của bạn
    : addToWatchlist(flight);
}