"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import AirportInput from "./AirportInput";
import { DayPicker } from "react-day-picker";
import PassengerPicker from "./search/PassengerPicker";
import "react-day-picker/dist/style.css";

type TripType = "oneway" | "roundtrip";

type SearchPayload = {
  from: string;
  to: string;
  tripType: TripType;
  departure: string;
  return?: string;
  passengers: string;
};

type SearchBarProps = {
  className?: string;
  glass?: boolean;
  defaultFrom?: string;
  defaultTo?: string;
  defaultDepartureDate?: string;
  defaultReturnDate?: string;
  defaultPassengers?: string;
  defaultTripType?: TripType;
  onSearch?: (payload: SearchPayload) => void;
};

type DatePickerProps = {
  value?: Date;
  onChange: (date?: Date) => void;
  placeholder: string;
  minDate?: Date;
  maxDate?: Date;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  glass?: boolean;
  align?: "left" | "right";
};

/* --- Compact date picker that expands only on click --- */
export function SingleDatePicker({ value, onChange, placeholder, minDate, maxDate, isOpen, setOpen, glass = false, align = "left" }: DatePickerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      <div
        className="h-[48px] px-3 rounded-md cursor-pointer w-full flex flex-col justify-center bg-transparent"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!isOpen);
        }}
      >
        {value && (
          <span className={`text-[10px] font-semibold uppercase tracking-widest leading-none mb-0.5 ${glass ? "text-black/40" : "text-gray-400"}`}>
            {placeholder}
          </span>
        )}
        <span className={`text-sm leading-none ${value ? (glass ? "text-black" : "text-gray-900") : (glass ? "text-black/50" : "text-gray-500")}`}>
          {value ? format(value, "MMM d, yyyy") : placeholder}
        </span>
      </div>

      {isOpen && (
        <div className={`absolute z-50 bg-white rounded-lg shadow-2xl border border-gray-100 left-1/2 -translate-x-1/2 sm:translate-x-0 ${align === "right" ? "sm:right-0 sm:left-auto" : "sm:left-0 sm:translate-x-0"}`}>
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
            disabled={
              (() => {
                const today = new Date();
                const earliest = minDate && minDate > today ? minDate : today;
                if (maxDate) return { before: earliest, after: maxDate };
                return { before: earliest };
              })()
            }
          />
        </div>
      )}
    </div>
  );
}

export default function SearchBar({
  className = "",
  glass = false,
  defaultFrom = "",
  defaultTo = "",
  defaultPassengers = "1",
  defaultTripType = "roundtrip",
  onSearch,
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [fromLabel, setFromLabel] = useState(defaultFrom);
  const [toLabel, setToLabel] = useState(defaultTo);

  const [fromCode, setFromCode] = useState(defaultFrom);
  const [toCode, setToCode] = useState(defaultTo);

  const [tripType, setTripType] = useState<TripType>(defaultTripType);
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [passengers, setPassengers] = useState(parseInt(defaultPassengers) || 1);

  const [departureOpen, setDepartureOpen] = useState(false);
  const [returnOpen, setReturnOpen] = useState(false);
  const [tripTypeOpen, setTripTypeOpen] = useState(false);
  const tripTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tripTypeRef.current && !tripTypeRef.current.contains(e.target as Node)) {
        setTripTypeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initialized = useRef(false);

  function parseLocalDate(dateString: string) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const dep = searchParams.get("departure");
    const ret = searchParams.get("return");
    if (dep) setDepartureDate(parseLocalDate(dep));
    if (ret) setReturnDate(parseLocalDate(ret));

    const numOfPassengers = searchParams.get("numOfPassengers");
    if (numOfPassengers) setPassengers(parseInt(numOfPassengers) || 1);

    const type = searchParams.get("tripType");
    if (type === "oneway" || type === "roundtrip") setTripType(type);

    const from = searchParams.get("from");
    const to = searchParams.get("to");
    if (from) setFromCode(from);
    if (to) setToCode(to);
  }, [searchParams]);

  const handleSearch = () => {
    if (!departureDate) {
      alert("Please select a departure date");
      return;
    }
    if (tripType === "roundtrip" && !returnDate) {
      alert("Please select a return date");
      return;
    }

    const payload: SearchPayload = {
      from: fromCode,
      to: toCode,
      tripType,
      departure: format(departureDate, "yyyy-MM-dd"),
      return: returnDate ? format(returnDate, "yyyy-MM-dd") : undefined,
      passengers: passengers.toString(),
    };

    if (onSearch) {
      onSearch(payload);
    } else {
      const qs = new URLSearchParams({
        from: payload.from,
        to: payload.to,
        departure: payload.departure,
        return: payload.return || "",
        numOfPassengers: payload.passengers,
        tripType,
      });
      router.push(`/search?${qs.toString()}`);
    }
  };

  const divider = glass ? "border-black/20" : "border-gray-200";

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`flex flex-col z-200 md:flex-row md:items-stretch overflow-visible ${
          glass
            ? "rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20"
            : "rounded-2xl bg-white shadow-sm"
        }`}
      >
        {/* From */}
        <div className={`flex h-[52px] flex-1 flex-col justify-center px-5 md:px-4 border-b md:border-b-0 md:border-r ${divider}`}>
          {fromLabel && (
            <span className={`text-[10px] font-semibold uppercase pt-2 tracking-widest leading-none mb-0.5 ${glass ? "text-black/40" : "text-gray-400"}`}>
              Leaving from
            </span>
          )}
          <AirportInput
            value={fromLabel}
            onChange={(iata, label) => { setFromCode(iata); setFromLabel(label); }}
            placeholder="From where?"
            glass={glass}
          />
        </div>

        {/* To */}
        <div className={`flex h-[52px] flex-1 flex-col justify-center px-5 md:px-4 border-b md:border-b-0 md:border-r ${divider}`}>
          {toLabel && (
            <span className={`text-[10px] font-semibold pt-2 uppercase tracking-widest leading-none mb-0.5 ${glass ? "text-black/40" : "text-gray-400"}`}>
              Going to
            </span>
          )}
          <AirportInput
            value={toLabel}
            onChange={(iata, label) => { setToCode(iata); setToLabel(label); }}
            placeholder="To where?"
            glass={glass}
          />
        </div>

        {/* Trip type + Passengers: side-by-side on mobile, unwrapped on desktop */}
        <div className={`flex border-b md:border-b-0 md:contents ${divider}`}>
          {/* Trip type */}
          <div className={`relative flex h-[52px] flex-1 md:w-[130px] md:flex-none items-center px-3 border-r ${divider}`} ref={tripTypeRef}>
            <div
              className={`flex w-full cursor-pointer items-center justify-between text-sm ${glass ? "text-black" : "text-gray-900"}`}
              onClick={() => setTripTypeOpen(!tripTypeOpen)}
            >
              <span>{tripType === "roundtrip" ? "Round trip" : "One way"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-150 ${tripTypeOpen ? "rotate-180" : ""}`}>
                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </div>
            {tripTypeOpen && (
              <div className="absolute left-0 top-[calc(100%)] z-[100] w-40 overflow-hidden rounded-lg bg-white shadow-2xl">
                {(["roundtrip", "oneway"] as TripType[]).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => { setTripType(option); setTripTypeOpen(false); }}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${tripType === option ? "font-semibold text-black" : "text-gray-600"}`}
                  >
                    {option === "roundtrip" ? "Round trip" : "One way"}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Passengers */}
          <div className={`flex h-[52px] flex-1 md:w-[130px] md:flex-none items-center px-4 md:border-r ${divider}`}>
            <PassengerPicker value={passengers} onChange={setPassengers} glass={glass} />
          </div>
        </div>

        {/* Date pickers */}
        <div className={`flex flex-col sm:flex-row border-b md:border-b-0 md:border-r md:flex-none md:w-[240px] ${divider}`}>
          <div className="flex h-[52px] items-center px-2 flex-1 min-w-0">
            <SingleDatePicker
              value={departureDate}
              onChange={(date) => {
                setDepartureDate(date);
                if (returnDate && date && date > returnDate) setReturnDate(undefined);
              }}
              placeholder="Departure"
              isOpen={departureOpen}
              setOpen={(open) => { setDepartureOpen(open); if (open) setReturnOpen(false); }}
              glass={glass}
              align="left"
            />
          </div>

          {tripType === "roundtrip" && (
            <div className={`hidden sm:block self-stretch border-l mx-1 ${divider}`} />
          )}
          {tripType === "roundtrip" && (
            <div className={`flex h-[52px] items-center px-2 flex-1 min-w-0 border-t sm:border-t-0 ${divider}`}>
              <SingleDatePicker
                value={returnDate}
                onChange={setReturnDate}
                placeholder="Return"
                minDate={departureDate}
                maxDate={returnDate}
                isOpen={returnOpen}
                setOpen={(open) => { setReturnOpen(open); if (open) setDepartureOpen(false); }}
                glass={glass}
                align="right"
              />
            </div>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className={`h-[52px] w-full md:w-auto px-7 text-sm font-bold transition-all cursor-pointer ${
            glass
              ? "rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl bg-white text-black"
              : "rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl bg-black text-white active:scale-95"
          }`}
        >
          Search
        </button>
      </div>
    </div>
  );
}
