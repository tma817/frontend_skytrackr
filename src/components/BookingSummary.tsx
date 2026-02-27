"use client";
import { useBookingStore } from "@/store/useBookingStore";
import money from "@/utils/money";

export default function BookingSummary({ onContinue, buttonText = "Continue" }: { onContinue?: () => void, buttonText?: string }) {
    const { selectedFlight, travelers, selectedSeats } = useBookingStore();
    console.log(selectedFlight)
    if (!selectedFlight) return null;
    // const seatsTotal = Object.values(selectedSeats).reduce((acc, seat) => acc + (seat?.travelerPricing[0]?.price?.total || 0), 0);
    // console.log(seatsTotal)
    const totalAmount = selectedFlight.price.amount;

    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Booking Summary
            </h3>
            <div className="mt-4 flex items-end justify-between border-b pb-6">
                <div>
                    <p className="text-xs text-slate-500">
                        Total Price ({travelers.length || 1} Pax)
                    </p>
                    <p className="text-4xl font-black tracking-tighter text-cyan-700">
                        {/* {totalAmount.toLocaleString()}{" "} */}
                        {money(totalAmount, selectedFlight.price.currency)}
                        <span className="text-lg font-bold">
                            {selectedFlight.price.currency}
                        </span>
                    </p>
                </div>
            </div>
            
            <div className="py-6 space-y-4 border-b">
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Flight</span>
                    <span className="font-bold">{selectedFlight.price.amount.toLocaleString()}</span>
                </div>
                {/* {seatsTotal > 0 && (
                    <div className="flex justify-between text-sm text-blue-600">
                        <span>Extra Seats</span>
                        <span className="font-bold">+{seatsTotal.toLocaleString()}</span>
                    </div>
                )} */}
            </div>

            <div className="py-6 space-y-4">
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Cabin Class</span>
                    <span className="font-bold uppercase">{selectedFlight.cabin}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Baggage</span>
                    <span className="font-bold">{selectedFlight.baggage.checked} Piece(s)</span>
                </div>
            </div>

            {onContinue && (
                <button
                    type="button"
                    onClick={onContinue}
                    className="w-full rounded-xl bg-slate-900 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-black active:scale-95"
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
}