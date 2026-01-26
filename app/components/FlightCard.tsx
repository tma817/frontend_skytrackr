import { format } from "date-fns";
import { FlightResult } from "../search/page";
import { isLoggedIn } from "../auth/auth";

interface FlightCardProps {
	flight: FlightResult;
	onClick: () => void;
	isAdded: boolean;
	onToggle: () => void;
}

function money(value?: number, currency = "CAD") {
	if (typeof value !== "number") return "";
	try {
		return new Intl.NumberFormat("en-CA", {
			style: "currency",
			currency,
			maximumFractionDigits: 0,
		}).format(value);
	} catch {
		return `${value.toFixed(0)} ${currency}`;
	}
}

export default function FlightCard({
	flight,
	onClick,
	isAdded,
	onToggle,
}: FlightCardProps) {
	const dep = flight?.departure ?? {};
	const arr = flight?.arrival ?? {};

	const depCode = dep?.iataCode ?? flight?.originCode ?? "—";
	const arrCode = arr?.iataCode ?? flight?.destinationCode ?? "—";

	const depTime = dep?.time ?? "—:—";
	const arrTime = arr?.time ?? "—:—";

	const getDayDifference = (depDate: string, arrDate: string) => {
		const d1 = new Date(depDate);
		const d2 = new Date(arrDate);
		const diffTime = d2.getTime() - d1.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays > 0 ? `+${diffDays} day${diffDays > 1 ? "s" : ""}` : null;
	};

	const dayDiff = getDayDifference(flight.departure.date, flight.arrival.date);
	const stopsText = (flight?.stops ?? "").toLowerCase().includes("direct")
		? "Direct"
		: flight?.stops || "—";

	const isDirect = stopsText.toLowerCase() === "direct";
	const airlineName = flight?.airlineName ?? "Airline";
	const airlineLogo = flight?.airlineLogo;
	const cabin = flight?.travelerPricings?.[0]?.cabin ?? "ECONOMY";

	const priceLabel = money(flight?.price, flight?.currency ?? "CAD");
	const showCheapest = typeof flight?.price === "number" && flight.price < 500;

	const starClass = isAdded
		? `
    bg-yellow-200
	fill-slate-500
  `
		: `
    fill-slate-500
    group-hover:fill-amber-300
  `;

	return (
		<div
			onClick={onClick}
			className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
		>
			{/* <div className="relative overflow-hidden rounded-2xl border shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"> */}
			<div className="flex flex-row gap-20 p-5 md:flex-row md:items-center md:gap-6">
				<div className="flex-1 flex flex-col gap-4">

					{isLoggedIn() && (

					<button
						aria-label="Add to watchlist"
						onClick={(e) => {
							e.stopPropagation();
							onToggle();
						}}
						className={`
					group
					flex h-9 w-9 items-center justify-center
					rounded-full
					border border-slate-300/60
					transition-all duration-200
					${starClass}

					hover:bg-slate-100
					hover:border-slate-400
					cursor-pointer
					active:scale-95
					focus:outline-none focus:ring-2 focus:ring-slate-300/50
					${isAdded ? "bg-yellow-200" : "bg-white"}
				`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							className={`
					h-[20px] w-[20px]
					fill-white
					stroke-black
					stroke-30
					transition-all duration-200
					group-hover:fill-slate-800
					group-hover:scale-105
					
					`}
						>
							<path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"/>
						</svg>
					</button>
				)}

					{/* Airline Information */}
					<div className="flex min-w-[220px] items-center gap-3">
						<div className="flex h-12 w-12 items-center justify-center rounded-full border-slate-200 shadow-sm">
							{airlineLogo ? (
								<img
									src={airlineLogo}
									alt={`${airlineName} logo`}
									className="h-10 w-10 object-contain"
								/>
							) : (
								<span className="text-2xl font-bold text-slate-400">
									{airlineName}
								</span>
							)}
						</div>

						<div className="leading-tight">
							<div className="flex items-center gap-2">
								<h3 className="text-sm font-semibold">{airlineName}</h3>
							</div>
							<div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-500">
								<span className="font-medium text-slate-600">{dep.date}</span>
								{dayDiff && (
									<span className="text-[10px] font-bold">{dayDiff}</span>
								)}
							</div>
						</div>
					</div>
					<div className="flex flex-row w-full justify-between items-center">
						<div>
							<div className="text-xl font-extrabold tracking-tight text-slate-900">
								{depTime}
							</div>
							<div className="mt-0.5 text-xs font-semibold text-slate-500">
								{depCode}
							</div>
						</div>
						<div className="relative mx-8 flex flex-1 flex-col items-center min-w-[120px]">
							<div className="mb-1 text-[11px] font-bold text-slate-400">
								{flight.duration}
							</div>

							<div className="flex w-full items-center gap-2">
								<div className="h-2 w-2 rounded-full bg-slate-300"></div>

								<div className="relative h-[1px] flex-1 border-t-2 border-dashed border-slate-200">
									<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-1">
										<svg
											className="h-4 w-4 text-slate-300 rotate-90"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
										</svg>
									</div>
								</div>
								<div className="text-cyan-600">
									<svg
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
							</div>
							<div
								className={`mt-1 text-[10px] font-black uppercase tracking-widest ${isDirect ? "text-green-500" : "text-slate-400"}`}
							>
								{stopsText}
							</div>
						</div>
						<div>
							<div className="text-xl font-extrabold tracking-tight text-slate-900">
								{arrTime}
							</div>
							<div className="mt-0.5 text-xs font-semibold text-slate-500">
								{arrCode}
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2 rounded-xl px-4 py-2 justify-center items-center">
					<div className="mb-auto text-center">
						<span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
							Total Price
						</span>
						<div className="text-3xl font-black tracking-tighter text-cyan-700">
							{priceLabel}
						</div>
						<div className="mt-1 text-[10px] font-semibold text-slate-500 uppercase">
							{cabin}
						</div>
					</div>

					<button className="mt-4 w-full group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-black px-6 py-3 text-sm font-bold text-white transition-all hover:bg-black active:scale-95 shadow-lg shadow-slate-200">
						<span>Select</span>
						<svg
							className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
