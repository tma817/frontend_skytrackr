// app/components/LoginForm.tsx
import { useState } from "react";
import { setCookie } from "cookies-next";
import { API_BASE } from "@/utils/api";

type Props = {
	setMode: (m: "login" | "signup" | "verify" | "forgot") => void;
	onLoginSuccess: (email: string) => void;
};

export default function LoginForm({ setMode, onLoginSuccess }: Props) {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");
		try {
			const response = await fetch(`${API_BASE}/auth/login`, {
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
				throw new Error(data.message || "Failed to login, please try again");
			}
			if (response.ok) {
				setCookie("accessToken", data.access_token, {
					maxAge: 60 * 60 * 24,
					path: "/",
				});
				window.location.href = "/profile";
			}
		} catch (err: any) {
			if (err.message.includes("verify")) {
				setMode("verify");
				onLoginSuccess(email);
			} else {
				setError(err.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			{/* Header */}
			<div className="text-center">
				<span className="inline-flex items-center gap-1.5 text-[16px] font-bold uppercase tracking-[0.25em] text-sky-500 mb-3">
					SkyTrackR
				</span>
				<h2 className="text-2xl font-black tracking-tight text-gray-900 leading-none">
					Welcome back
				</h2>
				<p className="mt-1.5 text-xs text-gray-400 tracking-wide">
					Sign in to track your flights & prices
				</p>
			</div>


			{/* Form */}
			<form onSubmit={handleSubmit} className="flex flex-col gap-5 px-5">
				{/* Email */}
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

				{/* Password */}
				<div className="group">
					<div className="flex items-center justify-between mb-2">
						<label className="block text-[10px] font-bold uppercase tracking-[0.18em] group-focus-within:text-sky-500 transition-colors duration-200">
							Password
						</label>
						<button
							type="button"
							onClick={() => setMode("forgot")}
							className="text-[10px] font-semibold uppercase tracking-wider text-sky-500 hover:text-sky-600 transition-colors duration-150"
						>
							Forgot Password?
						</button>
					</div>
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							spellCheck="false"
							className="w-full border rounded-xl p-3  bg-transparent pb-2.5 text-sm text-gray-900 placeholder:text-gray-300 focus:border-sky-400 focus:outline-none transition-colors duration-200 pr-8"
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							tabIndex={-1}
							className="absolute right-0 bottom-3 px-3 text-gray-300 hover:text-gray-500 transition-colors duration-150"
						>
							{showPassword ? (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
									<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
									<path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-4 h-4">
									<path d="M792-56 624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM480-320q11 0 20.5-1t20.5-4L305-541q-3 11-4 20.5t-1 20.5q0 75 52.5 127.5T480-320Zm292 18L645-428q7-17 11-34.5t4-37.5q0-75-52.5-127.5T480-680q-20 0-37.5 4T408-664L306-766q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302ZM587-486 467-606q28-5 51.5 4.5T559-574q17 18 24.5 41.5T587-486Z" />
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Remember me */}
				<label className="flex items-center gap-2.5 cursor-pointer select-none">
					<input
						type="checkbox"
						className="w-4 h-4 rounded border-gray-300 accent-sky-400 cursor-pointer"
					/>
					<span className="text-xs text-gray-400">Remember me for 30 days</span>
				</label>

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
							Signing in...
						</>
					) : (
						<>
							Sign In
						</>
					)}
				</button>
			</form>

			{/* Footer */}
			<p className="text-center text-xs text-gray-400">
				No account yet?{" "}
				<button
					onClick={() => setMode("signup")}
					className="font-semibold text-gray-900 hover:text-sky-500 transition-colors duration-150 cursor-pointer"
				>
					Create one free
				</button>
			</p>
		</>
	);
}
