"use client"
import { useState } from "react";
import { useBookingStore } from "@/store/useBookingStore";
import { useRouter } from "next/navigation";
import { bookingService } from "@/services/booking.service";
import money from "@/utils/money";
import Link from "next/link";
import {
  PiAirplaneTiltFill,
  PiUsersThreeFill,
  PiIdentificationCardFill,
  PiCreditCardFill,
  PiLockSimpleFill,
  PiShieldCheckFill,
  PiWarningCircleFill,
} from "react-icons/pi";

function formatCardNumber(value: string) {
  return value.replace(/\D/g, "").slice(0, 16).replace(/(\d{4})(?=\d)/g, "$1 ");
}

function formatExpiry(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length > 2) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}

function getCardBrand(number: string): string {
  const n = number.replace(/\s/g, "");
  if (/^4/.test(n)) return "VISA";
  if (/^5[1-5]/.test(n)) return "MASTERCARD";
  if (/^3[47]/.test(n)) return "AMEX";
  return "";
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
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-slate-500 italic">No booking data found in store.</p>
        <Link href="/" className="px-6 py-2 bg-black text-white rounded-xl text-sm font-bold">
          Back to Search
        </Link>
      </div>
    );
  }

  const seatsTotal = Object.values(selectedSeats).reduce((acc, segmentSeats) => {
    return acc + Object.values(segmentSeats).reduce((a, seat: any) => {
      return a + parseFloat(seat?.travelerPricing?.[0]?.price?.total || "0");
    }, 0);
  }, 0);

  const flightAmount = selectedFlight.price.amount;
  const finalTotal = flightAmount + seatsTotal;
  const currency = selectedFlight.price.currency;
  const cardBrand = getCardBrand(cardNumber);
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
    <div className="max-w-7xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Payment</h1>
          <p className="text-sm text-slate-400 font-medium mt-0.5">Complete your booking securely</p>
        </div>
        <Link href="/" className="text-sm font-bold text-slate-400 hover:text-slate-700 transition-colors">
          Cancel
        </Link>
      </div>

      <div className="grid grid-cols-12 gap-8 items-start">

        {/* LEFT: BOOKING REVIEW + PAYMENT FORM */}
        <div className="col-span-12 lg:col-span-8 space-y-6">

          {/* FLIGHT */}
          <section className="bg-white p-6 rounded-3xl border shadow-sm">
            <div className="flex items-center gap-2 mb-5 text-slate-400">
              <PiAirplaneTiltFill size={18} />
              <h2 className="text-[10px] font-black uppercase tracking-widest">Flight</h2>
            </div>
            <div className="space-y-4">
              {selectedFlight.itineraries.map((itin: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between">
                  <div>
                    <p className="text-base font-black text-slate-900 tracking-tight">
                      {itin.departure.iataCode}
                      <span className="mx-2 text-slate-300">→</span>
                      {itin.arrival.iataCode}
                    </p>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {itin.departure.date} · {itin.departure.time} — {itin.arrival.time}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-slate-400 uppercase">
                      {selectedFlight.airline.name}
                    </p>
                    <p className="text-xs text-slate-400">{selectedFlight.cabin} · {selectedFlight.baggage.checked} bag(s)</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TRAVELERS & SEATS */}
          <section className="bg-white p-6 rounded-3xl border shadow-sm">
            <div className="flex items-center gap-2 mb-5 text-slate-400">
              <PiUsersThreeFill size={18} />
              <h2 className="text-[10px] font-black uppercase tracking-widest">Travelers & Seats</h2>
            </div>
            <div className="space-y-3">
              {travelers.map((t: any, idx: number) => (
                <div key={t.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-black text-xs border text-slate-500">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase">{t.firstName} {t.lastName}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{t.gender} · {t.dateOfBirth}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {Object.entries(selectedSeats).map(([segId, segSeats]: [string, any]) => {
                      const seat = segSeats[t.id];
                      return seat ? (
                        <div key={segId} className="text-right">
                          <p className="text-[9px] font-black text-blue-500 uppercase">{segId}</p>
                          <span className="text-sm font-black text-slate-900 bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">
                            {seat.number}
                          </span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section className="bg-white p-6 rounded-3xl border shadow-sm">
            <div className="flex items-center gap-2 mb-5 text-slate-400">
              <PiIdentificationCardFill size={18} />
              <h2 className="text-[10px] font-black uppercase tracking-widest">Contact</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Email</p>
                <p className="text-sm font-bold text-slate-900">{contact?.emailAddress}</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Phone</p>
                <p className="text-sm font-bold text-slate-900">{contact?.countryCallingCode} {contact?.number}</p>
              </div>
            </div>
          </section>

          {/* PAYMENT FORM */}
          <section className="bg-white p-6 rounded-3xl border shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-slate-400">
              <PiCreditCardFill size={18} />
              <h2 className="text-[10px] font-black uppercase tracking-widest">Card Details</h2>
              <div className="ml-auto flex items-center gap-1.5 text-emerald-600">
                <PiLockSimpleFill size={13} />
                <span className="text-[10px] font-black uppercase">Secure</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Card Number */}
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-20"
                  />
                  {cardBrand && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {cardBrand}
                    </span>
                  )}
                </div>
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="Name as it appears on card"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                  className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all uppercase"
                />
              </div>

              {/* Expiry + CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                    className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1.5">
                    CVV
                  </label>
                  <input
                    type="password"
                    inputMode="numeric"
                    placeholder="•••"
                    maxLength={4}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    className="w-full border border-slate-200 rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT: PRICE SUMMARY + PAY */}
        <div className="col-span-12 lg:col-span-4 sticky top-8 space-y-4">
          <div className="bg-white rounded-3xl border shadow-sm p-6 space-y-4">
            <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
              Price Summary
            </h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">Flight Fare</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">{travelers.length} passenger(s)</p>
                </div>
                <span className="text-sm font-bold text-slate-900">{money(flightAmount, currency)}</span>
              </div>

              {seatsTotal > 0 && (
                <div className="flex items-center justify-between animate-in fade-in slide-in-from-right-2">
                  <p className="text-sm font-medium text-slate-900">Seat Selection</p>
                  <span className="text-sm font-bold text-slate-900">+{money(seatsTotal, currency)}</span>
                </div>
              )}
            </div>

            <div className="border-t pt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-black uppercase text-slate-400">Total</span>
                <span className="text-3xl font-black tracking-tighter text-slate-900">
                  {money(finalTotal, currency)}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 text-right mt-1">Taxes & fees included</p>
            </div>

            {error && (
              <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-2xl p-3 animate-in fade-in">
                <PiWarningCircleFill size={16} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs font-medium text-red-600">{error}</p>
              </div>
            )}

            <button
              onClick={handlePay}
              disabled={!isFormValid || isLoading}
              className="w-full rounded-2xl bg-slate-900 py-5 text-sm font-black text-white shadow-xl shadow-slate-200 transition-all hover:bg-black active:scale-[0.98] uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {isLoading ? "Processing..." : `Pay ${money(finalTotal, currency)}`}
            </button>

            <div className="flex items-center justify-center gap-2 text-slate-400">
              <PiShieldCheckFill size={14} />
              <p className="text-[10px] font-bold">256-bit SSL encrypted payment</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
