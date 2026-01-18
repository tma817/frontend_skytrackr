// app/components/LoginForm.tsx
import { useState } from "react";
import { setCookie } from "cookies-next";

type Props = {
	setMode: (m: "login" | "signup" | "verify") => void;
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
				setCookie("accessToken", data.access_token, {
					maxAge: 60 * 60 * 24,
					path: "/",
					// secure: true,
					// sameSite: 'lax'
				});
				alert("Login successfully");
				window.location.href = "/dashboard";
			}
		} catch (err: any) {
			if (err.message.includes("verify")) {
				setMode("verify");
				onLoginSuccess(email);
			}
			else {
				setError(err.message);
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<h2 className="text-5xl font-bold text-center">Log In</h2>

			<form onSubmit={handleSubmit} className="flex flex-col gap-10">
				<div>
					<label className="mb-1 block text-sm font-medium">
						Email
					</label>
					<input
						type="email"
						placeholder="Email"
						required
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full rounded-lg border px-4 py-3"
					/>
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">Password</label>
					<div className="relative">
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="rounded-lg border px-4 py-3 w-full"
							autoComplete="new-password"
							spellCheck="false"
						/>
						<button
							type="button"
							onClick={() => setShowPassword(!showPassword)}
							className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600 dark:text-neutral-600 dark:focus:text-blue-500"
						>
							{showPassword ? (
								// Eye open
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#000000"
								>
									<path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
								</svg>
							) : (
								// Eye closed
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#000000"
								>
									<path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" />
								</svg>
							)}
						</button>
					</div>
				</div>

				<div className="flex justify-between text-sm">
					<label className="flex items-center gap-2">
						<input type="checkbox" className="rounded border-gray-400" />
						<span>Remember me</span>
					</label>

					<a href="#" className="text-blue-600 hover:underline">
						Forgot password?
					</a>
				</div>

				{error && (
					<p className="text-red-500 text-sm font-medium self-center">
						{error}
					</p>
				)}

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
