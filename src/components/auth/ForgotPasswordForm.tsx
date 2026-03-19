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
        <h2 className="text-3xl font-bold text-center">Check your email</h2>
        <div className="text-center space-y-3">
          <div className="text-5xl"></div>
          <p className="text-gray-500 text-sm">
            If <span className="font-semibold text-black">{email}</span> has an
            account, we've sent a password reset link. It expires in 15 minutes.
          </p>
        </div>
        <button
          onClick={() => setMode("login")}
          className="w-full rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          Back to Login
        </button>
      </>
    );
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-center">Forgot Password</h2>
      <p className="text-center text-gray-500 text-sm">
        Enter your email and we'll send you a reset link.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border px-4 py-3"
            placeholder="you@example.com"
          />
        </div>

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {isLoading ? "Sending…" : "Send Reset Link"}
        </button>
      </form>

      <button
        onClick={() => setMode("login")}
        className="self-center text-sm text-blue-600 hover:underline"
      >
        ← Back to Login
      </button>
    </>
  );
}
