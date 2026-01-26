"use client";

import { useState } from "react";
import { useAuthGuard } from "./hooks/useAuthGuard";
import AuthModal from "./components/AuthModal";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
	const [modalOpen, setModalOpen] = useState(false);
	const [mode, setMode] = useState<"login" | "signup" | "verify">("login");

	useAuthGuard(() => setModalOpen(true));

	return (
		<>
			<AuthModal
				open={modalOpen}
				mode={mode}
				setMode={setMode}
				onClose={() => setModalOpen(false)}
			/>
			{children}
		</>
	);
}
