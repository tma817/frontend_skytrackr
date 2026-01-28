"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import AirportInput from "./AirportInput";
import { DayPicker } from "react-day-picker";
import PassengerPicker from "./PassengerPicker";
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
};

/* --- Compact date picker that expands only on click --- */
export function SingleDatePicker({ value, onChange, placeholder, minDate, maxDate, isOpen, setOpen }: DatePickerProps) {
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
        className="h-[48px] px-3 rounded-md cursor-pointer bg-white hover:bg-gray-50 w-full flex items-center"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!isOpen);
        }}
      >
        <span className={`text-sm ${value ? "text-gray-900" : "text-gray-500"}`}>
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
  

  //Saves user's selection after searching flight on search bar
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    //departure and return
    const dep = searchParams.get("departure");
    const ret = searchParams.get("return");
    if (dep) setDepartureDate(new Date(dep));
    if (ret) setReturnDate(new Date(ret));

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
      passengers: `${passengers} adult${passengers > 1 ? "s" : ""}`,
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

  return (
    <div className={`w-full max-w-[960px] ${className}`}>
      <div className="flex w-full items-stretch overflow-visible rounded-md border bg-white shadow-sm">
        {/* From */}
        <div className="flex h-[48px] w-[327.5px] items-center gap-2 px-3 border-r border-gray-200">
          <AirportInput
            value={fromLabel}
            onChange={(iata, label) => {
              setFromCode(iata);
              setFromLabel(label);
            }}
            placeholder="From where?"
          />
        </div>

        {/* To */}
        <div className="flex h-[48px] w-[327.5px] items-center gap-2 px-3 border-r border-gray-200">
          <AirportInput
            value={toLabel}
            onChange={(iata, label) => {
              setToCode(iata);
              setToLabel(label);
            }}
            placeholder="To where?"
          />
        </div>

        {/* Trip type */}
        <div className="flex h-[48px] w-[175px] items-center px-2 border-r border-gray-200">
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value as TripType)}
            className="h-[48px] w-full bg-white text-sm hover:bg-gray-50 focus:outline-none cursor-pointer"
          >
            <option value="roundtrip">Round trip</option>
            <option value="oneway">One way</option>
          </select>
        </div>

        {/* Date pickers */}
        <div className="flex h-[48px] items-center px-2 border-r border-gray-200">
          {/* Departure */}
          <div className="w-[120px]">
            <SingleDatePicker 
              value={departureDate} 

              //Resets return date if user selects departure date greater than return date
              onChange={(date)=> {
                setDepartureDate(date)
                if (returnDate && date && date > returnDate) {
                setReturnDate(undefined);
                }
              }}
              placeholder="Departure" 
              isOpen={departureOpen} 
                setOpen={(open) => {
              setDepartureOpen(open);
                if (open) setReturnOpen(false); // close return calendar
              }}
            />
          </div>

          {/* thin divider between departure and return */}
          {tripType === "roundtrip" && <div className="self-stretch border-l border-gray-200 mx-2" />}

          {/* Return (only show if round-trip) */}
          {tripType === "roundtrip" && (
            <div className="w-[120px]">
              <SingleDatePicker
                value={returnDate}
                onChange={setReturnDate}
                placeholder="Return"
                minDate={departureDate} // can’t select before departure
                maxDate={returnDate}
                isOpen={returnOpen}
                setOpen={(open) => {
                setReturnOpen(open);
                  if (open) setDepartureOpen(false); // close departure calendar
              }}
              />
            </div>
          )}
        </div>

        {/* Passengers */}
        <div className="flex h-[48px] w-[160px] items-center gap-2 px-3 transition-colors hover:bg-gray-50 border-r border-gray-200">
          <PassengerPicker value={passengers} onChange={setPassengers} />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="h-[48px] bg-black px-6 text-sm font-medium text-white hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          Search
        </button>
      </div>
    </div>
  );
}
