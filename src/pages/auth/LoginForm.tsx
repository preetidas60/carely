export default function LoginForm({ onSwitch }: { onSwitch: () => void }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-textMain mb-1">
        Log In
      </h2>
      <p className="text-sm text-textMuted mb-6">
        Welcome back to Carely
      </p>

      {/* Google login */}
      <button
        className="
          w-full flex items-center justify-center gap-3
          py-3 mb-5
          border border-gray-200
          rounded-xl
          text-sm font-medium
          hover:bg-gray-50
          transition
        "
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Log in with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 w-full mb-5">
        <span className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-textMuted">or</span>
        <span className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Form */}
      <div className="w-full space-y-4">
        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          className="
            w-full px-4 py-3
            rounded-xl border border-gray-200
            text-sm text-textMain
            placeholder:text-textMuted bg-white
            focus:outline-none focus:ring-2 focus:ring-primary/30
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full px-4 py-3
            rounded-xl border border-gray-200
            text-sm text-textMain
            placeholder:text-textMuted bg-white
            focus:outline-none focus:ring-2 focus:ring-primary/30
          "
        />

        {/* Forgot password */}
        <div className="text-right">
          <button className="text-xs text-primary hover:underline">
            Forgot password?
          </button>
        </div>

        {/* CTA */}
        <button
          className="
            w-full mt-2
            bg-colors-primary text-white
            py-3 rounded-xl
            text-sm font-medium
            shadow-sm
            hover:opacity-90
            transition
          "
        >
          Proceed
        </button>
      </div>

      {/* Footer */}
      <p className="text-sm text-textMuted mt-6">
        Don’t have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-primary font-medium hover:underline"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
