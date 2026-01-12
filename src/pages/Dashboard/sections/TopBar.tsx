import { Bell } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between mb-8">
      <input
        placeholder="Search here..."
        className="w-[700px] px-5 py-2 rounded-full bg-transparent shadow-sm outline-none border border-gray-200 focus:border-gray-300 transition"
      />

      <div className="flex items-center gap-6">
        <Bell className="text-gray-400" />
        <div className="bg-[#F1F4EE] px-4 py-2 rounded-full text-sm">
          ⭐ 345
        </div>
        <img src="https://i.pravatar.cc/36" className="w-9 h-9 rounded-full" />
      </div>
    </div>
  );
}
