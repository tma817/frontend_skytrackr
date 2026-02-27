"use client";
import { useBookingStore } from "@/store/useBookingStore";
import money from "@/utils/money";

export default function BookingSummary({ onContinue, buttonText = "Continue" }: { onContinue?: () => void, buttonText?: string }) {
    const { selectedFlight, travelers, selectedSeats } = useBookingStore();
    
    if (!selectedFlight) return null;

    const seatsTotal = Object.values(selectedSeats).reduce((accSegment, segmentSeats) => {
        const segmentTotal = Object.values(segmentSeats).reduce((accSeat, seat: any) => {
            const price = parseFloat(seat?.travelerPricing?.[0]?.price?.total || "0");
            return accSeat + price;
        }, 0);
        return accSegment + segmentTotal;
    }, 0);

    const flightAmount = parseFloat(selectedFlight.price.amount);
    const finalTotal = flightAmount + seatsTotal;
    const currency = selectedFlight.price.currency;

    return (
        <div className="rounded-3xl border bg-white p-6 shadow-sm sticky top-8 flex flex-col gap-2">
            <h3 className="font-black text-black uppercase">
                Price Details
            </h3>
            <div className="space-y-4">
                <div className="flex justify-between text-sm items-center">
                    <div className="flex flex-col">
                        <span className="text-black font-medium">Flight Fare</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">{travelers.length} Passenger(s)</span>
                    </div>
                    <span className="font-bold text-slate-900">{money(flightAmount, currency)}</span>
                </div>

                {seatsTotal > 0 && (
                    <div className="flex justify-between text-sm items-center animate-in fade-in slide-in-from-right-2">
                        <div className="flex flex-col">
                            <span className="text-black font-medium">Seat Selection</span>
                        </div>
                        <span className="font-bold text-slate-900">+{money(seatsTotal, currency)}</span>
                    </div>
                )}
            </div>
            {/* <div className="pt-6 border-t space-y-3">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Cabin Class</span>
                    <span className="text-slate-900">{selectedFlight.cabin}</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-slate-400">Checked Baggage</span>
                    <span className="text-slate-900">{selectedFlight.baggage.checked} Piece(s)</span>
                </div>
            </div>
             */}
            <div className="mt-4 pt-6 border-t">
                <div className="flex justify-between items-center">
                    <span className="text-sm font-black uppercase text-slate-900">
                    </span>
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black tracking-tighter text-slate-900">
                            {money(finalTotal, currency)}
                        </span>
                    </div>
                </div>
            </div>

            {onContinue && (
                <div className="mt-8">
                    <button
                        type="button"
                        onClick={onContinue}
                        className="w-full rounded-2xl bg-slate-900 py-5 text-sm font-black text-white shadow-xl shadow-slate-200 transition-all hover:bg-black active:scale-[0.98] uppercase tracking-widest"
                    >
                        {buttonText}
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-4 font-medium">
                        Tax and fees included
                    </p>
                </div>
            )}
        </div>
    );
}