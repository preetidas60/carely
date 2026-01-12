import { ChevronRight } from "lucide-react";

export default function RoutineCard({
  title,
  meta,
  icon,
}: {
  title: string;
  meta?: string;
  icon: string;
}) {
  return (
    <div className="bg-[#ecf8f1] rounded-2xl p-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#F2F5F1] flex items-center justify-center">
          {icon}
        </div>
        <div>
          <p className="font-medium">{title}</p>
          {meta && <p className="text-xs text-gray-400">{meta}</p>}
        </div>
      </div>
      <ChevronRight />
    </div>
  );
}
