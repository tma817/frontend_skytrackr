// app/profile/page.tsx

export default function Profile() {
	const Field = ({
		label,
		value,
		icon,
	}: {
		label: string;
		value: string;
		icon?: React.ReactNode;
	}) => (
		<div>
			<label className="block mb-1 text-sm text-gray-500">{label}</label>
			<div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 border border-gray-200">
				<span className="text-sm text-gray-600">{value}</span>
				{icon}
			</div>
		</div>
	);
	return (
		<div className="flex flex-col stretch gap-10">
			<section className="max-w-5xl grow w-full mx-auto p-6 mt-5 bg-white rounded-xl shadow-md border border-gray-200">
				{/* Header */}
				<div className="flex items-center justify-between mb-10">
					<div className="flex items-center gap-4">
						<div>
							<h2 className="text-lg font-medium">Jane Doe</h2>
						</div>
					</div>

					<button className="px-4 py-2 text-sm font-medium cursor-pointer text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
						Edit
					</button>
				</div>

				{/* Form grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-12">
					<Field label="First Name" value="Jane" />
					<Field label="Last Name" value="Doe" />
					<Field label="Country" value="Canada" />

					<Field label="Gender" value="Female" />
					<Field label="Time Zone" value="EST (-5:00 UTC)" />

					<Field label="Language" value="English" />
				</div>

				{/* Footer */}
				<div>
					<h3 className="text-base font-medium mb-4">My Email Address</h3>

					<div className="flex items-center gap-4">
						<div className="flex items-center justify-center w-11 h-11 rounded-full bg-blue-500/10"></div>

						<div>
							<p className="text-sm">JaneDoe@gmail.com</p>
							<p className="text-sm text-gray-400">1 month ago</p>
						</div>
					</div>
				</div>
			</section>
			<h2 className="text-4xl text-center">Watchlist</h2>
			<section className="flex flex-col items-center min-h-72 max-w-5xl grow w-full mx-auto mb-5 p-6 bg-white rounded-xl shadow-md border border-gray-200"></section>
		</div>
	);
}
