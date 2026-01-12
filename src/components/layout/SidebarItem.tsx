import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

export default function SidebarItem({ to, icon, label }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all
        ${
          isActive
            ? "bg-[#E8F1E7] text-green-700"
            : "text-gray-500 hover:bg-[#F0F2ED]"
        }
        `
      }
    >
      {icon}
      <span className="text-sm">{label}</span>
    </NavLink>
  );
}
