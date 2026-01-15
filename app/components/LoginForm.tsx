// app/components/LoginForm.tsx
type Props = {
  setMode: (m: "login" | "signup") => void;
};

export default function LoginForm({ setMode }: Props) {
  return (
    <>
      <h2 className="text-5xl font-bold text-center">Log In</h2>

      <form className="flex flex-col gap-10">
        <input
          type="email"
          placeholder="Email"
          className="rounded-lg border px-4 py-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg border px-4 py-3"
        />

        <div className="flex justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-400" />
            <span>Remember me</span>
          </label>

          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <button className="self-center rounded-lg cursor-pointer bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
          Log In
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
