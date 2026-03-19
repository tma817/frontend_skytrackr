"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { API_BASE } from "@/utils/api";
import Link from "next/link";
import money from "@/utils/money";
import {
  PiCheckCircleFill,
  PiAirplaneTiltFill,
  PiUsersThreeFill,
  PiIdentificationCardFill,
} from "react-icons/pi";

export default function BookingConfirmationPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`${API_BASE}/bookings/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Booking not found");
        return res.json();
      })
      .then(setBooking)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
        <span className="ml-3 text-sm font-medium">Loading confirmation...</span>
      </div>
    );
  }

  if (error || !booking) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-slate-500">{error || "Booking not found"}</p>
        <Link href="/" className="rounded-xl bg-black px-6 py-2 text-sm font-bold text-white">
          Back to Search
        </Link>
      </div>
    );
  }

  const itineraries = booking.flightOffer?.itineraries ?? [];
  const departure = itineraries[0]?.segments?.[0]?.departure;
  const lastItinerary = itineraries[itineraries.length - 1];
  const arrival = lastItinerary?.segments?.[lastItinerary.segments.length - 1]?.arrival;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">

        {/* Header */}
        <div className="bg-white rounded-3xl border shadow-sm p-8 text-center">
          <PiCheckCircleFill size={56} className="text-emerald-500 mx-auto mb-4" />
          <h1 className="text-2xl font-black text-slate-900">Booking Confirmed!</h1>
          <p className="text-slate-400 text-sm mt-1 font-medium">
            Your booking has been successfully created.
          </p>
          <div className="mt-4 inline-block bg-slate-50 border rounded-2xl px-5 py-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Booking ID</p>
            <p className="text-sm font-black text-slate-900 font-mono">{booking._id}</p>
          </div>
          {booking.amadeusOrderId && (
            <div className="mt-2 inline-block bg-emerald-50 border border-emerald-100 rounded-2xl px-5 py-2 ml-2">
              <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Amadeus Order</p>
              <p className="text-sm font-black text-slate-900 font-mono">{booking.amadeusOrderId}</p>
            </div>
          )}
        </div>

        {/* Flight */}
        {itineraries.length > 0 && (
          <section className="bg-white rounded-3xl border shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4 text-slate-400">
              <PiAirplaneTiltFill size={18} />
              <h2 className="text-[10px] font-black uppercase tracking-widest">Flight</h2>
            </div>
            <div className="space-y-3">
              {itineraries.map((itin: any, idx: number) => {
                const dep = itin.segments?.[0]?.departure;
                const arr = itin.segments?.[itin.segments.length - 1]?.arrival;
                return (
                  <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div>
                      <p className="text-base font-black text-slate-900">
                        {dep?.iataCode ?? "—"}
                        <span className="mx-2 text-slate-300">→</span>
                        {arr?.iataCode ?? "—"}
                      </p>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {dep?.at ? new Date(dep.at).toLocaleDateString() : ""}
                      </p>
                    </div>
                    <span className="text-xs font-black text-slate-400 uppercase">
                      {idx === 0 ? "Outbound" : "Return"}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Travelers */}
        {booking.travelers?.length > 0 && (
          <section className="bg-white rounded-3xl border shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4 text-slate-400">
              <PiUsersThreeFill size={18} />
              <h2 className="text-[10px] font-black uppercase tracking-widest">Travelers</h2>
            </div>
            <div className="space-y-3">
              {booking.travelers.map((t: any, idx: number) => {
                const travelerSeats: any[] = (booking.seatings ?? []).filter(
                  (s: any) => s.travelerId === t.id
                );
                return (
                  <div key={t.id ?? idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border rounded-full flex items-center justify-center text-xs font-black text-slate-500">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 uppercase">
                          {t.name?.firstName ?? t.firstName} {t.name?.lastName ?? t.lastName}
                        </p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">
                          {t.gender} · {t.dateOfBirth}
                        </p>
                      </div>
                    </div>
                    {travelerSeats.length > 0 && (
                      <div className="flex gap-2">
                        {travelerSeats.map((s: any) => (
                          <span key={s.segmentId} className="text-sm font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">
                            {s.seatNumber}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Price */}
        <section className="bg-white rounded-3xl border shadow-sm p-6">
          <div className="flex items-center gap-2 mb-4 text-slate-400">
            <PiIdentificationCardFill size={18} />
            <h2 className="text-[10px] font-black uppercase tracking-widest">Price Summary</h2>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-black text-slate-400 uppercase">Total Charged</span>
            <span className="text-3xl font-black text-slate-900">
              {money(parseFloat(booking.totalPrice || "0"), booking.currency)}
            </span>
          </div>
          <p className="text-[10px] text-slate-400 text-right mt-1">Status: {booking.status}</p>
        </section>

        <Link
          href="/"
          className="block w-full text-center rounded-2xl bg-slate-900 py-4 text-sm font-black text-white uppercase tracking-widest hover:bg-black transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
