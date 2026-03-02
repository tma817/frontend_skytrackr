import { useState } from "react";

// helper to format dates
function formatDate(date: Date) {
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});
}

// generate 7-day window centered on a date
function generateDateWindow(center: Date) {
	const dates: Date[] = [];
	for (let i = -3; i <= 3; i++) {
		const d = new Date(center);
		d.setDate(center.getDate() + i);
		dates.push(d);
	}
	return dates;
}

// fake price generator for demo
function generatePrice(row: number, col: number) {
	const base = 650;
	const variation = (row - 3) * 25 + (col - 3) * 18;
	return base + variation;
}

export default function PredictionGrid() {
	const [hovered, setHovered] = useState<{ row: number; col: number } | null>(null);
	const [selected, setSelected] = useState<{ row: number; col: number } | null>(null);

	// center / searched dates
	const selectedDeparture = new Date(2026, 1, 10); // Feb 10
	const selectedReturn = new Date(2026, 1, 17); // Feb 17

	const departureDates = generateDateWindow(selectedDeparture);
	const returnDates = generateDateWindow(selectedReturn);

	// precompute prices once
	const [prices] = useState(() =>
		returnDates.map((_, rowIdx) =>
			departureDates.map((_, colIdx) => generatePrice(rowIdx, colIdx))
		)
	);

	return (
		<div className="overflow-x-auto p-4">
			<div className="inline-grid grid-cols-[max-content_1fr] gap-2">
				{/* vertical label */}
				<div className="flex items-center justify-center px-1">
					<span
						className="font-bold text-slate-700 text-sm whitespace-nowrap"
						style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
					>
						Return Date
					</span>
				</div>

				{/* main grid */}
				<div className="flex flex-col gap-2">
					<div className="text-center font-bold text-slate-700 text-sm">
						Departure Date
					</div>

					<div
						className="grid border border-slate-300 rounded-lg overflow-hidden shadow-sm"
						style={{ gridTemplateColumns: `80px repeat(7, 1fr)` }}
					>
						{/* top-left empty cell */}
						<div className="bg-slate-200 border border-slate-300" />

						{/* departure headers */}
						{departureDates.map((dep, colIdx) => (
							<div
								key={colIdx}
								className={`border border-slate-300 p-3 text-sm font-medium text-center ${
									colIdx === 3
										? "bg-blue-200 text-blue-800 font-semibold"
										: "bg-slate-200 text-slate-700"
								}`}
							>
								{formatDate(dep)}
							</div>
						))}

						{/* return rows */}
						{returnDates.map((ret, rowIdx) => (
							<div key={rowIdx} className="contents">
								{/* return header */}
								<div
									className={`border border-slate-300 p-3 text-sm font-medium text-center ${
										rowIdx === 3
											? "bg-blue-200 text-blue-800 font-semibold"
											: "bg-slate-200 text-slate-700"
									}`}
								>
									{formatDate(ret)}
								</div>

								{/* price cells */}
								{departureDates.map((_, colIdx) => {
									const price = prices[rowIdx][colIdx];

									const isCenter = rowIdx === 3 && colIdx === 3;
									const isHovered = hovered?.row === rowIdx && hovered?.col === colIdx;

									// Hover highlight only affects cells <= hovered row/col
									const isRowHovered =
										hovered && rowIdx <= hovered.row && colIdx === hovered.col;
									const isColHovered =
										hovered && colIdx <= hovered.col && rowIdx === hovered.row;

									let bg = "bg-white";
									let textColor = "text-slate-900";
									let fontWeight = "font-normal";

									// selected cell
									if (selected?.row === rowIdx && selected?.col === colIdx) {
										bg = "bg-green-400";
										textColor = "text-white";
										fontWeight = "font-semibold";
									}
									// center cell
									else if (isCenter) {
										bg = "bg-blue-400";
										textColor = "text-white";
										fontWeight = "font-semibold";
									}
									// hover states
									else if (isHovered) {
										bg = "bg-gray-200";
									} else if (isRowHovered || isColHovered) {
										bg = "bg-gray-100";
									}

									return (
										<div
											key={`${rowIdx}-${colIdx}`}
											onMouseEnter={() =>
												setHovered({ row: rowIdx, col: colIdx })
											}
											onMouseLeave={() => setHovered(null)}
											onClick={() =>
												setSelected({ row: rowIdx, col: colIdx })
											}
											className={`border border-slate-300 p-3 text-center text-sm cursor-pointer transition-colors ${bg} ${textColor} ${fontWeight}`}
										>
											${price}
										</div>
									);
								})}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}