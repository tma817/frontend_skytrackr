"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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

  // search 페이지에서는 onSearch로 바로 재검색 가능
  onSearch?: (payload: SearchPayload) => void;
};

export default function SearchBar({
  className = "",
  defaultFrom = "YYZ",
  defaultTo = "ORD",
  defaultDateRange = "Depart - Return",
  defaultPassengers = "1 adult",
  onSearch,
}: SearchBarProps) {
  const router = useRouter();

  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [dateRange, setDateRange] = useState(defaultDateRange);
  const [passengers, setPassengers] = useState(defaultPassengers);

  const pushToSearch = (payload: SearchPayload) => {
    const qs = new URLSearchParams({
      from: payload.from,
      to: payload.to,
      date: payload.dateRange,
      pax: payload.passengers,
    });

    router.push(`/search?${qs.toString()}`);
  };

  const handleSearch = () => {
    const payload = { from, to, dateRange, passengers };

    // search 페이지에서만 onSearch가 들어오면 그걸 사용
    if (onSearch) {
      onSearch(payload);
      return;
    }

    // home 등 다른 페이지에서는 query 붙여서 /search로 이동
    pushToSearch(payload);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className={`w-full max-w-[960px] ${className}`}>
      <div className="flex w-full items-stretch overflow-hidden rounded-md border bg-white shadow-sm">
        {/* From */}
        <div className="flex h-[48px] w-[327.5px] items-center gap-2 px-3">
          <span className="text-sm text-gray-500">✈️</span>
          <input
            className="w-full bg-transparent text-sm outline-none"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="From"
          />
        </div>

        <div className="h-[48px] w-px bg-gray-200" />

        {/* To */}
        <div className="flex h-[48px] w-[327.5px] items-center gap-2 px-3">
          <span className="text-sm text-gray-500">✈️</span>
          <input
            className="w-full bg-transparent text-sm outline-none"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="To"
          />
        </div>

        <div className="h-[48px] w-px bg-gray-200" />

        {/* Depart - Return */}
        <div className="flex h-[48px] w-[246px] items-center gap-2 px-3">
          <span className="text-sm text-gray-500">📅</span>
          <input
            className="w-full bg-transparent text-sm outline-none"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Date range"
          />
        </div>

        <div className="h-[48px] w-px bg-gray-200" />

        {/* Passengers */}
        <div className="flex h-[48px] w-[200px] items-center gap-2 px-3">
          <span className="text-sm text-gray-500">👤</span>
          <input
            className="w-full bg-transparent text-sm outline-none"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Passengers"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="h-[48px] bg-black px-6 text-sm font-medium text-white"
        >
          Search
        </button>
      </div>
    </div>
  );
}
