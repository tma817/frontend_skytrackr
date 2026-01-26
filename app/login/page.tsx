"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import AuthModal from "@/app/components/AuthModal";

export default function LoginPage() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const modeParam = searchParams.get("mode");

	const [mode, setMode] = useState<"login" | "signup" | "verify">(
		modeParam === "signup" ? "signup" : "login"
	);

	return (
		<AuthModal
			open
			mode={mode}
			setMode={setMode}
			onClose={() => router.back()}
		/>
	);
}
