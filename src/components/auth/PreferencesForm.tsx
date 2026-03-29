"use client";
import { useState } from "react";
import { API_BASE } from "@/utils/api";
import AirportInput from "@/components/AirportInput";

const CABINS = ["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"] as const;

type Props = {
  email: string;
  onSave: () => void;
  onSkip: () => void;
};

export default function PreferencesForm({ email, onSave, onSkip }: Props) {
  const [homeAirportDisplay, setHomeAirportDisplay] = useState("");
  const [homeAirport, setHomeAirport] = useState("");
  const [budgetMax, setBudgetMax] = useState("");
  const [flexibility, setFlexibility] = useState("0");
  const [prefersDirect, setPrefersDirect] = useState(false);
  const [preferredCabin, setPreferredCabin] = useState("ECONOMY");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!email) { onSkip(); return; }

    setSaving(true);
    setError(null);
    try {
      const payload: Record<string, any> = {
        prefersDirect,
        preferredCabin,
        flexibility: parseInt(flexibility) || 0,
      };
      if (homeAirport.trim()) payload.homeAirport = homeAirport.trim().toUpperCase();
      if (budgetMax.trim()) payload.budgetMax = parseFloat(budgetMax);

      const res = await fetch(`${API_BASE}/users/${email}/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to save");
      onSave();
    } catch {
      setError("Could not save preferences. You can update them later in your profile.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 text-[16px] font-bold uppercase tracking-[0.25em] text-sky-500 mb-3">
          SkyTrackR
        </span>
        <h2 className="text-2xl font-black tracking-tight text-gray-900 leading-none">
          Your travel profile
        </h2>
        <p className="mt-1.5 text-xs text-gray-400 tracking-wide">
          Help our AI give you personalized recommendations
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSave} className="flex flex-col gap-4 px-5">

        {/* Home Airport */}
        <div className="group">
          <label className="block text-[10px] font-bold uppercase tracking-[0.18em] mb-2 text-gray-400 group-focus-within:text-sky-500 transition-colors duration-200">
            Home Airport{" "}
            <span className="normal-case font-normal tracking-normal text-gray-300">(optional)</span>
          </label>
          <div className="w-full border rounded-xl p-3 focus-within:border-sky-400 transition-colors duration-200">
            <AirportInput
              value={homeAirportDisplay}
              onChange={(iata, display) => {
                setHomeAirport(iata);
                setHomeAirportDisplay(display);
              }}
              placeholder="Search your city or airport..."
            />
          </div>
        </div>

        {/* Max Budget */}
        <div className="group">
          <label className="block text-[10px] font-bold uppercase tracking-[0.18em] mb-2 text-gray-400 group-focus-within:text-sky-500 transition-colors duration-200">
            Max Budget per Person (CAD){" "}
            <span className="normal-case font-normal tracking-normal text-gray-300">(optional)</span>
          </label>
          <input
            type="number"
            min={0}
            value={budgetMax}
            onChange={e => setBudgetMax(e.target.value)}
            placeholder="e.g. 600"
            className="w-full border rounded-xl p-3 bg-transparent text-sm text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Date Flexibility */}
        <div className="group">
          <label className="block text-[10px] font-bold uppercase tracking-[0.18em] mb-2 text-gray-400 group-focus-within:text-sky-500 transition-colors duration-200">
            Date Flexibility
          </label>
          <select
            value={flexibility}
            onChange={e => setFlexibility(e.target.value)}
            className="w-full border rounded-xl p-3 bg-transparent text-sm text-gray-900 focus:border-sky-400 focus:outline-none transition-colors duration-200"
          >
            <option value="0">Exact date only</option>
            <option value="1">±1 day</option>
            <option value="2">±2 days</option>
            <option value="3">±3 days</option>
            <option value="7">±1 week</option>
          </select>
        </div>

        {/* Preferred Cabin */}
        <div className="group">
          <label className="block text-[10px] font-bold uppercase tracking-[0.18em] mb-2 text-gray-400 transition-colors duration-200">
            Preferred Cabin
          </label>
          <div className="grid grid-cols-2 gap-2">
            {CABINS.map(cabin => (
              <button
                key={cabin}
                type="button"
                onClick={() => setPreferredCabin(cabin)}
                className={`rounded-xl border py-2.5 text-xs font-bold transition-all duration-150 ${
                  preferredCabin === cabin
                    ? "bg-black border-black text-white"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                }`}
              >
                {cabin.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Prefers Direct */}
        <label className="flex items-center justify-between cursor-pointer select-none border rounded-xl px-4 py-3 hover:border-gray-300 transition-colors duration-150">
          <span className="text-sm text-gray-700 font-medium">Prefer direct flights only</span>
          <div
            onClick={() => setPrefersDirect(v => !v)}
            className={`w-10 h-6 rounded-full transition-colors duration-200 flex items-center px-1 shrink-0 ${prefersDirect ? "bg-sky-500" : "bg-gray-200"}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${prefersDirect ? "translate-x-4" : "translate-x-0"}`} />
          </div>
        </label>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-100 px-3 py-2.5 text-xs text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Actions */}
        <button
          type="submit"
          disabled={saving}
          className="mt-1 flex items-center justify-center gap-2 w-full rounded-xl bg-black py-3.5 text-sm font-bold text-white hover:bg-zinc-800 active:scale-[0.99] transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          {saving ? (
            <>
              <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Saving...
            </>
          ) : "Save Preferences"}
        </button>
      </form>

      {/* Skip footer */}
      <p className="text-center text-xs text-gray-400 px-5">
        Want to do this later?{" "}
        <button
          onClick={onSkip}
          className="font-semibold text-gray-900 hover:text-sky-500 transition-colors duration-150 cursor-pointer"
        >
          Skip for now
        </button>
      </p>
    </>
  );
}
