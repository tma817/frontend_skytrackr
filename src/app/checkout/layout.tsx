"use client"
import { usePathname } from "next/navigation";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPax = pathname.includes("/pax");
  const isSeats = pathname.includes("/seat");

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-4">
            <StepIndicator 
              number={1} 
              label="Information" 
              active={isPax} 
              completed={isSeats} 
            />
            <div className={`w-16 h-1 transition-all duration-500 ${isSeats ? 'bg-blue-600' : 'bg-slate-200'}`} />
            <StepIndicator 
              number={2} 
              label="Seats" 
              active={isSeats} 
              completed={false} 
            />
          </div>
        </div>
        <main>
          {children}
        </main>
        
      </div>
    </div>
  );
}

function StepIndicator({ number, label, active, completed }: any) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
        completed ? 'bg-blue-600 text-white' : active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-slate-300 border border-slate-200'
      }`}>
        {number}
      </div>
      <span className={`text-[11px] font-black uppercase tracking-widest ${active || completed ? 'text-slate-800' : 'text-slate-300'}`}>
        {label}
      </span>
    </div>
  );
}