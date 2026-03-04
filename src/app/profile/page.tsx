"use client";

import { useState, useEffect } from "react";
import EditField from "@/components/EditField";
import { countries } from "../../mockUpDataHERE/countries";
import FlightCard from "@/components/FlightCard";
import { authService } from "@/services/auth.service";
import { watchlistService } from "@/services/watchlist.service";
import { useRouter } from "next/navigation";

import { FlightResult } from "../../types/flight";

interface DropDownEntry {
	value: string;
	option: string;
}

export default function Profile() {
	const router = useRouter();
	const [isEditing, setIsEditing] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [country, setCountry] = useState<DropDownEntry | undefined>();
	const [gender, setGender] = useState<string>("");
	const [email, setEmail] = useState("");

	const [watchlist, setWatchlist] = useState<FlightResult[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadData() {
			try {
				const user = await authService.getUser();
				if (user) {
					setFirstName(user.fname || "");
					setLastName(user.lname || "");

					setCountry(
						countries.find((c) => c.value === user.country) ??
							countries.find((c) => c.value === "CA")
					);

					setGender(user.gender || "");
					setEmail(user.email || "");
				}

				const watchlistData = await watchlistService.getWatchlist();
				setWatchlist(watchlistData || []);


				} catch (err) {
				console.error(err);
			}
		}

		loadData();
	}, []);

	async function handleToggleWatchlist(flight: FlightResult) {
		setLoading(true);
		const isAdded = watchlist.some((f: FlightResult) => f.id && f.id === flight.id);
		try {
			await watchlistService.toggleWatchlist(flight, isAdded);

			setWatchlist((prev) => {
				if (isAdded) {
					return prev.filter((f: FlightResult) => !(f.id && f.id === flight.id));
				}
				return [...prev, flight];
			});
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	async function handleUpdateProfile() {
		try {
			const updated = await authService.updateUser({
				fname: firstName,
				lname: lastName,
			});
			console.log("Updated user:", updated);
		} catch (err) {
			console.error(err);
		}
	}

	return (
		<div className="flex flex-col gap-10">
			<section className="mx-auto mt-5 w-full max-w-5xl grow rounded-xl border border-gray-200 bg-white p-6 shadow-md">
				<div className="mb-10 flex items-center justify-between">
					<div>
						<h2 className="text-lg font-medium">
							{firstName} {lastName}
						</h2>
					</div>

					<button
						onClick={() => {
							if (isEditing) {
								handleUpdateProfile();
							}
							setIsEditing((v) => !v);
						}}
						className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
					>
						{isEditing ? "Save" : "Edit"}
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-12">
					<EditField
						label="First Name"
						value={firstName}
						isEditing={isEditing}
						onChange={setFirstName}
						type="text"
					/>
					<EditField
						label="Last Name"
						value={lastName}
						isEditing={isEditing}
						onChange={setLastName}
						type="text"
					/>
					<EditField
						label="Country"
						value={isEditing ? country?.value ?? "" : country?.option ?? ""}
						isEditing={isEditing}
						onChange={(val) => {
							const selected = countries.find((c) => c.value === val);
							if (selected) setCountry(selected);
						}}
						type="select"
						options={countries}
					/>

					<EditField
						label="Gender"
						value={gender}
						isEditing={isEditing}
						onChange={setGender}
						type="select"
						options={["Male", "Female", "Other"]}
					/>

					<EditField label="Email" value={email} isEditing={isEditing} onChange={setEmail} type="email" />
				</div>
			</section>

			<h2 className="text-center text-4xl">Flights</h2>

			<div className="mx-auto mb-5 flex w-full max-w-5xl justify-center gap-4">
				<button
					className="px-4 py-2 rounded-lg font-medium transition bg-blue-500 text-white shadow-md"
				>
					Watchlist
				</button>
				<button
					onClick={() => router.push("/orders")}
					className="px-4 py-2 rounded-lg font-medium transition bg-white text-slate-700 border border-gray-300 hover:bg-gray-50"
				>
					Booked Flights →
				</button>
			</div>

			<section className="mx-auto mb-5 min-h-72 w-full max-w-5xl grow rounded-xl border border-gray-200 bg-white p-6 shadow-md">
				{watchlist.length === 0 ? (
					<p className="text-center text-slate-500">
						No flights in your watchlist
					</p>
				) : (
					<div className="flex flex-col gap-4">
						{watchlist.map((flight: FlightResult, index: number) => {
							const isAdded = watchlist.some(
								(f: FlightResult) => f.id === flight.id && f.search_id === flight.search_id
							);

							return (
								<FlightCard
									key={index}
									flight={flight}
									onClick={() => console.log("Clicked flight:", flight)}
									isAdded={isAdded}
									onToggle={() => handleToggleWatchlist(flight)}
								/>
							);
						})}
					</div>
				)}
			</section>
		</div>
	);
}