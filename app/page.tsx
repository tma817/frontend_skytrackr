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
      {/* HERO SECTION */}
      <section
        className="w-full py-24 px-8"
        style={{
          backgroundImage: "url(/images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* optional overlay for readability */}
        <div className="mx-auto max-w-5xl bg-white/70 p-10 backdrop-blur-sm">
          <h1 className="text-4xl font-bold text-black">
            Fly Smart, Fly Cheap
          </h1>
          <p className="mt-2 text-gray-700">
            Please search for your flight below:
          </p>

          {/* SEARCH FORM */}
          <div className="mt-8 max-w-xl space-y-4 rounded border bg-white p-6 shadow">
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
              className="mt-4 w-full bg-black py-2 text-white hover:bg-gray-800"
            >
              Search Flights
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
