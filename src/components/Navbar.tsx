import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
          <span className="text-primary text-2xl">🏠</span>
          Carely
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-textMuted">
          <Link to="/" className="text-textMain font-medium">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About Us</Link>
          <Link to="/faq">FAQ</Link>
        </nav>

        <div className="flex gap-5 items-center">
          <button className="text-sm">Log In</button>
          <button className="bg-primary text-white px-6 py-2 rounded-full">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
}
