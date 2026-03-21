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
    <div
      className="relative w-full aspect-[1.586/1] rounded-2xl overflow-hidden select-none"
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f3460 100%)" }}
    >
      <div className="absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
      <div className="relative h-full flex flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <div className="h-7 w-10 rounded-md bg-gradient-to-br from-yellow-300 to-amber-500 opacity-90" />
          {brand && (
            <span className="text-white font-black text-sm tracking-[0.2em] opacity-90">{brand}</span>
          )}
        </div>

        <div>
          <p className="text-white font-mono text-lg tracking-[0.2em] font-bold drop-shadow">
            {displayNumber}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5">Card Holder</p>
            <p className="text-white text-sm font-bold uppercase tracking-wider truncate max-w-[180px]">
              {displayHolder}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[9px] text-white/40 uppercase tracking-widest mb-0.5">Expires</p>
            <p className="text-white text-sm font-bold tracking-widest">{displayExpiry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputCls = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-900 placeholder:text-slate-300 placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-sky-400/20 focus:border-sky-400 transition-all bg-white";

export default function PaymentPage() {
  const router = useRouter();
  const { selectedFlight, travelers, contact, selectedSeats, clearBooking } = useBookingStore();

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [summaryOpen, setSummaryOpen] = useState(false);

  if (!selectedFlight) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5">
        <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center">
          <svg className="h-7 w-7 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-slate-700">No booking data found</p>
          <p className="text-xs text-slate-400 mt-1">Please start a new search</p>
        </div>
        <Link href="/" className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-black transition-all">
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 font-sans">

      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-900">Review & Pay</h1>
        <p className="text-sm text-slate-400 mt-1">Confirm your booking details below</p>
      </div>

      <div className="grid grid-cols-12 gap-8 items-start">

        {/* ── LEFT COLUMN ── */}
        <div className="col-span-12 lg:col-span-7 space-y-4">

          {/* Payment Form Card */}
          <div className="bg-white rounded-2xl border overflow-hidden">
            <div className="px-5 py-3.5 border-b flex items-center justify-between">
              <span className="text-xs font-black tracking-tight  text-gray-900 uppercase leading-none">Card Details</span>
              <div className="flex items-center gap-1.5 text-emerald-500">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                <span className="text-[10px] font-black uppercase tracking-wide">SSL Secured</span>
              </div>
            </div>

            <div className="p-5 space-y-5">
              <div className="max-w-sm mx-auto">
                <CardPreview number={cardNumber} holder={cardHolder} expiry={expiry} />
              </div>

              <div className="space-y-3.5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Card Number</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    className={inputCls + ""}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Cardholder Name</label>
                  <input
                    type="text"
                    placeholder="As it appears on your card"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                    className={inputCls}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Expiry</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="MM / YY"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      className={inputCls + " tracking-widest"}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">CVV</label>
                    <input
                      type="password"
                      inputMode="numeric"
                      placeholder="•••"
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                      className={inputCls + " tracking-widest"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="col-span-12 lg:col-span-5 sticky top-8 space-y-4">

          {/* Booking Summary */}
          <div className="bg-white rounded-2xl border overflow-hidden">
            <button
              onClick={() => setSummaryOpen(!summaryOpen)}
              className="w-full flex items-center justify-between px-5 py-3.5 border-b"
            >
              <span className="text-xs font-black tracking-tight text-gray-900 uppercase leading-none">Booking Summary</span>
              <svg
                className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${summaryOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {summaryOpen && <>
            {/* Flight rows */}
            <div className="px-5 py-4">
              <div className="space-y-4">
                {selectedFlight.itineraries.map((itin: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-slate-900">{itin.departure.iataCode}</span>
                          <svg className="h-3 w-3 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                          <span className="text-sm font-black text-slate-900">{itin.arrival.iataCode}</span>
                          <span className="text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide bg-slate-900 text-white">
                            {idx === 0 ? "Outbound" : "Return"}
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
              <p className="text-xs font-black tracking-tight text-gray-900 uppercase leading-none mb-3">Travellers</p>
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
                          <p className="text-[10px] text-slate-400 font-medium uppercase">{t.gender} · {t.dateOfBirth}</p>
                        </div>
                      </div>
                      <div className="flex gap-1.5">
                        {travelerSeats.map((s: any) => (
                          <span key={s.segId} className="text-xs font-black text-sky-600 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-lg">
                            {s.seat.number}
                          </span>
                        ))}
                        {travelerSeats.length === 0 && (
                          <span className="text-[10px] text-slate-400 font-medium">No seat</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-px bg-slate-100 mx-5" />

            <div className="px-5 py-4">
              <p className="text-xs font-black tracking-tight text-gray-900 uppercase leading-none mb-3">Contact</p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Email</p>
                  <p className="text-sm font-bold text-slate-900">{contact?.emailAddress}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">Phone</p>
                  <p className="text-sm font-bold text-slate-900">{contact?.countryCallingCode} {contact?.number}</p>
                </div>
              </div>
            </div>
            </>}
          </div>

          {/* Price breakdown */}
          <div className="bg-white rounded-2xl border overflow-hidden">
            <div className="px-5 py-3.5 border-b">
              <span className="text-xs font-black tracking-tight  text-gray-900 uppercase leading-none">Price Breakdown</span>
            </div>

            <div className="px-5 py-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Flight Fare</p>
                  <p className="text-[10px] mt-0.5">{travelers.length} passenger{travelers.length !== 1 ? "s" : ""} · {selectedFlight.cabin}</p>
                </div>
                <span className="text-sm font-bold text-slate-900">{money(flightAmount, currency)}</span>
              </div>

              {seatsTotal > 0 && (
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold ">Seat Selection</p>
                  <span className="text-sm font-bold text-slate-900">+{money(seatsTotal, currency)}</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium">Taxes & fees</p>
                <p className="text-[11px] font-medium">Included</p>
              </div>
            </div>

            <div className="h-px bg-slate-100 mx-5" />

            <div className="px-5 py-4 flex items-baseline justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest">Total Due</span>
              <div className="text-right">
                <span className="text-2xl font-black text-slate-900 tracking-tight">{money(finalTotal, currency)}</span>
                <p className="text-[10px] text-slate-400 mt-0.5">All taxes included</p>
              </div>
            </div>

            <div className="px-5 pb-5 space-y-3">
              {error && (
                <div className="flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-xl p-4">
                  <svg className="h-4 w-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-xs font-medium text-red-600 leading-relaxed">{error}</p>
                </div>
              )}

              <button
                onClick={handlePay}
                disabled={!isFormValid || isLoading}
                className="w-full rounded-2xl bg-slate-900 py-4 text-sm font-black text-white transition-all hover:bg-black active:scale-[0.98] uppercase tracking-widest shadow-lg shadow-slate-200/60 disabled:opacity-30 disabled:cursor-not-allowed disabled:active:scale-100"
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

              <p className="text-center text-[10px] text-slate-400 leading-relaxed">
                By completing this purchase you agree to our{" "}
                <span className="underline cursor-pointer hover:text-slate-600 transition-colors">Terms of Service</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
