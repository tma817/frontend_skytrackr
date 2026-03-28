const cache: Record<string, Record<string, number>> = {};

export async function getRates(base: string): Promise<Record<string, number>> {
  if (cache[base]) return cache[base];
  const res = await fetch(`https://api.frankfurter.app/latest?from=${base}`);
  const data = await res.json();
  cache[base] = { ...data.rates, [base]: 1 };
  return cache[base];
}

export function convert(amount: number, rates: Record<string, number>, to: string): number {
  return amount * (rates[to] ?? 1);
}

export function formatMoney(amount: number, currency: string): string {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}