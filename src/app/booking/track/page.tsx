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

function formatDateTime(at: string | undefined) {
  if (!at) return "–";
  try {
    return new Date(at).toLocaleString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "2-digit", minute: "2-digit", hour12: false,
    });
  } catch {
    return at;
  }
}

function formatDuration(d: string | undefined) {
  if (!d) return "";
  return d.replace("PT", "").replace("H", "h ").replace("M", "m").toLowerCase();
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
        <span className="ml-3 text-sm font-medium">Looking up your booking...</span>
      </div>
    );
  }

  if (error || !result) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <div className="rounded-2xl border bg-white p-8 shadow-sm max-w-md w-full text-center space-y-4">
          <p className="text-2xl font-black text-slate-800">Booking Not Found</p>
          <p className="text-sm text-slate-500">{error ?? "We couldn't find a booking with that PNR and last name."}</p>
          <button
            onClick={() => router.back()}
            className="rounded-xl bg-black px-6 py-3 text-sm font-bold text-white"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50/30 pb-16">
      <div className="mx-auto max-w-4xl px-6 py-10 space-y-6">

        {/* PNR hero */}
        <div className="rounded-2xl border bg-white p-8 shadow-sm text-center space-y-2">
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Booking Reference (PNR)</p>
          <p className="text-5xl font-black tracking-[8px] text-cyan-600 font-mono">{result.pnr || "–"}</p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="text-xs font-bold text-slate-400">{result.amadeusOrderId}</span>
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase bg-emerald-50 text-emerald-600 border border-emerald-200">
              {result.status}
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Booked {new Date(result.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        {/* Itineraries */}
        {result.itineraries?.map((it, idx) => (
          <div key={idx} className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-black uppercase tracking-wider text-slate-700">
              {it.type === "outbound" ? "Departure Flight" : "Return Flight"}
              <span className="ml-2 text-slate-400 font-medium normal-case">· {formatDuration(it.duration)}</span>
            </h2>
            {it.segments.map((seg, sIdx) => (
              <div key={sIdx} className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="grid grid-cols-3 items-center gap-4">
                  <div>
                    <p className="text-xl font-black text-slate-900">{seg.departure.iataCode}</p>
                    {seg.departure.terminal && (
                      <p className="text-[10px] text-slate-400">T{seg.departure.terminal}</p>
                    )}
                    <p className="text-xs text-slate-500 mt-0.5">{formatDateTime(seg.departure.time)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-bold text-slate-400">{formatDuration(seg.duration)}</p>
                    <div className="h-px bg-slate-200 my-1" />
                    <p className="text-[10px] font-black text-slate-500 uppercase">{seg.carrierCode}{seg.flightNumber}</p>
                    {seg.aircraft && <p className="text-[9px] text-slate-400">{seg.aircraft}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-black text-slate-900">{seg.arrival.iataCode}</p>
                    {seg.arrival.terminal && (
                      <p className="text-[10px] text-slate-400">T{seg.arrival.terminal}</p>
                    )}
                    <p className="text-xs text-slate-500 mt-0.5">{formatDateTime(seg.arrival.time)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}

        {/* Travelers */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-sm font-black uppercase tracking-wider text-slate-700">Passengers</h2>
          {result.travelers?.map((t) => (
            <div key={t.id} className="flex items-center justify-between border-b last:border-b-0 pb-3 last:pb-0">
              <div>
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-[11px] text-slate-400">{t.contact?.emailAddress ?? "–"}</p>
              </div>
              {t.documents?.[0] && (
                <div className="text-right text-[10px] text-slate-400">
                  <p>Doc: {t.documents[0].number}</p>
                  <p>Exp: {t.documents[0].expiryDate}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm flex items-center justify-between">
          <span className="text-xs font-black uppercase text-slate-500 tracking-widest">Total Paid</span>
          <span className="text-3xl font-black tracking-tighter text-slate-900">
            {result.price.currency} {parseFloat(result.price.amount).toFixed(2)}
          </span>
        </div>

      </div>
    </main>
  );
}
