// app/lib/demoFlights.ts

export type FlightResult = {
  id: string;
  from: string;           // YYZ
  to: string;             // ORD
  fromCity: string;       // Toronto, CA
  toCity: string;         // Tokyo, Japan
  airline: string;
  duration: string;       // "18h 22m"
  time: string;           // "7:35AM - 12:15PM"
  stops: string;          // "1 stop"
  price: number;
  note?: string;          // "50m in HKG"
  tag?: "best" | "value";

  // detail page용 (figma 느낌)
  flightNumber?: string;
  aircraft?: string;
  cabinClass?: string;
  stopsCount?: number;
  heroImage?: string;     // "/images/dest-tokyo.jpg"
};

export const DEMO_FLIGHTS: FlightResult[] = [
  {
    id: "1",
    from: "YYZ",
    to: "HNL",
    fromCity: "Toronto, CA",
    toCity: "Hawaii, US",
    airline: "Hawaiian Airlines",
    duration: "16h 45m",
    time: "7:00AM - 4:15PM",
    stops: "1 stop",
    price: 624,
    note: "2h 45m in HNL",
    tag: "value",
    flightNumber: "HA 624",
    aircraft: "Airbus A330",
    cabinClass: "Economy",
    stopsCount: 1,
    heroImage: "/images/dest-hawaii.png",
  },
  {
    id: "2",
    from: "YYZ",
    to: "NRT",
    fromCity: "Toronto, CA",
    toCity: "Tokyo, Japan",
    airline: "Japan Airlines",
    duration: "18h 22m",
    time: "7:35AM - 12:15PM",
    stops: "1 stop",
    price: 663,
    note: "50m in HKG",
    tag: "best",
    flightNumber: "JL 892",
    aircraft: "Airbus A350",
    cabinClass: "Business",
    stopsCount: 1,
    heroImage: "/images/dest-tokyo.jpg",
  },
  {
    id: "3",
    from: "YYZ",
    to: "ORD",
    fromCity: "Toronto, CA",
    toCity: "Chicago, US",
    airline: "Delta",
    duration: "18h 52m",
    time: "9:47AM - 4:15PM",
    stops: "1 stop",
    price: 756,
    note: "4h 05m in ICN",
    flightNumber: "DL 103",
    aircraft: "Boeing 787",
    cabinClass: "Economy",
    stopsCount: 1,
    heroImage: "/images/hero-bg.png",
  },
  {
    id: "4",
    from: "YYZ",
    to: "LIM",
    fromCity: "Toronto, CA",
    toCity: "Lima, PE",
    airline: "Korean Air",
    duration: "22h 37m",
    time: "6:45PM - 7:15PM",
    stops: "2 stops",
    price: 989,
    note: "Arrives next day",
    flightNumber: "KE 402",
    aircraft: "Boeing 777",
    cabinClass: "Economy",
    stopsCount: 2,
    heroImage: "/images/dest-machu-picchu.png",
  },
  {
    id: "5",
    from: "YYZ",
    to: "TPE",
    fromCity: "Toronto, CA",
    toCity: "Taipei, TW",
    airline: "EVA Air",
    duration: "18h 55m",
    time: "2:15PM - 11:15PM",
    stops: "1 stop",
    price: 913,
    note: "2h 45m in HNL",
    flightNumber: "BR 35",
    aircraft: "Boeing 787",
    cabinClass: "Economy",
    stopsCount: 1,
    heroImage: "/images/hero-bg.png",
  },
];

export function getFlightById(id: string) {
  return DEMO_FLIGHTS.find((f) => f.id === id);
}

// search 쿼리(from/to)에 맞춰 “느낌”으로 필터링
export function getFlightsForRoute(from?: string, to?: string) {
  if (!from && !to) return DEMO_FLIGHTS;
  return DEMO_FLIGHTS.filter((f) => {
    const okFrom = from ? f.from === from : true;
    const okTo = to ? f.to === to : true;
    return okFrom && okTo;
  });
}
