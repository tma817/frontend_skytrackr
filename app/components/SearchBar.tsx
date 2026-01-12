"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type SearchBarProps = {
  className?: string;

  // 필요하면 Home 말고 다른 페이지에서 기본값만 바꾸려고
  defaultFrom?: string;
  defaultTo?: string;
  defaultDateRange?: string;
  defaultPassengers?: string;
};

export default function SearchBar({
  className = "",
  defaultFrom = "YYZ",
  defaultTo = "ORD",
  defaultDateRange = "Depart - Return",
  defaultPassengers = "1 adult",
}: SearchBarProps) {
  const router = useRouter();

  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [dateRange, setDateRange] = useState(defaultDateRange);
  const [passengers, setPassengers] = useState(defaultPassengers);

  const handleSearch = () => {
    // 일단은 /search로만 이동 (너가 기존에 하던 방식 그대로)
    // 나중에 원하면 query string으로 값 넘기는 것도 가능함.
    router.push("/search");
  };

  return (
    <div className={`mt-8 w-full max-w-[960px] ${className}`}>
      <div className="flex w-full items-stretch overflow-hidden rounded-md border bg-white shadow-sm">
        {/* From */}
        <div className="flex h-[48px] w-[327.5px] items-center gap-2 px-3">
          <span className="text-sm text-gray-500">✈️</span>
          <input
            className="w-full bg-transparent text-sm outline-none"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
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
