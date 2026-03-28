// app/components/Navbar.tsx

"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AuthModal from "./auth/AuthModal";
import { deleteCookie } from "cookies-next";
import { authService } from "@/services/auth.service";
import { PiArrowRightBold, PiListBold, PiXBold, PiMagnifyingGlassBold } from "react-icons/pi";

function TrackBookingDropdown({ onClose }: { onClose?: () => void }) {
	const [open, setOpen] = useState(false);
	const [pnr, setPnr] = useState("");
	const [lastName, setLastName] = useState("");
	const [error, setError] = useState("");
	const ref = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const p = pnr.trim().toUpperCase();
		const l = lastName.trim();
		if (!p || !l) {
			setError("Please enter your PNR and last name.");
			return;
		}
		setOpen(false);
		setPnr("");
		setLastName("");
		setError("");
		onClose?.();
		router.push(`/booking/track?pnr=${p}&lastName=${encodeURIComponent(l)}`);
	}

	return (
		<div ref={ref} className="relative">
			<button
				type="button"
				onClick={() => { setOpen((o) => !o); setError(""); }}
				className="flex items-center gap-1.5 cursor-pointer min-h-10 px-3 rounded-lg transition-colors duration-150 hover:bg-gray-100 text-sm w-full md:w-auto"
			>
				Track Booking
			</button>

			{open && (
				<div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border bg-white shadow-lg p-4 z-50">
					<p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
						Track your booking
					</p>
					<form onSubmit={handleSubmit} className="flex flex-col gap-2">
						<input
							autoFocus
							type="text"
							value={pnr}
							onChange={(e) => { setPnr(e.target.value.toUpperCase()); setError(""); }}
							placeholder="PNR (e.g. ABC123)"
							className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-mono tracking-widest placeholder:text-slate-300 placeholder:font-normal placeholder:tracking-normal focus:border-slate-400 focus:outline-none"
						/>
						<input
							type="text"
							value={lastName}
							onChange={(e) => { setLastName(e.target.value); setError(""); }}
							placeholder="Last name"
							className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm placeholder:text-slate-300 focus:border-slate-400 focus:outline-none"
						/>
						{error && (
							<p className="text-xs text-red-500 font-medium">{error}</p>
						)}
						<button
							type="submit"
							className="flex items-center justify-center gap-1.5 rounded-xl bg-black py-2 text-sm font-bold text-white hover:opacity-80 transition-opacity"
						>
							Find Booking
							<PiArrowRightBold size={13} />
						</button>
					</form>
					<p className="mt-3 text-[10px] text-slate-400 text-center">
						Find your PNR in your confirmation email.
					</p>
				</div>
			)}
		</div>
	);
}

export default function Navbar() {
	const [AuthModalOpen, setAuthModalOpen] = useState(false);
	const [mode, setMode] = useState<"login" | "signup" | "verify">("login");
	const [loggedIn, setLoggedIn] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setLoggedIn(authService.isLoggedIn());
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		if (menuOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => { document.body.style.overflow = ""; };
	}, [menuOpen]);

	function logout() {
		deleteCookie("accessToken");
		window.location.reload();
	}

	return (
		<>
			<header className="border-b bg-white sticky top-0 z-40 font-sans font-medium">
				<div className="mx-auto flex items-center justify-between px-6 py-4">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
						<Image src="/images/logo.png" alt="SkyTrackR logo" width={22} height={22} priority />
						<span className="text-lg font-semibold tracking-tight">SkyTrackR</span>
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center gap-6 text-sm">
						{/* <button
							type="button"
							className="cursor-pointer select-none min-h-10 min-w-23 rounded-lg transition-colors duration-150 hover:bg-gray-100"
						>
							CAD <span className="ml-1">🇨🇦</span>
						</button> */}

						<Link
							href="/airlines"
							className="hover:underline text-center flex justify-center items-center rounded-lg min-h-10 min-w-23 transition-colors duration-150 hover:bg-gray-100"
						>
							Airlines
						</Link>

						<TrackBookingDropdown />

						{loggedIn ? (
							<>
								<Link
									href="/profile"
									className="hover:underline text-center flex justify-center items-center rounded-lg min-h-10 min-w-23 transition-colors duration-150 hover:bg-gray-100"
								>
									Profile
								</Link>
								<button
									onClick={logout}
									className="cursor-pointer rounded-lg border-2 border-black bg-black min-h-10 min-w-23 font-medium text-white transition-colors duration-150 hover:opacity-80"
								>
									Logout
								</button>
							</>
						) : (
							<>
								<button
									className="cursor-pointer rounded-lg border-2 border-black bg-black min-h-10 min-w-23 font-medium text-white transition-colors duration-150 hover:opacity-80"
									onClick={() => { setAuthModalOpen(true); setMode("login"); }}
								>
									Login
								</button>
								<button
									type="button"
									className="cursor-pointer rounded-lg border min-h-10 min-w-23 hover:underline transition-colors duration-150 hover:bg-gray-100"
									onClick={() => { setAuthModalOpen(true); setMode("signup"); }}
								>
									Sign Up
								</button>
							</>
						)}
					</nav>

					{/* Mobile hamburger */}
					<button
						type="button"
						className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
						onClick={() => setMenuOpen((o) => !o)}
						aria-label="Toggle menu"
					>
						{menuOpen ? <PiXBold size={20} /> : <PiListBold size={20} />}
					</button>
				</div>

				{/* Mobile menu */}
				{menuOpen && (
					<div className="md:hidden border-t bg-white px-6 py-4 flex flex-col gap-1">
						<button
							type="button"
							className="flex items-center justify-start w-full cursor-pointer select-none min-h-10 rounded-lg px-3 transition-colors duration-150 hover:bg-gray-100 text-sm"
						>
							CAD <span className="ml-1">🇨🇦</span>
						</button>

						<Link
							href="/airlines"
							onClick={() => setMenuOpen(false)}
							className="flex items-center min-h-10 px-3 rounded-lg text-sm transition-colors duration-150 hover:bg-gray-100"
						>
							Airlines
						</Link>

						<TrackBookingDropdown onClose={() => setMenuOpen(false)} />

						<div className="border-t my-2" />

						{loggedIn ? (
							<>
								<Link
									href="/profile"
									onClick={() => setMenuOpen(false)}
									className="flex items-center min-h-10 px-3 rounded-lg text-sm transition-colors duration-150 hover:bg-gray-100"
								>
									Profile
								</Link>
								<button
									onClick={logout}
									className="cursor-pointer rounded-lg border-2 border-slate-900 bg-black min-h-10 w-full font-medium text-white transition-colors duration-150 hover:opacity-80 text-sm"
								>
									Logout
								</button>
							</>
						) : (
							<>
								<button
									className="cursor-pointer bg-black rounded-lg border-2 border-black bg-slate-9 min-h-10 w-full font-medium text-white transition-colors duration-150 hover:opacity-80 text-sm"
									onClick={() => { setAuthModalOpen(true); setMode("login"); setMenuOpen(false); }}
								>
									Login
								</button>
								<button
									type="button"
									className="cursor-pointer  rounded-lg border-2 min-h-10 w-full hover:bg-gray-100 transition-colors duration-150 text-sm"
									onClick={() => { setAuthModalOpen(true); setMode("signup"); setMenuOpen(false); }}
								>
									Sign Up
								</button>
							</>
						)}
					</div>
				)}
			</header>

			<AuthModal
				open={AuthModalOpen}
				mode={mode}
				setMode={setMode}
				onClose={() => setAuthModalOpen(false)}
			/>
		</>
	);
}
