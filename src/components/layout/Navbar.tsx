import { Link, useLocation, useNavigate } from "react-router-dom";
import Assets from "../../assets";
import { useCallback } from "react";

import { useAuthModal } from "../../pages/auth/useAuthModal";
import AuthModal from "../../pages/auth/AuthModal";
import LoginForm from "../../pages/auth/LoginForm";
import SignUpForm from "../../pages/auth/SignUpForm";

/* =========================================
   Helpers
========================================= */

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* =========================================
   Navigation Config (Dynamic)
========================================= */

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Features", id: "features" },
  { label: "About Us", id: "about" },
  { label: "FAQ", id: "faq" },
] as const;

/* =========================================
   Navbar
========================================= */

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthModal();

  const handleNavClick = useCallback(
    (sectionId: string) => {
      if (location.pathname === "/") {
        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollToSection(sectionId);
        }
        return;
      }

      navigate("/", { state: { scrollTo: sectionId } });
    },
    [location.pathname, navigate]
  );

  return (
    <>
      {/* NAVBAR */}
      <header
        className="sticky top-0 z-50 px-6 md:px-16 py-4 md:py-6
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

          {/* Navigation (hidden on small screens) */}
          <nav className="hidden md:flex gap-8 text-sm">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                onClick={() => handleNavClick(item.id)}
              />
            ))}
          </nav>

          {/* Actions (unchanged) */}
          <div className="flex gap-5 items-center">
            <button
              onClick={auth.openLogin}
              className="text-textMuted hover:text-textMain transition"
            >
              Log In
            </button>

            <button
              onClick={auth.openSignup}
              className="bg-primary text-white px-6 py-2 rounded-full"
            >
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* AUTH MODAL */}
      <AuthModal open={!!auth.mode} onClose={auth.close}>
        {auth.mode === "login" && <LoginForm onSwitch={auth.openSignup} />}
        {auth.mode === "signup" && <SignUpForm onSwitch={auth.openLogin} />}
      </AuthModal>
    </>
  );
}

/* =========================================
   Nav Item
========================================= */

function NavItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative text-sm text-textMuted opacity-60
      hover:opacity-100 hover:text-textMain transition-all duration-300"
    >
      {label}
    </button>
  );
}
