// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { useRouter, useSearchParams, useParams } from "next/navigation";
// import { FlightResult, mapFlightOfferToFlightResult } from "@/app/types/flight";
// import { toTitleCase } from "@/app/helpers/helpers";

// export default function TicketDetailPage() {
// 	const router = useRouter();
// 	const searchParams = useSearchParams();
// 	const params = useParams<{ id: string }>();
// 	const [flight, setFlight] = useState<FlightResult | null>(null);
// 	const [loading, setLoading] = useState(true);

// 	const id = params?.id;
// 	const searchId = searchParams.get("searchId");
// 	const from = searchParams.get("from") ?? "";
// 	const to = searchParams.get("to") ?? "";
// 	const date = searchParams.get("date") ?? "";
// 	const pax = searchParams.get("pax") ?? "1";

// 	useEffect(() => {
// 		async function fetchTicketDetail() {
// 			if (!id || !searchId) {
// 				setLoading(false);
// 				return;
// 			}

// 			try {
// 				setLoading(true);
// 				const res = await fetch(
// 					`http://localhost:3000/flights/${id}?searchId=${searchId}`,
// 				);

// 				if (!res.ok) throw new Error("Failed to fetch flight detail");

// 				const data = await res.json();
// 				console.log(data);
// 				setFlight(mapFlightOfferToFlightResult(data));
// 			} catch (error) {
// 				console.error("Error fetching ticket:", error);
// 			} finally {
// 				setLoading(false);
// 			}
// 		}

// 		fetchTicketDetail();
// 	}, [id, searchId]);

// 	const goBackToSearch = () => {
// 		const qs = new URLSearchParams({ from, to, date, pax });
// 		router.push(`/search?${qs.toString()}`);
// 	};

// 	if (loading) {
// 		return (
// 			<div className="flex min-h-screen items-center justify-center">
// 				<div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black"></div>
// 				<span className="ml-3 text-sm font-medium">
// 					Loading ticket details...
// 				</span>
// 			</div>
// 		);
// 	}

// 	if (!flight) {
// 		return (
// 			<main className="min-h-screen">
// 				<div className="mx-auto max-w-6xl px-8 py-16 text-center">
// 					<h1 className="text-xl font-semibold text-slate-900">
// 						Ticket not found
// 					</h1>
// 					<p className="mt-2 text-sm text-slate-500 italic">
// 						ID: {id} | Session: {searchId}
// 					</p>
// 					<button
// 						type="button"
// 						className="mt-6 rounded-xl bg-slate-900 px-6 py-2 text-sm font-bold text-white transition-transform active:scale-95"
// 						onClick={goBackToSearch}
// 					>
// 						Back to search
// 					</button>
// 				</div>
// 			</main>
// 		);
// 	}

// 	return (
// 		<main className="min-h-screen bg-slate-50/30">

// 			<div className="mx-auto max-w-6xl px-8 py-10">
// 				<div className="grid grid-cols-12 gap-8">
// 					<div className="col-span-12 lg:col-span-8 space-y-6">
// 						<div className="rounded-2xl border bg-white p-8 shadow-sm">
// 							<div className="flex items-center justify-between border-b pb-6">
// 								<div className="flex items-center gap-4">
// 									<img
// 										src={flight.airline.logo}
// 										alt={flight.airline.name}
// 										className="h-12 w-12 object-contain"
// 									/>
// 									<div>
// 										<h1 className="text-xl font-bold text-slate-900">
// 											{flight.airline.name}
// 										</h1>
// 										<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
// 											{flight.cabin} Class
// 										</p>
// 									</div>
// 								</div>
// 								<div className="text-right">
// 									<p className="text-sm text-slate-400 font-medium">
// 										Passengers
// 									</p>
// 									<p className="text-sm font-bold text-slate-900">
// 										{pax}
// 									</p>
// 								</div>
// 							</div>

// 							<div className="mt-8 flex items-center justify-between">
// 								<div className="text-center md:text-left">
// 									<p className="text-3xl font-black tracking-tighter text-slate-900">
// 										{flight.departure.time}
// 									</p>
// 									<p className="text-sm font-bold text-slate-500 uppercase">
// 										{flight.departure.iataCode}
// 									</p>
// 									<p className="text-xs text-slate-400 mt-1">
// 										{flight.departure.date}
// 									</p>
// 								</div>

// 								<div className="flex flex-col items-center flex-1 px-10">
// 									<span className="text-xs font-bold text-slate-400 mb-2">
// 										{flight.duration}
// 									</span>
// 									<div className="relative w-full border-t-2 border-dashed border-slate-200 flex justify-center">
// 										<div className="absolute -top-3 bg-white px-2">
// 											<svg
// 												className="h-5 w-5 text-cyan-500 rotate-90"
// 												fill="currentColor"
// 												viewBox="0 0 24 24"
// 											>
// 												<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
// 											</svg>
// 										</div>
// 									</div>
// 									<span className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-[0.2em]">
// 										{flight.stops}
// 									</span>
// 								</div>

// 								<div className="text-center md:text-right">
// 									<p className="text-3xl font-black tracking-tighter text-slate-900">
// 										{flight.arrival.time}
// 									</p>
// 									<p className="text-sm font-bold text-slate-500 uppercase">
// 										{flight.arrival.iataCode}
// 									</p>
// 									<p className="text-xs text-slate-400 mt-1">
// 										{flight.arrival.date}
// 									</p>
// 								</div>
// 							</div>

// 							<div className="mt-10 space-y-6">
// 								<h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
// 									Stops
// 								</h3>

// 								{flight.segments.map((segment, idx) => (
// 									<div
// 										key={`${segment.carrierCode}-${segment.flightNumber}-${idx}`}
// 										className="mb-4"
// 									>
// 										<div className="rounded-xl border bg-slate-50 p-4">
// 											<div className="flex justify-between items-center">
// 												<div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white z-10">
// 													{idx + 1}
// 												</div>
// 												{segment.layover && (
// 													<p className="justify-self-end text-xs text-slate-400">
// 														Layover Time: {segment.layover}
// 													</p>
// 												)}
// 											</div>

// 											<div className="flex-1">
// 												<div className="mt-2 flex items-center justify-between">
// 													<div className="text-left">
// 														<p className="text-lg font-black text-slate-900">
// 															{segment.departure.iataCode}
// 														</p>
// 														<p className="text-xs text-slate-400">
// 															{segment.departure.time}
// 														</p>
// 														<div className="mt-1 space-y-0.5">
// 															<p className="text-[11px] text-slate-500">
// 																{segment.departure.date}
// 															</p>
// 															{segment.departure.terminal && (
// 																<p className="text-[11px] uppercase text-slate-400">
// 																	Terminal {segment.departure.terminal}
// 																</p>
// 															)}
// 														</div>
// 													</div>

// 													<div className="flex flex-1 flex-col items-center px-6">
// 														<span className="mb-1 text-[10px] font-bold text-slate-400">
// 															{segment.duration}
// 														</span>
// 														<div className="relative w-full border-t border-dashed border-slate-300">
// 															<span className="absolute left-1/2 -top-2 -translate-x-1/2 bg-slate-50 px-1">
// 																✈
// 															</span>
// 														</div>
// 													</div>

// 													<div className="text-right">
// 														<p className="text-lg font-black text-slate-900">
// 															{segment.arrival.iataCode}
// 														</p>
// 														<p className="text-xs text-slate-400">
// 															{segment.arrival.time}
// 														</p>
// 														<div className="mt-1 space-y-0.5">
// 															<p className="text-[11px] text-slate-500">
// 																{segment.arrival.date}
// 															</p>
// 															{segment.arrival.terminal && (
// 																<p className="text-[11px] uppercase text-slate-400">
// 																	Terminal {segment.arrival.terminal}
// 																</p>
// 															)}
// 														</div>
// 													</div>
// 												</div>

// 												<div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500">
// 													<span>
// 														<b>Flight:</b> {segment.carrierCode}
// 														{segment.flightNumber}
// 													</span>
// 													{segment.aircraft && (
// 														<span>
// 															<b>Aircraft:</b> {segment.aircraft}
// 														</span>
// 													)}
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								))}
// 							</div>
// 						</div>

// 						<div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center bg-slate-50/50">
// 							<p className="text-sm font-medium text-slate-400">
// 								Detailed Journey & Fare Rules coming soon...
// 							</p>
// 						</div>
// 					</div>
// 					<div className="col-span-12 lg:col-span-4">
// 						<div className="sticky top-8 rounded-2xl border bg-white p-6 shadow-sm">
// 							<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
// 								Booking Summary
// 							</h3>

// 							<div className="mt-4 flex items-end justify-between border-b pb-6">
// 								<div>
// 									<p className="text-xs text-slate-500">Price per adult</p>
// 									<p className="text-4xl font-black tracking-tighter text-cyan-700">
// 										{flight.price.toLocaleString()}{" "}
// 										<span className="text-lg font-bold">{flight.currency}</span>
// 									</p>
// 								</div>
// 							</div>

// 							<div className="py-6 space-y-4">
// 								<div className="flex justify-between text-sm">
// 									<span className="text-slate-500">Base Fare</span>
// 									<span className="font-bold">
// 										${(flight.price * 0.85).toFixed(2)}
// 									</span>
// 								</div>
// 								<div className="flex justify-between text-sm">
// 									<span className="text-slate-500">Taxes & Fees</span>
// 									<span className="font-bold">
// 										${(flight.price * 0.15).toFixed(2)}
// 									</span>
// 								</div>
// 							</div>

// 							{flight.travelerPricings?.[0]?.amenities &&
// 								flight.travelerPricings[0].amenities.length > 0 && (
// 									<div className="mt-6">
// 										<h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
// 											Amenities
// 										</h3>
// 										<ul className="mt-2 space-y-1 text-xs text-slate-700">
// 											{flight.travelerPricings[0].amenities.map(
// 												(amenity, idx) => (
// 													<li
// 														key={idx}
// 														className="flex items-center gap-2 capitalize"
// 													>
// 														<span className="h-2 w-2 rounded-full bg-cyan-500 inline-block"></span>
// 														{toTitleCase(amenity?.description) ?? ""}
// 													</li>
// 												),
// 											)}
// 										</ul>
// 									</div>
// 								)}

// 							<button
// 								type="button"
// 								className="mt-6 w-full cursor-pointer rounded-xl bg-slate-900 py-4 text-base font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-black active:scale-95"
// 								onClick={() =>
// 									router.push(
// 										`/checkout?id=${flight.id}&searchId=${flight.search_id}`,
// 									)
// 								}
// 							>
// 								Confirm & Book
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</main>
// 	);
// }
"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { FlightResult } from "@/types/flight";
import { mapFlightOfferToFlightResult } from "@/services/mappers/flight.mapper";
import { toTitleCase } from "@/utils/string";
import PredictionGraph from "@/components/PredictionGraph";
import PriceGrid from "@/components/PriceGrid";

export default function TicketDetailPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = useParams<{ id: string }>();
	const [flight, setFlight] = useState<FlightResult | null>(null);
	const [loading, setLoading] = useState(true);

	const id = params?.id;
	const searchId = searchParams.get("searchId");
	const pax = searchParams.get("pax") ?? "1";

	useEffect(() => {
		async function fetchTicketDetail() {
			if (!id || !searchId) {
				setLoading(false);
				return;
			}

			try {
				setLoading(true);
				console.log(id, searchId);
				const res = await fetch(
					`http://localhost:3000/flights/${id}?searchId=${searchId}`,
				);

				if (!res.ok) throw new Error("Failed to fetch flight detail");

				const data = await res.json();
				console.log(data);
				setFlight(data);
			} catch (error) {
				console.error("Error fetching ticket:", error);
			} finally {
				setLoading(false);
			}
		}

		fetchTicketDetail();
	}, [id, searchId]);

	const goBackToSearch = () => {
		router.back();
	};

	if (loading) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				<div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-black"></div>
				<span className="ml-3 text-sm font-medium">
					Loading ticket details...
				</span>
			</div>
		);
	}

	if (!flight) {
		return (
			<main className="min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-xl font-semibold">Ticket not found</h1>
				<button
					onClick={goBackToSearch}
					className="mt-4 text-cyan-600 font-bold"
				>
					Back
				</button>
			</main>
		);
	}

	return (
		<main className="min-h-screen bg-slate-50/30 pb-12">
			<div className="mx-auto max-w-7xl px-8 py-10">
				<div className="grid grid-cols-12 gap-8">
					{/* LEFT COLUMN: FLIGHT JOURNEY */}
					<div className="col-span-12 lg:col-span-8 space-y-8">
						{flight.itineraries.map((itinerary, itIdx) => (
							<div
								key={itIdx}
								className="rounded-2xl border bg-white p-8 shadow-sm"
							>
								<div className="flex items-center justify-between border-b pb-6">
									<div className="flex items-center gap-4">
										<img
											src={flight.airline.logo}
											alt={flight.airline.name}
											className="h-12 w-12 object-contain"
										/>
										<div>
											<h1 className="text-xl font-bold text-slate-900">
												{itinerary.type === "outbound"
													? "Departure Flight"
													: "Return Flight"}
											</h1>
											<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
												{flight.airline.name} • {flight.cabin} Class
											</p>
										</div>
									</div>
									<div className="text-right text-xs text-slate-400 font-bold uppercase">
										{itinerary.duration} Total
									</div>
								</div>

								{/* Summary Row */}
								<div className="mt-8 flex items-center justify-between">
									<div className="text-left">
										<p className="text-3xl font-black text-slate-900">
											{itinerary.departure.time}
										</p>
										<p className="text-sm font-bold text-slate-500">
											{itinerary.departure.iataCode}
										</p>
										<p className="text-xs text-slate-400">
											{itinerary.departure.date}
										</p>
									</div>

									<div className="flex flex-col items-center flex-1 px-10 text-center">
										<div className="relative w-full border-t-2 border-dashed border-slate-200 flex justify-center">
											<div className="absolute -top-3 bg-white px-2">
												<span className="text-cyan-500 text-xl">✈</span>
											</div>
										</div>
										<span className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">
											{itinerary.stops === 0
												? "NON-STOP"
												: `${itinerary.stops} STOP(S)`}
										</span>
									</div>

									<div className="text-right">
										<p className="text-3xl font-black text-slate-900">
											{itinerary.arrival.time}
										</p>
										<p className="text-sm font-bold text-slate-500">
											{itinerary.arrival.iataCode}
										</p>
										<p className="text-xs text-slate-400">
											{itinerary.arrival.date}
										</p>
									</div>
								</div>

								{/* Segments/Stops Detail */}
								<div className="mt-10 space-y-6">
									{itinerary.segments.map((segment, sIdx) => (
										<div key={sIdx} className="relative">
											<div className="rounded-xl border border-slate-100 bg-slate-50/50 p-5">
												<div className="grid grid-cols-3 items-center">
													<div>
														<p className="text-lg font-bold">
															{segment.departure.iataCode}
														</p>
														<p className="text-sm font-medium text-slate-600">
															{segment.departure.time}
														</p>
														<p className="text-[10px] text-slate-400">
															{segment.departure.date}
														</p>
													</div>
													<div className="text-center">
														<p className="text-[10px] font-bold text-slate-400 italic">
															{segment.duration}
														</p>
														<div className="h-px bg-slate-200 my-1 w-full mx-auto"></div>
														<p className="text-[10px] text-slate-500 font-bold uppercase">
															{segment.carrierCode}
															{segment.flightNumber}
														</p>
													</div>
													<div className="text-right">
														<p className="text-lg font-bold">
															{segment.arrival.iataCode}
														</p>
														<p className="text-sm font-medium text-slate-600">
															{segment.arrival.time}
														</p>
														<p className="text-[10px] text-slate-400">
															{segment.arrival.date}
														</p>
													</div>
												</div>
												<div className="mt-4 flex justify-between items-center text-[11px] text-slate-500 border-t pt-3">
													<span>
														Aircraft: <b>{segment.aircraft}</b>
													</span>
													{segment.departure.terminal && (
														<span>
															Terminal: <b>{segment.departure.terminal}</b>
														</span>
													)}
												</div>
											</div>
											{segment.layover && (
												<div className="my-4 flex items-center justify-center">
													<div className="bg-orange-50 text-orange-600 text-[10px] font-bold px-4 py-1 rounded-full border border-orange-100 uppercase tracking-tighter">
														Layover: {segment.layover}
													</div>
												</div>
											)}
										</div>
									))}
								</div>
							</div>
						))}
					</div>

					{/* RIGHT COLUMN: BOOKING SUMMARY */}
					<div className="col-span-12 lg:col-span-4">
						<div className="sticky top-8 flex flex-col gap-5">
							<div className="rounded-2xl border bg-white p-6 shadow-sm">
								<h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
									Booking Summary
								</h3>
								<div className="mt-4 flex items-end justify-between border-b pb-6">
									<div>
										<p className="text-xs text-slate-500">
											Total Price ({pax} Pax)
										</p>
										<p className="text-4xl font-black tracking-tighter text-cyan-700">
											{flight.price.amount.toLocaleString()}{" "}
											<span className="text-lg font-bold">
												{flight.price.currency}
											</span>
										</p>
									</div>
								</div>
								<div className="py-6 space-y-4">
									<div className="flex justify-between text-sm">
										<span className="text-slate-500">Cabin Class</span>
										<span className="font-bold uppercase">{flight.cabin}</span>
									</div>
									<div className="flex justify-between text-sm">
										<span className="text-slate-500">Checked Baggage</span>
										<span className="font-bold">
											{flight.baggage.checked} Piece(s)
										</span>
									</div>
								</div>
								<button
									type="button"
									className="w-full rounded-xl bg-slate-900 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-black active:scale-95"
									onClick={() =>
										router.push(
											`/checkout?id=${flight.id}&searchId=${flight.search_id}`,
										)
									}
								>
									Confirm & Book
								</button>
							</div>
							<div className="rounded-2xl border bg-white shadow-sm">
								<PredictionGraph  />
								<PriceGrid />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
