"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { API_BASE } from "@/utils/api";
import Link from "next/link";
import money from "@/utils/money";

function ReceiptDivider() {
  return (
    <div className="flex items-center">
      <div className="h-6 w-6 rounded-full bg-gray-100 shrink-0 -ml-3" />
      <div className="flex-1 border-t-2 border-dashed border-gray-100 mx-1" />
      <div className="h-6 w-6 rounded-full bg-gray-100 shrink-0 -mr-3" />
    </div>
  );
}

function ReceiptRow({ label, value, mono = false, bold = false }: { label: string; value: string; mono?: boolean; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[11px] text-slate-400 font-medium">{label}</span>
      <span className={`text-[11px] text-slate-800 ${bold ? "font-black" : "font-semibold"} ${mono ? "font-mono" : ""}`}>{value}</span>
    </div>
  );
}

export default function BookingConfirmationPage() {
  const { id } = useParams<{ id: string }>();
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
        <span className="ml-3 text-sm font-medium text-slate-400">Loading your receipt…</span>
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
  const totalPrice = parseFloat(booking.totalPrice || "0");
  const currency = booking.currency;

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-12 px-4 font-sans">
      <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">

        {/* Confirmation stamp above receipt */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-emerald-500 shadow-lg shadow-emerald-200 mb-3">
            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-xl font-black text-slate-900">You're all set!</h1>
          <p className="text-sm text-slate-400 mt-1">Your booking is confirmed</p>
        </div>

        {/* Receipt card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden">

          {/* Receipt header — dark strip */}
          <div className="bg-slate-900 px-6 py-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xl font-black text-white uppercase">Booking ID: {booking._id?.slice(-10).toUpperCase()}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-emerald-400 uppercase tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {booking.status ?? "Confirmed"}
                </span>
              </div>
            </div>

            {/* Route display */}
            {itineraries.map((itin: any, idx: number) => {
              const dep = itin.segments?.[0]?.departure;
              const arr = itin.segments?.[itin.segments.length - 1]?.arrival;
              const depDate = dep?.at ? new Date(dep.at) : null;
              const arrDate = arr?.at ? new Date(arr.at) : null;
              return (
                <div key={idx} className={idx > 0 ? "mt-4 pt-4" : ""}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl font-black text-white tracking-tight">{dep?.iataCode ?? "—"}</p>
                      <p className="text-[10px] text-white/50 font-medium mt-0.5">
                        {depDate ? depDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-1 flex-1 px-4">
                      <div className="flex items-center w-full gap-1">
                        <div className="h-px flex-1 bg-white/20" />
                        <svg className="h-4 w-4 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
                        </svg>
                        <div className="h-px flex-1 bg-white/20" />
                      </div>
                      <p className="text-[9px] text-white/30 font-medium uppercase tracking-wide">
                        {idx === 0 ? "Outbound" : "Return"}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-black text-white tracking-tight">{arr?.iataCode ?? "—"}</p>
                      <p className="text-[10px] text-white/50 font-medium mt-0.5">
                        {arrDate ? arrDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
                      </p>
                    </div>
                  </div>

                  {depDate && (
                    <p className="text-center text-[10px] text-white/40 font-medium mt-2">
                      {depDate.toLocaleDateString([], { weekday: "short", year: "numeric", month: "short", day: "numeric" })}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <ReceiptDivider />

          {/* Passengers */}
          {booking.travelers?.length > 0 && (
            <div className="px-6 py-5">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">Passengers</p>
              <div className="space-y-3">
                {booking.travelers.map((t: any, idx: number) => {
                  const travelerSeats: any[] = (booking.seatings ?? []).filter(
                    (s: any) => s.travelerId === t.id
                  );
                  return (
                    <div key={t.id ?? idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-900 uppercase">
                            {t.name?.firstName ?? t.firstName} {t.name?.lastName ?? t.lastName}
                          </p>
                          <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">
                            {t.gender} · {t.dateOfBirth}
                          </p>
                        </div>
                      </div>
                      {travelerSeats.length > 0 && (
                        <div className="flex gap-1">
                          {travelerSeats.map((s: any) => (
                            <span key={s.segmentId} className="text-[10px] font-black text-sky-600 bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-md">
                              {s.seatNumber}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <ReceiptDivider />

          {/* Details rows */}
          <div className="px-6 py-5 space-y-2.5">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">Details</p>
            <ReceiptRow label="Booking ID" value={booking._id} mono />
            {booking.amadeusOrderId && (
              <ReceiptRow label="Order Ref" value={booking.amadeusOrderId} mono />
            )}
            {booking.travelers?.[0]?.contact?.emailAddress && (
              <ReceiptRow label="Email" value={booking.travelers[0].contact.emailAddress} />
            )}
            <ReceiptRow label="Payment" value="Card" />
            <ReceiptRow label="Taxes & fees" value="Included" />
          </div>

          <ReceiptDivider />

          {/* Total */}
          <div className="px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Total Charged</p>
              <p className="text-[10px] text-slate-300 font-medium mt-0.5">All taxes included</p>
            </div>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              {money(totalPrice, currency)}
            </p>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <div className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3 flex items-center gap-3">
              <svg className="h-4 w-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                A confirmation has been sent to your registered email address.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <Link
            href="/"
            className="block w-full text-center rounded-2xl bg-black py-4 text-sm font-black text-white hover:bg-black transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/search"
            className="block w-full text-center rounded-2xl border bg-white py-4 text-sm hover:bg-slate-50 transition-colors"
          >
            Search Another Flight
          </Link>
        </div>

      </div>
    </div>
  );
}
