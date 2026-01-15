// app/components/Navbar.tsx

"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
	const [loginOpen, setLoginOpen] = useState(false);

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

					{/* Right: Nav items */}
					<nav className="flex items-center gap-6 text-sm">
						{/* Flights = 너희 프로젝트에선 Search 페이지로 연결 */}
						<Link href="/search" className="hover:underline">
							Flights
						</Link>

						{/* CAD (나중에 dropdown/토글로 바꾸면 됨) */}
						<button type="button" className="cursor-default select-none">
							CAD <span className="ml-1">🇨🇦</span>
						</button>

						<Link href="/subscribe" className="hover:underline">
							Subscribe
						</Link>

						{/* Login button */}
						<button							className="rounded-lg bg-black px-4 py-2 font-medium text-white hover:opacity-90"
							onClick={() => setLoginOpen(true)}
						>
							Login
						</button>
					</nav>
				</div>
			</header>
			{loginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
		</>
	);
}
