import { Link, useLocation, useNavigate } from "react-router-dom";
import Assets from "../../assets";
import { useCallback } from "react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = useCallback(
    (sectionId: string) => {
      // Already on home
      if (location.pathname === "/") {
        // Always scroll, even if it's "home"
        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollToSection(sectionId);
        }
        return;
      }

      // Not on home → navigate WITH intent
      navigate("/", {
        state: { scrollTo: sectionId },
      });
    },
    [location.pathname, navigate]
  );

  return (
    <header
      className="sticky top-0 z-50 px-16 py-6
      bg-white/70 backdrop-blur-xl
      border-b border-white/30"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="flex items-center gap-2 font-semibold text-xl"
        >
          <img className="w-7" src={Assets.icons_home} alt="home" />
          Carely
        </Link>

        {/* Navigation */}
        <nav className="hidden text-sm md:flex gap-8">
          <NavItem label="Home" onClick={() => handleNavClick("home")} />
          <NavItem
            label="Features"
            onClick={() => handleNavClick("features")}
          />
          <NavItem label="About Us" onClick={() => handleNavClick("about")} />
          <NavItem label="FAQ" onClick={() => handleNavClick("faq")} />
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
function NavItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative text-sm text-textMuted opacity-60 hover:opacity-100 hover:text-textMain transition-all duration-300"
    >
      {label}

      {/* Animated underline */}
      <span
        className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary
        transform scale-x-0 origin-left transition-transform duration-300
        group-hover:scale-x-100"
      />
    </button>
  );
}
