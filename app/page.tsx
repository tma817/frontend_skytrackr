"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);

  const handleSearch = () => {
    router.push("/search");
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="flex min-h-[612px] flex-col items-center justify-center px-8 text-center"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Title */}
        <h1
          className="mb-4 font-inter text-[64px] font-bold leading-[110%] tracking-[-1.28px] text-black"
        >
          Fly Smart, Fly Cheap
        </h1>

        {/* Subtitle */}
        <p
          className="mb-8 max-w-[960px] font-inter text-[24px] font-medium leading-[140%] tracking-[-0.12px] text-black/55"
        >
          Please search for your flight below:
        </p>

        {/* Search Box */}
        <div className="w-full max-w-xl space-y-4 rounded border bg-white p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium">From</label>
            <input
              className="mt-1 w-full border p-2"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Toronto (YYZ)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">To</label>
            <input
              className="mt-1 w-full border p-2"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Vancouver (YVR)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Departure Date</label>
            <input
              type="date"
              className="mt-1 w-full border p-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Passengers</label>
            <input
              type="number"
              min={1}
              className="mt-1 w-full border p-2"
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
            />
          </div>

          <button
            onClick={handleSearch}
            className="w-full bg-black py-2 text-white"
          >
            Search
          </button>
        </div>
      </section>
    </main>
  );
}
