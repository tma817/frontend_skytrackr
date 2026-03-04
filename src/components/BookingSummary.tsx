"use client";
import { useBookingStore } from "@/store/useBookingStore";
import money from "@/utils/money";

export default function BookingSummary({
  onContinue,
  buttonText = "Continue",
}: {
  onContinue?: () => void;
  buttonText?: string;
}) {
  const { selectedFlight, confirmedPrice, travelers, selectedSeats } = useBookingStore();

  if (!selectedFlight) return null;

  const seatsTotal = Object.values(selectedSeats).reduce((accSegment, segmentSeats) => {
    return accSegment + Object.values(segmentSeats).reduce((accSeat, seat: any) => {
      return accSeat + parseFloat(seat?.travelerPricing?.[0]?.price?.total || "0");
    }, 0);
  }, 0);

  const currency = confirmedPrice?.price.currency ?? selectedFlight.price.currency;
  const baseFlightTotal = confirmedPrice?.price.grandTotal ?? parseFloat(selectedFlight.price.amount);
  const finalTotal = baseFlightTotal + seatsTotal;

  const cp = confirmedPrice;
  

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm sticky top-8 flex flex-col gap-3 z-10">
      <div className="flex items-center justify-between">
        <h3 className="font-black text-black uppercase text-sm">Price Details</h3>
        {cp && (
          cp.confirmed ? (
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wide text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live Price
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wide text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Estimated
            </span>
          )
        )}
      </div>

      <div className="space-y-2">
        {/* Per-traveler breakdown (when confirmed) */}
        {cp && cp.travelerPricings.length > 0 ? (
          <>
            {cp.travelerPricings.map((tp, i) => (
              <div key={i} className="flex justify-between text-sm items-start">
                <div>
                  <span className="text-slate-700 font-medium capitalize">
                    {tp.travelerType.replace(/_/g, " ").toLowerCase()}
                  </span>
                  {tp.cabin && (
                    <span className="ml-1.5 text-[10px] font-bold text-slate-400 uppercase">· {tp.cabin}</span>
                  )}
                  {tp.includedCheckedBags && tp.includedCheckedBags.quantity > 0 && (
                    <p className="text-[10px] text-slate-400">
                      {tp.includedCheckedBags.quantity} bag{tp.includedCheckedBags.quantity > 1 ? "s" : ""} incl.
                    </p>
                  )}
                </div>
                <span className="font-bold text-slate-900 shrink-0">{money(tp.price.total, currency)}</span>
              </div>
            ))}

            {/* Tax lines */}
            <div className="border-t pt-2 mt-1 space-y-1.5">
              <div className="flex justify-between text-xs text-slate-500">
                <span>Base fare</span>
                <span>{money(cp.price.base, currency)}</span>
              </div>

              {cp.price.taxes.length > 0 ? (
                cp.price.taxes.map((t, i) => (
                  <div key={i} className="flex justify-between text-xs text-slate-400">
                    <span className="font-mono">{t.code}</span>
                    <span>{money(t.amount, currency)}</span>
                  </div>
                ))
              ) : cp.price.taxTotal > 0 ? (
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Taxes &amp; fees</span>
                  <span>{money(cp.price.taxTotal, currency)}</span>
                </div>
              ) : null}

              {cp.price.fees.filter(f => f.amount > 0).map((f, i) => (
                <div key={i} className="flex justify-between text-xs text-slate-400 capitalize">
                  <span>{f.type.replace(/_/g, " ").toLowerCase()} fee</span>
                  <span>{money(f.amount, currency)}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Fallback: simple flight fare row */
          <div className="flex justify-between text-sm items-center">
            <div className="flex flex-col">
              <span className="text-black font-medium">Flight Fare</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {travelers.length || 1} Passenger(s)
              </span>
            </div>
            <span className="font-bold text-slate-900">{money(baseFlightTotal, currency)}</span>
          </div>
        )}

        {/* Seat selection add-on */}
        {seatsTotal > 0 && (
          <div className="flex justify-between text-sm items-center animate-in fade-in slide-in-from-right-2">
            <span className="text-black font-medium">Seat Selection</span>
            <span className="font-bold text-slate-900">+{money(seatsTotal, currency)}</span>
          </div>
        )}
      </div>

      {/* Grand total */}
      <div className="mt-2 pt-4 border-t flex justify-between items-center">
        <span className="text-xs font-black uppercase text-slate-500">Total</span>
        <span className="text-3xl font-black tracking-tighter text-slate-900">
          {money(finalTotal, currency)}
        </span>
      </div>

      {onContinue && (
        <div className="mt-4">
          <button
            type="button"
            onClick={onContinue}
            className="w-full rounded-2xl bg-slate-900 py-5 text-sm font-black text-white shadow-xl shadow-slate-200 transition-all hover:bg-black active:scale-[0.98] uppercase tracking-widest"
          >
            {buttonText}
          </button>
          <p className="text-[10px] text-center text-slate-400 mt-4 font-medium">
            Taxes and fees included
          </p>
        </div>
      )}
    </div>
  );
}
