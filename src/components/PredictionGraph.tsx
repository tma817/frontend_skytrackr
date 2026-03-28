"use client";
import { useEffect, useState } from "react";
import { predictionService, PriceAnalysis } from "@/services/prediction.service";
import money from "@/utils/money";

interface PredictionGraphProps {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate?: string;
  currentPrice: number;
  currency: string;
  oneWay?: boolean;
}

export default function PredictionGraph({
  origin,
  destination,
  departureDate,
  returnDate,
  currentPrice,
  currency,
  oneWay = true,
}: PredictionGraphProps) {
  const [analysis, setAnalysis] = useState<PriceAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!origin || !destination || !departureDate || !currentPrice) return;
    setLoading(true);
    predictionService
      .getPriceAnalysis(origin, destination, departureDate, currentPrice, currency, oneWay, returnDate)
      .then(setAnalysis)
      .catch(() => setAnalysis(null))
      .finally(() => setLoading(false));
  }, [origin, destination, departureDate, returnDate, currentPrice, currency, oneWay]);

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-5">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <h3 className="text-xs font-black uppercase tracking-widest ">Price Insight</h3>
      </div>

      {loading ? (
        <div className="flex flex-col gap-3">
          <div className="h-12 rounded-xl bg-slate-100 animate-pulse" />
          <div className="h-4 rounded bg-slate-100 animate-pulse w-3/4" />
          <div className="h-8 rounded-lg bg-slate-100 animate-pulse mt-2" />
        </div>
      ) : !analysis ? (
        <p className="text-xs text-slate-400 text-center py-4">Price analysis unavailable.</p>
      ) : (
        <PriceInsightContent analysis={analysis} currency={currency} />
      )}
    </div>
  );
}

function PriceInsightContent({ analysis, currency }: { analysis: PriceAnalysis; currency: string }) {
  const { verdict, verdictReason, daysUntil, percentile, priceMetrics, currentPrice } = analysis;

  const verdictConfig = {
    buy_now: {
      label: "Buy Now",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ),
      bg: "bg-emerald-500",
      text: "text-white",
      lightBg: "bg-emerald-50",
      lightText: "text-emerald-700",
      border: "border-emerald-100",
    },
    wait: {
      label: "Consider Waiting",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 7v5l3 3" />
        </svg>
      ),
      bg: "bg-amber-500",
      text: "text-white",
      lightBg: "bg-amber-50",
      lightText: "text-amber-700",
      border: "border-amber-100",
    },
    uncertain: {
      label: "No Clear Signal",
      icon: (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
      bg: "bg-slate-400",
      text: "text-white",
      lightBg: "bg-slate-50",
      lightText: "text-slate-600",
      border: "border-slate-100",
    },
  };

  const cfg = verdictConfig[verdict];

  return (
    <div className="space-y-4">
      {/* Verdict badge */}
      <div className={`flex items-center gap-3 rounded-xl px-4`}>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${cfg.bg} ${cfg.text}`}>
          {cfg.icon}
        </div>
        <div>
          <p className={`text-sm font-black ${cfg.lightText}`}>{cfg.label}</p>
          <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{verdictReason}</p>
        </div>
      </div>

      {/* Days + current price */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
        <span>
          {daysUntil > 0 ? (
            <><span className="text-slate-700 font-black">{daysUntil}</span> days until departure</>
          ) : daysUntil === 0 ? (
            <span className="text-red-500 font-black">Today</span>
          ) : (
            <span className="text-slate-400">Departed</span>
          )}
        </span>
        <span>Current: <span className="text-slate-700 font-black">{money(currentPrice, currency)}</span></span>
      </div>

      {/* Price range bar — only if Amadeus data available */}
      {priceMetrics && priceMetrics.minimum !== null && priceMetrics.maximum !== null && (
        <PriceRangeBar
          currentPrice={currentPrice}
          metrics={priceMetrics}
          currency={currency}
          percentile={percentile}
        />
      )}

      {/* No price metrics fallback note */}
      {!priceMetrics && (
        <p className="text-[10px] text-slate-300 text-center pt-1">
          Based on timing heuristics · No route data available
        </p>
      )}
    </div>
  );
}

function PriceRangeBar({
  currentPrice,
  metrics,
  currency,
  percentile,
}: {
  currentPrice: number;
  metrics: NonNullable<PriceAnalysis["priceMetrics"]>;
  currency: string;
  percentile: number | null;
}) {
  const { minimum, maximum, median } = metrics;
  const range = maximum - minimum;
  if (range <= 0) return null;

  const pct = (val: number) => Math.max(0, Math.min(100, ((val - minimum) / range) * 100));
  const currentPct = pct(currentPrice);
  const medianPct = pct(median);

  const markerColor =
    percentile !== null
      ? percentile <= 25
        ? "bg-emerald-500"
        : percentile <= 50
        ? "bg-sky-500"
        : percentile <= 75
        ? "bg-amber-500"
        : "bg-red-500"
      : "bg-slate-500";

  return (
    <div className="space-y-2">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Prices for nearby dates</p>

      {/* Bar */}
      <div className="relative h-3 rounded-full bg-gradient-to-r from-emerald-200 via-amber-200 to-red-200 overflow-visible">
        {/* Median marker */}
        <div
          className="absolute top-0 h-full w-0.5 bg-white/80"
          style={{ left: `${medianPct}%` }}
        />
        {/* Current price dot */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-5 w-5 rounded-full border-2 border-white shadow-md ${markerColor}`}
          style={{ left: `${currentPct}%` }}
        />
      </div>

      {/* Labels */}
      <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
        <span>
          {money(minimum, currency)}
          <br /><span className="text-[9px] font-medium text-slate-300">Cheapest</span>
        </span>
        <span className="text-center">
          {money(median, currency)}
          <br /><span className="text-[9px] font-medium text-slate-300">Median</span>
        </span>
        <span className="text-right">
          {money(maximum, currency)}
          <br /><span className="text-[9px] font-medium text-slate-300">Highest</span>
        </span>
      </div>

      {percentile !== null && (
        <p className="text-[11px] text-slate-500 text-center">
          Your price is{" "}
          <span className="font-black text-slate-700">
            {percentile <= 25
              ? "near the cheapest available"
              : percentile <= 50
              ? "below the median"
              : percentile <= 75
              ? "above the median"
              : "near the highest seen"}
          </span>{" "}
          for nearby dates.
        </p>
      )}
    </div>
  );
}
