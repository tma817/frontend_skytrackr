"use client"
import { useState } from "react"
import { seatMapMockupData } from "@/mockUpDataHERE/seats"
import SeatMap from "@/components/SeatMap"
import { useBookingStore } from "@/store/useBookingStore"
import { PiUserCircleFill, PiAirplaneTiltFill, PiCheckBold } from "react-icons/pi"
import BookingSummary from "@/components/BookingSummary"
import money from "@/utils/money"
import { useSearchParams, useRouter } from "next/navigation"

export default function SeatPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { travelers, selectedSeats, updateSeatSelection } = useBookingStore();
    const [activeTravelerId, setActiveTravelerId] = useState<string>(travelers[0]?.id || "1");
    const [activeSegmentIdx, setActiveSegmentIdx] = useState(0);

    const currentSegmentMap = seatMapMockupData[activeSegmentIdx];
    const currentSegmentId = currentSegmentMap.segmentId;
    const handleSubmit = () =>{
        const searchId = searchParams.get("searchId")
        const flightId = searchParams.get("flightId")
        const pax = searchParams.get("pax")
        router.push(`/checkout/payment?searchId=${searchId}&flightId=${flightId}&pax=${pax}`);
    }
    const handleSeatSelect = (seat: any) => {
        updateSeatSelection(currentSegmentId, activeTravelerId, seat);
        const nextTraveler = travelers.find(t => {
            if (t.id === activeTravelerId) return false;
            return !selectedSeats[currentSegmentId]?.[t.id];
        });

        if (nextTraveler) {
            setActiveTravelerId(nextTraveler.id);
        } else {
            if (activeSegmentIdx < seatMapMockupData.length - 1) {
                // setTimeout(() => setActiveSegmentIdx(prev => prev + 1), 500);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
            <div className="max-w-7xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="grid grid-cols-12 gap-8 items-start">
                    <div className="col-span-12 lg:col-span-8 border rounded-3xl bg-white shadow-sm overflow-hidden flex flex-col">
                        <div className="flex border-b bg-slate-50/50">
                            {seatMapMockupData.map((sm, index) => {
                                const isActive = activeSegmentIdx === index;
                                return (
                                    <button
                                        key={sm.segmentId}
                                        onClick={() => {
                                            setActiveSegmentIdx(index);
                                            setActiveTravelerId(travelers[0]?.id);
                                        }}
                                        className={`flex-1 flex items-center justify-center gap-3 py-5 transition-all border-r last:border-r-0 ${
                                            isActive 
                                            ? "bg-black text-white" 
                                            : "hover:bg-white/50 text-slate-400"
                                        }`}
                                    >
                                        <div className="text-left">
                                            <p className={`text-sm font-bold ${isActive ? "text-white" : ""}`}>
                                                {sm.departure.iataCode} → {sm.arrival.iataCode}
                                            </p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="p-4 md:p-10 overflow-y-auto max-h-[750px] bg-slate-50/20">
                            <div className="max-w-[550px] mx-auto">
                                <SeatMap 
                                    seatData={currentSegmentMap} 
                                    onSelectSeat={handleSeatSelect} 
                                    allSelectedSeatsForSegment={selectedSeats[currentSegmentId] || {}}
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: PASSENGERS & DETAILS */}
                    <div className="col-span-12 lg:col-span-4 space-y-6 sticky top-8">
                        <div className="bg-white p-6 rounded-3xl border shadow-sm">
                            <p className="text-[10px] font-black uppercase text-slate-400 mb-4 tracking-widest">Select Traveler</p>
                            <div className="flex flex-col gap-3">
                                {travelers.map((t) => {
                                    const hasSeat = selectedSeats[currentSegmentId]?.[t.id];           
                                    const seatPrice = hasSeat?.travelerPricing?.[0]?.price?.total;
                                    const currency = hasSeat?.travelerPricing?.[0]?.price?.currency;
                                    return (
                                        <button
                                            key={t.id}
                                            onClick={() => setActiveTravelerId(t.id)}
                                            className={`flex items-center justify-between p-4 rounded-2xl transition-all border-2 ${
                                                activeTravelerId === t.id 
                                                ? "border-blue-600 bg-blue-50/30" 
                                                : "border-slate-50 hover:border-slate-200"
                                            }`}
                                        >
                                            <div className="flex items-center gap-3 text-left">
                                                <PiUserCircleFill size={28} className={activeTravelerId === t.id ? "text-blue-600" : "text-slate-300"} />
                                                <div>
                                                    <p className="text-sm font-bold text-slate-900">{t.firstName} {t.lastName}</p>
                                                    <p className="text-[10px] font-black uppercase text-slate-400">
                                                        {hasSeat ? `Seat: ${hasSeat.number}` : "No seat selected"}
                                                    </p>
                                                </div>
                                            </div>
                                            {hasSeat && (
                                                <div className="text-right animate-in fade-in zoom-in duration-300">
                                                    <p className="text-xs font-black text-blue-600">
                                                        +{money(parseFloat(seatPrice), currency)}
                                                    </p>
                                                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">
                                                        {currency}
                                                    </p>
                                                </div>
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        <BookingSummary 
                            buttonText="Proceed to Payment"
                            onContinue={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}