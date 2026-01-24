// app/components/AirportInput.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import debounce from "lodash/debounce";

interface Airport {
  name: string;
  city: string;
  country: string;
  iata: string;
}

export default function AirportInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (iata: string, displayLabel: string) => void;
  placeholder: string;
}) {
  const [suggestions, setSuggestions] = useState<Airport[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const fetchAirports = async (term: string) => {
    if (term.length < 2) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await fetch(`http://localhost:3000/airports/search?term=${term}`);
      const data = await res.json();
      setSuggestions(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Debounce 300ms
  const debouncedFetch = useCallback(
    debounce((term: string) => fetchAirports(term), 300),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val,val);
    debouncedFetch(val);
    setIsOpen(true);
  };

  return (
    <div className="relative w-full">
      <input
        className="w-full bg-transparent text-sm outline-none"
        value={value}
        onChange={handleChange}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
      />
      
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute left-0 top-full z-50 mt-2 w-full max-h-60 overflow-auto rounded-md border bg-white shadow-lg">
          {suggestions.map((airport) => (
            <li
              key={airport.iata}
              className="flex cursor-pointer flex-col px-4 py-2 hover:bg-gray-100"
              onClick={() => {
                const displayValue = `${airport.city} (${airport.iata})`;
                onChange(airport.iata,displayValue); 
                setIsOpen(false);
              }}
            >
              <div className="flex justify-between">
                <span className="font-bold text-black">{airport.city} ({airport.iata})</span>
                <span className="text-xs text-gray-400">{airport.country}</span>
              </div>
              <span className="text-xs text-gray-500">{airport.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}