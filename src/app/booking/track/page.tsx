"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { API_BASE } from "@/utils/api";

type TrackResult = {
  bookingId: string;
  amadeusOrderId: string;
  pnr: string;
  status: string;
  createdAt: string;
  price: { amount: string; currency: string };
  travelers: {
    id: string;
    name: string;
    dateOfBirth: string;
    contact?: { emailAddress?: string };
    documents?: { number: string; expiryDate: string; issuanceCountry: string }[];
  }[];
  itineraries: {
    type: string;
    duration: string;
    segments: {
      departure: { iataCode: string; terminal?: string; time: string };
      arrival: { iataCode: string; terminal?: string; time: string };
      carrierCode: string;
      flightNumber: string;
      aircraft?: string;
      duration: string;
    }[];
  }[];
};

function formatTime(at: string | undefined) {
  if (!at) return "–";
  try {
    return new Date(at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
  } catch { return at; }
}

function formatDate(at: string | undefined) {
  if (!at) return "–";
  try {
    return new Date(at).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  } catch { return at; }
}

function formatDuration(d: string | undefined) {
  if (!d) return "";
  return d.replace("PT", "").replace("H", "h ").replace("M", "m").toLowerCase();
}

function ReceiptDivider() {
  return (
    <div className="flex items-center">
      <div className="h-6 w-6 rounded-full bg-gray-100 shrink-0 -ml-3" />
      <div className="flex-1 border-t-2 border-dashed border-gray-100 mx-1" />
      <div className="h-6 w-6 rounded-full bg-gray-100 shrink-0 -mr-3" />
    </div>
  );
}

export default function TrackBookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pnr = searchParams.get("pnr") ?? "";
  const lastName = searchParams.get("lastName") ?? "";

  const [result, setResult] = useState<TrackResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!pnr || !lastName) {
      setError("Missing PNR or last name.");
      setLoading(false);
      return;
    }
    fetch(
      `${API_BASE}/bookings/track?pnr=${encodeURIComponent(pnr)}&lastName=${encodeURIComponent(lastName)}`
    )
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.message || "Booking not found.");
        }
        return res.json();
      })
      .then(setResult)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [pnr, lastName]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
        <span className="ml-3 text-sm font-medium text-slate-400">Looking up your booking…</span>
      </div>
    );
  }

  if (error || !result) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <div className="rounded-2xl border bg-white p-8 shadow-sm max-w-md w-full text-center space-y-4">
          <div className="h-12 w-12 rounded-2xl bg-red-50 flex items-center justify-center mx-auto">
            <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <p className="text-lg font-black text-slate-800">Booking Not Found</p>
          <p className="text-sm text-slate-500">{error ?? "We couldn't find a booking with that PNR and last name."}</p>
          <button
            onClick={() => router.back()}
            className="rounded-xl bg-black px-6 py-3 text-sm font-bold text-white hover:bg-zinc-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  const bookedDate = new Date(result.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const totalAmount = parseFloat(result.price.amount).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-12 px-4 font-sans">
      <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">

        {/* Header above receipt */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-slate-900 shadow-lg shadow-slate-300 mb-3">
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
          </div>
          <h1 className="text-xl font-black text-slate-900">Booking Details</h1>
          <p className="text-sm text-slate-400 mt-1">Booked on {bookedDate}</p>
        </div>

        {/* Receipt card */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden">

          {/* Dark header — PNR + status */}
          <div className="bg-slate-900 px-6 py-5">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">PNR Reference</p>
                <p className="text-3xl font-black text-white tracking-[6px] font-mono">{result.pnr || "–"}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-emerald-400 uppercase tracking-wide bg-emerald-400/10 px-3 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {result.status}
              </span>
            </div>

            {/* Flight routes */}
            {result.itineraries?.map((it, idx) => {
              const firstSeg = it.segments[0];
              const lastSeg = it.segments[it.segments.length - 1];
              return (
                <div key={idx} className={idx > 0 ? "mt-4 pt-4" : ""}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-white tracking-tight">{firstSeg.departure.iataCode}</p>
                      <p className="text-[10px] text-white/50 font-medium mt-0.5">{formatTime(firstSeg.departure.time)}</p>
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
                        {formatDuration(it.duration)} · {it.type === "outbound" ? "Outbound" : "Return"}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-black text-white tracking-tight">{lastSeg.arrival.iataCode}</p>
                      <p className="text-[10px] text-white/50 font-medium mt-0.5">{formatTime(lastSeg.arrival.time)}</p>
                    </div>
                  </div>
                  <p className="text-center text-[10px] text-white/30 font-medium mt-2">
                    {formatDate(firstSeg.departure.time)}
                  </p>
                </div>
              );
            })}
          </div>

          <ReceiptDivider />

          {/* Segments detail */}
          <div className="px-6 py-5 space-y-5">
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Flight Segments</p>
            {result.itineraries?.map((it, idx) =>
              it.segments.map((seg, sIdx) => (
                <div key={`${idx}-${sIdx}`} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-black text-slate-900">{seg.departure.iataCode}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{formatTime(seg.departure.time)}</p>
                      {seg.departure.terminal && (
                        <p className="text-[10px] text-slate-300 font-medium">Terminal {seg.departure.terminal}</p>
                      )}
                    </div>

                    <div className="flex flex-col items-center text-center px-3">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-wide">{formatDuration(seg.duration)}</p>
                      <div className="w-16 h-px bg-slate-200 my-1.5" />
                      <p className="text-[9px] font-black text-slate-500 tracking-wider">{seg.carrierCode}{seg.flightNumber}</p>
                      {seg.aircraft && <p className="text-[8px] text-slate-300 mt-0.5">{seg.aircraft}</p>}
                    </div>

                    <div className="text-right">
                      <p className="text-base font-black text-slate-900">{seg.arrival.iataCode}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{formatTime(seg.arrival.time)}</p>
                      {seg.arrival.terminal && (
                        <p className="text-[10px] text-slate-300 font-medium">Terminal {seg.arrival.terminal}</p>
                      )}
                    </div>
                  </div>
                  {sIdx < it.segments.length - 1 && (
                    <div className="border-t border-dashed border-slate-100" />
                  )}
                </div>
              ))
            )}
          </div>

          <ReceiptDivider />

          {/* Passengers */}
          {result.travelers?.length > 0 && (
            <div className="px-6 py-5 space-y-3">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">Passengers</p>
              {result.travelers.map((t, idx) => (
                <div key={t.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 uppercase">{t.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{t.dateOfBirth}</p>
                      {t.contact?.emailAddress && (
                        <p className="text-[10px] text-slate-300">{t.contact.emailAddress}</p>
                      )}
                    </div>
                  </div>
                  {t.documents?.[0] && (
                    <div className="text-right text-[9px] text-slate-400">
                      <p className="font-mono">{t.documents[0].number}</p>
                      <p>Exp {t.documents[0].expiryDate}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <ReceiptDivider />

          {/* Total */}
          <div className="px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Total Paid</p>
              <p className="text-[10px] text-slate-300 font-medium mt-0.5">All taxes included</p>
            </div>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              {result.price.currency} {totalAmount}
            </p>
          </div>

          {/* Order ref footer */}
          <div className="px-6 pb-6">
            <div className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3 flex items-center gap-3">
              <svg className="h-4 w-4 text-slate-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
              <div>
                <p className="text-[9px] text-slate-400 font-medium uppercase tracking-widest">Amadeus Order</p>
                <p className="text-xs font-black text-slate-600 font-mono">{result.amadeusOrderId}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => router.back()}
            className="block w-full text-center rounded-2xl bg-slate-900 py-4 text-sm font-black text-white uppercase tracking-widest hover:bg-black transition-colors"
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
}
