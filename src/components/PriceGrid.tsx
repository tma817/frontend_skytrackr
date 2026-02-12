import { useState } from "react";

type Departure = { date: string };
type Return = { date: string; prices: Record<string, number | null> };

const exampleDepartureData: Departure[] = [
	{ date: "Feb 1" },
	{ date: "Feb 2" },
	{ date: "Feb 3" },
];

const exampleReturnData: Return[] = [
	{
		date: "Feb 10",
		prices: { "Feb 1": 720, "Feb 2": 680, "Feb 3": 750 },
	},
	{
		date: "Feb 11",
		prices: { "Feb 1": 700, "Feb 2": null, "Feb 3": 790 },
	},
];

type PredictionGridProps = {
	departureData?: Departure[];
	returnData?: Return[];
};

export default function PredictionGrid({
	departureData = exampleDepartureData,
	returnData = exampleReturnData,
}: PredictionGridProps) {
	const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
		null,
	);

	return (
		<div className="overflow-x-auto p-4">
			<h2 className="text-2xl font-bold tracking-tight mb-6">
				Price Grid
			</h2>

			<div className="inline-grid grid-cols-[max-content_1fr] gap-2">
				<div className="flex items-center justify-center px-1">
					<span
						className="font-bold text-slate-700 text-sm whitespace-nowrap"
						style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
					>
						Return Date
					</span>
				</div>

				<div className="flex flex-col gap-2">
					<div className="text-center font-bold text-slate-700 text-sm">
						Departure Date
					</div>

					<div
						className="grid border border-slate-300 rounded-lg overflow-hidden shadow-sm"
						style={{
							gridTemplateColumns: `80px repeat(${departureData.length}, 1fr)`,
						}}
					>
						<div className="bg-slate-200 border border-slate-300" />

						{departureData.map((dep) => (
							<div
								key={dep.date}
								className="bg-slate-200 border border-slate-300 p-3 text-sm font-medium text-slate-700 text-center"
							>
								{dep.date}
							</div>
						))}

						{returnData.map((ret, rowIdx) => (
							<>
								<div
									key={`ret-${ret.date}`}
									className="bg-slate-200 border border-slate-300 p-3 text-sm font-medium text-slate-700 text-center"
								>
									{ret.date}
								</div>

								{departureData.map((dep, colIdx) => {
									const price = ret.prices[dep.date];

									const isHovered =
										hovered?.row === rowIdx && hovered?.col === colIdx;

									const isRowHovered = hovered?.row === rowIdx && !isHovered;

									const isColHovered = hovered?.col === colIdx && !isHovered;

									let bg = "bg-white";

									if (isHovered) bg = "bg-blue-300 text-blue-900 font-semibold";
									else if (isRowHovered || isColHovered) bg = "bg-blue-50";

									return (
										<div
											key={`${rowIdx}-${colIdx}`}
											onMouseEnter={() =>
												setHovered({ row: rowIdx, col: colIdx })
											}
											onMouseLeave={() => setHovered(null)}
											className={`border border-slate-300 p-3 text-center text-sm cursor-pointer transition-colors ${bg}`}
										>
											{price !== null ? (
												`$${price}`
											) : (
												<span className="text-slate-400">—</span>
											)}
										</div>
									);
								})}
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
