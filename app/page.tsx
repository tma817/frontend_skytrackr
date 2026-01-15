"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./components/SearchBar";

type DestinationCard = {
  title: string;          // 보여줄 텍스트
  priceText: string;      // "$375+"
  imageSrc: string;       // /images/...
  from: string;           // 공항코드
  to: string;             // 공항코드
};

export default function HomePage() {
  // ✅ 데모용: 여기만 바꾸면 홈 카드 목적지 바뀜
  const popular: DestinationCard[] = [
    {
      title: "Toronto → Hawaii",
      priceText: "$375+",
      imageSrc: "/images/dest-hawaii.png",
      from: "YYZ",
      to: "HNL", // Hawaii(대표 공항)
    },
    {
      title: "Toronto → Tokyo",
      priceText: "$365+",
      imageSrc: "/images/dest-tokyo.jpg",
      from: "YYZ",
      to: "NRT", // Tokyo(나리타)
    },
    {
      title: "Toronto → Machu Picchu",
      priceText: "$350+",
      imageSrc: "/images/dest-machu-picchu.png",
      from: "YYZ",
      to: "CUZ", // Machu Picchu 접근 공항(쿠스코)
    },
  ];

  // 데모 기본값 (원하면 바꿔도 됨)
  const defaultDate = "Depart - Return";
  const defaultPax = "1 adult";

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

          {/* ✅ SearchBar (이미 잘 붙어있음) */}
          <SearchBar />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="mx-auto w-full max-w-5xl px-6 py-12">
        <h2 className="text-center text-xl font-semibold text-black">
          Popular Destinations
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {popular.map((d) => {
            const href = `/search?from=${encodeURIComponent(
              d.from
            )}&to=${encodeURIComponent(d.to)}&date=${encodeURIComponent(
              defaultDate
            )}&pax=${encodeURIComponent(defaultPax)}`;

            return (
              <div
                key={d.title}
                className="overflow-hidden rounded-lg border bg-white shadow-sm"
              >
                <div className="relative h-[150px] w-full">
                  <Image
                    src={d.imageSrc}
                    alt={d.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="font-semibold">{d.title}</div>
                  <div className="mt-1 text-xl text-gray-600">{d.priceText}</div>

                  {/* ✅ 여기 클릭하면 search로 이동 + query 전달 */}
                  <Link
                    href={href}
                    className="mt-4 inline-block text-sm text-black underline"
                  >
                    Book Now →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
