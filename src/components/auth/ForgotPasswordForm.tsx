"use client";
import { useState } from "react";
import { API_BASE } from "@/utils/api";

type Props = {
  setMode: (m: "login" | "signup" | "verify" | "forgot") => void;
};

export default function ForgotPasswordForm({ setMode }: Props) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      console.log(res)
      console.log(res.ok)
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }
      setSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (sent) {
    return (
      <>
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 text-[16px] font-bold uppercase tracking-[0.25em] text-sky-500 mb-3">
            SkyTrackR
          </span>
          <h2 className="text-2xl font-black tracking-tight text-gray-900 leading-none">
            Check your inbox
          </h2>
          <p className="mt-1.5 text-xs text-gray-400 tracking-wide">
            Reset link sent
          </p>
        </div>

        {/* Success card */}
        <div className="mx-5 rounded-xl bg-sky-50 border border-sky-100 px-5 py-5 text-center">
          <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sky-500">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            We sent a reset link to{" "}
            <span className="font-semibold text-gray-900">{email}</span>.
            <br />
            <span className="text-xs text-gray-400">Expires in 15 minutes.</span>
          </p>
        </div>

        <div className="px-5">
          <button
            onClick={() => setMode("login")}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-black py-3.5 text-sm font-bold text-white hover:bg-zinc-800 active:scale-[0.99] transition-all duration-150 cursor-pointer"
          >
            Back to Sign In
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 text-[16px] font-bold uppercase tracking-[0.25em] text-sky-500 mb-3">
          SkyTrackR
        </span>
        <h2 className="text-2xl font-black tracking-tight text-gray-900 leading-none">
          Reset password
        </h2>
        <p className="mt-1.5 text-xs text-gray-400 tracking-wide">
          We&apos;ll send a reset link to your email
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-5">
        <div className="group">
          <label className="block text-[10px] font-bold uppercase tracking-[0.18em] mb-2 group-focus-within:text-sky-500 transition-colors duration-200">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full border rounded-xl p-3 bg-transparent text-sm text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:outline-none transition-colors duration-200"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-100 px-3 py-2.5 text-xs text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-1 flex items-center justify-center gap-2 w-full rounded-xl bg-black py-3.5 text-sm font-bold text-white hover:bg-zinc-800 active:scale-[0.99] transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Reset Link
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-xs text-gray-400">
        Remembered it?{" "}
        <button
          onClick={() => setMode("login")}
          className="font-semibold text-gray-900 hover:text-sky-500 transition-colors duration-150 cursor-pointer"
        >
          Back to sign in
        </button>
      </p>
    </>
  );
}
