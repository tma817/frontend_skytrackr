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
					<div className="flex-1">
						<label className="mb-1 block text-sm font-medium">
							First Name <span className="text-red-500">*</span>
						</label>
						<input required className="w-full rounded-lg border px-4 py-3" />
					</div>

					<div className="flex-1">
						<label className="mb-1 block text-sm font-medium">
							Last Name <span className="text-red-500">*</span>
						</label>
						<input required className="w-full rounded-lg border px-4 py-3" />
					</div>
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">
						Email <span className="text-red-500">*</span>
					</label>
					<input
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
					<input type="tel" className="w-full rounded-lg border px-4 py-3" />
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">
						Password <span className="text-red-500">*</span>
					</label>
					<input
						required
						type="password"
						className="w-full rounded-lg border px-4 py-3"
					/>
				</div>

				<div>
					<label className="mb-1 block text-sm font-medium">
						Confirm Password <span className="text-red-500">*</span>
					</label>
					<input
						required
						type="password"
						className="w-full rounded-lg border px-4 py-3"
					/>
				</div>

				<p className="text-xs text-gray-500">
					Fields marked with <span className="text-red-500">*</span> are
					required.
				</p>

				<button className="self-center rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700">
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
