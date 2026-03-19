"use client"
import { useState } from "react";
import { useBookingStore } from "@/store/useBookingStore";
import { useRouter } from "next/navigation";
import { bookingService } from "@/services/booking.service";
import money from "@/utils/money";
import Link from "next/link";

function formatCardNumber(value: string) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
}
function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length > 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}
function getCardBrand(number: string) {
  const n = number.replace(/\s/g, "");
  if (/^4/.test(n)) return "VISA";
  if (/^5[1-5]/.test(n)) return "MC";
  if (/^3[47]/.test(n)) return "AMEX";
  return null;
}

function CardPreview({ number, holder, expiry }: { number: string; holder: string; expiry: string }) {
  const brand = getCardBrand(number);
  const displayNumber = (number || "•••• •••• •••• ••••").padEnd(19, "•").substring(0, 19);
  const displayHolder = holder || "YOUR NAME";
  const displayExpiry = expiry || "MM/YY";

  return (
    <div className="relative w-3/5 mx-auto aspect-[1.586/1] rounded-xl overflow-hidden select-none"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      {/* Glow */}
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-blue-500 opacity-20 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cyan-400 opacity-10 blur-3xl" />

      <div className="relative h-full flex flex-col justify-between p-4">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-9 rounded bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-90" />
          {brand && (
            <span className="text-white font-black text-sm tracking-widest opacity-90">{brand}</span>
          )}
        </div>

        {/* Card number */}
        <div>
          <p className="text-white font-mono text-base tracking-[0.18em] font-bold drop-shadow">
            {displayNumber}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5">Card Holder</p>
            <p className="text-white text-sm font-bold uppercase tracking-wider truncate max-w-[160px]">
              {displayHolder}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5">Expires</p>
            <p className="text-white text-sm font-bold tracking-wider">{displayExpiry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentPage() {
  const router = useRouter();
  const { selectedFlight, travelers, contact, selectedSeats, clearBooking } = useBookingStore();

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!selectedFlight) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#F7F8FA]">
        <p className="text-slate-400 text-sm">No booking data found.</p>
        <Link href="/" className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold">
          Back to Search
        </Link>
      </div>
    );
  }

  const seatsTotal = Object.values(selectedSeats).reduce((acc, seg) =>
    acc + Object.values(seg as Record<string, any>).reduce((a, seat: any) =>
      a + parseFloat(seat?.travelerPricing?.[0]?.price?.total || "0"), 0), 0);

  const flightAmount = selectedFlight.price.amount;
  const finalTotal = flightAmount + seatsTotal;
  const currency = selectedFlight.price.currency;
  const isFormValid = cardNumber.replace(/\s/g, "").length >= 15 && cardHolder.trim().length > 2 && expiry.length === 5 && cvv.length >= 3;

  const handlePay = async () => {
    if (!isFormValid) return;
    setIsLoading(true);
    setError(null);
    try {
      const callingCode = (contact?.countryCallingCode || "1").replace(/^\+/, "");
      const formattedTravelers = travelers.map((t: any) => ({
        id: t.id,
        dateOfBirth: t.dateOfBirth,
        name: { firstName: t.firstName, lastName: t.lastName },
        gender: t.gender as "MALE" | "FEMALE",
        contact: {
          emailAddress: contact?.emailAddress || "",
          phones: [{ deviceType: "MOBILE", countryCallingCode: callingCode, number: contact?.number || "" }],
        },
      }));
      const seatings = Object.entries(selectedSeats).flatMap(([segmentId, segSeats]) =>
        Object.entries(segSeats as Record<string, any>)
          .filter(([, seat]) => seat?.number)
          .map(([travelerId, seat]) => ({ segmentId, travelerId, seatNumber: seat.number }))
      );
      const data = await bookingService.createOrder({
        flightId: selectedFlight.id,
        searchId: selectedFlight.search_id,
        travelers: formattedTravelers,
        ...(seatings.length > 0 && { seatings }),
      });
      const stored = JSON.parse(localStorage.getItem("skytrackr_orders") || "[]");
      localStorage.setItem("skytrackr_orders", JSON.stringify([data.bookingId, ...stored]));
      clearBooking();
      router.push(`/booking/${data.bookingId}`);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Step 3 of 3</p>
            <h1 className="text-2xl font-black text-slate-900">Review & Pay</h1>
          </div>
          <Link href="/" className="text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors">
            ✕ Cancel
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="col-span-12 lg:col-span-7 space-y-4">

            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

              {/* Flight rows */}
              <div className="px-5 pt-5 pb-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Flight</p>
                <div className="space-y-4">
                  {selectedFlight.itineraries.map((itin: any, idx: number) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {selectedFlight.airline.logo && (
                          <img src={selectedFlight.airline.logo} alt="" className="h-8 w-8 object-contain shrink-0" />
                        )}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-base font-black text-slate-900">{itin.departure.iataCode}</span>
                            <svg className="h-3 w-3 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                            <span className="text-base font-black text-slate-900">{itin.arrival.iataCode}</span>
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide ${idx === 0 ? "bg-slate-900 text-white" : "bg-blue-600 text-white"}`}>
                              {idx === 0 ? "Depart" : "Return"}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                            {itin.departure.date} · {itin.departure.time} – {itin.arrival.time} · {selectedFlight.cabin}
                          </p>
                        </div>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase shrink-0">{itin.duration}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100 mx-5" />

              {/* Travelers */}
              <div className="px-5 py-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Travellers</p>
                <div className="space-y-2.5">
                  {travelers.map((t: any, idx: number) => {
                    const travelerSeats = Object.entries(selectedSeats)
                      .map(([segId, segSeats]: [string, any]) => segSeats[t.id] ? { segId, seat: segSeats[t.id] } : null)
                      .filter(Boolean);
                    return (
                      <div key={t.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-500 shrink-0">
                            {idx + 1}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900 uppercase">{t.firstName} {t.lastName}</p>
                            <p className="text-[10px] text-slate-400 uppercase font-medium">{t.gender} · {t.dateOfBirth}</p>
                          </div>
                        </div>
                        <div className="flex gap-1.5">
                          {travelerSeats.map((s: any) => (
                            <span key={s.segId} className="text-xs font-black text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg">
                              {s.seat.number}
                            </span>
                          ))}
                          {travelerSeats.length === 0 && (
                            <span className="text-[10px] text-slate-300 font-medium">No seat</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="h-px bg-slate-100 mx-5" />

              {/* Contact */}
              <div className="px-5 py-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Contact</p>
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium mb-0.5">Email</p>
                    <p className="text-sm font-bold text-slate-900">{contact?.emailAddress}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium mb-0.5">Phone</p>
                    <p className="text-sm font-bold text-slate-900">+{contact?.countryCallingCode} {contact?.number}</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Payment Form Card */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center justify-between mb-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Card Details</p>
                <div className="flex items-center gap-1.5 text-emerald-500">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                  <span className="text-[10px] font-black uppercase tracking-wide">SSL Secured</span>
                </div>
              </div>

              {/* Card preview */}
              <div className="mb-5">
                <CardPreview number={cardNumber} holder={cardHolder} expiry={expiry} />
              </div>

              <div className="space-y-3.5">
                {/* Card Number */}
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all tracking-widest"
                  />
                </div>

                {/* Name */}
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="As it appears on your card"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                    className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all uppercase tracking-wider"
                  />
                </div>

                {/* Expiry + CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                      Expiry
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="MM / YY"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all tracking-widest"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wide mb-2">
                      CVV
                    </label>
                    <input
                      type="password"
                      inputMode="numeric"
                      placeholder="•••"
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all tracking-widest"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="col-span-12 lg:col-span-5 sticky top-8 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Price Breakdown</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">Flight Fare</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{travelers.length} passenger{travelers.length !== 1 ? "s" : ""} · {selectedFlight.cabin}</p>
                  </div>
                  <span className="text-sm font-bold text-slate-900">{money(flightAmount, currency)}</span>
                </div>

                {seatsTotal > 0 && (
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">Seat Selection</p>
                    <span className="text-sm font-bold text-slate-900">+{money(seatsTotal, currency)}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-slate-400">
                  <p className="text-[11px] font-medium">Taxes & fees</p>
                  <p className="text-[11px] font-medium">Included</p>
                </div>
              </div>

              <div className="my-5 h-px bg-slate-100" />

              <div className="flex items-baseline justify-between mb-6">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-slate-900 tracking-tight">{money(finalTotal, currency)}</span>
                  <p className="text-[10px] text-slate-400 mt-0.5">All taxes included</p>
                </div>
              </div>

              {error && (
                <div className="mb-4 flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-2xl p-4">
                  <svg className="h-4 w-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-xs font-medium text-red-600 leading-relaxed">{error}</p>
                </div>
              )}

              <button
                onClick={handlePay}
                disabled={!isFormValid || isLoading}
                className="w-full rounded-2xl bg-slate-900 py-4 text-sm font-black text-white transition-all hover:bg-black active:scale-[0.98] uppercase tracking-widest disabled:opacity-30 disabled:cursor-not-allowed disabled:active:scale-100"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Processing…
                  </span>
                ) : (
                  `Confirm & Pay ${money(finalTotal, currency)}`
                )}
              </button>

              <p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed">
                By completing this purchase you agree to our{" "}
                <span className="underline cursor-pointer">Terms of Service</span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
