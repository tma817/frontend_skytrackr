// app/components/SignupForm.tsx
type Props = {
	setMode: (m: "login" | "signup") => void;
};

export default function SignupForm({ setMode }: Props) {
	return (
		<>
			<h2 className="text-5xl font-bold text-center">Sign Up</h2>

			<form className="flex flex-col gap-6">
				<div className="flex gap-4">
					<input
						placeholder="First Name"
						className="min-w-0 flex-1 rounded-lg border px-4 py-3"
					/>
					<input
						placeholder="Last Name"
						className="min-w-0 flex-1 rounded-lg border px-4 py-3"
					/>
				</div>
				<input placeholder="Email" className="rounded-lg border px-4 py-3" />
				<input
					placeholder="Phone Number"
					className="rounded-lg border px-4 py-3"
				/>
				<input
					type="password"
					placeholder="Password"
					className="rounded-lg border px-4 py-3"
				/>
				<input
					type="password"
					placeholder="Confirm Password"
					className="rounded-lg border px-4 py-3"
				/>

				<button className="self-center rounded-lg cursor-pointer bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
					Create Account
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
