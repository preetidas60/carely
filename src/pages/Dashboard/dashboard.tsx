import Sidebar from "../../components/layout/Sidebar";

import TopBar from "./sections/TopBar";
import GreetingAndQuest from "./sections/GreetingAndQuest";
import RoutineBlock from "./sections/RoutineBlock";
import RightSidebarBlock from "./sections/RightSidebarBlock";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white font-sans text-[#2A2A2A]">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* TOP BAR */}
        <TopBar />

        {/* GREETING + DAILY QUEST */}
        <GreetingAndQuest />

        {/* MAIN GRID */}
        <div className="grid grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <RoutineBlock />

          {/* RIGHT SIDE */}
          <RightSidebarBlock />
        </div>
      </main>
    </div>
  );
}
