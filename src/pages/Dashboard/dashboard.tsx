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
import Sidebar from "../../components/layout/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white font-sans text-[#2A2A2A]">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* TOP BAR */}
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
            <img
              src="https://i.pravatar.cc/36"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </div>

        {/* TOP ROW */}
        <div className="grid grid-cols-[2.2fr_1fr] gap-6 mb-8">
          {/* GREETING CARD */}
          <div className="bg-gradient-to-r from-[#F0F5EE] to-[#FAF9F6] rounded-3xl p-2 flex justify-between items-center shadow-sm">
            <div>
              <h2 className="text-xl font-semibold mb-4 px-2">
                Good afternoon, Thalia 👋
              </h2>

              <div className="bg-[#E4F0E8] rounded-2xl px-5 py-4 w-[360px]">
                <p className="text-sm text-[#5E6F63] mb-2">
                  You should take your meds in
                  <span className="float-right font-medium text-[#4A6B57]">
                    24 mins
                  </span>
                </p>

                <div className="flex items-center gap-4 bg-[#D6EADB] rounded-xl p-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    💊
                  </div>
                  <div>
                    <p className="text-sm font-medium">Daily meds</p>
                    <p className="text-xs text-gray-500">2 × 10mg</p>
                  </div>

                  <input
                    type="checkbox"
                    className="ml-auto w-5 h-5 accent-[#7FAE94]"
                  />
                </div>
              </div>
            </div>

            <img
              src={Assets.images_dashboardHero}
              className="w-[300px]"
              alt="dashboard hero"
            />
          </div>

          {/* DAILY QUEST */}
          <div className="bg-[#FBFBFA] rounded-2xl p-4 shadow-sm w-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-[#2A2A2A]">
                Daily Quest
              </h3>
              <span className="text-gray-400 text-lg leading-none">⋮</span>
            </div>

            {/* Items */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-[#9EC7B0] flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <p className="text-sm flex-1">Morning Routine</p>
                <span className="text-sm text-gray-400">5/5</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-[#8EC5F5] flex items-center justify-center text-white text-xs">
                  ✓
                </div>
                <p className="text-sm flex-1">Short Focus Session</p>
                <span className="text-sm text-gray-400">0/1</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-3 h-px bg-[#E8E8E8]" />

            {/* Footer */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="rotate-[-20deg]">🔗</span>
              <span>Completed</span>
            </div>
          </div>
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
              <RoutineCard title="Today’s self check-in" meta="" icon="😊" />
            </Section>

            <Section title="Continue Routine">
              <div className="grid grid-cols-3 gap-5">
                <SmallCard
                  title="Tasks"
                  subtitle="12 tasks total"
                  icon="📘"
                  variant="blue"
                  action="Continue"
                />
                <SmallCard
                  title="Notes"
                  subtitle="23 unassigned"
                  icon="✏️"
                  variant="yellow"
                  action="Continue"
                />
                <SmallCard
                  title="Focus Tracker"
                  subtitle="07 focus sessions"
                  icon="🌱"
                  variant="green"
                  action="View Report"
                />
              </div>
            </Section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            {/* UPCOMING EVENT */}
            <div className="bg-[#FBFBFA] rounded-3xl p-4 shadow-sm">
              {/* Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-[#2A2A2A]">
                  Upcoming event
                </h3>
                <span className="text-gray-400 text-lg leading-none">⋮</span>
              </div>

              {/* Event Card */}
              <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 border border-[#EFEFEF]">
                {/* Calendar Icon */}
                <div className="w-8 h-8 rounded-lg bg-[#FFE9C7] flex items-center justify-center">
                  📅
                </div>

                <div className="flex-1">
                  <p className="text-sm font-medium text-[#2A2A2A]">
                    May 2
                    <span className="text-xs text-gray-400 font-normal">
                      {" "}
                      · 2:00 AM
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">Therapy Session</p>
                </div>

                {/* City Icon Placeholder */}
                <div className="w-10 h-6 bg-[#CDE3D3] rounded-md" />
              </div>
            </div>

            {/* REMINDER TIPS */}
            <div
              className="rounded-3xl p-5 shadow-sm
    bg-gradient-to-b from-[#F4F7F2] to-[#E6F0E7] relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-medium text-[#2A2A2A]">
                  Reminder Tips
                </h3>
                <span className="text-gray-400 text-lg leading-none">⋮</span>
              </div>

              {/* Tips */}
              <ul className="space-y-3 text-sm text-[#5F6F66]">
                <li className="flex gap-2">
                  <span className="text-[#7FAE94]">✔</span>
                  <span>
                    Set reminders for your meds to build a consistent habit
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#7FAE94]">✔</span>
                  <span>
                    Break down tasks into manageable steps to reduce overwhelm
                  </span>
                </li>
              </ul>

              {/* CTA */}
              <button className="mt-5 w-full bg-[#8FB69E] text-white rounded-full py-2 text-sm font-medium">
                See all tips
              </button>

              {/* Decorative Leaves (subtle) */}
              <div className="absolute bottom-0 right-0 w-28 h-28 opacity-20 bg-[radial-gradient(circle_at_bottom_right,#9EC7B0,transparent_70%)]" />
            </div>
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
    <div className="bg-[#ecf8f1] rounded-2xl p-4 flex justify-between items-center shadow-sm">
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

function SmallCard({
  title,
  subtitle,
  icon,
  variant = "blue",
  action = "Continue",
}: {
  title: string;
  subtitle: string;
  icon: string;
  variant?: "blue" | "yellow" | "green";
  action?: string;
}) {
  const variants = {
    blue: "bg-[#F1F6FC]",
    yellow: "bg-[#FFF6E5]",
    green: "bg-[#EEF6EF]",
  };

  const buttonVariants = {
    blue: "bg-[#AFC6DD] text-white",
    yellow: "bg-[#E7D6A3] text-white",
    green: "bg-[#9EC7B0] text-white",
  };

  return (
    <div
      className={`${variants[variant]} rounded-2xl px-6 py-5 flex flex-col gap-3`}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-lg">
        {icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-sm font-medium text-[#2A2A2A]">{title}</p>
        <p className="text-xs text-[#7A7A7A] mt-1">{subtitle}</p>
      </div>

      {/* CTA */}
      <button
        className={`mt-2 w-fit px-4 py-1.5 rounded-full text-xs font-medium ${buttonVariants[variant]}`}
      >
        {action} →
      </button>
    </div>
  );
}
