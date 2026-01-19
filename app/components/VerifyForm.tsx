import { useEffect, useState } from "react";


export default function VerifyForm({ email, setMode, onVerifySuccess }: any) {
    const [code, setCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otpCode: code }),
            });
            if (response.ok) {
                alert("Verification successful! Please log in.");
                setMode("login");
            } else {
                const data = await response.json();
                setErrorMessage(data.message || "Incorrect Token, please try again.");
            }
        } catch (err) {
            setErrorMessage("Connection error, please try again.");
        } finally {
            setIsLoading(false);
        }
    };

	const handleResendCode = async () => {
        if (countdown > 0) return;

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/resend-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setCountdown(60); 
                setCode("");
                setErrorMessage(""); 
                alert("New OTP Code has been sent to your email.");
            } else {
                const data = await response.json();
                alert(data.message || "Please try again later.");
            }
        } catch (err) {
            alert("Something went wrong, please try again");
        }
    };

    useEffect(() => {
        let timer: any;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    return (
        <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold">Verify Email</h2>
            <p className="text-sm text-gray-500">Enter code sent to <b>{email}</b></p>
            <form onSubmit={handleVerify} className="flex flex-col gap-4">
                <input 
                    className="border p-3 rounded-lg text-center text-2xl tracking-widest"
                    maxLength={6}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="000000"
                    required
                />
                {errorMessage && <p className="text-red-500 text-xs font-medium">{errorMessage}</p>}

                <button className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    {isLoading ? "Checking..." : "Confirm Code"}
                </button>
            </form>

            <div className="mt-2 text-sm">
                <p className="text-gray-500">Did not receive the code?</p>
                <button
                    onClick={handleResendCode}
                    disabled={countdown > 0}
                    className="text-blue-600 font-semibold hover:underline disabled:text-gray-400 cursor-pointer disabled:cursor-not-allowed"
                >
                    {countdown > 0 ? `Resend after ${countdown}s` : "Send it again"}
                </button>
            </div>
        </div>
    );
}