import { useState } from "react";

/* =========================================
   Feature Card Component
========================================= */

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bg: string;
  index: number;
  inView?: boolean;
}

export function FeatureCard({
  icon,
  title,
  description,
  bg,
  index,
  inView = true,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        ${bg}
        rounded-2xl sm:rounded-3xl
        px-4 sm:px-6 py-4
        flex flex-col gap-3
        shadow-[0_8px_24px_rgba(0,0,0,0.04)]
        hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]
        border border-white/60
        transition-all duration-500
        hover:scale-[1.02] hover:-translate-y-1
        relative overflow-hidden group
      `}
      style={{
        animation: inView
          ? `slideInUp 0.6s ease-out ${index * 0.1}s both`
          : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shimmer */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-r
          from-transparent via-white/30 to-transparent
          -translate-x-full transition-transform duration-1000
          ${isHovered ? "translate-x-full" : ""}
        `}
      />

      {/* Icon */}
      <div className="relative">
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-all">
          <span className="text-3xl">{icon}</span>
        </div>
        <div className="absolute inset-0 bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Text */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-[#2E2E2E] group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-[#666] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
