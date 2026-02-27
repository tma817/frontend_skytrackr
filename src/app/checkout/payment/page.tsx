"use client"
import { useBookingStore } from "@/store/useBookingStore";
import money from "@/utils/money";
import Link from "next/link";
import { PiAirplaneTiltFill, PiUsersThreeFill, PiArmchairFill, PiIdentificationCardFill } from "react-icons/pi";

export default function PaymentPage() {
  const { selectedFlight, travelers, contact, selectedSeats } = useBookingStore();

  // Kiểm tra nếu chưa có dữ liệu cơ bản
  if (!selectedFlight) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-slate-500 italic">No booking data found in Store.</p>
        <Link href="/" className="px-6 py-2 bg-black text-white rounded-xl">Back to Search</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] p-4 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter">Review & Pay</h1>
            <p className="text-slate-500 font-medium">SRS 2.8.5 - Final Validation</p>
          </div>
          <Link href="/" className="text-sm font-bold text-blue-600 hover:underline">Cancel & Home</Link>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: DETAILS BREAKDOWN */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* 1. FLIGHT INFO */}
            <section className="bg-white p-6 rounded-3xl border shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-400">
                <PiAirplaneTiltFill size={20} />
                <h2 className="text-xs font-black uppercase tracking-widest">Flight Details</h2>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-bold text-slate-900">{selectedFlight.itineraries[0].departure.iataCode} → {selectedFlight.itineraries[0].arrival.iataCode}</p>
                  <p className="text-sm text-slate-500">{selectedFlight.airline.name} • {selectedFlight.cabin} Class</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-slate-900">{money(selectedFlight.price.amount, selectedFlight.price.currency)}</p>
                </div>
              </div>
            </section>

            {/* 2. PASSENGERS & SEATS */}
            <section className="bg-white p-6 rounded-3xl border shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-slate-400">
                <PiUsersThreeFill size={20} />
                <h2 className="text-xs font-black uppercase tracking-widest">Travelers & Seats</h2>
              </div>
              
              <div className="space-y-4">
                {travelers.map((t, idx) => (
                  <div key={t.id} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-xs border">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 uppercase">{t.firstName} {t.lastName}</p>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">{t.gender} • DOB: {t.dateOfBirth}</p>
                      </div>
                    </div>
                    
                    {/* Hiển thị ghế đã chọn ở mọi chặng cho khách này */}
                    <div className="flex gap-2">
                      {Object.keys(selectedSeats).map((segmentId) => {
                        const seat = selectedSeats[segmentId][t.id];
                        return seat ? (
                          <div key={segmentId} className="flex flex-col items-end">
                            <span className="text-[9px] font-black text-blue-500 uppercase">{segmentId}</span>
                            <span className="text-sm font-black text-slate-900 bg-blue-50 px-2 rounded-md border border-blue-100">
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

            {/* 3. CONTACT */}
            <section className="bg-white p-6 rounded-3xl border shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-400">
                <PiIdentificationCardFill size={20} />
                <h2 className="text-xs font-black uppercase tracking-widest">Contact Information</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Email</p>
                  <p className="text-sm font-bold text-slate-900">{contact?.emailAddress}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Phone</p>
                  <p className="text-sm font-bold text-slate-900">+{contact?.countryCallingCode} {contact?.number}</p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT: FINAL BILL (RAW DATA PREVIEW) */}
          <div className="space-y-6">
            <div className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
               <p className="text-[10px] font-bold opacity-50 uppercase tracking-[0.2em] mb-4">Total to Pay</p>
               <h3 className="text-5xl font-black tracking-tighter mb-8">
                  {/* Bạn có thể copy logic tính total từ BookingSummary vào đây */}
                  {money(selectedFlight.price.amount, selectedFlight.price.currency)} 
               </h3>
               
               <button 
                onClick={() => console.log("Final Store Data:", { selectedFlight, travelers, contact, selectedSeats })}
                className="w-full bg-blue-600 py-4 rounded-2xl font-black text-sm hover:bg-blue-700 transition-all mb-4"
               >
                 DUMP DATA TO CONSOLE
               </button>

               <button className="w-full bg-white text-black py-4 rounded-2xl font-black text-sm hover:bg-slate-100 transition-all">
                 PAY NOW
               </button>
            </div>

            {/* DEBUG BOX: Xem trực tiếp Object trong Store */}
            <div className="bg-white border rounded-2xl p-4 overflow-hidden">
               <p className="text-[10px] font-black text-red-500 uppercase mb-2">Debug: Store Raw</p>
               <pre className="text-[10px] font-mono bg-slate-50 p-2 rounded overflow-x-auto max-h-40">
                 {JSON.stringify({ selectedSeats }, null, 2)}
               </pre>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}