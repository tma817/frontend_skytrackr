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
};

/* --- Compact date picker that expands only on click --- */
export function SingleDatePicker({ value, onChange, placeholder, minDate, maxDate, isOpen, setOpen, glass = false }: DatePickerProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Close calendar when clicking outside
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
      {/* Input box */}
      <div
        className="h-[48px] px-3 rounded-md cursor-pointer w-full flex items-center bg-transparent"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!isOpen);
        }}
      >
        <span className={`text-sm ${value ? (glass ? "text-white" : "text-gray-900") : (glass ? "text-white/50" : "text-gray-500")}`}>
          {value ? format(value, "yyyy-MM-dd") : placeholder}
        </span>
      </div>

      {/* Calendar popup */}
      {isOpen && (
        <div className="absolute z-10 mt-1 shadow-lg bg-white rounded-md">
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
  
  const initialized = useRef(false);
  
  
  //Fix incorrect departure date and return date after search result
  function parseLocalDate(dateString: string) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  //Saves user's selection after searching flight on search bar
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    //departure and return
    const dep = searchParams.get("departure");
    const ret = searchParams.get("return");
    if (dep) setDepartureDate(parseLocalDate(dep));
    if (ret) setReturnDate(parseLocalDate(ret));

    // Passengers
    const numOfPassengers = searchParams.get("numOfPassengers");
    if (numOfPassengers) setPassengers(parseInt(numOfPassengers) || 1);

    // Trip type
    const type = searchParams.get("tripType");
    if (type === "oneway" || type === "roundtrip") setTripType(type);

    // From / To codes (optional, if you want them to persist)
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    if (from) setFromCode(from);
    if (to) setToCode(to);
  }, [searchParams]);

  const handleSearch = () => {
    //If user doesn't select departure date
    if (!departureDate) {
      alert("Please select a departure date");
      return;
    }

    //If user selects round-trip but no return date
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

  const divider = glass ? "border-white/20" : "border-gray-200";

  return (
    <div className={`w-full max-w-[960px] ${className}`}>
      <div className={`flex w-full items-stretch overflow-visible ${
        glass
          ? "rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/30"
          : "rounded-md border bg-white shadow-sm"
      }`}>
        {/* From */}
        <div className={`flex h-[52px] flex-1 items-center gap-2 px-4 border-r ${divider}`}>
          <AirportInput
            value={fromLabel}
            onChange={(iata, label) => { setFromCode(iata); setFromLabel(label); }}
            placeholder="From where?"
            glass={glass}
          />
        </div>

        {/* To */}
        <div className={`flex h-[52px] flex-1 items-center gap-2 px-4 border-r ${divider}`}>
          <AirportInput
            value={toLabel}
            onChange={(iata, label) => { setToCode(iata); setToLabel(label); }}
            placeholder="To where?"
            glass={glass}
          />
        </div>

        {/* Trip type */}
        <div className={`flex h-[52px] w-[140px] items-center px-3 border-r ${divider}`}>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value as TripType)}
            className={`h-full w-full bg-transparent text-sm focus:outline-none cursor-pointer ${glass ? "text-white" : "text-gray-900"}`}
          >
            <option value="roundtrip" className="text-black bg-white">Round trip</option>
            <option value="oneway" className="text-black bg-white">One way</option>
          </select>
        </div>

        {/* Date pickers */}
        <div className={`flex h-[52px] items-center px-2 border-r ${divider}`}>
          <div className="w-[110px]">
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
            />
          </div>

          {tripType === "roundtrip" && <div className={`self-stretch border-l mx-1 ${divider}`} />}

          {tripType === "roundtrip" && (
            <div className="w-[110px]">
              <SingleDatePicker
                value={returnDate}
                onChange={setReturnDate}
                placeholder="Return"
                minDate={departureDate}
                maxDate={returnDate}
                isOpen={returnOpen}
                setOpen={(open) => { setReturnOpen(open); if (open) setDepartureOpen(false); }}
                glass={glass}
              />
            </div>
          )}
        </div>

        {/* Passengers */}
        <div className={`flex h-[52px] w-[130px] items-center px-4 border-r ${divider}`}>
          <PassengerPicker value={passengers} onChange={setPassengers} glass={glass} />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className={`h-[52px] px-7 text-sm font-bold transition-all cursor-pointer ${
            glass
              ? "rounded-r-2xl bg-white text-black hover:bg-white/90 active:scale-95"
              : "bg-black text-white hover:bg-zinc-700"
          }`}
        >
          Search
        </button>
      </div>
    </div>
  );
}
