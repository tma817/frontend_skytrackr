"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import FlightCard from "@/components/FlightCard";
import { useSearchFlights } from "@/hooks/useSearchFlights";
import PriceGrid from "@/components/PriceGrid";
import type { FilterParams } from "@/services/flight.service";
import { watchlistService, WatchlistItem } from "@/services/watchlist.service";
import { getAccessToken } from "@/utils/auth-helpers";
import { useEffect } from "react";

export default function SearchPage() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [priceGridOpen, setPriceGridOpen] = useState(false);
	const [loginPromptOpen, setLoginPromptOpen] = useState(false);

	const from = searchParams.get("from") ?? "";
	const to = searchParams.get("to") ?? "";
	const tripType = (searchParams.get("tripType") ?? "oneway").toLowerCase();
	const departure = searchParams.get("departure") ?? "";
	const returnDate = searchParams.get("return") ?? "";
	const numOfPassengers = searchParams.get("numOfPassengers") ?? "1";


	const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);

	useEffect(() => {
	if (!getAccessToken()) return;
	watchlistService.getWatchlist()
		.then(data => setWatchlist(data))
		.catch(err => console.error(err));
	}, []);

	// ===== Filters =====
	const [filters, setFilters] = useState<FilterParams>({});

	function setFilter<K extends keyof FilterParams>(
		key: K,
		value: FilterParams[K],
	) {
		setFilters((prev) => ({ ...prev, [key]: value }));
	}
	function clearFilter<K extends keyof FilterParams>(key: K) {
		setFilters((prev) => {
			const next = { ...prev };
			delete next[key];
			return next;
		});
	}

	// ===== Flights via Hook =====
	const { flights, loading, loadingMore, hasMore, loadMore, error } =
		useSearchFlights({
			from,
			to,
			departure,
			returnDate,
			numOfPassengers,
			filters,
		});

	// ===== Watchlist =====
	const [watchBusy, setWatchBusy] = useState(false);

	async function handleToggleWatch(f: any) {
		if (!getAccessToken()) {
			setLoginPromptOpen(true);
			return;
		}
		if (watchBusy) return;
		setWatchBusy(true);
		try {
			const watched = watchlistService.isFlightWatched(f, watchlist);
			if (watched) {
				await watchlistService.removeFromWatchlist(watched._id);
				setWatchlist(prev => prev.filter(item => item._id !== watched._id));
			} else {
				const newItem = await watchlistService.addToWatchlist(
					f as any,
					numOfPassengers,
					tripType === "roundtrip" ? "round-trip" : "one-way",
				);
				setWatchlist(prev => [...prev, newItem]);
			}
		} catch (err: any) {
			console.error("handleToggleWatch error:", err);
			if (err?.message === "UNAUTHORIZED") {
				setLoginPromptOpen(true);
			}
		} finally {
			watchBusy.current = false;
		}
	}
	const handleSearch = (payload: any) => {
		const qs = new URLSearchParams({
			from: payload.from ?? "",
			to: payload.to ?? "",
			tripType: (payload.tripType ?? payload.trip ?? "oneway").toLowerCase(),
			departure:
				payload.departure ??
				payload.departureDate ??
				payload.dateRange?.from ??
				"",
			return:
				payload.return ?? payload.returnDate ?? payload.dateRange?.to ?? "",
			numOfPassengers: payload.numOfPassengers ?? payload.passengers ?? "1",
		});

		router.push(`/search?${qs.toString()}`);
	};

	const goTicket = (flightId: string, searchId: string) => {
		const qs = new URLSearchParams({
			searchId,
			from,
			to,
			tripType,
			departure,
			return: returnDate,
			numOfPassengers,
		});

		router.push(`/ticket/${flightId}?${qs.toString()}`);
	};

	return (
		<>
			<main className="min-h-screen font-sans">
				{/* ===== Header ===== */}
				<div className="border-b">
					<div className="relative px-8 py-10">
						{/* Blurred hero background */}
						<div
							className="absolute inset-0 -z-10"
							style={{
								backgroundImage: "url('/images/hero-bg.png')",
								backgroundSize: "cover",
								backgroundPosition: "center",
								filter: "blur(3px)",
								transform: "scale(1.05)",
							}}
						/>
						<div className="mx-auto max-w-6xl">
							<SearchBar
								glass={false}
								className="rounded-2xl shadow-xl border"
								defaultFrom={from}
								defaultTo={to}
								defaultPassengers={numOfPassengers}
								onSearch={handleSearch}
							/>
						</div>
					</div>
				</div>

				{/* ===== Body ===== */}
				<div className="mx-auto px-10 py-6 flex gap-8">
					<div className="grid grid-cols-12 gap-8 flex-1">
						{/* ===== Filters ===== */}
						<aside className="col-span-3">
							<div className="rounded-2xl border bg-white overflow-hidden">
								{/* Header */}
								<div className="flex items-center justify-between px-5 py-4 border-b">
									<h2 className="text-sm font-bold tracking-tight text-gray-900">
										Filters
									</h2>
									{Object.keys(filters).length > 0 && (
										<button
											onClick={() => setFilters({})}
											className="text-[11px] font-semibold text-gray-400 hover:text-black transition-colors"
										>
											Clear all
										</button>
									)}
								</div>

								<div className="divide-y">
									{/* Stops */}
									<div className="px-5 py-4">
										<p className="mb-3  font-bold uppercase tracking-widest">
											Stops
										</p>
										<div className="flex flex-col gap-1">
											{(
												[
													{ label: "Any", value: undefined },
													{ label: "Non-stop", value: 0 },
													{ label: "1 stop", value: 1 },
												] as { label: string; value: number | undefined }[]
											).map(({ label, value }) => {
												const active = filters.stops === value;
												return (
													<label
														key={label}
														className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${active ? "bg-gray-900 text-white" : "hover:bg-gray-50 text-gray-700"}`}
													>
														<input
															type="radio"
															name="stops"
															checked={active}
															onChange={() =>
																value === undefined
																	? clearFilter("stops")
																	: setFilter("stops", value)
															}
															className="hidden"
														/>
														<span
															className={`h-2 w-2 rounded-full border-2 flex-shrink-0 ${active ? "border-white bg-white" : "border-gray-300"}`}
														/>
														{label}
													</label>
												);
											})}
										</div>
									</div>

									{/* Max price */}
									<div className="px-5 py-4">
										<p className="mb-3 text-[12px] font-bold uppercase tracking-widest">
											Max Price (CAD)
										</p>
										<div className="relative">
											<span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
												$
											</span>
											<input
												type="number"
												min={0}
												step={50}
												placeholder="Any"
												value={filters.maxPrice ?? ""}
												onChange={(e) => {
													const v = e.target.value;
													v === ""
														? clearFilter("maxPrice")
														: setFilter("maxPrice", Number(v));
												}}
												className="w-full rounded-lg border border-gray-200 bg-gray-50 pl-7 pr-3 py-2 text-sm outline-none transition focus:border-gray-400 focus:bg-white focus:ring-0"
											/>
										</div>
									</div>

									{/* Departure time */}
									<div className="px-5 py-4">
										<p className="mb-3 text-[12px] font-bold uppercase tracking-widest">
											Departure Time
										</p>
										<div className="flex items-center gap-2">
											<input
												type="time"
												value={filters.timeFrom ?? ""}
												onChange={(e) => {
													const v = e.target.value;
													v === ""
														? clearFilter("timeFrom")
														: setFilter("timeFrom", v);
												}}
												className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-2 py-2 text-sm outline-none transition focus:border-gray-400 focus:bg-white"
											/>
											<span className="text-xs font-medium text-gray-300">
												—
											</span>
											<input
												type="time"
												value={filters.timeTo ?? ""}
												onChange={(e) => {
													const v = e.target.value;
													v === ""
														? clearFilter("timeTo")
														: setFilter("timeTo", v);
												}}
												className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-2 py-2 text-sm outline-none transition focus:border-gray-400 focus:bg-white"
											/>
										</div>
									</div>

									{/* Cabin */}
									<div className="px-5 py-4">
										<p className="mb-3 text-[12px] font-bold uppercase tracking-widest">
											Cabin Class
										</p>
										<div className="grid grid-cols-2 gap-1.5">
											{[
												{ label: "Any", value: "" },
												{ label: "Economy", value: "ECONOMY" },
												{ label: "Prem. Eco", value: "PREMIUM_ECONOMY" },
												{ label: "Business", value: "BUSINESS" },
												{ label: "First", value: "FIRST" },
											].map(({ label, value }) => {
												const active = (filters.cabin ?? "") === value;
												return (
													<button
														key={value}
														type="button"
														onClick={() =>
															value === ""
																? clearFilter("cabin")
																: setFilter("cabin", value)
														}
														className={`rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${active ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-white"}`}
													>
														{label}
													</button>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</aside>

						{/* ===== Flights List ===== */}
						<section className="col-span-9">
							{/* Results + Price Grid row */}
							{!loading && !error && (
								<div className="mb-3 flex items-center justify-between">
									<p className="text-sm text-gray-500">
										{flights.length > 0 ? (
											<>
												<span className="font-semibold text-gray-900">
													{flights.length}
												</span>{" "}
												result{flights.length !== 1 ? "s" : ""} found
											</>
										) : (
											"No results found"
										)}
									</p>
									<button
										onClick={() => setPriceGridOpen(true)}
										className="flex items-center gap-1.5 rounded-lg border bg-white px-3 py-1.5 text-sm font-semibold  shadow-sm transition hover:bg-slate-50 hover:shadow-md active:scale-95"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											className="w-4 h-4"
										>
											<path
												fillRule="evenodd"
												d="M.99 5.24A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25l.01 9.5A2.25 2.25 0 0 1 16.76 17H3.26A2.267 2.267 0 0 1 1 14.75l-.01-9.51Zm8.26 9.52v-.625a.75.75 0 0 0-1.5 0v.625a.75.75 0 0 0 1.5 0Zm2.495-4.875a.75.75 0 0 0-1.5 0v4.875a.75.75 0 0 0 1.5 0V9.877Zm2.76-3a.75.75 0 0 0-1.5 0v7.875a.75.75 0 0 0 1.5 0V6.877Zm-8.76 1.5a.75.75 0 0 0-1.5 0v6.375a.75.75 0 0 0 1.5 0V8.377Z"
												clipRule="evenodd"
											/>
										</svg>
										Price Grid
									</button>
								</div>
							)}

							{loading ? (
								<div className="flex flex-col items-center justify-center py-20">
									<div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black" />
									<p className="mt-4 text-gray-500 font-medium">
										Searching for best flights...
									</p>
								</div>
							) : error ? (
								<div className="text-center py-20 text-red-600">{error}</div>
							) : flights.length > 0 ? (
								// Prevents duplicate flight results
								<div className="flex flex-col gap-2.5">
									{flights.map((f) => (
										<FlightCard
											key={f.id}
											flight={f}
											onClick={() => goTicket(f.id, f.search_id!)}
											isAdded={!!watchlistService.isFlightWatched(f, watchlist)}
											onToggle={() => handleToggleWatch(f)}
										/>
									))}

									{hasMore && (
										<div className="pt-4 flex justify-center">
											<button
												onClick={loadMore}
												disabled={loadingMore}
												className="rounded-lg border px-5 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-60"
											>
												{loadingMore ? "Loading..." : "Load more flights"}
											</button>
										</div>
									)}
								</div>
							) : (
								<div className="text-center py-20 border-2 border-dashed rounded-xl">
									<p className="text-gray-500">
										No flights found for this route. Try another date.
									</p>
								</div>
							)}
						</section>
					</div>
				</div>
			</main>

			{/* ===== Price Grid Modal ===== */}
			{priceGridOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div
						className="absolute inset-0 bg-black/40 backdrop-blur-sm"
						onClick={() => setPriceGridOpen(false)}
					/>
					<div className="relative font-sans uppercase z-10 w-full max-w-3xl mx-4 rounded-2xl bg-white shadow-2xl overflow-hidden">
						<div className="p-6">
							<div className="flex justify-between items-start mb-5">
								<div>
									<h2 className="text-lg font-black tracking-tight text-gray-900">
										Price Grid
									</h2>
									<p className="text-xs text-gray-400 mt-0.5">
										{tripType === "roundtrip"
											? "Round-trip cheapest combos"
											: "One-way cheapest dates"}
									</p>
								</div>
								<button
									onClick={() => setPriceGridOpen(false)}
									className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors text-lg leading-none"
								>
									✕
								</button>
							</div>

							<PriceGrid
								origin={from}
								destination={to}
								departureDate={departure}
								returnDate={returnDate || undefined}
								currency="CAD"
								oneWay={tripType !== "roundtrip"}
								numOfPassengers={numOfPassengers}
							/>
						</div>
					</div>
				</div>
			)}
			{/* ===== Login Prompt Modal ===== */}
			{loginPromptOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center">
					<div
						className="absolute inset-0 bg-black/40 backdrop-blur-sm"
						onClick={() => setLoginPromptOpen(false)}
					/>
					<div className="relative z-10 mx-4 w-full max-w-sm rounded-2xl bg-white shadow-2xl overflow-hidden">
						<div className="p-8 flex flex-col items-center text-center">
							{/* Icon */}
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sky-50 border border-sky-100">
								<svg
									className="h-7 w-7 text-sky-400"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
									/>
								</svg>
							</div>

							<h2 className="text-lg font-black text-gray-900 tracking-tight">
								Sign in to watch prices
							</h2>
							<p className="mt-2 text-sm text-gray-400 leading-relaxed">
								Create a free account to track flight prices and get notified
								when they drop.
							</p>

							<button
								onClick={() => router.push("/login")}
								className="mt-6 w-full rounded-xl bg-gray-900 py-3 text-sm font-bold text-white transition hover:bg-black active:scale-95"
							>
								Sign in
							</button>
							<button
								onClick={() => setLoginPromptOpen(false)}
								className="mt-3 w-full rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-500 transition hover:bg-gray-50 active:scale-95"
							>
								Maybe later
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
