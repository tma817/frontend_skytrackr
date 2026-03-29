"use client"
import { useState, useEffect } from "react"
import SeatMap from "@/components/SeatMap"
import { useBookingStore } from "@/store/useBookingStore"
import BookingSummary from "@/components/BookingSummary"
import money from "@/utils/money"
import { useSearchParams, useRouter } from "next/navigation"
import { API_BASE } from "@/utils/api"

function UserIcon({ active }: { active: boolean }) {
  return (
    <svg className={`h-7 w-7 ${active ? "text-sky-500" : "text-slate-300"}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  );
}

export default function SeatPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { travelers, selectedSeats, updateSeatSelection, clearSeats } = useBookingStore();
  const [activeTravelerId, setActiveTravelerId] = useState<string>(travelers[0]?.id || "1");
  const [activeSegmentIdx, setActiveSegmentIdx] = useState(0);

  const [seatMapData, setSeatMapData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchId = searchParams.get("searchId");
  const flightId = searchParams.get("flightId");

  useEffect(() => {
    if (!searchId || !flightId) {
      setError("Missing searchId or flightId");
      setLoading(false);
      return;
    }
    fetch(`${API_BASE}/flights/seat-map?searchId=${searchId}&flightId=${flightId}`)
      .then(res => {
        if (!res.ok) throw new Error(`Seat map unavailable (${res.status})`);
        return res.json();
      })
      .then(data => setSeatMapData(Array.isArray(data) ? data : []))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [searchId, flightId]);

  const handleSubmit = (skip = false) => {
    if (skip) clearSeats();
    const pax = searchParams.get("pax");
    router.push(`/checkout/payment?searchId=${searchId}&flightId=${flightId}&pax=${pax}`);
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center gap-3">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-200 border-t-slate-900" />
        <span className="text-sm font-medium text-slate-500">Loading seat map…</span>
      </div>
    );
  }

  if (error || seatMapData.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-5">
        <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center">
          <svg className="h-7 w-7 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold text-slate-700">No seat map available</p>
          <p className="text-xs text-slate-400 mt-1">{error || "This flight doesn't support seat pre-selection."}</p>
        </div>
        <button
          onClick={() => handleSubmit(true)}
          className="rounded-2xl bg-slate-900 px-8 py-3.5 text-sm font-black text-white uppercase tracking-widest hover:bg-black transition-all"
        >
          Skip & Continue →
        </button>
      </div>
    );
  }

  const currentSegmentMap = seatMapData[activeSegmentIdx];
  const currentSegmentId = currentSegmentMap.segmentId;

  const handleSeatSelect = (seat: any) => {
    // Prevent stealing a seat already picked by another traveler
    const takenByOther = Object.entries(selectedSeats[currentSegmentId] || {}).some(
      ([travelerId, s]: [string, any]) => travelerId !== activeTravelerId && s?.number === seat.number
    );
    if (takenByOther) return;

    const currentSeat = selectedSeats[currentSegmentId]?.[activeTravelerId];
    if (currentSeat?.number === seat.number) {
      updateSeatSelection(currentSegmentId, activeTravelerId, null);
      return;
    }
    updateSeatSelection(currentSegmentId, activeTravelerId, seat);
    const nextTraveler = travelers.find(t => {
      if (t.id === activeTravelerId) return false;
      return !selectedSeats[currentSegmentId]?.[t.id];
    });
    if (nextTraveler) {
      setActiveTravelerId(nextTraveler.id);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">

      <div className="mb-6">
        <h1 className="text-2xl font-black text-slate-900">Choose Your Seats</h1>
        <p className="text-sm text-slate-400 mt-1">Select a seat for each passenger</p>
      </div>

      <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">

        {/* Seat map panel */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

          {/* Segment tabs */}
          {seatMapData.length > 1 && (
            <div className="flex border-b border-slate-100">
              {seatMapData.map((sm, index) => {
                const isActive = activeSegmentIdx === index;
                return (
                  <button
                    key={sm.segmentId}
                    onClick={() => {
                      setActiveSegmentIdx(index);
                      setActiveTravelerId(travelers[0]?.id);
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-black uppercase tracking-widest transition-all border-r last:border-r-0 border-slate-100 ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {sm.departure.iataCode} → {sm.arrival.iataCode}
                  </button>
                );
              })}
            </div>
          )}

          {seatMapData.length === 1 && (
            <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-100 bg-slate-50">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Segment</span>
              <span className="text-sm font-black text-slate-900">
                {currentSegmentMap.departure.iataCode} → {currentSegmentMap.arrival.iataCode}
              </span>
            </div>
          )}

			<div className="overflow-x-auto">
				<div className="min-w-[520px] mx-auto">
					<SeatMap
					seatData={currentSegmentMap}
					onSelectSeat={handleSeatSelect}
					allSelectedSeatsForSegment={selectedSeats[currentSegmentId] || {}}
					activeTravelerId={activeTravelerId}
					/>
				</div>
			</div>
        </div>

        {/* Right column */}
        <div className="col-span-12 lg:col-span-4 space-y-5 lg:sticky lg:top-8">

          {/* Traveler selector */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-100">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Select Traveller</span>
            </div>
            <div className="p-4 space-y-3">
              {travelers.map((t) => {
                const hasSeat = selectedSeats[currentSegmentId]?.[t.id];
                const seatPrice = hasSeat?.travelerPricing?.[0]?.price?.total;
                const seatCurrency = hasSeat?.travelerPricing?.[0]?.price?.currency;
                const isActive = activeTravelerId === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTravelerId(t.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all border-2 ${
                      isActive
                        ? "border-sky-500 bg-sky-50/40"
                        : "border-slate-100 hover:border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-left">
                      <UserIcon active={isActive} />
                      <div>
                        <p className="text-sm font-bold text-slate-900 uppercase">{t.firstName} {t.lastName}</p>
                        <p className={`text-[10px] font-black uppercase tracking-wide ${hasSeat ? "text-emerald-500" : "text-slate-400"}`}>
                          {hasSeat ? `Seat ${hasSeat.number}` : "No seat selected"}
                        </p>
                      </div>
                    </div>
                    {hasSeat && seatPrice && (
                      <div className="text-right">
                        <p className="text-xs font-black text-sky-600">+{money(parseFloat(seatPrice), seatCurrency)}</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <BookingSummary
            buttonText="Proceed to Payment"
            onContinue={() => handleSubmit(false)}
          />

          <button
            onClick={() => handleSubmit(true)}
            className="w-full text-xs font-bold text-slate-400 hover:text-slate-600 py-2 transition-colors"
          >
            Skip seat selection
          </button>
        </div>
      </div>
    </div>
  );
}
