// app/components/PassengerPicker.tsx
"use client";

import { useState, useRef, useEffect } from "react";

export default function PassengerPicker({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Ô hiển thị giả lập input */}
      <div
        className="flex w-full cursor-pointer items-center text-sm text-black outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value} {value > 1 ? "adults" : "adult"}
      </div>

      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+12px)] z-[100] w-64 rounded-lg border bg-white p-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-black">Adults</div>
              <div className="text-xs text-gray-500">Age 12+</div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-black hover:bg-gray-100 disabled:opacity-30"
                onClick={() => onChange(Math.max(1, value - 1))}
                disabled={value <= 1}
              >
                -
              </button>
              <span className="w-4 text-center text-sm font-medium text-black">{value}</span>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-black hover:bg-gray-100 disabled:opacity-30"
                onClick={() => onChange(Math.min(9, value + 1))}
                disabled={value >= 9}
              >
                +
              </button>
            </div>
          </div>
          
          <button 
            className="mt-4 w-full rounded-md bg-black py-2 text-xs font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}