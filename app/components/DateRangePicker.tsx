// app/components/DateRangePicker.tsx
"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css"; 

export default function DateRangePicker({
  selected,
  onSelect,
}: {
  selected: DateRange | undefined;
  onSelect: (range: DateRange | undefined) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const displayText = selected?.from
    ? selected.to
      ? `${format(selected.from, "LLL dd")} - ${format(selected.to, "LLL dd")}`
      : `${format(selected.from, "LLL dd")} - Return`
    : "Depart - Return";

  return (
    <div className="relative w-full">
      <div 
        className="w-full cursor-pointer text-sm text-black outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {displayText}
      </div>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+12px)] z-50 rounded-lg border bg-white p-4 shadow-2xl">
          <DayPicker
            mode="range"
            selected={selected}
            onSelect={(range) => {
              onSelect(range);
              if (range?.from && range?.to) setIsOpen(false);
            }}
            numberOfMonths={2}
            disabled={{ before: new Date() }}
          />
        </div>
      )}
    </div>
  );
}