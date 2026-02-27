"use client"
import { useState } from "react"
import { seatMapMockupData } from "@/mockUpDataHERE/seats"
import SeatMap from "@/components/SeatMap"
import { useBookingStore } from "@/store/useBookingStore"
import { PiUserCircleFill } from "react-icons/pi"

export default function SeatPage(){
    const { travelers, selectedSeats, updateSeatSelection } = useBookingStore();
    const [activeTravelerId, setActiveTravelerId] = useState<string>("1");
    const currentSeat = selectedSeats[activeTravelerId];

    const handleSeatSelect = (seat: any) => {
        updateSeatSelection(activeTravelerId, seat);
        const nextTraveler = travelers.find(t => !selectedSeats[t.id]);
        if(nextTraveler) setActiveTravelerId(nextTraveler.id);  
    };

    // <div className="max-w-7xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        //   <div className="grid grid-cols-12 gap-8">
            
        //     <div className="col-span-12 lg:col-span-8 border rounded-2xl">          
        //       <PassengerForm 
        //         adultCount={paxCount}
        //         onSubmit={handlePassengerSubmit} 
        //       />
        //     </div>
    
        //     <div className="col-span-12 lg:col-span-4">
        //       <div className="sticky top-8">
        //          <BookingSummary /> 
        //       </div>
        //     </div>
    
        //   </div>
        // </div>
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto px-4 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">  
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 lg:col-span-8 border rounded-2xl bg-white">
                        <SeatMap 
                            seatData={seatMapMockupData} 
                            onSelectSeat={handleSeatSelect} 
                            // selectedSeats={Object.values(selectedSeats).map((s: any) => s.number)}
                            selectedSeatNumber={currentSeat?.number}
                        />
                    </div>

                     <div className="col-span-12 lg:col-span-4">
                        <div className="sticky top-8 bg-white p-6 rounded-2xl border bg-white">
                            <div className="flex gap-4 mb-8 bg-white p-2 rounded-2xl border border-slate-200 w-fit">
                            {travelers.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setActiveTravelerId(t.id)}
                                    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all ${
                                        activeTravelerId === t.id 
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                                        : "hover:bg-slate-50 text-slate-600"
                                    }`}
                                >
                                    <PiUserCircleFill size={20} />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase font-black leading-none opacity-70">Passenger {t.id}</p>
                                        <p className="text-sm font-bold">{t.firstName} {t.lastName}</p>
                                        {selectedSeats[t.id] && (
                                            <p className="text-[10px] font-black italic">Seat: {selectedSeats[t.id].number}</p>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                            {currentSeat ? (
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black text-blue-600 uppercase">
                                        Selected for {travelers.find(t => t.id === activeTravelerId)?.firstName}
                                    </p>
                                    <h2 className="text-5xl font-black">{currentSeat.number}</h2>
                                    <span className="text-xs font-bold uppercase tracking-tighter text-blue-500 bg-blue-50 px-2 py-1 rounded mt-2 inline-block">
                                        {currentSeat.cabin} Class
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Seat Features</p>
                                        <div className="flex flex-wrap gap-2">
                                        </div>
                                    </div>
                                    <div className="py-4 border-y border-slate-100">
                                        <p className="flex justify-between font-bold text-sm">
                                            <span className="text-slate-400">Seat Price:</span>
                                            <span>
                                                {currentSeat.travelerPricing.find((tp: any) => tp.travelerId === activeTravelerId)?.price.total} 
                                                {currentSeat.travelerPricing[0].price.currency}
                                            </span>
                                        </p>
                                    </div>
                                    <button 
                                        className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100"
                                        onClick={() => {
                                            const allSelected = travelers.every(t => selectedSeats[t.id]);
                                            if (allSelected) alert("Go to Checkout!");
                                            else alert("Please select seats for all passengers");
                                        }}
                                    >
                                        Proceed to Payment
                                    </button>
                                </div>
                            ) : (
                                <p className="text-slate-400 italic">Please pick a seat to see details</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}