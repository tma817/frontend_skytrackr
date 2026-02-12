import React, { useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";
import { motion } from "framer-motion";

type PriceEntry = {
	label: string;
	actualPrice: number | null;
	predictedPrice: number | null;
};

interface PredictionGraphProps {
	dailyData?: PriceEntry[];
	weeklyData?: PriceEntry[];
}

export default function PredictionGraph({
	dailyData = [
		{ label: "Mon", actualPrice: 120, predictedPrice: 118 },
		{ label: "Tue", actualPrice: 125, predictedPrice: 123 },
		{ label: "Wed", actualPrice: 130, predictedPrice: 128 },
		{ label: "Thu", actualPrice: 128, predictedPrice: 132 },
		{ label: "Fri", actualPrice: 140, predictedPrice: 138 },
		{ label: "Sat", actualPrice: null, predictedPrice: 142 },
		{ label: "Sun", actualPrice: null, predictedPrice: 147 },
	],
	weeklyData = [
		{ label: "Week 1", actualPrice: 110, predictedPrice: 108 },
		{ label: "Week 2", actualPrice: 125, predictedPrice: 123 },
		{ label: "Week 3", actualPrice: 135, predictedPrice: 132 },
		{ label: "Week 4", actualPrice: 150, predictedPrice: 148 },
		{ label: "Week 5", actualPrice: null, predictedPrice: 160 },
	],
}: PredictionGraphProps) {
	const [mode, setMode] = useState<"daily" | "weekly">("daily");

	const data = mode === "daily" ? dailyData : weeklyData;

	return (
		<div className="w-full max-w-4xl mx-auto select-none">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="bg-linear-to-br from-slate-50 to-slate-100 shadow-2xl rounded-2xl p-6"
			>
				{/* Header */}
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
					<h2 className="text-2xl font-bold tracking-tight">
						Price Prediction
					</h2>

					{/* Toggle */}
					<div className="flex bg-slate-200 rounded-xl p-1 w-fit">
						<button
							onClick={() => setMode("daily")}
							className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
								mode === "daily"
									? "bg-white shadow"
									: "text-slate-600 hover:text-black"
							}`}
						>
							Daily
						</button>

						<button
							onClick={() => setMode("weekly")}
							className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
								mode === "weekly"
									? "bg-white shadow"
									: "text-slate-600 hover:text-black"
							}`}
						>
							Weekly
						</button>
					</div>
				</div>

				<div className="w-full h-87.5">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={data}>
							<CartesianGrid strokeDasharray="4 4" />

							<XAxis
								dataKey="label"
								tick={{ fontSize: 12 }}
								axisLine={false}
								tickLine={false}
							/>

							<YAxis
								width="auto"
								tick={{ fontSize: 12 }}
								axisLine={false}
								tickLine={false}
								domain={["dataMin - 10", "dataMax + 10"]}
								tickFormatter={(value) => `$${value}`}
							/>
							<Tooltip
								contentStyle={{ borderRadius: "12px", border: "none" }}
								formatter={(value: number) => `$${value}`}
							/>

							<Legend />

							<Line
								type="monotone"
								dataKey="actualPrice"
								name="Actual"
								stroke="#2563eb"
								strokeWidth={3}
								dot={(props) =>
									props.value != null ? (
										<circle
											cx={props.cx}
											cy={props.cy}
											r={3}
											fill="#2563eb"
											stroke="#2563eb"
											strokeWidth={1}
										/>
									) : null
								}
								connectNulls={false}
							/>

							<Line
								type="monotone"
								dataKey="predictedPrice"
								name="Predicted"
								stroke="#16a34a"
								strokeWidth={3}
								strokeDasharray="6 6"
								dot={(props) => (
									<circle
										cx={props.cx}
										cy={props.cy}
										r={3}
										fill="#16a34a"
										stroke="#16a34a"
										strokeWidth={1}
									/>
								)}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
			</motion.div>
		</div>
	);
}
