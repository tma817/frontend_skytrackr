"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import { FlightResult } from "@/types/flight";
import PredictionGraph from "@/components/PredictionGraph";
import PriceGrid from "@/components/PriceGrid";
import { useBookingStore } from "@/store/useBookingStore";
import BookingSummary from "@/components/BookingSummary";

export default function TicketDetailPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = useParams<{ id: string }>();
	const [flight, setFlight] = useState<FlightResult | null>(null);
	const setFlightStore = useBookingStore((state) => state.setFlight);

	const handleProceed = () => {
		if(!flight) return
		setFlightStore(flight)
		router.push(`/checkout/pax?searchId=${searchId}&flightId=${flight.id}&pax=${pax}`);

	}

	const [loading, setLoading] = useState(true);

	const id = params?.id;
	const searchId = searchParams.get("searchId");
	const pax = searchParams.get("numOfPassengers") ?? "1";

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
				setFlightStore(data);
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
							<BookingSummary onContinue={handleProceed}/>
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
