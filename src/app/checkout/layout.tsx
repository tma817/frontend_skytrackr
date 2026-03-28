"use client"
import { usePathname } from "next/navigation";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSeats = pathname.includes("/seat");
  const isPayment = pathname.includes("/payment");
  const step = isPayment ? 3 : isSeats ? 2 : 1;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="bg-white sticky top-0 z-20">
        <div className="mx-auto px-6 h-16 flex items-center justify-between">
          <div className="w-24" />
          <Stepper step={step} />
          <div className="w-24" />
        </div>
      </div>

      <div className=" mx-auto px-6 py-10">
        {children}
      </div>
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  const steps = ["Information", "Seats", "Payment"];
  return (
    <div className="flex items-center gap-0">
      {steps.map((label, i) => {
        const num = i + 1;
        const completed = num < step;
        const active = num === step;

        return (
          <div key={label} className="flex items-center">
            {/* Step pill */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full transition-all duration-300" style={{
              background: active ? "#000000" : "transparent",
            }}>
              {/* Circle */}
              <div className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                completed
                  ? "bg-emerald-500"
                  : active
                  ? "bg-white"
                  : "bg-slate-200"
              }`}>
                {completed ? (
                  <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className={`text-[10px] font-black ${active ? "text-black" : "text-slate-400"}`}>
                    {num}
                  </span>
                )}
              </div>

              {/* Label — only show for active */}
              {active && (
                <span className="text-[11px] font-black text-white uppercase tracking-widest whitespace-nowrap pr-0.5">
                  {label}
                </span>
              )}
            </div>

            {/* Connector */}
            {i < steps.length - 1 && (
              <div className={`w-8 h-px mx-1 transition-all duration-500 ${
                completed ? "bg-slate-400" : "bg-slate-200"
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
