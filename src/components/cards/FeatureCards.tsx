/* -------------------------------- */
/* Feature Card Component */
/* -------------------------------- */

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bg: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  bg,
}: FeatureCardProps) {
  return (
    <div
      className={`
        ${bg}
        rounded-[28px]
        px-6
        py-4
        flex
        items-center
        gap-6
        shadow-[0_8px_24px_rgba(0,0,0,0.04)]
        h-[180px]
      `}
    >
      {/* Icon */}
      <div className="w-20 h-20 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm">
        <span className="text-[28px]">{icon}</span>
      </div>

      {/* Text (LEFT ALIGNED) */}
      <div className="flex-1 text-left">
        <h3 className="text-xl font-medium text-[#2E2E2E] mb-1">{title}</h3>

        <p className="text-[14px] leading-[1.5] text-[#7A7A7A] max-w-[300px]">
          {description}
        </p>
      </div>
    </div>
  );
}
