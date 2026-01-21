"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";
import AirportInput from "./AirportInput";
import { DateRange } from "react-day-picker";
import DateRangePicker from "./DateRangePicker";
import PassengerPicker from "./PassengerPicker";

type SearchPayload = {
  from: string;
  to: string;
  dateRange: string;
  passengers: string;
};

type SearchBarProps = {
  className?: string;
  defaultFrom?: string;
  defaultTo?: string;
  defaultDateRange?: string;
  defaultPassengers?: string;
  onSearch?: (payload: SearchPayload) => void;
};

export default function SearchBar({
  className = "",
  defaultFrom = "",
  defaultTo = "",
  defaultDateRange = "",
  defaultPassengers = "",
  defaultFrom = "",
  defaultTo = "",
  defaultPassengers = "1",
  onSearch,
}: SearchBarProps) {
  const router = useRouter();

  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [passengers, setPassengers] = useState(parseInt(defaultPassengers) || 1);

  const handleSearch = () => {
    if (!from || !to || !dateRange?.from) {
      alert("Please select origin, destination and departure date");
      return;
    }
    const dateString = format(dateRange.from, "yyyy-MM-dd");
    const paxString = `${passengers} adult${passengers > 1 ? 's' : ''}`;

    const payload: SearchPayload = {
      from,
      to,
      dateRange: dateString,
      passengers: paxString,
    };

    if (onSearch) {
      onSearch(payload);
    } else {
      const qs = new URLSearchParams({
        from: payload.from,
        to: payload.to,
        date: payload.dateRange,
        pax: payload.passengers,
      });
      router.push(`/search?${qs.toString()}`);
    }
  };

  return (
    <div className={`w-full max-w-[960px] ${className}`}>
      <div className="flex w-full items-stretch overflow-visible rounded-md border bg-white shadow-sm">
        {/* From */}
        <div className="flex h-[48px] w-[327.5px] items-center gap-2 px-3 border-r border-gray-200">
          <AirportInput value={from} onChange={setFrom} placeholder="From where?" />
        </div>

        {/* To */}
        <div className="flex h-[48px] w-[327.5px] items-center gap-2 px-3 border-r border-gray-200">
          <AirportInput value={to} onChange={setTo} placeholder="To where?" />
        </div>

        {/* Date */}
        <div className="flex h-[48px] w-[246px] items-center gap-2 px-3 border-r border-gray-200">
          <DateRangePicker selected={dateRange} onSelect={setDateRange} />
        </div>

        {/* Passengers */}
        <div className="flex h-[48px] w-[200px] items-center gap-2 px-3">
          <PassengerPicker value={passengers} onChange={setPassengers} />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="h-[48px] bg-black px-6 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
}