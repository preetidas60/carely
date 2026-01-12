import {
  LayoutGrid,
  ListTodo,
  Notebook,
  Target,
  Settings,
  LogOut,
} from "lucide-react";
import Assets from "../../assets";
import SidebarItem from "./SidebarItem";
import { ROUTES } from "../../routes/RoutePaths";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#F6F7F4] px-6 py-6 flex flex-col justify-between shadow-sm">
      <div>
        {/* Logo */}
        <div className="flex items-center text-xl gap-x-4 font-semibold mb-10">
          <img className="w-7" src={Assets.icons_home} alt="home" />
          Carely
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <SidebarItem
            to={ROUTES.DASHBOARD}
            icon={<LayoutGrid size={18} />}
            label="Dashboard"
          />
          <SidebarItem
            to="/overview"
            icon={<LayoutGrid size={18} />}
            label="Overview"
          />
          <SidebarItem
            to="/routine"
            icon={<ListTodo size={18} />}
            label="Routine"
          />
          <SidebarItem
            to="/tasks"
            icon={<ListTodo size={18} />}
            label="Tasks"
          />
          <SidebarItem
            to="/notes"
            icon={<Notebook size={18} />}
            label="Notes"
          />
          <SidebarItem
            to="/focus"
            icon={<Target size={18} />}
            label="Focus Tracker"
          />
          <SidebarItem
            to="/settings"
            icon={<Settings size={18} />}
            label="Settings"
          />
        </nav>
      </div>

      {/* User */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 bg-[#F4F6F2] rounded-xl p-3">
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Thalia K.</p>
            <p className="text-xs text-gray-400">345 PTS</p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
          <LogOut size={16} /> Log Out
        </button>
      </div>
    </aside>
  );
}
