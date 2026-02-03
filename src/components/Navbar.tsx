// app/components/Navbar.tsx

"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AuthModal from "./auth/AuthModal";
import { deleteCookie } from "cookies-next";
import { authService } from "@/services/auth.service";

export default function Navbar() {
	const [AuthModalOpen, setAuthModalOpen] = useState(false);
	const [mode, setMode] = useState<"login" | "signup" | "verify">("login");
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
        setLoggedIn(authService.isLoggedIn());
    }, []);

	function logout() {
		deleteCookie("accessToken");
		window.location.reload();
	}

	return (
		<>
			<header className="border-b bg-white">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
					{/* Left: Logo + Brand */}
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/images/logo.png"
							alt="SkyTrackR logo"
							width={22}
							height={22}
							priority
						/>
						<span className="text-lg font-semibold tracking-tight">
							SkyTrackR
						</span>
					</Link>
					<nav className="flex items-center gap-6 text-sm">
						<button
							type="button"
							className="cursor-pointer  select-none min-h-10 min-w-23 rounded-lg transition-colors duration-150
							hover:bg-gray-100"
						>
							CAD <span className="ml-1">🇨🇦</span>
						</button>

						<Link
							href="/subscribe"
							className="hover:underline text-center flex justify-center items-center rounded-lg 
							min-h-10 min-w-23 transition-colors duration-150
							hover:bg-gray-100"
						>
							Subscribe
						</Link>

						{loggedIn ? (
							<>
								<Link
									href="/profile"
									className="hover:underline text-center flex justify-center items-center rounded-lg 
							min-h-10 min-w-23 transition-colors duration-150
							hover:bg-gray-100"
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
									onClick={() => {
										setAuthModalOpen(true);
										setMode("login");
									}}
								>
									Login
								</button>
								<button
									type="button"
									className="cursor-pointer rounded-lg border-2 min-h-10 min-w-23 hover:underline transition-colors duration-150
							hover:bg-gray-100"
									onClick={() => {
										setAuthModalOpen(true);
										setMode("signup");
									}}
								>
									Sign Up
								</button>
							</>
						)}
					</nav>
				</div>
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
