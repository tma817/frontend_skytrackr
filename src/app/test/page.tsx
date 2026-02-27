"use client"

import { useState } from "react"
import { seatMapMockupData } from "@/mockUpDataHERE/seats"
import SeatMap from "@/components/SeatMap"

export default function TestPage(){
    const [selectedSeat, setSelectedSeat] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-black mb-8 text-slate-800">Test Seat Selection</h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-10">
                    <div className="lg:col-span-7 flex justify-center">
                        <SeatMap 
                            seatData={seatMapMockupData} 
                            onSelectSeat={(seat) => setSelectedSeat(seat)} 
                            selectedSeatNumber={selectedSeat?.number}
                        />
                    </div>

                    <div className="lg:col-span-3">
                        <div className="sticky top-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                            {selectedSeat ? (
                                <div className="space-y-4">
                                    {/* <p className="text-sm font-bold text-blue-600 uppercase">Selected</p> */}
                                    <h2 className="text-5xl font-black">{selectedSeat.number}</h2>
                                    <span className="text-xs font-bold uppercase tracking-tighter text-blue-500 bg-blue-50 px-2 py-1 rounded mt-2 inline-block">
                                        {selectedSeat.cabin} Class
                                    </span>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-slate-400 mb-3 tracking-widest">Seat Features</p>
                                        <div className="flex flex-wrap gap-2">
                                        {/* {selectedSeat.characteristicsCodes.map((code: string) => {
                                            const info = getCharacteristicInfo(code);
                                            return (
                                            <div key={code} className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-transparent transition-all hover:scale-105 ${info.color}`}>
                                                <span className="text-sm">{info.icon}</span>
                                                <span className="text-[11px] font-bold whitespace-nowrap">{info.label}</span>
                                            </div>
                                            );
                                        })} */}
                                        </div>
                                    </div>
                                    <div className="py-4 border-y border-slate-100">
                                        <p className="flex justify-between font-bold">
                                            <span className="text-slate-400">Price:</span>
                                            <span>{selectedSeat.travelerPricing[0].price.total} {selectedSeat.travelerPricing[0].price.currency}</span>
                                        </p>
                                    </div>
                                    <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                                        Confirm & Pay
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