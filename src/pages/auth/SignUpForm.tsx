export default function SignUpForm({ onSwitch }: { onSwitch: () => void }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-textMain mb-1">
        Sign Up
      </h2>
      <p className="text-sm text-textMuted mb-6">
        Get started with an account on Carely
      </p>

      {/* Google signup */}
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
        Sign up with Google
      </button>

      {/* Divider */}
      <div className="flex items-center gap-3 w-full mb-5">
        <span className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-textMuted">or</span>
        <span className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Form */}
      <div className="w-full space-y-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Full name"
          className="
            w-full px-4 py-3
            rounded-xl border border-gray-200 bg-white
            text-sm
            focus:outline-none focus:ring-2 focus:ring-primary/30
          "
        />

        {/* Name */}
        <input
          type="text"
          placeholder="Email address"
          className="
            w-full px-4 py-3
            rounded-xl border border-gray-200 bg-white
            text-sm
            focus:outline-none focus:ring-2 focus:ring-primary/30
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full px-4 py-3
            rounded-xl border border-gray-200 bg-white
            text-sm
            focus:outline-none focus:ring-2 focus:ring-primary/30
          "
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="
            w-full px-4 py-3
            rounded-xl border border-gray-200 bg-white
            text-sm
            focus:outline-none focus:ring-2 focus:ring-primary/30
          "
        />

        {/* Helper text */}
        <p className="text-xs text-textMuted px-1">
          At least 8 characters
        </p>

        {/* Terms */}
        <label className="flex items-center gap-2 text-xs text-textMuted">
          <input
            type="checkbox"
            className="accent-primary"
          />
          By registering you agree with our{" "}
          <span className="text-primary cursor-pointer">
            Terms & Conditions
          </span>
        </label>

        {/* CTA */}
        <button
          className="
            w-full mt-4
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
        Already have an account?{" "}
        <button
          onClick={onSwitch}
          className="text-primary font-medium hover:underline"
        >
          Log In
        </button>
      </p>
    </div>
  );
}
