export default function Navbar() {
  return (
    <header className="px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-xl">
          <span className="text-primary">🏠</span> Carely
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-textMuted">
          <a className="text-textMain font-medium">Home</a>
          <a>Features</a>
          <a>About Us</a>
          <a>FAQ</a>
        </nav>

        <div className="flex gap-4 items-center">
          <button className="text-sm">Log In</button>
          <button className="bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
