// "use client"
// import { useRouter } from "next/navigation";
// import { FlightResult } from "../lib/demoFlights";

// type WatchlistCardProps = {
//   FlightResult: FlightResult;
// };

// export default function WatchlistCard({ FlightResult }: WatchlistCardProps) {
// 	const router = useRouter();

// 	const goTicket = (flightId: string) => {
// 		const qs = new URLSearchParams({
// 			from: FlightResult.from,
// 			to: FlightResult.to,
// 			date: FlightResult.date,
// 			pax: String(FlightResult.pax),
// 		});
// 		router.push(`/ticket/${flightId}?${qs.toString()}`);
// 	};

// 	return (
// 		<button
// 			key={f.id}
// 			type="button"
// 			onClick={() => goTicket(f.id)}
// 			className="w-full text-left"
// 		>
// 			<div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-4 shadow-sm hover:border-gray-300 hover:shadow transition">
// 				<div className="flex items-center gap-3">
// 					{/* {airlineBadge(f.airline)} */}

// 					<div>
// 						<div className="flex items-center gap-2">
// 							<div className="text-sm font-semibold text-gray-900">
// 								{FlightResult.duration}
// 							</div>
// 							<div className="text-sm text-gray-700">
// 								{FlightResult.airline}
// 							</div>
// 						</div>

// 						<div className="mt-1 text-xs text-gray-500">
// 							{FlightResult.tag ? FlightResult.tag : ""}
// 						</div>
// 					</div>
// 				</div>

// 				<div className="text-sm text-gray-700">{FlightResult.time}</div>

// 				<div className="text-right">
// 					<div className="text-xs text-gray-600">{FlightResult.stops}</div>
// 					<div className="text-xs text-gray-400">{FlightResult.note ?? ""}</div>
// 				</div>

// 				<div className="text-right">
// 					<div className="text-sm font-semibold text-gray-900">
// 						${FlightResult.price.toLocaleString()}
// 					</div>
// 					<div className="text-xs text-gray-400">round trip</div>
// 				</div>
// 			</div>
// 		</button>
// 	);
// }
