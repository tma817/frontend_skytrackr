export default function LoginPage() {
  return (
    <div className="w-2/5 flex flex-col justify-center px-16 py-20 gap-6 bg-white">
      <p className="text-5xl font-bold text-center">Log In</p>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">
            Email address
          </label>
          <input
            type="email"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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
      </div>

      {/* Submit */}
      <button className="self-center rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
        Log In
      </button>

      <div className="flex items-center gap-2 self-center text-sm">
        <p>Don&#39;t have an account?</p>
        <a href="/signup" className="text-blue-600 hover:underline">
          Create free account
        </a>
      </div>
    </div>
  );
}
