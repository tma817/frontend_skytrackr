"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "../components/SearchBar";
import FlightCard from "../components/FlightCard";
import { getWatchlist, toggleWatchlist } from "@/app/helpers/watchlist";
import { FlightResult, mapFlightOfferToFlightResult } from "../types/flight";

export default function SearchPage() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const from = searchParams.get("from") ?? "";
	const to = searchParams.get("to") ?? "";

	const tripType = (searchParams.get("tripType") ?? "oneway").toLowerCase(); // roundtrip | oneway
	const departure = searchParams.get("departure") ?? "";
	const returnDate = searchParams.get("return") ?? "";
	const numOfPassengers = searchParams.get("numOfPassengers") ?? "1 adult";

	const [flights, setFlights] = useState<FlightResult[]>([]);
	const [loading, setLoading] = useState(true);

	// pagination states
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(false);
	const [loadingMore, setLoadingMore] = useState(false);

	const [bestValue, setBestValue] = useState(true);
	const [membersDeals, setMembersDeals] = useState(false);
	const [budget, setBudget] = useState<"any" | "150" | "250" | "350" | "1000">(
		"any",
	);
	const [rating, setRating] = useState<"any" | "1" | "2" | "3" | "4" | "5">(
		"any",
	);
	const [watchlist, setWatchlist] = useState<string[]>([]);

	// add dependency array so it doesn't run forever
	useEffect(() => {
		async function loadWatchlist() {
			try {
				const data = await getWatchlist();
				setWatchlist(data);
			} catch (err) {
				console.error(err);
			}
		}
		loadWatchlist();
	}, []);

	const fetchFlightsPage = async (targetPage: number, append: boolean) => {
		if (!from || !to || !departure) return;
		if (append) setLoadingMore(true);
		else setLoading(true);

		try {
			const adultCount = (numOfPassengers.split(" ")[0] || "1").trim();

			const qs = new URLSearchParams({
				origin: from,           
				destination: to,        
				departureDate: departure, 
				returnDate: returnDate,
				adults: adultCount,     
				page: String(targetPage),
				limit: "5",
			});

			const response = await fetch(
				`http://localhost:3000/flights/search?${qs.toString()}`,
			);

			if (!response.ok) {
				const text = await response.text();
				throw new Error(`Backend error ${response.status}: ${text}`);
			}

			const data = await response.json();			
			console.log(data);
			const items: FlightResult[] = Array.isArray(data?.items)
				? data.items.map(mapFlightOfferToFlightResult)
				: [];

			const more: boolean = !!data?.hasMore;

			setHasMore(more);
			setPage(targetPage);

			setFlights((prev) => (append ? [...prev, ...items] : items));
		} catch (error) {
			console.error("Fetch error:", error);
			if (!append) setFlights([]);
			setHasMore(false);
		} finally {
			if (append) setLoadingMore(false);
			else setLoading(false);
		}
	};

	// when search params change, reset to page 1
	useEffect(() => {
		// reset state
		setPage(1);
		setHasMore(false);
		setFlights([]);

		fetchFlightsPage(1, false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [from, to, departure, numOfPassengers]);

	const filtered = flights;

	const handleSearch = (payload: any) => {
		const pFrom = payload.from ?? "";
		const pTo = payload.to ?? "";

		const pTripType = (
			payload.tripType ??
			payload.trip ??
			"oneway"
		).toLowerCase();

		const pDeparture =
			payload.departure ??
			payload.departureDate ??
			payload.dateRange?.from ??
			payload.dateRange ??
			"";

		const pReturn =
			payload.return ?? payload.returnDate ?? payload.dateRange?.to ?? "";

		const pPassengers =
			payload.numOfPassengers ?? payload.passengers ?? "1 adult";

		const qs = new URLSearchParams({
			from: pFrom,
			to: pTo,
			tripType: pTripType,
			departure: pDeparture,
			return: pReturn,
			numOfPassengers: pPassengers,
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

	async function handleToggleWatchlist(f: FlightResult) {
		setLoading(true);
		const isAdded = watchlist.includes(f.id);

		try {
			await toggleWatchlist(f, isAdded);

			setWatchlist((prev) =>
				isAdded ? prev.filter((id) => id !== f.id) : [...prev, f.id],
			);
		} catch (err: any) {
			if (err.message === "UNAUTHORIZED") {
				alert("Please login to use this feature");
				router.push("/login");
			}
		} finally {
			setLoading(false);
		}
	}

	const handleLoadMore = async () => {
		if (loadingMore || !hasMore) return;
		await fetchFlightsPage(page + 1, true);
	};

	return (
		<main className="min-h-screen">
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

			<div className="mx-auto max-w-6xl px-8 py-10">
				<div className="grid grid-cols-12 gap-8">
					<aside className="col-span-3">
						<h2 className="text-sm font-semibold text-gray-900">Filters</h2>
						<div className="mt-4 border-b pb-4">
							<label className="flex items-center gap-2 text-sm">
								<input
									type="checkbox"
									checked={bestValue}
									onChange={(e) => setBestValue(e.target.checked)}
								/>
								Best value
							</label>
						</div>
					</aside>

					<section className="col-span-9">
						{loading ? (
							<div className="flex flex-col items-center justify-center py-20">
								<div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-black"></div>
								<p className="mt-4 text-gray-500 font-medium">
									Searching for best flights...
								</p>
							</div>
						) : (
							<div className="space-y-3">
								{filtered.length > 0 ? (
									<>
										{filtered.map((f) => (
											<FlightCard
												key={f.id}
												flight={f}
												onClick={() => goTicket(f.id, f.search_id!)}
												isAdded={watchlist.includes(f.id)}
												onToggle={() => handleToggleWatchlist(f)}
											/>
										))}

										{/* Load more button */}
										{hasMore && (
											<div className="pt-4 flex justify-center">
												<button
													onClick={handleLoadMore}
													disabled={loadingMore}
													className="rounded-lg border px-5 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-60"
												>
													{loadingMore ? "Loading..." : "Load more flights"}
												</button>
											</div>
										)}
									</>
								) : (
									<div className="text-center py-20 border-2 border-dashed rounded-xl">
										<p className="text-gray-500">
											No flights found for this route. Try another date.
										</p>
									</div>
								)}
							</div>
						)}
					</section>
				</div>
			</div>
		</main>
	);
}
