import React from "react";

/* =========================================
   Sidebar Item
========================================= */

interface SidebarItemProps {
  id: string;
  icon: React.ComponentType;
  label: string;
  collapsed?: boolean;
  delay?: string;
  badge?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export default function SidebarItem({
  icon: Icon,
  label,
  collapsed = false,
  delay = "0s",
  badge,
  isActive = false,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden group w-full
        flex items-center rounded-xl 
        transition-all duration-300
        ${collapsed ? "justify-center p-3" : "gap-3 px-4 py-3"}
        ${
          isActive
            ? "bg-gradient-to-r from-[#E8F1E7] to-[#EEF5EC] text-green-700 shadow-[0_2px_8px_rgba(107,175,141,0.15)]"
            : "text-gray-600 hover:bg-white/60 hover:text-gray-900 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        }
      `}
      title={collapsed ? label : undefined}
      style={{ animation: `slideInUp 0.5s ease-out ${delay} both` }}
    >
      {isActive && (
        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#6366f1] rounded-r-full" />
      )}

      {/* Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      <div
        className={`relative flex items-center ${
          collapsed ? "" : "gap-3"
        } w-full`}
      >
        <span
          className={`transition-all duration-300 ${
            isActive ? "scale-110" : "group-hover:scale-110"
          }`}
        >
          <Icon />
        </span>

        {!collapsed && (
          <span className="text-sm font-medium transition-all duration-300 group-hover:translate-x-0.5">
            {label}
          </span>
        )}
      </div>

      {!collapsed && badge !== undefined && (
        <span className="ml-auto w-5 h-5 flex items-center justify-center bg-[#6366f1]/10 text-[#6366f1] text-[10px] font-bold rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
}
