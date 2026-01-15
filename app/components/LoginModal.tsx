"use client";

import { useEffect } from "react";

type SignupModalProps = {
	onClose: () => void;
};

export default function SignupModal({ onClose }: SignupModalProps) {
	// Close on ESC
	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [onClose]);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
			onClick={onClose}
		>
			<div
				className="w-full max-w-md rounded-2xl bg-white p-10 shadow-lg items-center flex flex-col gap-5"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<button
					onClick={onClose}
					className="text-gray-500 self-end hover:text-black"
				>
					✕
				</button>
				<h2 className="text-5xl font-bold text-center">Log In</h2>

				<form className="flex grow flex-col self-stretch gap-10">
					<input
						type="email"
						placeholder="Email"
						className="rounded-lg border px-4 py-3"
					/>
					<input
						type="password"
						placeholder="Password"
						className="rounded-lg border px-4 py-3"
					/>
					<div className="flex flex-1 justify-between text-sm">
						<label className="flex items-center gap-2">
							<input type="checkbox" className="rounded border-gray-400" />
							<span>Remember me</span>
						</label>

						<a href="#" className="text-blue-600 hover:underline">
							Forgot password?
						</a>
					</div>
					<button className="self-center rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
						Log In
					</button>
				</form>

				<div className="flex items-center gap-2 self-center text-sm">
					<p>Don&#39;t have an account?</p>
					<a href="/signup" className="text-blue-600 hover:underline">
						Create free account
					</a>
				</div>
			</div>
		</div>
	);
}
