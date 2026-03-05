"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import FlightCard from "@/components/FlightCard";
import { useSearchFlights } from "@/hooks/useSearchFlights";
import PriceGrid from "@/components/PriceGrid";
import type { FilterParams } from "@/services/flight.service";
import { watchlistService } from "@/services/watchlist.service";

export default function SearchPage() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [priceGridOpen, setPriceGridOpen] = useState(false);

	const from = searchParams.get("from") ?? "";
	const to = searchParams.get("to") ?? "";
	const tripType = (searchParams.get("tripType") ?? "oneway").toLowerCase();
	const departure = searchParams.get("departure") ?? "";
	const returnDate = searchParams.get("return") ?? "";
	const numOfPassengers = searchParams.get("numOfPassengers") ?? "1";

	// ===== Filters =====
	const [filters, setFilters] = useState<FilterParams>({});

	function setFilter<K extends keyof FilterParams>(key: K, value: FilterParams[K]) {
		setFilters((prev) => ({ ...prev, [key]: value }));
	}
	function clearFilter<K extends keyof FilterParams>(key: K) {
		setFilters((prev) => { const next = { ...prev }; delete next[key]; return next; });
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
	// flightId → watchlist _id (for removal)
	const watchlistMap = useRef<Map<string, string>>(new Map());
	const [watchedIds, setWatchedIds] = useState<Set<string>>(new Set());
	const [watchBusy, setWatchBusy] = useState(false);

	useEffect(() => {
		watchlistService.getWatchlist().then((items) => {
			const byFlight = new Map<string, string>();
			items.forEach((i) => {
				if (i.flightId) byFlight.set(i.flightId, i._id);
			});
			watchlistMap.current = byFlight;
			setWatchedIds(new Set(byFlight.keys()));
		}).catch(() => { /* not logged in — silent */ });
	}, []);

	async function handleToggleWatch(f: { id: string; [k: string]: any }) {
		if (watchBusy) return;
		setWatchBusy(true);
		const isAdded = watchedIds.has(f.id);
		try {
			if (isAdded) {
				const wId = watchlistMap.current.get(f.id);
				if (wId) {
					await watchlistService.removeFromWatchlist(wId);
					watchlistMap.current.delete(f.id);
					setWatchedIds((prev) => { const s = new Set(prev); s.delete(f.id); return s; });
				}
			} else {
				const item = await watchlistService.addToWatchlist(
					f as any,
					numOfPassengers,
					tripType === "roundtrip" ? "round-trip" : "one-way",
				);
				watchlistMap.current.set(f.id, String(item._id));
				setWatchedIds((prev) => new Set([...prev, f.id]));
			}
		} catch (err: any) {
			if (err?.message === "UNAUTHORIZED") {
				router.push("/login");
			}
		} finally {
			setWatchBusy(false);
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
			<main className="min-h-screen">
				{/* ===== Header + SearchBar ===== */}
				<div className="border-b">
					<div className="bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50 px-8 py-8">
						<div className="mx-auto max-w-6xl">
							<div className="text-sm text-gray-700">
								<span className="font-medium text-gray-900">{from}</span> →{" "}
								<span className="font-medium text-gray-900">{to}</span>
								<span className="mx-2 text-gray-300">|</span>
								{tripType === "roundtrip" ? (
									<span>
										{departure} ~ {returnDate}
									</span>
								) : (
									<span>{departure}</span>
								)}
								<span className="mx-2 text-gray-300">|</span>
								<span>{numOfPassengers}</span>
							</div>

							<SearchBar
								className="mt-4"
								defaultFrom={from}
								defaultTo={to}
								defaultPassengers={numOfPassengers}
								onSearch={handleSearch}
							/>
						</div>
					</div>
				</div>

				{/* ===== Body ===== */}
				<div className="mx-auto max-w-6xl px-5 py-6 flex gap-8">
					<div className="grid grid-cols-12 gap-8 flex-1">
						{/* ===== Filters ===== */}
						<aside className="col-span-3 space-y-5">
							<div className="flex items-center justify-between">
								<h2 className="text-sm font-semibold text-gray-900">Filters</h2>
								{Object.keys(filters).length > 0 && (
									<button
										onClick={() => setFilters({})}
										className="text-xs text-blue-600 hover:underline"
									>
										Clear all
									</button>
								)}
							</div>

							{/* Stops */}
							<div className="border-b pb-4">
								<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Stops</p>
								{([
									{ label: "Any", value: undefined },
									{ label: "Non-stop", value: 0 },
									{ label: "1 stop", value: 1 },
								] as { label: string; value: number | undefined }[]).map(({ label, value }) => (
									<label key={label} className="flex cursor-pointer items-center gap-2 py-1 text-sm">
										<input
											type="radio"
											name="stops"
											checked={filters.stops === value}
											onChange={() =>
												value === undefined ? clearFilter("stops") : setFilter("stops", value)
											}
											className="accent-black"
										/>
										{label}
									</label>
								))}
							</div>

							{/* Max price */}
							<div className="border-b pb-4">
								<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Max Price (CAD)</p>
								<input
									type="number"
									min={0}
									step={50}
									placeholder="e.g. 1000"
									value={filters.maxPrice ?? ""}
									onChange={(e) => {
										const v = e.target.value;
										v === "" ? clearFilter("maxPrice") : setFilter("maxPrice", Number(v));
									}}
									className="w-full rounded-md border px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-black"
								/>
							</div>

							{/* Departure time */}
							<div className="border-b pb-4">
								<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Departure Time</p>
								<div className="flex items-center gap-2">
									<input
										type="time"
										value={filters.timeFrom ?? ""}
										onChange={(e) => {
											const v = e.target.value;
											v === "" ? clearFilter("timeFrom") : setFilter("timeFrom", v);
										}}
										className="flex-1 rounded-md border px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-black"
									/>
									<span className="text-xs text-gray-400">to</span>
									<input
										type="time"
										value={filters.timeTo ?? ""}
										onChange={(e) => {
											const v = e.target.value;
											v === "" ? clearFilter("timeTo") : setFilter("timeTo", v);
										}}
										className="flex-1 rounded-md border px-2 py-1.5 text-sm outline-none focus:ring-1 focus:ring-black"
									/>
								</div>
							</div>

							{/* Cabin */}
							<div>
								<p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Cabin Class</p>
								<select
									value={filters.cabin ?? ""}
									onChange={(e) => {
										const v = e.target.value;
										v === "" ? clearFilter("cabin") : setFilter("cabin", v);
									}}
									className="w-full rounded-md border px-3 py-1.5 text-sm outline-none focus:ring-1 focus:ring-black"
								>
									<option value="">Any</option>
									<option value="ECONOMY">Economy</option>
									<option value="PREMIUM_ECONOMY">Premium Economy</option>
									<option value="BUSINESS">Business</option>
									<option value="FIRST">First</option>
								</select>
							</div>
						</aside>

						{/* ===== Flights List ===== */}
						<section className="col-span-9">
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
								<div className="flex flex-col gap-2.5">
									{flights.map((f) => (
										<FlightCard
											key={f.id}
											flight={f}
											onClick={() => goTicket(f.id, f.search_id!)}
											isAdded={watchedIds.has(f.id)}
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

					{/* ===== Price Grid button ===== */}
					<div>
						<button
							onClick={() => setPriceGridOpen(true)}
							className="flex items-center justify-center rounded-xl bg-white border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md active:scale-95"
						>
							Price Grid
						</button>
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
					<div className="relative z-10 w-full max-w-3xl mx-4 rounded-2xl bg-white p-6 shadow-2xl">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h2 className="text-xl font-bold tracking-tight">Price Grid</h2>
								<p className="text-xs text-slate-400 mt-0.5">
									{tripType === "roundtrip" ? "Round-trip cheapest combos" : "One-way cheapest dates"} · {from} → {to}
								</p>
							</div>
							<button
								onClick={() => setPriceGridOpen(false)}
								className="text-slate-400 hover:text-black text-xl leading-none"
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
			)}
		</>
	);
}
