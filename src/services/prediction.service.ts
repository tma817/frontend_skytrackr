import { API_BASE as BASE } from "@/utils/api";

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

export const predictionService = {
  async predictPrice(
    origin: string,
    destination: string,
    departureDate: string,
    currency = "CAD"
  ): Promise<PricePrediction> {
    const params = new URLSearchParams({ origin, destination, departureDate, currency });
    const res = await fetch(`${BASE}/prediction/price?${params}`);
    if (!res.ok) throw new Error("Failed to fetch prediction");
    return res.json();
  },
};
