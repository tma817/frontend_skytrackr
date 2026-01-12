import { StaticImageData } from "next/image";

type PlanCardProps = {
	title: string;
	price: string;
	features: string[];
	icon: StaticImageData;
	primary?: boolean;
};

export default function PlanCard({
	title,
	price,
	features,
	icon,
	primary = false,
}: PlanCardProps) {
	return (
		<div className="flex flex-col gap-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
			<h3 className="text-xl font-semibold">{title}</h3>

			<div className="flex items-baseline gap-2">
				<span className="text-5xl font-bold">{price}</span>
				<span className="text-gray-500">/ month</span>
			</div>

			<ul className="flex flex-col gap-3">
				{features.map((feature) => (
					<li key={feature} className="flex items-start gap-3">
						<span className="flex h-6 w-6 items-center justify-center rounded-ful text-white">
							<img src={icon.src} alt="" className="h-3 w-3" />
						</span>
						<span className="text-gray-800">{feature}</span>
					</li>
				))}
			</ul>

			<button
				className={`mt-auto rounded-xl px-4 py-3 font-medium transition cursor-pointer ${
					primary
						? "bg-black text-white hover:bg-black/90"
						: "border border-black/20 hover:bg-black/5"
				}`}
			>
				Sign up
			</button>
		</div>
	);
}
