import {
  Bell,
  LayoutGrid,
  ListTodo,
  Notebook,
  Target,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import Assets from "../../assets";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#F6F7F4] font-sans text-[#2A2A2A]">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white px-6 py-6 flex flex-col justify-between shadow-sm">
        <div>
          <h1 className="text-xl font-semibold mb-10">🏡 Carely</h1>

          <nav className="space-y-2">
            <SidebarItem icon={<LayoutGrid size={18} />} label="Overview" />
            <SidebarItem
              icon={<LayoutGrid size={18} />}
              label="Dashboard"
              active
            />
            <SidebarItem icon={<ListTodo size={18} />} label="Routine" />
            <SidebarItem icon={<ListTodo size={18} />} label="Tasks" />
            <SidebarItem icon={<Notebook size={18} />} label="Notes" />
            <SidebarItem icon={<Target size={18} />} label="Focus Tracker" />
            <SidebarItem icon={<Settings size={18} />} label="Settings" />
          </nav>
        </div>

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

          <button className="flex items-center gap-2 text-sm text-gray-500">
            <LogOut size={16} /> Log Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">
          <input
            placeholder="Search here..."
            className="w-96 px-5 py-3 rounded-full bg-white shadow-sm outline-none"
          />

          <div className="flex items-center gap-6">
            <Bell className="text-gray-400" />
            <div className="bg-[#F1F4EE] px-4 py-2 rounded-full text-sm">
              ⭐ 345
            </div>
            <img
              src="https://i.pravatar.cc/36"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </div>

        {/* GREETING CARD */}
        <div className="bg-gradient-to-r from-[#F0F5EE] to-[#FAF9F6] rounded-3xl p-6 flex justify-between items-center shadow-sm mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Good afternoon, Thalia 👋
            </h2>

            <div className="flex items-center gap-4 bg-[#E4F0E8] rounded-2xl px-5 py-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                💊
              </div>
              <div>
                <p className="text-sm font-medium">Daily meds</p>
                <p className="text-xs text-gray-500">2 × 10mg</p>
              </div>
              <span className="ml-6 text-sm text-green-700 font-medium">
                24 mins
              </span>
            </div>
          </div>

          <img
            src= {Assets.images_dashboardHero}
            className="w-48"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="col-span-2 space-y-6">
            <Section title="Today’s Routine">
              <RoutineCard
                title="Starting my day off right"
                meta="12 min · 3 days"
                icon="🌅"
              />
              <RoutineCard
                title="Today’s self check-in"
                meta=""
                icon="😊"
              />
            </Section>

            <Section title="Continue Routine">
              <div className="grid grid-cols-3 gap-4">
                <SmallCard title="Tasks" subtitle="12 tasks total" />
                <SmallCard title="Notes" subtitle="23 unassigned" />
                <SmallCard title="Focus Tracker" subtitle="07 sessions" />
              </div>
            </Section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <Card>
              <h3 className="font-medium mb-4">Daily Quest</h3>
              <ChecklistItem label="Morning Routine" done />
              <ChecklistItem label="Short Focus Session" />
            </Card>

            <Card>
              <h3 className="font-medium mb-2">Upcoming event</h3>
              <p className="text-sm text-gray-500">May 2 · 2:00 AM</p>
              <p className="font-medium mt-1">Therapy Session</p>
            </Card>

            <Card>
              <h3 className="font-medium mb-3">Reminder Tips</h3>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✔ Set reminders for meds</li>
                <li>✔ Break tasks into steps</li>
              </ul>
              <button className="mt-4 w-full bg-[#A9CBB7] text-white rounded-full py-2">
                See all tips
              </button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

/* COMPONENTS */

function SidebarItem({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
      ${active ? "bg-[#E8F1E7] text-green-700" : "text-gray-500"}`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div>
      <h3 className="font-medium mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function RoutineCard({ title, meta, icon }: any) {
  return (
    <div className="bg-white rounded-2xl p-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#F2F5F1] flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-xs text-gray-400">{meta}</p>
        </div>
      </div>
      <ChevronRight />
    </div>
  );
}

function SmallCard({ title, subtitle }: any) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <p className="font-medium">{title}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
      <button className="mt-3 text-sm text-green-700">Continue →</button>
    </div>
  );
}

function Card({ children }: any) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">{children}</div>
  );
}

function ChecklistItem({ label, done }: any) {
  return (
    <div className="flex items-center gap-3 text-sm mb-2">
      <input type="checkbox" checked={done} readOnly />
      <span className={done ? "line-through text-gray-400" : ""}>
        {label}
      </span>
    </div>
  );
}
