// app/page.tsx
"use client";

import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section
        className="relative flex min-h-screen w-full flex-col items-center justify-center"
        style={{
          backgroundImage: "url(/images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* content */}
        <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
          {/* eyebrow */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
            ✈&nbsp;&nbsp;Find your next flight
          </span>

          {/* headline */}
          <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-white md:text-7xl">
            Fly Smart,
            <br />
            <span className="text-sky-300">Fly Cheap.</span>
          </h1>

          {/* subtitle */}
          <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-white/60 md:text-lg">
            Search hundreds of airlines in seconds and book the best deal for
            your journey.
          </p>

          {/* search bar */}
          <div className="mt-10 w-full max-w-[980px]">
            <SearchBar glass />
          </div>

          {/* trust strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-widest text-white/40">
            <span>500+ Airlines</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Best Price Guarantee</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>No Hidden Fees</span>
          </div>
        </div>
      </section>
    </main>
  );
}
