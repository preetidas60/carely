import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed?: boolean;
}

export default function SidebarItem({
  to,
  icon,
  label,
  collapsed = false,
}: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center rounded-xl transition-all
        ${collapsed ? "justify-center p-3" : "gap-3 px-4 py-3"}
        ${
          isActive
            ? "bg-[#E8F1E7] text-green-700"
            : "text-gray-500 hover:bg-[#F0F2ED]"
        }
        `
      }
      title={collapsed ? label : undefined} // native tooltip (clean)
    >
      {icon}
      {!collapsed && <span className="text-sm">{label}</span>}
    </NavLink>
  );
}
