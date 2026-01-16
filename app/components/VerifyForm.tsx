import { useState } from "react";


export default function VerifyForm({ email, setMode, onVerifySuccess }: any) {
    const [code, setCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Gọi API: POST /auth/verify { email, code }
        // Nếu ok -> onVerifySuccess()

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, otpCode: code }),
        });

        setIsLoading(false);
    };

    return (
        <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold">Verify Email</h2>
            <p className="text-sm text-gray-500">Enter code sent to <b>{email}</b></p>
            <form onSubmit={handleVerify} className="flex flex-col gap-4">
                <input 
                    className="border p-3 rounded-lg text-center text-2xl tracking-widest"
                    maxLength={6}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    {isLoading ? "Checking..." : "Confirm Code"}
                </button>
            </form>
        </div>
    );
}