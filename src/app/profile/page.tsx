"use client";

import { useState, useEffect } from "react";
import { authService } from "@/services/auth.service";
import { watchlistService, WatchlistItem } from "@/services/watchlist.service";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { API_BASE } from "@/utils/api";
import { getDecodedToken } from "@/utils/auth-helpers";
import money from "@/utils/money";
import AirportInput from "@/components/AirportInput";
import { WatchlistCard } from "@/components/watchlist/WatchlistCard";

const CABINS = ["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"] as const;
type Prefs = {
  homeAirport?: string;
  budgetMax?: number;
  flexibility?: number;
  prefersDirect?: boolean;
  preferredCabin?: string;
};

type BookingSummary = {
  _id: string;
  status: string;
  totalPrice: string;
  currency: string;
  flightOffer: any;
  createdAt: string;
};

async function fetchBooking(id: string): Promise<BookingSummary | null> {
  try {
    const res = await fetch(`${API_BASE}/bookings/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [bookings, setBookings] = useState<BookingSummary[]>([]);

  // Preferences state
  const [prefs, setPrefs] = useState<Prefs | null>(null);
  const [isEditingPrefs, setIsEditingPrefs] = useState(false);
  const [prefHomeAirport, setPrefHomeAirport] = useState("");
  const [prefHomeAirportDisplay, setPrefHomeAirportDisplay] = useState("");
  const [prefBudgetMax, setPrefBudgetMax] = useState("");
  const [prefFlexibility, setPrefFlexibility] = useState("0");
  const [prefPrefersDirect, setPrefPrefersDirect] = useState(false);
  const [prefCabin, setPrefCabin] = useState("ECONOMY");
  const [prefSaving, setPrefSaving] = useState(false);
  const [prefError, setPrefError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const u = await authService.getUser();
        if (u) { setUser(u); setFname(u.fname || ""); setLname(u.lname || ""); setPhone(u.phoneNumber || ""); }
      } finally { setLoading(false); }
      try { const wl = await watchlistService.getWatchlist(); setWatchlist(wl || []); } catch {}
      const ids: string[] = JSON.parse(localStorage.getItem("skytrackr_orders") || "[]");
      if (ids.length > 0) {
        const results = await Promise.all(ids.slice(0, 3).map(fetchBooking));
        setBookings(results.filter(Boolean) as BookingSummary[]);
      }
      try {
        const email = getDecodedToken()?.email;
        if (email) {
          const res = await fetch(`${API_BASE}/users/${email}/preferences`);
          if (res.ok) {
            const p = await res.json();
            if (p) {
              setPrefs(p);
              setPrefHomeAirport(p.homeAirport || "");
              setPrefHomeAirportDisplay(p.homeAirport || "");
              setPrefBudgetMax(p.budgetMax != null ? String(p.budgetMax) : "");
              setPrefFlexibility(p.flexibility != null ? String(p.flexibility) : "0");
              setPrefPrefersDirect(p.prefersDirect ?? false);
              setPrefCabin(p.preferredCabin || "ECONOMY");
            }
          }
        }
      } catch {}
    }
    load();
  }, []);

  async function handleSave() {
    setSaving(true); setSaveError(null);
    try { const updated = await authService.updateUser({ fname, lname, phoneNumber: phone }); setUser(updated); setIsEditing(false); }
    catch { setSaveError("Failed to save."); }
    finally { setSaving(false); }
  }

  function handleClicked(item: WatchlistItem) {
	const qs = new URLSearchParams({
		searchId: item.searchId,
		from: item.origin,
		to: item.destination,
		tripType: item.tripType === "round-trip" ? "roundtrip" : "oneway",
		departure: item.departureDate,
		return: item.returnDate,
		numOfPassengers: String(Math.max(1, parseInt(String(item.passengers)) || 1)),
	});
	router.push(`/ticket/${item.flightId}?${qs.toString()}`);
	}


  function handleCancel() { setFname(user?.fname || ""); setLname(user?.lname || ""); setPhone(user?.phoneNumber || ""); setSaveError(null); setIsEditing(false); }

  async function handleSavePrefs() {
    const email = getDecodedToken()?.email;
    if (!email) return;
    setPrefSaving(true); setPrefError(null);
    try {
      const payload: Record<string, any> = {
        prefersDirect: prefPrefersDirect,
        preferredCabin: prefCabin,
        flexibility: parseInt(prefFlexibility) || 0,
      };
      if (prefHomeAirport.trim()) payload.homeAirport = prefHomeAirport.trim().toUpperCase();
      if (prefBudgetMax.trim()) payload.budgetMax = parseFloat(prefBudgetMax);
      const res = await fetch(`${API_BASE}/users/${email}/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setPrefs(updated);
      setIsEditingPrefs(false);
    } catch { setPrefError("Failed to save preferences."); }
    finally { setPrefSaving(false); }
  }

  function handleCancelPrefs() {
    setPrefHomeAirport(prefs?.homeAirport || "");
    setPrefHomeAirportDisplay(prefs?.homeAirport || "");
    setPrefBudgetMax(prefs?.budgetMax != null ? String(prefs.budgetMax) : "");
    setPrefFlexibility(prefs?.flexibility != null ? String(prefs.flexibility) : "0");
    setPrefPrefersDirect(prefs?.prefersDirect ?? false);
    setPrefCabin(prefs?.preferredCabin || "ECONOMY");
    setPrefError(null);
    setIsEditingPrefs(false);
  }

  const initials = `${user?.fname?.[0] ?? ""}${user?.lname?.[0] ?? ""}`.toUpperCase() || "?";

  if (loading) return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F7F8FA] py-10 px-4">
      <div className="mx-auto max-w-5xl">

        <div className="grid grid-cols-12 gap-6 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="col-span-12 lg:col-span-7 space-y-6">

            {/* Orders */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-black text-slate-900">Recent Orders</p>
                <Link href="/orders" className="text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors">View all</Link>
              </div>

              {bookings.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-sm text-slate-400">No bookings yet.</p>
                  <Link href="/" className="mt-2 inline-block text-xs font-bold text-slate-600 hover:underline">Search flights</Link>
                </div>
              ) : (
                <div className="divide-y divide-slate-100 bg-white rounded-2xl border shadow-sm overflow-hidden">
                  {bookings.map((booking) => {
                    const itineraries = booking.flightOffer?.itineraries ?? [];
                    const firstSeg = itineraries[0]?.segments?.[0];
                    const lastItin = itineraries[itineraries.length - 1];
                    const lastSeg = lastItin?.segments?.[lastItin.segments.length - 1];
                    const depCode = firstSeg?.departure?.iataCode ?? "—";
                    const arrCode = lastSeg?.arrival?.iataCode ?? "—";
                    const depDate = firstSeg?.departure?.at
                      ? new Date(firstSeg.departure.at).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })
                      : "—";

                    return (
                      <Link key={booking._id} href={`/booking/${booking._id}`} className="flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors">
                        <div>
                          <p className="text-sm font-black text-slate-900">
                            {depCode} <span className="text-slate-300 font-normal mx-1">·</span> {arrCode}
                          </p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{depDate}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-slate-900">{money(parseFloat(booking.totalPrice || "0"), booking.currency)}</p>
                          <span className="text-[10px] font-black text-emerald-600 uppercase">{booking.status}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Watchlist */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-baseline gap-2">
                  <p className="text-sm font-black text-slate-900">Watchlist</p>
                  {watchlist.length > 0 && <span className="text-xs text-slate-400">{watchlist.length} tracked</span>}
                </div>
                {watchlist.length > 0 && (
                  <Link href="/watchlist" className="text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors">Manage</Link>
                )}
              </div>

              {watchlist.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-sm text-slate-400">No flights watched.</p>
                  <Link href="/" className="mt-2 inline-block text-xs font-bold text-slate-600 hover:underline">Search flights</Link>
                </div>
              ) : (
				<div className="bg-white rounded-2xl border shadow-sm overflow-hidden max-h-[400px]">
					<div className="overflow-y-auto subtle-scrollbar max-h-[400px] divide-y divide-slate-100">
						{watchlist.map((item) => (
						<WatchlistCard key={item._id} item={item} onClick={() => handleClicked(item)} />
						))}
					</div>
				</div>
              )}
            </section>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="col-span-12 lg:col-span-5 sticky top-8 space-y-6">
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

              {/* Avatar header */}
              <div className="px-6 py-6 flex items-center gap-4 bg-black">
                <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white text-lg font-black shrink-0">
                  {initials}
                </div>
                <div className="min-w-0">
                  <p className="text-white font-black text-base truncate">{user?.fname} {user?.lname}</p>
                  <p className="text-white/50 text-xs truncate mt-0.5">{user?.email}</p>
                </div>
                <span className={`ml-auto shrink-0 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                  user?.isVerified ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
                }`}>
                  {user?.isVerified ? "Verified" : "Unverified"}
                </span>
              </div>

              {/* Fields */}
              <div className="px-6 py-5 space-y-4">
                <ProfileRow label="First Name">
                  {isEditing ? <input value={fname} onChange={e => setFname(e.target.value)} className={inputCls} /> : <span className={valueCls}>{user?.fname || "–"}</span>}
                </ProfileRow>
                <ProfileRow label="Last Name">
                  {isEditing ? <input value={lname} onChange={e => setLname(e.target.value)} className={inputCls} /> : <span className={valueCls}>{user?.lname || "–"}</span>}
                </ProfileRow>
                <ProfileRow label="Phone">
                  {isEditing ? <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 555 000 0000" className={inputCls} /> : <span className={valueCls}>{user?.phoneNumber || <span className="text-slate-300">Not set</span>}</span>}
                </ProfileRow>
                <ProfileRow label="Member Since">
                  <span className={valueCls}>
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "–"}
                  </span>
                </ProfileRow>
              </div>

              {saveError && <p className="px-6 pb-2 text-xs text-red-500">{saveError}</p>}

              {/* Actions */}
              <div className="px-6 pb-5">
                {isEditing ? (
                  <div className="flex gap-2">
                    <button onClick={handleSave} disabled={saving} className="flex-1 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:opacity-80 disabled:opacity-50 transition-opacity">
                      {saving ? "Saving…" : "Save"}
                    </button>
                    <button onClick={handleCancel} className="flex-1 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setIsEditing(true)} className="w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                    Edit Profile
                  </button>
                )}
              </div>

            </div>

            {/* ── Travel Preferences Card ── */}
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
              <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
                <p className="text-sm font-black text-slate-900">Travel Preferences</p>
                {!isEditingPrefs && (
                  <button onClick={() => setIsEditingPrefs(true)} className="text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors">
                    Edit
                  </button>
                )}
              </div>

              <div className="px-6 py-5 space-y-4">
                {isEditingPrefs ? (
                  <>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Home Airport</label>
                      <div className="border border-slate-200 rounded-lg px-3 py-1.5 focus-within:border-slate-400 transition">
                        <AirportInput
                          value={prefHomeAirportDisplay}
                          onChange={(iata, display) => {
                            setPrefHomeAirport(iata);
                            setPrefHomeAirportDisplay(display);
                          }}
                          placeholder="Search airport..."
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Max Budget (CAD)</label>
                      <input type="number" min={0} value={prefBudgetMax} onChange={e => setPrefBudgetMax(e.target.value)} placeholder="e.g. 600"
                        className={inputCls} />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date Flexibility</label>
                      <select value={prefFlexibility} onChange={e => setPrefFlexibility(e.target.value)}
                        className="border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-800 outline-none focus:border-slate-400 bg-white text-right">
                        <option value="0">Exact date</option>
                        <option value="1">±1 day</option>
                        <option value="2">±2 days</option>
                        <option value="3">±3 days</option>
                        <option value="7">±1 week</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Preferred Cabin</label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {CABINS.map(c => (
                          <button key={c} type="button" onClick={() => setPrefCabin(c)}
                            className={`rounded-lg border py-1.5 text-[11px] font-bold transition ${prefCabin === c ? "bg-slate-900 border-slate-900 text-white" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                            {c.replace("_", " ")}
                          </button>
                        ))}
                      </div>
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                      <div onClick={() => setPrefPrefersDirect(v => !v)}
                        className={`w-9 h-5 rounded-full transition-colors flex items-center px-0.5 ${prefPrefersDirect ? "bg-slate-900" : "bg-slate-200"}`}>
                        <div className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${prefPrefersDirect ? "translate-x-4" : "translate-x-0"}`} />
                      </div>
                      <span className="text-xs font-medium text-slate-700">Prefer direct flights</span>
                    </label>
                    {prefError && <p className="text-xs text-red-500">{prefError}</p>}
                    <div className="flex gap-2 pt-1">
                      <button onClick={handleSavePrefs} disabled={prefSaving}
                        className="flex-1 rounded-xl bg-slate-900 py-2.5 text-xs font-bold text-white hover:opacity-80 disabled:opacity-50 transition-opacity">
                        {prefSaving ? "Saving…" : "Save"}
                      </button>
                      <button onClick={handleCancelPrefs}
                        className="flex-1 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">
                        Cancel
                      </button>
                    </div>
                  </>
                ) : prefs ? (
                  <>
                    <ProfileRow label="Home Airport"><span className={valueCls}>{prefs.homeAirport || <span className="text-slate-300">Not set</span>}</span></ProfileRow>
                    <ProfileRow label="Max Budget"><span className={valueCls}>{prefs.budgetMax != null ? `$${prefs.budgetMax} CAD` : <span className="text-slate-300">Not set</span>}</span></ProfileRow>
                    <ProfileRow label="Flexibility"><span className={valueCls}>{prefs.flexibility ? `±${prefs.flexibility} day${prefs.flexibility > 1 ? "s" : ""}` : "Exact date"}</span></ProfileRow>
                    <ProfileRow label="Cabin"><span className={valueCls}>{(prefs.preferredCabin || "ECONOMY").replace("_", " ")}</span></ProfileRow>
                    <ProfileRow label="Direct Only"><span className={valueCls}>{prefs.prefersDirect ? "Yes" : "No"}</span></ProfileRow>
                  </>
                ) : (
                  <div className="py-4 text-center">
                    <p className="text-sm text-slate-400">No preferences set.</p>
                    <button onClick={() => setIsEditingPrefs(true)} className="mt-2 text-xs font-bold text-slate-600 hover:underline">Set up now</button>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

function ProfileRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 shrink-0">{label}</span>
      <div className="text-right">{children}</div>
    </div>
  );
}

const inputCls = "w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-800 outline-none focus:border-slate-400 transition text-right";
const valueCls = "text-sm font-semibold text-slate-800";
