import Assets from "./../../../assets";

export default function GreetingAndQuest() {
  return (
    <div className="grid grid-cols-[2.2fr_1fr] gap-6 mb-8">
      {/* GREETING */}
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
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium">Daily Quest</h3>
          <span className="text-gray-400">⋮</span>
        </div>

        <div className="space-y-6">
          <QuestItem title="Morning Routine" progress="5/5" color="#9EC7B0" />
          <QuestItem
            title="Short Focus Session"
            progress="0/1"
            color="#8EC5F5"
          />
        </div>

        <div className="my-3 h-px bg-[#E8E8E8]" />

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="rotate-[-20deg]">🔗</span>
          <span>Completed</span>
        </div>
      </div>
    </div>
  );
}

function QuestItem({
  title,
  progress,
  color,
}: {
  title: string;
  progress: string;
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-5 h-5 rounded-md text-white text-xs flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        ✓
      </div>
      <p className="text-sm flex-1">{title}</p>
      <span className="text-sm text-gray-400">{progress}</span>
    </div>
  );
}
