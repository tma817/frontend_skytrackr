"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API_BASE } from "@/utils/api";

type AirlinePolicy = {
  _id: string;
  iata: string;
  name: string;
  country: string;
  hub: string;
  alliance: string;
  logo: string;
  website: string;
  founded: number;
  fleet: string[];
  carryOn: { included: boolean; weightKg: number; dimensions: string; personalItemAllowed: boolean };
  checkedBaggage: { freeAllowance: number; weightKgPerBag: number; maxWeightKg: number; firstBagFeeUSD: number; secondBagFeeUSD: number; additionalBagFeeUSD: number; overweightFeeUSD: number };
  services: { wifi: string; wifiPriceUSD: number | null; meals: string; entertainment: string; seatSelection: string; priorityBoarding: boolean; loungeAccess: string; powerOutlets: boolean; usb: boolean };
  fees: { seatSelectionEconomyUSD: number | null; cancellationFeeUSD: number | null; changeFeeUSD: number | null; note: string };
  policies: { onlineCheckIn: string; airportCheckIn: string; boardingCutoff: string; refundPolicy: string; infantPolicy: string; petPolicy: string };
};

const ALLIANCES = ["All", "Star Alliance", "oneworld", "SkyTeam", "None"];

const ALLIANCE_COLORS: Record<string, string> = {
  "Star Alliance": "bg-slate-900 text-white",
  "oneworld":      "bg-red-600 text-white",
  "SkyTeam":       "bg-blue-600 text-white",
  "None":          "bg-slate-100 text-slate-500",
};

const ALLIANCE_DOT: Record<string, string> = {
  "Star Alliance": "bg-slate-900",
  "oneworld":      "bg-red-500",
  "SkyTeam":       "bg-blue-500",
  "None":          "bg-slate-300",
};

export default function AirlinesPage() {
  const router = useRouter();
  const [airlines, setAirlines] = useState<AirlinePolicy[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [alliance, setAlliance] = useState("All");
  const [selected, setSelected] = useState<AirlinePolicy | null>(null);

  useEffect(() => {
    fetch(`${API_BASE}/airlines/policies`)
      .then(r => r.json())
      .then(setAirlines)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = airlines.filter((a) => {
    const matchSearch = !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.iata.toLowerCase().includes(search.toLowerCase()) || a.country?.toLowerCase().includes(search.toLowerCase());
    const matchAlliance = alliance === "All" || a.alliance === alliance;
    return matchSearch && matchAlliance;
  });

  return (
    <div className="min-h-screen bg-[#F7F8FA]">

      {/* ── Dark Header ── */}
      <div className="bg-black text-white px-4 sm:px-6 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Directory</p>
          <h1 className="text-3xl font-black tracking-tight mb-1">Airlines</h1>
          <p className="text-sm text-white/50 mb-7">Baggage policies, fees &amp; services for major carriers.</p>

          {/* Search */}
          <div className="relative mb-4 max-w-lg">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search airline, code, or country…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30 transition"
            />
          </div>

          {/* Alliance filters */}
          <div className="flex gap-2 flex-wrap">
            {ALLIANCES.map(a => (
              <button
                key={a}
                onClick={() => setAlliance(a)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  alliance === a
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <div className="flex gap-6 items-start">

          {/* ── Grid ── */}
          <div className="flex-1 min-w-0">
            {loading ? (
              <div className="flex justify-center py-24">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-24 text-center">
                <p className="text-slate-400 text-sm">No airlines match your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filtered.map(airline => {
                  const isSelected = selected?.iata === airline.iata;
                  return (
                    <button
                      key={airline.iata}
                      onClick={() => setSelected(isSelected ? null : airline)}
                      className={`group relative text-left bg-white rounded-2xl border-2 p-5 transition-all shadow-sm hover:shadow-md ${
                        isSelected ? "border-black shadow-md" : "border-transparent hover:border-slate-200"
                      }`}
                    >
                      {/* Top row: logo + name + iata */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
                          <img
                            src={airline.logo}
                            alt={airline.name}
                            className="h-10 w-10 object-contain"
                            onError={e => {
                              (e.target as HTMLImageElement).style.display = "none";
                              (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-lg font-black text-slate-400">${airline.iata}</span>`;
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-black text-slate-900 truncate leading-tight">{airline.name}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{airline.country}</p>
                        </div>
                        <span className="font-mono text-[11px] font-black text-slate-300 shrink-0">{airline.iata}</span>
                      </div>

                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-slate-50 rounded-xl p-2.5 text-center">
                          <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-0.5">Carry-on</p>
                          <p className="text-xs font-black text-slate-800">
                            {airline.carryOn?.weightKg ? `${airline.carryOn.weightKg} kg` : "—"}
                          </p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-2.5 text-center">
                          <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-0.5">Free bags</p>
                          <p className="text-xs font-black text-slate-800">
                            {airline.checkedBaggage?.freeAllowance ?? 0}
                          </p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-2.5 text-center">
                          <p className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-0.5">1st bag</p>
                          <p className="text-xs font-black text-slate-800">
                            {airline.checkedBaggage?.firstBagFeeUSD ? `$${airline.checkedBaggage.firstBagFeeUSD}` : "Free"}
                          </p>
                        </div>
                      </div>

                      {/* Bottom row: alliance + hub */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full shrink-0 ${ALLIANCE_DOT[airline.alliance] ?? "bg-slate-300"}`} />
                          <span className="text-[11px] font-bold text-slate-500">{airline.alliance}</span>
                        </div>
                        {airline.hub && (
                          <p className="text-[11px] text-slate-400 truncate text-right max-w-[120px]">{airline.hub}</p>
                        )}
                      </div>

                      {/* Selected indicator */}
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            <p className="text-center text-[11px] text-slate-400 mt-6">
              {filtered.length} of {airlines.length} airlines
            </p>
          </div>

          {/* ── Detail panel — desktop sidebar ── */}
          {selected && (
            <div className="hidden lg:block w-96 shrink-0 sticky top-8 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <DetailPanel selected={selected} onClose={() => setSelected(null)} />
            </div>
          )}
        </div>
      </div>

      {/* ── Detail panel — mobile bottom sheet ── */}
      {selected && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-slate-200" />
            </div>
            <DetailPanel selected={selected} onClose={() => setSelected(null)} />
          </div>
        </div>
      )}
    </div>
  );
}

function DetailPanel({ selected, onClose }: { selected: AirlinePolicy; onClose: () => void }) {
  const [tab, setTab] = useState<"baggage" | "services" | "fees" | "policies">("baggage");

  return (
    <>
      {/* Dark header */}
      <div className="bg-black text-white px-5 py-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
            <img
              src={selected.logo}
              alt={selected.name}
              className="h-10 w-10 object-contain"
              onError={e => {
                (e.target as HTMLImageElement).style.display = "none";
                (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-sm font-black text-white/60">${selected.iata}</span>`;
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-black text-white truncate">{selected.name}</p>
            <p className="text-[11px] text-white/40 mt-0.5">{selected.iata} · {selected.country}</p>
          </div>
          <button onClick={onClose} className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition shrink-0">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${ALLIANCE_COLORS[selected.alliance] ?? "bg-white/10 text-white/60"}`}>
            {selected.alliance}
          </span>
          {selected.founded && (
            <span className="text-[11px] text-white/40">Est. {selected.founded}</span>
          )}
          {selected.hub && (
            <span className="text-[11px] text-white/40 truncate">· {selected.hub}</span>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100">
        {(["baggage", "services", "fees", "policies"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-[11px] font-black uppercase tracking-wider transition-colors ${
              tab === t ? "text-black border-b-2 border-black -mb-px" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="px-5 py-5 space-y-4">
        {tab === "baggage" && (
          <>
            <Section title="Carry-on">
              <Row label="Included" value={selected.carryOn?.included ? "Yes" : "No"} />
              <Row label="Weight limit" value={selected.carryOn?.weightKg ? `${selected.carryOn.weightKg} kg` : "No limit"} />
              <Row label="Dimensions" value={selected.carryOn?.dimensions ?? "—"} />
              <Row label="Personal item" value={selected.carryOn?.personalItemAllowed ? "Allowed" : "Not allowed"} />
            </Section>
            <Section title="Checked Baggage">
              <Row label="Free bags" value={`${selected.checkedBaggage?.freeAllowance ?? 0} bag${selected.checkedBaggage?.freeAllowance !== 1 ? "s" : ""}`} />
              <Row label="Weight per bag" value={`${selected.checkedBaggage?.weightKgPerBag ?? 23} kg`} />
              <Row label="1st bag fee" value={selected.checkedBaggage?.firstBagFeeUSD ? `$${selected.checkedBaggage.firstBagFeeUSD}` : "Free"} highlight={!selected.checkedBaggage?.firstBagFeeUSD} />
              <Row label="2nd bag fee" value={selected.checkedBaggage?.secondBagFeeUSD ? `$${selected.checkedBaggage.secondBagFeeUSD}` : "Free"} />
              <Row label="Extra bag" value={selected.checkedBaggage?.additionalBagFeeUSD ? `$${selected.checkedBaggage.additionalBagFeeUSD}` : "—"} />
              <Row label="Overweight fee" value={selected.checkedBaggage?.overweightFeeUSD ? `$${selected.checkedBaggage.overweightFeeUSD}/kg over` : "—"} />
            </Section>
          </>
        )}

        {tab === "services" && (
          <Section title="Onboard Services">
            <Row label="Wi-Fi" value={selected.services?.wifi === "paid" ? `Paid ($${selected.services.wifiPriceUSD})` : selected.services?.wifi === "free" ? "Free" : "Not available"} />
            <Row label="Meals" value={selected.services?.meals === "included" ? "Included" : selected.services?.meals === "paid" ? "Buy on board" : "None"} />
            <Row label="Entertainment" value={selected.services?.entertainment === "seatback" ? "Seatback screens" : selected.services?.entertainment === "streaming" ? "Streaming" : "None"} />
            <Row label="Seat selection" value={selected.services?.seatSelection === "free" ? "Free" : "Paid"} highlight={selected.services?.seatSelection === "free"} />
            <Row label="Priority boarding" value={selected.services?.priorityBoarding ? "Available" : "No"} />
            <Row label="Lounge access" value={selected.services?.loungeAccess ?? "—"} />
            <Row label="Power outlets" value={selected.services?.powerOutlets ? "Yes" : "No"} highlight={selected.services?.powerOutlets} />
            <Row label="USB charging" value={selected.services?.usb ? "Yes" : "No"} highlight={selected.services?.usb} />
          </Section>
        )}

        {tab === "fees" && (
          <Section title="Fees">
            <Row label="Seat (economy)" value={selected.fees?.seatSelectionEconomyUSD ? `$${selected.fees.seatSelectionEconomyUSD}` : "Free"} highlight={!selected.fees?.seatSelectionEconomyUSD} />
            <Row label="Cancellation fee" value={selected.fees?.cancellationFeeUSD ? `$${selected.fees.cancellationFeeUSD}` : "Free"} highlight={!selected.fees?.cancellationFeeUSD} />
            <Row label="Change fee" value={selected.fees?.changeFeeUSD ? `$${selected.fees.changeFeeUSD}` : "Free"} highlight={!selected.fees?.changeFeeUSD} />
            {selected.fees?.note && (
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed pt-2 border-t border-slate-100">{selected.fees.note}</p>
            )}
          </Section>
        )}

        {tab === "policies" && (
          <Section title="Policies">
            <Row label="Online check-in" value={selected.policies?.onlineCheckIn ?? "—"} />
            <Row label="Airport check-in" value={selected.policies?.airportCheckIn ?? "—"} />
            <Row label="Boarding cutoff" value={selected.policies?.boardingCutoff ?? "—"} />
            <Row label="Refund policy" value={selected.policies?.refundPolicy ?? "—"} multiline />
            <Row label="Infant policy" value={selected.policies?.infantPolicy ?? "—"} multiline />
            <Row label="Pet policy" value={selected.policies?.petPolicy ?? "—"} multiline />
          </Section>
        )}

        {selected.website && (
          <a
            href={selected.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 w-full rounded-xl bg-black text-white py-3 text-xs font-bold hover:bg-zinc-800 transition-colors"
          >
            Visit Official Website
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2.5">{title}</p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function Row({ label, value, multiline, highlight }: { label: string; value: string; multiline?: boolean; highlight?: boolean }) {
  return (
    <div className={`flex rounded-lg px-3 py-2 ${highlight ? "bg-emerald-50" : "bg-slate-50"} ${multiline ? "flex-col gap-1" : "items-center justify-between gap-2"}`}>
      <span className="text-[11px] text-slate-400 shrink-0">{label}</span>
      <span className={`text-[12px] font-bold ${highlight ? "text-emerald-700" : "text-slate-800"} ${!multiline ? "text-right" : ""}`}>{value}</span>
    </div>
  );
}
