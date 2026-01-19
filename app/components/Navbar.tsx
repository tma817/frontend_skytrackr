// app/components/Navbar.tsx

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AuthModal from "./AuthModal";

export default function Navbar() {
	const [AuthModalOpen, setAuthModalOpen] = useState(false);
	const [mode, setMode] = useState<"login" | "signup" | "verify">("login");

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
						<button type="button" className="cursor-default select-none">
							CAD <span className="ml-1">🇨🇦</span>
						</button>

						<Link href="/subscribe" className="hover:underline">
							Subscribe
						</Link>

						{/* Login button */}
						<button
							className="rounded-lg bg-black px-4 py-2 font-medium text-white hover:opacity-90"
							onClick={() => {
								setAuthModalOpen(true)
								setMode("login");
							
							}}
						>
							Login
						</button>
						<button
							type="button"
							className="cursor-pointer hover:underline"
							onClick={() => {
								setAuthModalOpen(true);
								setMode("signup");
							}}
						>
							Sign Up
						</button>
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
