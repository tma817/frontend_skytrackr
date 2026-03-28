"use client";

import { useState, useEffect } from "react";
import { authService } from "@/services/auth.service";
import { watchlistService, WatchlistItem } from "@/services/watchlist.service";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { API_BASE } from "@/utils/api";
import money from "@/utils/money";
import { WatchlistCard } from "@/components/watchlist/WatchlistCard";

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
                <div className="divide-y divide-slate-100 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
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
				<div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100 max-h-[400px] overflow-y-auto">
				{watchlist.map((item) => (
					<WatchlistCard key={item._id} item={item} onClick={() => handleClicked(item)} />
				))}
				</div>
              )}
            </section>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="col-span-12 lg:col-span-5 sticky top-8">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

              {/* Avatar header */}
              <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }} className="px-6 py-6 flex items-center gap-4">
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
