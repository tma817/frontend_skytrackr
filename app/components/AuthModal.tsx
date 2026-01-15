"use client";
import { useEffect } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type Props = {
	open: boolean;
	mode: "login" | "signup";
	setMode: (m: "login" | "signup") => void;
	onClose: () => void;
};

export default function AuthModal({ open, mode, setMode, onClose }: Props) {
	// ESC to close
	useEffect(() => {
		if (!open) return;
		const handler = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
			onClick={onClose}
		>
			<div
				className="w-full max-w-lg rounded-2xl bg-white p-10 shadow-lg flex flex-col gap-5"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close */}
				<button
					onClick={onClose}
					className="self-end text-gray-500 hover:text-black"
				>
					✕
				</button>

				{/* Swap forms */}
				{mode === "login" && <LoginForm setMode={setMode} />}
				{mode === "signup" && <SignupForm setMode={setMode} />}
			</div>
		</div>
	);
}
