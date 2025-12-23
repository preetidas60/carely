import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant: "yellow" | "green" | "blue";
}

const styles = {
  yellow: {
    card: "bg-[#FFF7ED]",
    iconBg: "bg-[#FFE8C7]",
  },
  green: {
    card: "bg-[#F3FAF5]",
    iconBg: "bg-[#E2F2E7]",
  },
  blue: {
    card: "bg-[#F3F7FD]",
    iconBg: "bg-[#E6EFFA]",
  },
};

export default function FeatureCard({
  icon,
  title,
  description,
  variant,
}: FeatureCardProps) {
  return (
    <div
      className={`
        ${styles[variant].card}
        rounded-3xl px-8 py-10
        transition
      `}
    >
      {/* Icon Circle */}
      <div
        className={`
          ${styles[variant].iconBg}
          w-16 h-16
          mx-auto mb-5
          rounded-full
          flex items-center justify-center
          text-3xl
        `}
      >
        {icon}
      </div>

      <h3 className="font-medium text-2xl text-textMain">{title}</h3>
      <p className="mt-2 text-lg text-textMuted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
