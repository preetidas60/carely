export default function Testimonial() {
  return (
    <section className="px-8 py-20">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg italic text-textMuted">
          “Carely has helped me stay on track without feeling overwhelmed.
          The focus-friendly reminders and tools really make a difference.”
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            👩
          </div>
          <div className="text-sm">
            <p className="font-medium">Thalia K.</p>
            <p className="text-textMuted">Verified user</p>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 bg-white rounded-full p-2 shadow-sm">
          <input
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 outline-none text-sm"
          />
          <button className="bg-primary text-white px-6 py-2 rounded-full">
            Sign Up
          </button>
        </div>

        <p className="mt-4 text-xs text-textMuted">✔ GDPR Friendly</p>
      </div>
    </section>
  );
}
