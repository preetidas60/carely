export default function RightSidebarBlock() {
  return (
    <div className="space-y-6">
      {/* UPCOMING EVENT */}
      <div className="bg-[#FBFBFA] rounded-3xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium">Upcoming event</h3>
          <span className="text-gray-400">⋮</span>
        </div>

        <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 border">
          <div className="w-8 h-8 rounded-lg bg-[#FFE9C7] flex items-center justify-center">
            📅
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium">
              May 2 <span className="text-xs text-gray-400">· 2:00 AM</span>
            </p>
            <p className="text-sm text-gray-500">Therapy Session</p>
          </div>

          <div className="w-10 h-6 bg-[#CDE3D3] rounded-md" />
        </div>
      </div>

      {/* REMINDER TIPS */}
      <div className="rounded-3xl p-5 shadow-sm bg-gradient-to-b from-[#F4F7F2] to-[#E6F0E7] relative overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium">Reminder Tips</h3>
          <span className="text-gray-400">⋮</span>
        </div>

        <ul className="space-y-3 text-sm text-[#5F6F66]">
          <li className="flex gap-2">
            <span className="text-[#7FAE94]">✔</span>
            Set reminders for your meds
          </li>
          <li className="flex gap-2">
            <span className="text-[#7FAE94]">✔</span>
            Break tasks into smaller steps
          </li>
        </ul>

        <button className="mt-5 w-full bg-[#8FB69E] text-white rounded-full py-2 text-sm font-medium">
          See all tips
        </button>
      </div>
    </div>
  );
}
