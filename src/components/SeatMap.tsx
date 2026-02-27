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
    selectedSeatNumber?: string;
}

export default function SeatMap({seatData, onSelectSeat, selectedSeatNumber}: SeatMapProps) {
    const deck = seatData[0].decks[0];
    const { deckConfiguration, facilities, seats } = deck;
    const { width, startWingsRow, endWingsRow, exitRowsX } = deckConfiguration;

    return (
        <div className="flex flex-col items-center py-10 min-h-screen font-sans overflow-hidden">
            <div className="relative border-x-[16px] border-gray-200 rounded-t-[140px] rounded-b-3xl px-6 py-16 shadow-2xl">
                <div 
                    className="grid gap-x-2 gap-y-3 relative"
                    style={{ 
                        gridTemplateColumns: `repeat(${width}, minmax(45px, 1fr))` 
                    }}
                >
                    <div 
                        className="absolute -left-[105px] bg-slate-200 border-slate-300 rounded-l-full flex items-center justify-center"
                        style={{
                            gridRowStart: startWingsRow + 1,
                            gridRowEnd: endWingsRow + 2,
                            gridColumn: 1, 
                            width: '80px',
                            height: '100%',
                            zIndex: 0 
                        }}
                    >
                        <span className="rotate-90 text-[9px] font-black text-slate-400 uppercase">Wing</span>
                    </div>

                    <div 
                        className="absolute -right-[105px] bg-slate-200 border-slate-300 rounded-r-full flex items-center justify-center"
                        style={{
                            gridRowStart: startWingsRow + 1,
                            gridRowEnd: endWingsRow + 2,
                            gridColumn: width,
                            width: '80px',
                            height: '100%',
                            zIndex: 0
                        }}
                    >
                        <span className="-rotate-90 text-[9px] font-black text-slate-400 uppercase">Wing</span>
                    </div>

                    {exitRowsX.map((rowX: number) => (
                        <div 
                            key={`exit-${rowX}`}
                            className="absolute flex -left-11 -right-11 justify-between items-center pointer-events-none"
                            style={{ 
                                gridRow: rowX + 1,      
                                gridColumn: `1 / span ${width}`,
                                zIndex: 20 
                            }}
                        >
                            <div className="flex items-center">
                                <span className="-rotate-90 text-red-500 font-black text-[10px] bg-white px-1">EXIT</span>
                            </div>
                            
                            <div className="flex items-center">
                                <span className="rotate-90 text-red-500 font-black text-[10px] bg-white px-1">EXIT</span>
                            </div>
                        </div>
                    ))}

                    {facilities.map((fac: any, i: number) => {
                        const getFacDetail = (code: string) => {
                            switch(code) {
                                case 'LA': return { 
                                    Icon: PiToiletFill, 
                                    label: 'Lavatory', 
                                    color: 'text-blue-200' 
                                };
                                case 'G':  return { 
                                    Icon: PiCookingPotFill, 
                                    label: 'Galley', 
                                    color: 'text-gray-200' 
                                };
                                case 'CL': return { 
                                    Icon: PiCoatHangerFill, 
                                    label: 'Closet', 
                                    color: 'text-orange-200' 
                                };
                                case 'SO': return { 
                                    Icon: PiPackageFill, 
                                    label: 'Storage', 
                                    color: 'text-gray-200' 
                                };
                                default:   return { 
                                    Icon: PiQuestionFill, 
                                    label: code, 
                                    color: 'text-slate-100' 
                                };
                            }
                        };

                        const { Icon, label, color } = getFacDetail(fac.code);
                        return (
                            <div
                                key={`fac-${i}`}
                                className="flex items-center justify-center z-10 p-[2px]"
                                style={{
                                    gridRow: fac.coordinates.x + 1,
                                    gridColumn: fac.coordinates.y + 1,
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
                                        maxWidth: '35px',
                                        maxHeight: '35px'
                                    }} 
                                />
                            </div>
                        );
                    })}

                    {seats.map((seat: any) => {
                        const pricing = seat.travelerPricing[0];
                        const isAvailable = pricing.seatAvailabilityStatus === 'AVAILABLE';
                        const isSelected = selectedSeatNumber === seat.number;
                        return (
                            <button
                                key={seat.number}
                                disabled={!isAvailable}
                                onClick={() => {
                                    onSelectSeat(seat)
                                    selectedSeatNumber = seat.number
                                }}
                                className={`
                                    relative h-14 w-11 rounded-t-xl transition-all duration-300 flex flex-col items-center justify-center
                                    border-b-4 text-[11px] font-bold z-10
                                    ${!isAvailable 
                                        ? 'bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed'
                                        : isSelected
                                            ? 'bg-blue-600 border-blue-800 text-white scale-110 shadow-xl'
                                                : 'bg-white border-gray-300 text-gray-700'
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


            <div className="mt-8 flex gap-4 text-[10px] font-bold uppercase text-gray-500">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-white border rounded"></div> Empty</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-200 rounded"></div> Booked</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-600 rounded"></div> Current Sel ected</div>
            </div>


            {/* {selectedSeat && (
                <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex justify-center items-center gap-10 animate-in slide-in-from-bottom-full duration-500 z-50">
                    <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Selected Seat</span>
                        <span className="text-3xl font-black text-blue-600 leading-none">{selectedSeat}</span>
                    </div>
                    <div className="h-10 w-[1px] bg-gray-200" />
                    <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Total</span>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-2xl font-black text-sm shadow-lg shadow-blue-200 active:scale-95 transition-all uppercase">
                        Continue Booking
                    </button>
                </div>
            )} */}
        </div>
    );
}
