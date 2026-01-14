import { useState, useEffect } from "react";
import { FeatureCard } from "../../../../components/cards/FeatureCards";
import { aboutUs } from "../../../../utils/String";

const valueCardBg = [
  "bg-[#FFF4EC]",
  "bg-[#EEF6F0]",
  "bg-[#FFF7E6]",
  "bg-[#F0F7F6]",
];

const featureCard = ["bg-[#EEF1F7]", "bg-[#F7EFE3]", "bg-[#EAF2EC]"];

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [inView, setInView] = useState(false);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (!aboutSection) return;

      const rect = aboutSection.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const denominator = Math.max(1, sectionHeight - viewportHeight);
      const progress = Math.max(0, Math.min(1, 1 - rect.top / denominator));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer (trigger animations on view)
  useEffect(() => {
    const section = document.getElementById("about");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center sm:py-16 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `linear-gradient(135deg, 
            rgba(249, 250, 251, ${1 - scrollProgress * 0.3}) 0%, 
            rgba(243, 244, 246, ${1 - scrollProgress * 0.2}) 50%,
            rgba(238, 242, 247, ${1 - scrollProgress * 0.1}) 100%)`,
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridPulse 4s ease-in-out infinite alternate",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute -top-64 -left-32 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl transition-all duration-700"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${
            mousePosition.y * -0.3
          }px) scale(${1 + scrollProgress * 0.2})`,
          opacity: 1 - scrollProgress * 0.3,
        }}
      />
      <div
        className="absolute top-[40%] -right-32 w-[500px] h-[500px] bg-teal-200/15 rounded-full blur-3xl transition-all duration-700"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${
            mousePosition.y * 0.4
          }px) scale(${1 + scrollProgress * 0.15})`,
          opacity: 1 - scrollProgress * 0.2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center sm:gap-8 px-4 sm:px-6 py-6">
        {/* TITLE */}
        <div className="flex flex-col items-center gap-4 w-full max-w-6xl">
          <div
            className="flex items-center justify-center gap-3 sm:gap-4 w-full"
            style={{
              animation: inView
                ? "slideInDown 0.8s ease-out 0.2s both"
                : "none",
            }}
          >
            <div className="flex-1 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-primary/50 rounded-full max-w-[100px] sm:max-w-[200px] md:max-w-none" />

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-textMain px-2 sm:px-4 whitespace-nowrap">
              About Us
            </h1>

            <div className="flex-1 h-[1.5px] sm:h-[2px] bg-gradient-to-l from-transparent via-primary/30 to-primary/50 rounded-full max-w-[100px] sm:max-w-[200px] md:max-w-none" />
          </div>

          <p
            className="max-w-3xl text-center text-sm sm:text-base md:text-lg text-[#666] leading-relaxed px-4 sm:px-6"
            style={{
              animation: inView ? "slideInUp 0.8s ease-out 0.4s both" : "none",
            }}
          >
            {aboutUs.subtitle}
          </p>
        </div>

        {/* VALUES */}
        <section className="w-full max-w-7xl">
          <div
            className="relative bg-white/80 backdrop-blur-xl rounded-3xl sm:px-6 sm:py-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-white/60"
            style={{
              animation: inView
                ? "fadeInScale 0.8s ease-out 0.6s both"
                : "none",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutUs.values.map((value, index) => (
                <ValueCard
                  key={value.title}
                  {...value}
                  bg={valueCardBg[index]}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </section>

        {/* WHY CARELY */}
        <section className="w-full max-w-7xl flex flex-col items-center gap-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-textMain"
            style={{
              animation: inView
                ? "slideInDown 0.8s ease-out 0.8s both"
                : "none",
            }}
          >
            {aboutUs.whyCarelyTitle}
          </h2>

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl sm:px-6 sm:py-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-white/60 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutUs.whyCarelyCards.map((value, index) => (
                <FeatureCard
                  key={value.title}
                  {...value}
                  bg={featureCard[index]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes gridPulse {
          from { opacity: 0.025; }
          to { opacity: 0.04; }
        }
      `}</style>
    </main>
  );
}

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  bg: string;
  index: number;
  inView: boolean;
}

function ValueCard({
  icon,
  title,
  description,
  bg,
  index,
  inView,
}: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${bg} w-full sm:py-6 sm:gap-y-3 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-500 cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: inView
          ? `fadeInScale 0.6s ease-out ${0.1 * index}s both`
          : "none",
        transform: isHovered
          ? "translateY(-8px) scale(1.02)"
          : "translateY(0) scale(1)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.12)"
          : "0 4px 12px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className="text-4xl transition-transform duration-500"
        style={{
          transform: isHovered
            ? "scale(1.2) rotate(10deg)"
            : "scale(1) rotate(0deg)",
        }}
      >
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-textMain group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      <p className="text-sm text-[#6F6F6F] leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  );
}
