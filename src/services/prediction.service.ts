import { API_BASE as BASE } from "@/utils/api";
import { getDecodedToken } from "@/utils/auth-helpers";

export interface PricePrediction {
  origin: string;
  destination: string;
  departureDate: string;
  currency: string;
  currentLowestPrice: number | null;
  predictedPrice: number | null;
  priceRange: { low: number; high: number } | null;
  trend: "rising" | "falling" | "stable" | "unknown";
  recommendation: "buy_now" | "wait" | "uncertain";
  confidence: "high" | "medium" | "low";
  reasoning: string;
  dataPoints: number;
}

export interface PriceAnalysis {
  origin: string;
  destination: string;
  departureDate: string;
  currency: string;
  currentPrice: number;
  daysUntil: number;
  percentile: number | null;
  priceMetrics: {
    minimum: number;
    median: number;
    maximum: number;
  } | null;
  verdict: "buy_now" | "wait" | "uncertain";
  verdictReason: string;
}

export const predictionService = {
  async predictPrice(
    origin: string,
    destination: string,
    departureDate: string,
    currency = "CAD"
  ): Promise<PricePrediction> {
    const userEmail = getDecodedToken()?.email;
    const params = new URLSearchParams({ origin, destination, departureDate, currency });
    if (userEmail) params.set("userEmail", userEmail);
    const res = await fetch(`${BASE}/prediction/price?${params}`);
    if (!res.ok) throw new Error("Failed to fetch prediction");
    return res.json();
  },

  async getPriceAnalysis(
    origin: string,
    destination: string,
    departureDate: string,
    currentPrice: number,
    currency = "CAD",
    oneWay = true,
    returnDate?: string
  ): Promise<PriceAnalysis> {
    const userEmail = getDecodedToken()?.email;
    const params = new URLSearchParams({
      origin,
      destination,
      departureDate,
      currentPrice: String(currentPrice),
      currency,
      oneWay: String(oneWay),
      ...(returnDate ? { returnDate } : {}),
      ...(userEmail ? { userEmail } : {}),
    });
    const res = await fetch(`${BASE}/flights/price-analysis?${params}`);
    if (!res.ok) throw new Error("Failed to fetch price analysis");
    return res.json();
  },
};
