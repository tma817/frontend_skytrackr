// app/components/SignupForm.tsx
type Props = {
	setMode: (m: "login" | "signup" | "verify") => void;
	onSignupSuccess: (email: string) => void;
};
import { useState } from "react";

export default function SignupForm({ setMode, onSignupSuccess }: Props) {
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [isLoading, setIsLoading] = useState(false);
  	const [error, setError] = useState("");
	
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (password != confirmPassword)
		{
			setError("Passwords do not match")
			return
		}

    	setIsLoading(true);
    	setError("");
    	const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

		try {
			const response = await fetch(`${baseUrl}/auth/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fname: firstName, lname: lastName, email, password, phoneNumber: phone })
			});

			const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

			if (response.ok)
			{
				onSignupSuccess(email)
			}
			onSignupSuccess(email)
		} catch(err: any)
		{
			setError(err.message)
		} finally {
			setIsLoading(false)
		}
	}


	return (
		<>
			<h2 className="text-5xl font-bold text-center">Sign Up</h2>

			<form onSubmit={handleSubmit} className="flex flex-col gap-6">
				<div className="flex gap-4">
					<div className="flex-1">
						<label className="mb-1 block text-sm font-medium">
							First Name <span className="text-red-500">*</span>
						</label>
						<input 
							required
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)} 
							className="w-full rounded-lg border px-4 py-3" />
					</div>

					<div className="flex-1">
						<label className="mb-1 block text-sm font-medium">
							Last Name <span className="text-red-500">*</span>
						</label>
						<input 
							value={lastName}
							onChange={(e) => setLastName(e.target.value)} 
							required 
							className="w-full rounded-lg border px-4 py-3" />
					</div>
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">
						Email <span className="text-red-500">*</span>
					</label>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)} 
						required
						type="email"
						className="w-full rounded-lg border px-4 py-3"
					/>
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">
						Phone Number{" "}
						<span className="text-gray-400 text-xs">(optional)</span>
					</label>
					<input 
						type="tel" 
						value={phone}
						onChange={(e) => setPhone(e.target.value)} 
						className="w-full rounded-lg border px-4 py-3" />
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">
						Password <span className="text-red-500">*</span>
					</label>
					<input
						required
						type="password"
						value = {password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full rounded-lg border px-4 py-3"
					/>
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">
						Confirm Password <span className="text-red-500">*</span>
					</label>
					<input
						value = {confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
						type="password"
						className="w-full rounded-lg border px-4 py-3"
					/>
				</div>

				{error && (
					<p className="text-red-500 text-sm font-medium">
						{error}
					</p>
				)}
				<p className="text-xs text-gray-500">
					Fields marked with <span className="text-red-500">*</span> are
					required.
				</p>

				<button 
					type="submit"
          			disabled={isLoading}
					className="self-center rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700">
						{isLoading ? "Creating.." : "Create Account"}
				</button>
			</form>

			<div className="flex items-center gap-2 self-center text-sm">
				<p>Already have an account?</p>
				<button
					onClick={() => setMode("login")}
					className="text-blue-600 cursor-pointer hover:underline"
				>
					Log in
				</button>
			</div>
		</>
	);
}
