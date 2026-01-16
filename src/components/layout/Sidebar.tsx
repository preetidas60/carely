import { useState, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import Assets from "../../assets";

// Lucide icons as inline SVGs
const Icons = {
  LayoutGrid: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  ListTodo: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="6" height="6" rx="1" />
      <path d="m3 17 2 2 4-4" />
      <path d="M13 6h8" />
      <path d="M13 12h8" />
      <path d="M13 18h8" />
    </svg>
  ),
  Notebook: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </svg>
  ),
  Target: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Settings: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M4.2 4.2l4.3 4.3m5.8 5.8 4.2 4.2M1 12h6m6 0h6M4.2 19.8l4.3-4.3m5.8-5.8 4.2-4.2" />
    </svg>
  ),
  LogOut: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
};

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/dashboard");

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = [
    {
      id: "/dashboard",
      icon: Icons.LayoutGrid,
      label: "Dashboard",
      delay: "0.1s",
    },
    {
      id: "/overview",
      icon: Icons.LayoutGrid,
      label: "Overview",
      delay: "0.15s",
    },
    { id: "/routine", icon: Icons.ListTodo, label: "Routine", delay: "0.2s" },
    {
      id: "/tasks",
      icon: Icons.ListTodo,
      label: "Tasks",
      delay: "0.25s",
      badge: 3,
    },
    { id: "/notes", icon: Icons.Notebook, label: "Notes", delay: "0.3s" },
    {
      id: "/focus",
      icon: Icons.Target,
      label: "Focus Tracker",
      delay: "0.35s",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside
        className={`
          relative h-screen bg-gradient-to-br from-[#F9FAF8] via-[#F6F7F4] to-[#F4F6F2]
          shadow-[4px_0_24px_rgba(0,0,0,0.04)]
          flex flex-col justify-between
          transition-[width] duration-500 ease-out
          ${collapsed ? "w-20" : "w-72"}
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Subtle animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #6366f1 0%, transparent 50%, #6BAF8D 100%)",
            animation: "gradientShift 8s ease-in-out infinite alternate",
          }}
        />

        {/* Floating orb effect */}
        <div
          className="absolute top-20 left-0 w-[200px] h-[200px] bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${
              mousePosition.y * -0.3
            }px)`,
          }}
        />
        <div
          className="absolute bottom-40 right-0 w-[180px] h-[180px] bg-green-200/10 rounded-full blur-3xl pointer-events-none transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${
              mousePosition.y * 0.2
            }px)`,
          }}
        />

        {/* TOP SECTION */}
        <div className="relative z-10">
          {/* LOGO & TOGGLE */}
          <div className="relative">
            <button
              onClick={() => setCollapsed((v) => !v)}
              className={`
                w-full flex items-center group relative
                ${collapsed ? "justify-center py-7" : "gap-4 px-6 py-7"}
                font-semibold text-xl text-gray-800
                hover:bg-white/60 transition-all duration-300
                overflow-hidden
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <div className="relative flex items-center gap-4">
                <img
                  className="w-7 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  src={Assets.icons_home}
                  alt="home"
                />
                {!collapsed && (
                  <span className="transition-all text-primary duration-300 group-hover:text-green-600">
                    Carely
                  </span>
                )}
              </div>

              <div
                className={`
                absolute ${collapsed ? "right-2" : "right-4"} 
                text-gray-400 opacity-0 group-hover:opacity-100 
                transition-all duration-300
              `}
              >
                {collapsed ? <Icons.ChevronRight /> : <Icons.ChevronLeft />}
              </div>
            </button>

            <div className="h-[1px] mx-4 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>

          {/* NAVIGATION */}
          <nav className={`mt-8 ${collapsed ? "px-2" : "px-4"} space-y-1.5`}>
            {navItems.map((item) => (
              <SidebarItem
                key={item.id}
                id={item.id}
                icon={item.icon}
                label={item.label}
                collapsed={collapsed}
                delay={item.delay}
                badge={item.badge}
                isActive={activeRoute === item.id}
                onClick={() => setActiveRoute(item.id)}
              />
            ))}

            <div className="py-2">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>

            <SidebarItem
              id="/settings"
              icon={Icons.Settings}
              label="Settings"
              collapsed={collapsed}
              delay="0.4s"
              isActive={activeRoute === "/settings"}
              onClick={() => setActiveRoute("/settings")}
            />
          </nav>
        </div>

        {/* BOTTOM SECTION */}
        <div
          className={`relative z-10 mb-6 ${
            collapsed ? "px-2" : "px-4"
          } space-y-3`}
        >
          <div
            className={`
              relative overflow-hidden
              bg-white/70 backdrop-blur-sm rounded-2xl 
              flex items-center
              ${collapsed ? "justify-center p-3" : "gap-3 p-4"}
              shadow-[0_4px_16px_rgba(0,0,0,0.04)]
              border border-white/60
              hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]
              hover:scale-[1.02]
              transition-all duration-300
              cursor-pointer group
            `}
            style={{
              animation: "slideInUp 0.6s ease-out 0.5s both",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-green-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative flex items-center gap-3 w-full">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/40"
                  className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm"
                  alt="User avatar"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>

              {!collapsed && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">
                    Thalia K.
                  </p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-xs font-medium text-[#6366f1]">
                      345 PTS
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">Level 12</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            className={`
              relative overflow-hidden w-full
              flex items-center gap-2.5
              text-sm font-medium text-gray-500
              rounded-xl transition-all duration-300
              ${collapsed ? "justify-center p-3" : "px-4 py-3"}
              hover:bg-white/60 hover:text-red-500
              hover:shadow-[0_4px_12px_rgba(239,68,68,0.1)]
              group
            `}
            style={{
              animation: "slideInUp 0.6s ease-out 0.6s both",
            }}
          >
            <Icons.LogOut />
            {!collapsed && "Log Out"}

            <div className="absolute left-0 top-0 h-full w-[3px] bg-red-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-r-full" />
          </button>
        </div>

        <style>{`
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes gradientShift {
            0%, 100% { opacity: 0.02; }
            50% { opacity: 0.04; }
          }
        `}</style>
      </aside>
    </div>
  );
}
