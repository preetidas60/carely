export default function QuickActionCard({
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
    blue: "bg-[#AFC6DD]",
    yellow: "bg-[#E7D6A3]",
    green: "bg-[#9EC7B0]",
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
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      {/* CTA */}
      <button
        className={`mt-2 w-fit px-4 py-1.5 rounded-full text-xs font-medium text-white ${buttonVariants[variant]}`}
      >
        {action} →
      </button>
    </div>
  );
}
