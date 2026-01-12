import {
  LayoutGrid,
  ListTodo,
  Notebook,
  Target,
  Settings,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import Assets from "../../assets";
import SidebarItem from "./SidebarItem";
import { ROUTES } from "../../routes/RoutePaths";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        h-screen bg-[#F6F7F4] shadow-sm flex flex-col justify-between
        transition-[width] duration-300 ease-in-out
        ${collapsed ? "w-20" : "w-72"}
      `}
    >
      {/* TOP */}
      <div>
        {/* LOGO (click to toggle) */}
        <button
          onClick={() => setCollapsed((v) => !v)}
          className={`
            w-full flex items-center
            ${collapsed ? "justify-center py-6" : "gap-4 px-6 py-6"}
            font-semibold text-xl
            hover:bg-[#EEF2EC] transition
          `}
        >
          <img className="w-7 shrink-0" src={Assets.icons_home} alt="home" />
          {!collapsed && <span>Carely</span>}
        </button>

        {/* NAV */}
        <nav className={`mt-6 ${collapsed ? "px-2" : "px-4"} space-y-2`}>
          <SidebarItem
            to={ROUTES.DASHBOARD}
            icon={<LayoutGrid size={18} />}
            label="Dashboard"
            collapsed={collapsed}
          />
          <SidebarItem
            to="/overview"
            icon={<LayoutGrid size={18} />}
            label="Overview"
            collapsed={collapsed}
          />
          <SidebarItem
            to="/routine"
            icon={<ListTodo size={18} />}
            label="Routine"
            collapsed={collapsed}
          />
          <SidebarItem
            to="/tasks"
            icon={<ListTodo size={18} />}
            label="Tasks"
            collapsed={collapsed}
          />
          <SidebarItem
            to="/notes"
            icon={<Notebook size={18} />}
            label="Notes"
            collapsed={collapsed}
          />
          <SidebarItem
            to="/focus"
            icon={<Target size={18} />}
            label="Focus Tracker"
            collapsed={collapsed}
          />
          <SidebarItem
            to="/settings"
            icon={<Settings size={18} />}
            label="Settings"
            collapsed={collapsed}
          />
        </nav>
      </div>

      {/* BOTTOM */}
      <div className={`mb-6 ${collapsed ? "px-2" : "px-4"} space-y-4`}>
        {/* USER */}
        <div
          className={`
            bg-[#F4F6F2] rounded-xl flex items-center
            ${collapsed ? "justify-center p-2" : "gap-3 p-3"}
          `}
        >
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />

          {!collapsed && (
            <div>
              <p className="text-sm font-medium">Thalia K.</p>
              <p className="text-xs text-gray-400">345 PTS</p>
            </div>
          )}
        </div>

        {/* LOGOUT */}
        <button
          className={`
            flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700
            rounded-xl transition
            ${collapsed ? "justify-center p-3" : "px-4 py-3"}
          `}
        >
          <LogOut size={20} />
          {!collapsed && "Log Out"}
        </button>
      </div>
    </aside>
  );
}
