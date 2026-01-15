// app/page.tsx
"use client";

import Image from "next/image";
import SearchBar from "./components/SearchBar";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const goSearch = (from: string, to: string) => {
    const qs = new URLSearchParams({
      from,
      to,
      date: "Depart - Return",
      pax: "1 adult",
    });
    router.push(`/search?${qs.toString()}`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section
        className="relative flex h-[612px] w-full items-center justify-center overflow-hidden border-b"
        style={{
          backgroundImage: "url(/images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/20" />

        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6">
          <h1
            className="text-center font-sans text-[64px] font-bold leading-[110%] tracking-[-1.28px] text-black"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Fly Smart, Fly Cheap
          </h1>

          <p
            className="mt-3 w-full max-w-[960px] text-center text-[24px] font-medium leading-[140%] tracking-[-0.12px]"
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              color: "rgba(0, 0, 0, 0.55)",
            }}
          >
            Please search for your flight below:
          </p>

          <SearchBar />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="mx-auto w-full max-w-5xl px-6 py-12">
        <h2 className="text-center text-xl font-semibold text-black">
          Popular Destinations
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="relative h-[150px] w-full">
              <Image
                src="/images/dest-hawaii.png"
                alt="Toronto to Hawaii"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4">
              <div className="font-semibold">Toronto → Hawaii</div>
              <div className="mt-1 text-xl text-gray-600">$375+</div>
              <button
                className="mt-4 text-sm text-black underline"
                onClick={() => goSearch("YYZ", "HNL")}
              >
                Book Now →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="relative h-[150px] w-full">
              <Image
                src="/images/dest-tokyo.jpg"
                alt="Toronto to Tokyo"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold">Toronto → Tokyo</div>
              <div className="mt-1 text-xl text-gray-600">$365+</div>
              <button
                className="mt-4 text-sm text-black underline"
                onClick={() => goSearch("YYZ", "NRT")}
              >
                Book Now →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
            <div className="relative h-[150px] w-full">
              <Image
                src="/images/dest-machu-picchu.png"
                alt="Toronto to Machu Picchu"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="font-semibold">Toronto → Machu Picchu</div>
              <div className="mt-1 text-xl text-gray-600">$350+</div>
              <button
                className="mt-4 text-sm text-black underline"
                onClick={() => goSearch("YYZ", "LIM")}
              >
                Book Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
