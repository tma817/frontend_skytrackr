"use client";

import { useEffect, useState } from "react";
import {
  PiToiletFill,
  PiCookingPotFill,
  PiCoatHangerFill,
  PiPackageFill,
  PiQuestionFill
} from "react-icons/pi";


interface SeatMapProps{
    seatData: any;
    onSelectSeat: (seat: any) => void;
    allSelectedSeatsForSegment: Record<string, any>;
    activeTravelerId: string;
}

export default function SeatMap({seatData, onSelectSeat, allSelectedSeatsForSegment, activeTravelerId}: SeatMapProps) {
    const deck = seatData.decks[0];
    const { deckConfiguration, facilities, seats } = deck;
    const { width, startWingsX, endWingsX, exitRowsX = [] } = deckConfiguration;
    const hasWings = Number.isFinite(startWingsX) && Number.isFinite(endWingsX);

    const mySelectedNumber = allSelectedSeatsForSegment[activeTravelerId]?.number;
    const otherSelectedNumbers = Object.entries(allSelectedSeatsForSegment)
        .filter(([id]) => id !== activeTravelerId)
        .map(([, s]: [string, any]) => s?.number)
        .filter(Boolean);

    const [isCompact, setIsCompact] = useState(false);
    useEffect(() => {
        const check = () => setIsCompact(window.innerWidth < 640);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const colMinPx  = isCompact ? 28  : 45;
    const gapX      = isCompact ? 'gap-x-1'         : 'gap-x-2';
    const gapY      = isCompact ? 'gap-y-2'         : 'gap-y-3';
    const planePx   = isCompact ? 'px-2'            : 'px-6';
    const planePy   = isCompact ? 'py-8'            : 'py-16';
    const planeBdr  = isCompact ? 'border-x-[8px]'  : 'border-x-[16px]';
    const planeRnd  = isCompact ? 'rounded-t-[70px]': 'rounded-t-[140px]';
    const seatH     = isCompact ? 'h-10'            : 'h-14';
    const seatW     = isCompact ? 'w-8'             : 'w-11';
    const seatTxt   = isCompact ? 'text-[8px]'      : 'text-[11px]';
    const wingOff   = isCompact ? 55                : 105;
    const wingW     = isCompact ? 40                : 80;
    const exitOff   = isCompact ? 'left-[-28px] right-[-28px]' : 'left-[-44px] right-[-44px]';

    return (
        <div className="flex flex-col items-center py-6 sm:py-10 font-sans">
            <div className={`relative ${planeBdr} border-gray-200 ${planeRnd} rounded-b-3xl ${planePx} ${planePy} shadow-2xl`}>
                <div
                    className={`grid ${gapX} ${gapY} relative`}
                    style={{
                        gridTemplateColumns: `repeat(${width}, minmax(${colMinPx}px, 1fr))`
                    }}
                >
                    {hasWings && (
                    <div
                        className="absolute bg-slate-200 border-slate-300 rounded-l-full flex items-center justify-center"
                        style={{
                            left: `-${wingOff}px`,
                            gridRowStart: startWingsX + 1,
                            gridRowEnd: endWingsX + 2,
                            gridColumn: 1,
                            width: `${wingW}px`,
                            height: '100%',
                            zIndex: 0
                        }}
                    >
                        <span className="rotate-90 text-[8px] font-black text-slate-400 uppercase">Wing</span>
                    </div>
                    )}

                    {hasWings && (
                    <div
                        className="absolute bg-slate-200 border-slate-300 rounded-r-full flex items-center justify-center"
                        style={{
                            right: `-${wingOff}px`,
                            gridRowStart: startWingsX + 1,
                            gridRowEnd: endWingsX + 2,
                            gridColumn: width,
                            width: `${wingW}px`,
                            height: '100%',
                            zIndex: 0
                        }}
                    >
                        <span className="-rotate-90 text-[8px] font-black text-slate-400 uppercase">Wing</span>
                    </div>
                    )}

                    {exitRowsX.map((rowX: number) => (
                        <div
                            key={`exit-${rowX}`}
                            className={`absolute flex ${exitOff} justify-between items-center pointer-events-none`}
                            style={{
                                gridRow: rowX + 1,
                                gridColumn: `1 / span ${width}`,
                                zIndex: 20
                            }}
                        >
                            <span className="-rotate-90 text-red-500 font-black text-[9px] bg-white px-0.5">EXIT</span>
                            <span className="rotate-90 text-red-500 font-black text-[9px] bg-white px-0.5">EXIT</span>
                        </div>
                    ))}

                    {facilities?.map((fac: any, i: number) => {
                        const getFacDetail = (code: string) => {
                            switch(code) {
                                case 'LA': return { Icon: PiToiletFill,    label: 'Lavatory', color: 'text-blue-200' };
                                case 'G':  return { Icon: PiCookingPotFill,label: 'Galley',   color: 'text-gray-200' };
                                case 'CL': return { Icon: PiCoatHangerFill,label: 'Closet',   color: 'text-orange-200' };
                                case 'SO': return { Icon: PiPackageFill,   label: 'Storage',  color: 'text-gray-200' };
                                default:   return { Icon: PiQuestionFill,  label: code,       color: 'text-slate-100' };
                            }
                        };

                        const { Icon, label, color } = getFacDetail(fac.code);
                        const facRow = fac.coordinates?.x;
                        const facCol = fac.coordinates?.y;
                        if (!Number.isFinite(facRow) || !Number.isFinite(facCol)) return null;
                        return (
                            <div
                                key={`fac-${i}`}
                                className="flex items-center justify-center z-10 p-[2px]"
                                style={{
                                    gridRow: facRow + 1,
                                    gridColumn: facCol + 1,
                                    width: '100%',
                                    height: '100%',
                                }}
                                title={label}
                            >
                                <Icon
                                    className={`${color} transition-colors`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        maxWidth: isCompact ? '26px' : '35px',
                                        maxHeight: isCompact ? '26px' : '35px',
                                    }}
                                />
                            </div>
                        );
                    })}

                    {seats.map((seat: any) => {
                        const pricing = seat.travelerPricing?.[0];
                        const isAvailable = pricing?.seatAvailabilityStatus !== 'OCCUPIED';
                        const isSelectedByMe = seat.number === mySelectedNumber;
                        const isSelectedByOther = otherSelectedNumbers.includes(seat.number);
                        const isDisabled = !isAvailable || isSelectedByOther;
                        return (
                            <button
                                key={seat.number}
                                disabled={isDisabled}
                                onClick={() => onSelectSeat(seat)}
                                className={`
                                    relative ${seatH} ${seatW} rounded-t-xl transition-all duration-300 flex flex-col items-center justify-center
                                    border-b-4 ${seatTxt} font-bold z-10
                                    ${!isAvailable
                                        ? 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed'
                                        : isSelectedByOther
                                            ? 'bg-amber-200 border-amber-400 text-amber-700 cursor-not-allowed'
                                            : isSelectedByMe
                                                ? 'bg-blue-600 border-blue-800 text-white scale-110 shadow-xl'
                                                : 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300'
                                    }
                                `}
                                style={{
                                    gridRow: seat.coordinates.x + 1,
                                    gridColumn: seat.coordinates.y + 1
                                }}
                            >
                                {seat.number}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-[10px] font-bold uppercase text-gray-500">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-white border rounded"></div> Available</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-200 rounded"></div> Occupied</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-amber-200 border border-amber-400 rounded"></div> Taken</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-600 rounded"></div> Your Seat</div>
            </div>
        </div>
    );
}
