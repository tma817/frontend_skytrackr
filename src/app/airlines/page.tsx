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

      {/* Header */}
      <div className="bg-white px-4 sm:px-6 py-7">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Directory</p>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Airlines</h1>
          <p className="text-sm text-slate-400 mt-1">Baggage policies, fees, and services for major carriers.</p>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <input
              type="text"
              placeholder="Search airline, code, or country…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-slate-400 transition"
            />
            <div className="flex gap-2 flex-wrap">
              {ALLIANCES.map(a => (
                <button key={a} onClick={() => setAlliance(a)} className={`px-3 py-2 rounded-xl text-xs font-bold transition border ${alliance === a ? "bg-slate-900 text-white border-slate-900" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}>
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
        <div className="flex gap-6 items-start">

          {/* List */}
          <div className="flex-1 min-w-0">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-slate-400 text-sm">No airlines match your search.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
                {filtered.map(airline => (
                  <button
                    key={airline.iata}
                    onClick={() => setSelected(selected?.iata === airline.iata ? null : airline)}
                    className={`w-full flex items-center gap-4 px-4 sm:px-5 py-4 text-left transition-colors ${selected?.iata === airline.iata ? "bg-slate-50" : "hover:bg-slate-50"}`}
                  >
                    <div className="h-9 w-9 shrink-0 flex items-center justify-center">
                      <img src={airline.logo} alt={airline.name} className="h-9 w-9 object-contain" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    </div>
                    <div className="w-40 shrink-0 text-left">
                      <p className="text-sm font-black text-slate-900 truncate">{airline.name}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{airline.country}</p>
                    </div>
                    <div className="hidden sm:block flex-1 text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Hub</p>
                      <p className="text-sm text-slate-700 font-medium truncate w-40">{airline.hub}</p>
                    </div>
                    <div className="hidden lg:block text-left shrink-0">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Carry-on</p>
                      <p className="text-sm text-slate-700 font-medium">{airline.carryOn?.weightKg ? `${airline.carryOn.weightKg} kg` : "No limit"}</p>
                    </div>
                    <div className="hidden lg:block text-left shrink-0">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Free bag</p>
                      <p className="text-sm text-slate-700 font-medium">{airline.checkedBaggage?.freeAllowance ?? 0} bag{airline.checkedBaggage?.freeAllowance !== 1 ? "s" : ""}</p>
                    </div>
                    <span className={`shrink-0 text-[10px] font-black px-2.5 py-1 rounded-full hidden sm:inline-block ${ALLIANCE_COLORS[airline.alliance] ?? "bg-slate-100 text-slate-500"}`}>
                      {airline.alliance}
                    </span>
                    <span className="text-[11px] font-black text-slate-400 font-mono w-8 text-right shrink-0">{airline.iata}</span>
                  </button>
                ))}
              </div>
            )}
            <p className="text-center text-[11px] text-slate-400 mt-4">{filtered.length} of {airlines.length} airlines</p>
          </div>

          {/* Detail panel — desktop sidebar */}
          {selected && (
            <div className="hidden lg:block w-80 shrink-0 sticky top-8 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <DetailPanel selected={selected} onClose={() => setSelected(null)} />
            </div>
          )}
        </div>
      </div>

      {/* Detail panel — mobile bottom sheet */}
      {selected && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1 w-10 rounded-full bg-gray-200" />
            </div>
            <DetailPanel selected={selected} onClose={() => setSelected(null)} />
          </div>
        </div>
      )}
    </div>
  );
}

function DetailPanel({ selected, onClose }: { selected: AirlinePolicy; onClose: () => void }) {
  return (
    <>
      <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
        <img src={selected.logo} alt={selected.name} className="h-8 w-8 object-contain shrink-0" onError={e => { (e.target as HTMLImageElement).style.display = "none"; }} />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-black text-slate-900 truncate">{selected.name}</p>
          <p className="text-[10px] text-slate-400">{selected.iata} · {selected.country}</p>
        </div>
        <button onClick={onClose} className="text-slate-300 hover:text-slate-600 text-lg leading-none ml-1 shrink-0">✕</button>
      </div>

      <div className="px-5 py-4 space-y-5 max-h-[calc(100vh-200px)] overflow-y-auto">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-[10px] font-black px-2.5 py-1 rounded-full ${ALLIANCE_COLORS[selected.alliance] ?? "bg-slate-100 text-slate-500"}`}>{selected.alliance}</span>
          {selected.founded && <span className="text-[11px] text-slate-400">Est. {selected.founded}</span>}
        </div>

        <Section title="Carry-on">
          <Row label="Included" value={selected.carryOn?.included ? "Yes" : "No"} />
          <Row label="Weight" value={selected.carryOn?.weightKg ? `${selected.carryOn.weightKg} kg` : "No limit"} />
          <Row label="Dimensions" value={selected.carryOn?.dimensions ?? "—"} />
          <Row label="Personal item" value={selected.carryOn?.personalItemAllowed ? "Allowed" : "Not allowed"} />
        </Section>

        <Section title="Checked Baggage">
          <Row label="Free bags" value={`${selected.checkedBaggage?.freeAllowance ?? 0} bag${selected.checkedBaggage?.freeAllowance !== 1 ? "s" : ""}`} />
          <Row label="Weight per bag" value={`${selected.checkedBaggage?.weightKgPerBag ?? 23} kg`} />
          <Row label="1st bag fee" value={selected.checkedBaggage?.firstBagFeeUSD ? `$${selected.checkedBaggage.firstBagFeeUSD}` : "Free"} />
          <Row label="2nd bag fee" value={selected.checkedBaggage?.secondBagFeeUSD ? `$${selected.checkedBaggage.secondBagFeeUSD}` : "Free"} />
          <Row label="Extra bag" value={selected.checkedBaggage?.additionalBagFeeUSD ? `$${selected.checkedBaggage.additionalBagFeeUSD}` : "—"} />
          <Row label="Overweight fee" value={selected.checkedBaggage?.overweightFeeUSD ? `$${selected.checkedBaggage.overweightFeeUSD}/kg over` : "—"} />
        </Section>

        <Section title="Services">
          <Row label="Wi-Fi" value={selected.services?.wifi === "paid" ? `Paid ($${selected.services.wifiPriceUSD})` : selected.services?.wifi === "free" ? "Free" : "Not available"} />
          <Row label="Meals" value={selected.services?.meals === "included" ? "Included" : selected.services?.meals === "paid" ? "Buy on board" : "None"} />
          <Row label="Entertainment" value={selected.services?.entertainment === "seatback" ? "Seatback screens" : selected.services?.entertainment === "streaming" ? "Streaming" : "None"} />
          <Row label="Seat selection" value={selected.services?.seatSelection === "free" ? "Free" : "Paid"} />
          <Row label="Power outlets" value={selected.services?.powerOutlets ? "Yes" : "No"} />
          <Row label="USB" value={selected.services?.usb ? "Yes" : "No"} />
        </Section>

        <Section title="Fees">
          <Row label="Seat (economy)" value={selected.fees?.seatSelectionEconomyUSD ? `$${selected.fees.seatSelectionEconomyUSD}` : "Free"} />
          <Row label="Cancellation" value={selected.fees?.cancellationFeeUSD ? `$${selected.fees.cancellationFeeUSD}` : "Free"} />
          <Row label="Change fee" value={selected.fees?.changeFeeUSD ? `$${selected.fees.changeFeeUSD}` : "Free"} />
          {selected.fees?.note && <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">{selected.fees.note}</p>}
        </Section>

        <Section title="Policies">
          <Row label="Online check-in" value={selected.policies?.onlineCheckIn ?? "—"} />
          <Row label="Airport check-in" value={selected.policies?.airportCheckIn ?? "—"} />
          <Row label="Boarding cutoff" value={selected.policies?.boardingCutoff ?? "—"} />
          <Row label="Refund" value={selected.policies?.refundPolicy ?? "—"} multiline />
          <Row label="Infants" value={selected.policies?.infantPolicy ?? "—"} multiline />
          <Row label="Pets" value={selected.policies?.petPolicy ?? "—"} multiline />
        </Section>

        {selected.website && (
          <a href={selected.website} target="_blank" rel="noopener noreferrer" className="block w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-center text-slate-600 hover:bg-slate-50 transition-colors">
            Visit official website
          </a>
        )}
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{title}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function Row({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div className={`flex ${multiline ? "flex-col gap-0.5" : "items-baseline justify-between gap-2"}`}>
      <span className="text-[11px] text-slate-400 shrink-0">{label}</span>
      <span className={`text-[12px] font-semibold text-slate-800 ${!multiline ? "text-right" : ""}`}>{value}</span>
    </div>
  );
}