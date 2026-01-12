import PlanCard from "../components/PlanCard";
import icon from "@/public/Vector 4.svg"


export default function SubscribePage() {
	return (
		<section
			className="flex flex-col items-center py-24 px-6"
			style={{
				backgroundImage: "url(/images/hero-bg.png)",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<h1 className="text-5xl font-bold tracking-tight text-black">
				Memberships
			</h1>

			<div className="mt-16 grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
				<PlanCard
					title="Plan 1"
					price="$0"
					features={[
						"3 flights with pricing alerts active at once",
						"Flight watchlist",
					]}
					primary
					icon={icon}
				/>

				<PlanCard
					title="Plan 2"
					price="$9.99"
					features={[
						"All the Plan 1 features",
						"AI Predictions",
						"Unlimited Price Alerts",
					]}
					icon={icon}
				/>

				<PlanCard
					title="Plan 3"
					price="$14.99"
					features={[
						"All the Plan 2 features",
						"Extensive flight price history",
					]}
					icon={icon}
				/>
			</div>
		</section>
	);
}
