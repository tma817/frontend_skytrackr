import { WatchlistItem } from "@/services/watchlist.service";

interface WatchlistCardProps {
  item: WatchlistItem;
  onClick: () => void;
}

export function WatchlistCard({ item, onClick }: WatchlistCardProps) {
  const dropped = item.priceDiff < 0;
  const increased = item.priceDiff > 0;
  const statusColor = item.status === "price_dropped" ? "bg-emerald-500" : item.status === "price_increased" ? "bg-red-500" : "bg-slate-300";

  const totalSegments = item.segments?.length ?? 0;
  const inboundStartIndex = item.segments?.findIndex(s => s.arrival.iataCode === item.origin) ?? -1;
  const outboundCount = inboundStartIndex === -1 ? totalSegments : inboundStartIndex + 1;
  const outboundStops = outboundCount > 1 ? `${outboundCount - 1} ${outboundCount - 1 === 1 ? "stop" : "stops"}` : "Direct";

  return (
    <div onClick={onClick} className="px-5 py-4 flex items-center gap-4 cursor-pointer hover:bg-gray-100 transition-colors duration-150 rounded-lg">
      {item.airlineLogo ? (
        <img src={item.airlineLogo} alt={item.airlineName} className="h-8 w-8 object-contain shrink-0" />
      ) : (
        <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-[9px] font-black text-slate-400 shrink-0">
          {item.airlineName?.slice(0, 2).toUpperCase() ?? "–"}
        </div>
      )}

      <div className="flex-1 min-w-0">
        {/* Route */}
        <div className="flex items-center gap-1.5">
          <span className="text-base font-black text-slate-900">{item.origin}</span>
          <span className="text-slate-300 text-sm">→</span>
          <span className="text-base font-black text-slate-900">{item.destination}</span>
          <span className="text-[9px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded-full ml-1">{item.tripType === "round-trip" ? "Round Trip" : "One Way"}</span>
        </div>

        {/* Airline + stops */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-slate-400">{item.airlineName}</span>
          {totalSegments > 0 && (
            <>
              <span className="text-slate-200">·</span>
              <span className="text-[10px] text-slate-400">{outboundStops}</span>
            </>
          )}
        </div>

        {/* Departure */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[10px] font-semibold text-slate-500">Out</span>
          <span className="text-[10px] text-slate-400">{item.departureDate}</span>
          {item.departureTime && (
            <span className="text-[10px] font-bold text-slate-600">{item.departureTime}</span>
          )}
        </div>

        {/* Return */}
        {item.returnDate && (
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-semibold text-slate-500">Ret</span>
            <span className="text-[10px] text-slate-400">{item.returnDate}</span>
            {item.returnTime && (
              <span className="text-[10px] font-bold text-slate-600">{item.returnTime}</span>
            )}
          </div>
        )}
      </div>

      <div className="text-right shrink-0">
        <p className="text-base font-black text-slate-900">{item.currency} {item.currentPrice.toFixed(0)}</p>
        <p className="text-[10px] text-slate-400">{item.passengers} {item.passengers === 1 ? "passenger" : "passengers"}</p>
        {dropped && <p className="text-[10px] font-bold text-emerald-600">▼ {Math.abs(item.priceDiff).toFixed(0)}</p>}
        {increased && <p className="text-[10px] font-bold text-red-500">▲ {item.priceDiff.toFixed(0)}</p>}
        {!dropped && !increased && (
          <div className="flex items-center justify-end gap-1 mt-0.5">
            <div className={`h-1.5 w-1.5 rounded-full ${statusColor}`} />
            <span className="text-[10px] text-slate-400">No change</span>
          </div>
        )}
      </div>
    </div>
  );
}