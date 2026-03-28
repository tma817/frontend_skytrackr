// app/page.tsx
"use client";

import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <main className="bg-white font-sans">
      {/* HERO */}
      <section
        className="relative flex min-h-[calc(100vh-64px)] w-full flex-col items-center justify-center text-black"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* content */}
        <div className="relative z-10 flex w-full flex-col items-center px-6 text-center text-black font-sans">
          {/* eyebrow */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
            ✈&nbsp;&nbsp;Find your next flight
          </span>

          {/* headline */}
          <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-black md:text-7xl">
            Fly Smart,
            <br />
            <span className="text-sky-400 ">Fly Cheap.</span>
          </h1>

          {/* search bar */}
          <div className="mt-10 w-full max-w-11/12 rounded-2xl border">
            <SearchBar />
          </div>
{/*           
          <p className="mt-5 text-base font-medium leading-relaxed text-black/60 md:text-lg">
            Search hundreds of airlines in seconds and book the best deal for
            your journey.
          </p> */}

          {/* trust strip */}
			<div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold uppercase tracking-widest text-black/40">
				<span>500+ Airlines</span>
				<span className="hidden sm:inline-block h-1 w-1 rounded-full bg-white/20" />
				<span>Best Price Guarantee</span>
				<span className="hidden sm:inline-block h-1 w-1 rounded-full bg-white/20" />
				<span>No Hidden Fees</span>
			</div>
        </div>
      </section>
    </main>
  );
}
