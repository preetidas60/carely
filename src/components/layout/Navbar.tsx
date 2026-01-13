import { Link, useLocation, useNavigate } from "react-router-dom";
import Assets from "../../assets";
import { useCallback, useEffect, useState } from "react";

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
   Navigation Config
========================================= */

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Features", id: "features" },
  { label: "About", id: "about" },
  { label: "FAQ", id: "faq" },
] as const;

/* =========================================
   Navbar
========================================= */

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuthModal();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = NAV_ITEMS.map((item) => item.id);
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (sectionId: string) => {
      if (location.pathname === "/") {
        if (sectionId === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollToSection(sectionId);
        }
      } else {
        navigate("/", { state: { scrollTo: sectionId } });
      }
    },
    [location.pathname, navigate]
  );

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[88px] flex items-center justify-center pointer-events-none">
        {/* Floating glass dock with enhanced effects */}
        <div
          className={`
            w-[95%] max-w-6xl
            h-[64px]
            px-8
            flex items-center justify-between
            rounded-full
            pointer-events-auto
            transition-all duration-500 ease-out
            ${
              scrolled
                ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]"
                : "bg-white/60 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
            }
          `}
          style={{
            border: "1px solid rgba(255, 255, 255, 0.6)",
            backgroundImage: scrolled
              ? "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 250, 247, 0.95) 100%)"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(250, 250, 247, 0.8) 100%)",
          }}
        >
          {/* BRAND with hover effect */}
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="flex items-center gap-2.5 font-semibold text-[19px] text-textMain group relative"
          >
            <div className="relative">
              {/* Icon glow on hover */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={Assets.icons_home}
                alt="Carely logo"
                className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="relative">
              Carely
              {/* Subtle underline animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary rounded-full group-hover:w-full transition-all duration-300" />
            </span>
          </Link>

          {/* NAVIGATION with active indicator */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.02] rounded-full px-2 py-1.5">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                active={activeSection === item.id}
                onClick={() => handleNavClick(item.id)}
              />
            ))}
          </nav>

          {/* ACTIONS with enhanced buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={auth.openLogin}
              className="
                relative
                text-sm 
                font-medium
                text-textMuted 
                hover:text-textMain 
                transition-all
                duration-300
                px-4
                py-2
                rounded-full
                hover:bg-black/[0.03]
                group
              "
            >
              <span className="relative z-10">Log in</span>
              {/* Subtle shine effect */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full"
                style={{ transition: "transform 0.8s ease, opacity 0.5s ease" }}
              />
            </button>

            <button
              onClick={auth.openSignup}
              className="
                relative
                overflow-hidden
                bg-primary
                text-white
                text-sm
                font-medium
                px-6
                py-2.5
                rounded-full
                shadow-[0_4px_14px_rgba(99,102,241,0.25)]
                hover:shadow-[0_6px_20px_rgba(99,102,241,0.35)]
                hover:scale-[1.05]
                active:scale-[0.98]
                transition-all
                duration-300
                group
              "
            >
              <span className="relative z-10">Sign up</span>
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>
        </div>

        {/* Subtle ambient glow behind navbar */}
        <div
          className={`
            absolute top-0 left-1/2 -translate-x-1/2 
            w-[600px] h-[120px] 
            bg-primary/5 
            rounded-full 
            blur-3xl 
            transition-opacity duration-700
            ${scrolled ? "opacity-0" : "opacity-100"}
          `}
          style={{ pointerEvents: "none" }}
        />
      </header>

      {/* ================= AUTH MODAL ================= */}
      <AuthModal open={!!auth.mode} onClose={auth.close}>
        {auth.mode === "login" && <LoginForm onSwitch={auth.openSignup} />}
        {auth.mode === "signup" && <SignUpForm onSwitch={auth.openLogin} />}
      </AuthModal>
    </>
  );
}

/* =========================================
   Nav Item with Active State
========================================= */

function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative
        px-5 
        py-2
        text-sm
        font-medium
        rounded-full
        transition-all
        duration-300
        ${active ? "text-white" : "text-textMuted hover:text-textMain"}
      `}
    >
      {/* Active background */}
      {active && (
        <div
          className="absolute inset-0 bg-primary rounded-full shadow-[0_2px_8px_rgba(99,102,241,0.3)]"
          style={{
            animation: "slideIn 0.3s ease-out",
          }}
        />
      )}

      {/* Hover background */}
      {!active && (
        <div className="absolute inset-0 bg-black/[0.04] rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}

      <span className="relative z-10">{label}</span>
    </button>
  );
}
