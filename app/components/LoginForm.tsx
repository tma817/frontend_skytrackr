// app/components/LoginForm.tsx
import { useState } from "react";
import { setCookie } from "cookies-next";

type Props = {
  setMode: (m: "login" | "signup") => void;
};

export default function LoginForm({ setMode }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    // console.log(email,password,baseUrl)
    try {
      const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server did not return JSON");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to login, try again later");
      }
      if (response.ok) {
        setCookie('accessToken', data.access_token, { 
          maxAge: 60 * 60 * 24,
          path: '/',
          // secure: true, 
          // sameSite: 'lax'
        });
        alert("Login successfully");
        window.location.href = "/dashboard";
      }
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-5xl font-bold text-center">Log In</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border px-4 py-3"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg border px-4 py-3"
        />

        {error && (
          <p className="text-red-500 text-sm font-medium">
            {error}
          </p>
        )}

        <div className="flex justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-400" />
            <span>Remember me</span>
          </label>

          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button 
          type="submit"
          disabled={isLoading}
          className="self-center w-full rounded-lg cursor-pointer bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {isLoading ? "Signing in..." : "Log In"}
        </button>
      </form>

      <div className="flex items-center gap-2 self-center text-sm">
        <p>Don&#39;t have an account?</p>
        <button
          onClick={() => setMode("signup")}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Create a free account
        </button>
      </div>
    </>
  );
}
