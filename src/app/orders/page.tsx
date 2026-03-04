"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import money from "@/utils/money";
import { PiAirplaneTiltFill, PiCheckCircleFill, PiClockFill, PiReceiptFill } from "react-icons/pi";

type BookingSummary = {
  _id: string;
  amadeusOrderId: string;
  status: string;
  totalPrice: string;
  currency: string;
  travelers: any[];
  flightOffer: any;
  createdAt: string;
};

async function fetchBooking(id: string): Promise<BookingSummary | null> {
  try {
    const res = await fetch(`http://localhost:3000/bookings/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export default function OrdersPage() {
  const [bookings, setBookings] = useState<(BookingSummary | null)[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids: string[] = JSON.parse(localStorage.getItem("skytrackr_orders") || "[]");
    if (ids.length === 0) {
      setLoading(false);
      return;
    }
    Promise.all(ids.map(fetchBooking)).then((results) => {
      setBookings(results);
      setLoading(false);
    });
  }, []);

  const validBookings = bookings.filter(Boolean) as BookingSummary[];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
        <span className="ml-3 text-sm font-medium">Loading orders...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="flex items-center gap-3 mb-8">
          <PiReceiptFill size={28} className="text-slate-700" />
          <div>
            <h1 className="text-2xl font-black text-slate-900">My Orders</h1>
            <p className="text-sm text-slate-400 font-medium">{validBookings.length} booking{validBookings.length !== 1 ? "s" : ""} found</p>
          </div>
        </div>

        {validBookings.length === 0 ? (
          <div className="bg-white rounded-3xl border shadow-sm p-16 text-center">
            <PiAirplaneTiltFill size={40} className="text-slate-200 mx-auto mb-4" />
            <p className="text-slate-400 font-medium">No bookings yet.</p>
            <Link href="/" className="mt-4 inline-block text-sm font-bold text-blue-600 hover:underline">
              Search for flights
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {validBookings.map((booking) => {
              const itineraries = booking.flightOffer?.itineraries ?? [];
              const firstSeg = itineraries[0]?.segments?.[0];
              const lastItin = itineraries[itineraries.length - 1];
              const lastSeg = lastItin?.segments?.[lastItin.segments.length - 1];
              const depCode = firstSeg?.departure?.iataCode ?? "—";
              const arrCode = lastSeg?.arrival?.iataCode ?? "—";
              const depDate = firstSeg?.departure?.at
                ? new Date(firstSeg.departure.at).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })
                : "—";
              const bookedAt = booking.createdAt
                ? new Date(booking.createdAt).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })
                : "";

              return (
                <Link
                  key={booking._id}
                  href={`/booking/${booking._id}`}
                  className="block bg-white rounded-3xl border shadow-sm p-6 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl border flex items-center justify-center">
                        <PiAirplaneTiltFill size={22} className="text-slate-400" />
                      </div>
                      <div>
                        <p className="text-lg font-black text-slate-900 tracking-tight">
                          {depCode}
                          <span className="mx-2 text-slate-300">→</span>
                          {arrCode}
                        </p>
                        <p className="text-xs text-slate-400 font-medium mt-0.5">{depDate}</p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <p className="text-xl font-black text-slate-900">
                        {money(parseFloat(booking.totalPrice || "0"), booking.currency)}
                      </p>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <PiCheckCircleFill size={12} className="text-emerald-500" />
                        <span className="text-[10px] font-black text-emerald-600 uppercase">{booking.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t flex items-center justify-between text-[11px] text-slate-400 font-medium">
                    <div className="flex items-center gap-1">
                      <PiClockFill size={11} />
                      <span>Booked {bookedAt}</span>
                    </div>
                    <span className="font-mono text-slate-300">{booking._id.slice(-8).toUpperCase()}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
