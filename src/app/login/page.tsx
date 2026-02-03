"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import AuthModal from "@/components/auth/AuthModal";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const modeParam = searchParams.get("mode");

    const [mode, setMode] = useState<"login" | "signup" | "verify">(
        modeParam === "signup" ? "signup" : "login"
    );

    return (
        <div className="min-h-screen bg-gray-50"> 
            <AuthModal
                open={true}
                mode={mode}
                setMode={setMode}
                onClose={() => router.push("/")}
            />
        </div>
    );
}