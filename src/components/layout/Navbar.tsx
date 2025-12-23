import { NavLink, Link } from "react-router-dom";
import Assets from "../../assets";

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `relative text-sm transition-all duration-300
   ${
     isActive
       ? "text-base font-medium text-textMain opacity-100"
       : "text-sm text-textMuted opacity-60 hover:opacity-100"
   }`;

export default function Navbar() {
  return (
    <header className="px-16 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
          <img className="w-7" src={Assets.icons_home} alt="home" />
          Carely
        </Link>

        {/* Navigation */}
        <nav className="hidden text-sm md:flex gap-8">
          <NavItem to="/" label="Home" />
          <NavItem to="/features" label="Features" />
          <NavItem to="/about" label="About Us" />
          <NavItem to="/faq" label="FAQ" />
        </nav>

        {/* Actions */}
        <div className="flex gap-5 items-center">
          <button className="text-textMuted hover:text-textMain transition">
            Log In
          </button>

          <button className="bg-primary text-white px-6 py-2 rounded-full">
            <Link to="">Sign up</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

// Nav Item Component

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink to={to} end className={navItemClass}>
      {({ isActive }) => (
        <>
          {label}

          {/* Animated underline */}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] w-full bg-primary
              transform origin-left transition-transform duration-300
              ${isActive ? "scale-x-100" : "scale-x-0"}
            `}
          />
        </>
      )}
    </NavLink>
  );
}
