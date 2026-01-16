"use client"

import { useState } from "react";



export default function LoginPage() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted Form")
    setIsLoading(true);
    setError("");

    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    console.log(email, password)

    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("NO RETURN JSON");
      }
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to login, try again later");
      }

      console.log(data);
      alert("Login successfully")

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-2/5 flex flex-col justify-center px-16 py-20 gap-6 bg-white">
      <p className="text-5xl font-bold text-center">Log In</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="font-semibo	ld text-gray-700">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-200">
            {error}
          </p>
        )}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="rounded border-gray-400"
            />
            <span>Remember me</span>
          </label>

          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <button 
          type="submit"
          disabled={isLoading}
          className="self-center w-full rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Signing in" : "Log In"}
        </button>
      </form>

      <div className="flex items-center gap-2 self-center text-sm">
        <p>Don&#39;t have an account?</p>
        <a href="/signup" className="text-blue-600 hover:underline">
          Create free account
        </a>
      </div>
    </div>
  );
}
