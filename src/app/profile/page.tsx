"use client";

import { useState, useEffect } from "react";
import { authService } from "@/services/auth.service";
import { watchlistService, WatchlistItem } from "@/services/watchlist.service";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  // User state
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Watchlist preview
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [watchlistLoading, setWatchlistLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const u = await authService.getUser();
        if (u) {
          setUser(u);
          setFname(u.fname || "");
          setLname(u.lname || "");
          setPhone(u.phoneNumber || "");
        }
      } finally {
        setLoading(false);
      }

      try {
        const wl = await watchlistService.getWatchlist();
        setWatchlist(wl || []);
      } catch {
        // silently ignore — user may not be logged in yet
      } finally {
        setWatchlistLoading(false);
      }
    }
    load();
  }, []);

  async function handleSave() {
    setSaving(true);
    setSaveError(null);
    try {
      const updated = await authService.updateUser({ fname, lname, phoneNumber: phone });
      setUser(updated);
      setIsEditing(false);
    } catch {
      setSaveError("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function handleCancel() {
    setFname(user?.fname || "");
    setLname(user?.lname || "");
    setPhone(user?.phoneNumber || "");
    setSaveError(null);
    setIsEditing(false);
  }

  const initials = `${user?.fname?.[0] ?? ""}${user?.lname?.[0] ?? ""}`.toUpperCase() || "?";
  const fullName = user ? `${user.fname} ${user.lname}` : "–";

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/40 py-10 px-4">
      <div className="mx-auto max-w-3xl space-y-6">

        {/* ── Profile card ── */}
        <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">

          {/* Header band */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-8 flex items-center gap-6">
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-black shrink-0">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-black text-xl truncate">{fullName}</p>
              <p className="text-slate-300 text-sm mt-0.5 truncate">{user?.email}</p>
            </div>
            <span className={`shrink-0 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
              user?.isVerified
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                : "bg-amber-500/20 text-amber-300 border-amber-500/30"
            }`}>
              {user?.isVerified ? "Verified" : "Unverified"}
            </span>
          </div>

          {/* Fields */}
          <div className="px-8 py-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="First Name">
                {isEditing
                  ? <input value={fname} onChange={e => setFname(e.target.value)} className={inputCls} />
                  : <span className={viewCls}>{user?.fname || "–"}</span>}
              </Field>

              <Field label="Last Name">
                {isEditing
                  ? <input value={lname} onChange={e => setLname(e.target.value)} className={inputCls} />
                  : <span className={viewCls}>{user?.lname || "–"}</span>}
              </Field>

              <Field label="Email">
                <span className={`${viewCls} text-slate-400`}>{user?.email}</span>
              </Field>

              <Field label="Phone Number">
                {isEditing
                  ? <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 555 000 0000" className={inputCls} />
                  : <span className={viewCls}>{user?.phoneNumber || <span className="text-slate-300">Not set</span>}</span>}
              </Field>

              <Field label="Member Since">
                <span className={viewCls}>
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
                    : "–"}
                </span>
              </Field>
            </div>

            {saveError && (
              <p className="text-xs text-red-500 font-medium">{saveError}</p>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="rounded-xl bg-black px-6 py-2.5 text-sm font-bold text-white hover:opacity-80 disabled:opacity-50 transition-opacity"
                  >
                    {saving ? "Saving…" : "Save Changes"}
                  </button>
                  <button
                    onClick={handleCancel}
                    className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="rounded-xl border border-slate-200 px-6 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Watchlist summary ── */}
        <div className="rounded-2xl border bg-white shadow-sm">
          <div className="px-6 pt-5 pb-3 flex items-center justify-between border-b">
            <h2 className="text-sm font-black uppercase tracking-widest text-slate-700">Watchlist</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push("/orders")}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 transition-colors"
              >
                View booked flights →
              </button>
            </div>
          </div>

          <div className="p-6">
            {watchlistLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-black" />
              </div>
            ) : watchlist.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-sm text-slate-400">No flights in your watchlist yet.</p>
                <button
                  onClick={() => router.push("/")}
                  className="mt-3 text-xs font-bold text-slate-600 hover:underline"
                >
                  Search flights →
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-2 mb-4">
                  {watchlist.slice(0, 3).map((item) => (
                    <WatchlistRow key={item._id} item={item} />
                  ))}
                </div>
                <button
                  onClick={() => router.push("/watchlist")}
                  className="w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  {watchlist.length > 3
                    ? `Manage all ${watchlist.length} flights →`
                    : "Manage watchlist →"}
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

function WatchlistRow({ item }: { item: WatchlistItem }) {
  const dropped = item.priceDiff < 0;
  const increased = item.priceDiff > 0;

  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-3">
      {item.airlineLogo ? (
        <img src={item.airlineLogo} alt={item.airlineName} className="h-7 w-7 object-contain shrink-0" />
      ) : (
        <div className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center text-[9px] font-black text-slate-500 shrink-0">
          {item.airlineName?.slice(0, 2).toUpperCase() ?? "–"}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-slate-800">
          {item.origin} → {item.destination}
        </p>
        <p className="text-[10px] text-slate-400">{item.departureDate} · {item.tripType}</p>
      </div>
      <div className="text-right shrink-0">
        <p className="text-sm font-black text-cyan-700">
          {item.currency} {item.currentPrice.toFixed(0)}
        </p>
        {item.priceDiff !== 0 && (
          <p className={`text-[10px] font-bold ${dropped ? "text-emerald-600" : "text-red-500"}`}>
            {dropped ? "▼" : "▲"} {Math.abs(item.priceDiff).toFixed(0)}
          </p>
        )}
      </div>
    </div>
  );
}

const inputCls = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-800 outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition";
const viewCls = "text-sm font-medium text-slate-800";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>
      {children}
    </div>
  );
}
