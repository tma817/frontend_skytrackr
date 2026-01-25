"use client";

// app/profile/page.tsx
import { useState, useEffect } from "react";
import EditField from "../components/EditField";
import { countries } from "../data/countries";
import { languages } from "../data/languages";
import { timezones } from "../data/timezones";
import FlightCard from "../components/FlightCard";
import { getWatchlist, toggleWatchlist } from "@/app/helpers/watchlist";
import { updateUser, getUser } from "../auth/auth";
interface DropDownEntry {
	value: string;
	option: string;
}

export default function Profile() {
	const [isEditing, setIsEditing] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [country, setCountry] = useState<DropDownEntry | undefined>();
	const [gender, setGender] = useState<string>("");
	const [timeZone, setTimeZone] = useState<DropDownEntry>();
	const [language, setLanguage] = useState<DropDownEntry>();
	const [email, setEmail] = useState("");

	const [watchlist, setWatchlist] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function loadWatchlist() {
			try {
				const user = await getUser();
				if (user) {
					setFirstName(user.fname || "");
					setLastName(user.lname || "");

					setCountry(
						countries.find((c) => c.value === user.country) ??
							countries.find((c) => c.value === "CA"),
					);

					setTimeZone(
						timezones.find((t) => t.value === user.timezone) ?? timezones[0],
					);

					setLanguage(
						languages.find((l) => l.value === user.language) ??
							languages.find((l) => l.value === "en"),
					);

					setGender(user.gender || "");
					setEmail(user.email || "");
				}

				const data = await getWatchlist();
				setWatchlist(data || []);
			} catch (err) {
				console.error(err);
			}
		}

		loadWatchlist();
	}, []);

	async function handleToggleWatchlist(flightId: string) {
		setLoading(true);
		const isAdded = watchlist.includes(flightId);

		try {
			await toggleWatchlist(flightId, isAdded);

			setWatchlist((prev) =>
				isAdded ? prev.filter((id) => id !== flightId) : [...prev, flightId],
			);
		} catch (err) {
			console.error(err);
		} finally {
			setLoading(false);
		}
	}

	async function handleUpdateProfile() {
		try {
			const updated = await updateUser({
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
				{/* Header */}
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

				{/* Form grid */}
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
						value={isEditing ? (country?.value ?? "") : (country?.option ?? "")}
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
					<EditField
						label="Time Zone"
						value={
							isEditing ? (timeZone?.value ?? "") : (timeZone?.option ?? "")
						}
						isEditing={isEditing}
						onChange={(val) =>
							setTimeZone(timezones.find((t) => t.value === val))
						}
						type="select"
						options={timezones}
					/>

					<EditField
						label="Language"
						value={
							isEditing ? (language?.value ?? "") : (language?.option ?? "")
						}
						isEditing={isEditing}
						onChange={(val) =>
							setLanguage(languages.find((l) => l.value === val))
						}
						type="select"
						options={languages}
					/>

					<EditField
						label="Email"
						value={email}
						isEditing={isEditing}
						onChange={setEmail}
						type="email"
					/>
				</div>
			</section>

			<h2 className="text-center text-4xl">Watchlist</h2>

			<section className="mx-auto mb-5 min-h-72 w-full max-w-5xl grow rounded-xl border border-gray-200 bg-white p-6 shadow-md">
				{watchlist.length === 0 ? (
					<p className="text-center text-slate-500">
						No flights in your watchlist
					</p>
				) : (
					<div className="flex flex-col gap-4">
						{watchlist.map((flight: any, index: number) => (
							<FlightCard
								key={flight.id ?? index}
								flight={flight}
								onClick={() => {
									console.log("Clicked flight:", flight);
								}}
								isAdded={watchlist.includes(flight.id)}
								onToggle={() => handleToggleWatchlist(flight.id)}
							/>
						))}
					</div>
				)}
			</section>
		</div>
	);
}
