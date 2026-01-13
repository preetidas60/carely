import Assets from "../../../../assets";
import "./../Hero/Hero.css";
import "../../../../components/ui/button.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible] = useState(true);
  // Parallax mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero relative w-full min-h-screen overflow-hidden flex items-center pt-20">
      {/* ================= ENHANCED BACKGROUND SYSTEM ================= */}
      {/* Animated grid with fade */}
      <div
        className="absolute inset-0 opacity-[0.035] transition-opacity duration-1000"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          animation: "gridFade 3s ease-in-out infinite alternate",
        }}
      />

      {/* Enhanced gradient glows with parallax */}
      <div
        className="absolute -top-48 -left-48 w-[700px] h-[700px] bg-primary/15 rounded-full blur-3xl transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.5}px, ${
            mousePosition.y * -0.5
          }px)`,
        }}
      />
      <div
        className="absolute -bottom-48 -right-48 w-[700px] h-[700px] bg-green-200/25 rounded-full blur-3xl transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${
            mousePosition.y * 0.3
          }px)`,
        }}
      />

      {/* Subtle floating orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-200/10 rounded-full blur-2xl"
        style={{
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-purple-200/10 rounded-full blur-2xl"
        style={{
          animation: "float 10s ease-in-out infinite 2s",
        }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-[1200px] mx-auto grid md:grid-cols-2 gap-24 items-center px-6 lg:px-8">
        {/* ================= LEFT ================= */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Enhanced Focus Mode Pill */}
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-sm mb-8 border border-green-100/50 group hover:scale-105 transition-transform duration-300"
            style={{
              animation: "slideInDown 0.8s ease-out 0.2s both",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="font-medium text-gray-700">Focus mode active</span>
          </div>

          {/* Heading with gradient text */}
          <h1
            className="text-[46px] sm:text-[58px] md:text-[72px] leading-[1.05] font-bold text-textMain"
            style={{
              animation: "slideInUp 0.8s ease-out 0.3s both",
            }}
          >
            Structure your day.
            <br />
            <span className="relative inline-block">
              <span className="text-primary relative z-10">
                Free your mind.
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[#555]"
            style={{
              animation: "slideInUp 0.8s ease-out 0.5s both",
            }}
          >
            A calm, ADHD-friendly system that helps students stay focused,
            remember what matters, and move through the day without overwhelm.
          </p>

          {/* Enhanced CTA */}
          <div
            className="mt-12 flex flex-wrap items-center gap-6"
            style={{
              animation: "slideInUp 0.8s ease-out 0.7s both",
            }}
          >
            <Link to="/dashboard">
              <button className="relative overflow-hidden bg-primary text-white px-14 py-4 rounded-full font-semibold shadow-[0_8px_24px_rgba(99,102,241,0.3)] hover:shadow-[0_12px_32px_rgba(99,102,241,0.4)] hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 group">
                <span className="relative z-10">Start your calm routine</span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </Link>

            <button className="relative text-primary font-semibold hover:gap-3 transition-all duration-300 flex items-center gap-2 group">
              <span>See it in action</span>
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Enhanced Trust badges */}
          <div
            className="mt-12 flex gap-12 text-sm text-[#666]"
            style={{
              animation: "slideInUp 0.8s ease-out 0.9s both",
            }}
          >
            <div className="group cursor-default">
              <div className="font-bold text-[20px] text-textMain group-hover:text-primary transition-colors">
                2 min
              </div>
              <div className="text-[15px]">setup time</div>
            </div>
            <div className="group cursor-default">
              <div className="font-bold text-[20px] text-textMain group-hover:text-primary transition-colors">
                No pressure
              </div>
              <div className="text-[15px]">gentle reminders</div>
            </div>
            <div className="group cursor-default">
              <div className="font-bold text-[20px] text-textMain group-hover:text-primary transition-colors">
                Designed for
              </div>
              <div className="text-[15px]">ADHD brains</div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div
          className={`relative flex justify-center md:justify-end transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {/* Enhanced base glow with pulse */}
          <div
            className="absolute bottom-[-60px] right-[-60px] w-[520px] h-[520px] bg-primary/20 rounded-full blur-3xl"
            style={{
              animation: "pulse 4s ease-in-out infinite",
            }}
          />

          {/* Illustration with parallax */}
          <img
            src={Assets.images_illustration}
            alt="ADHD focus illustration"
            className="relative w-[320px] sm:w-[440px] md:w-[540px] transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
            }}
          />

          {/* Enhanced Floating UI — Tasks */}
          <FloatingCard
            className="top-[12%] left-[-60px]"
            delay="1s"
            style={{
              transform: `translate(${mousePosition.x * -0.8}px, ${
                mousePosition.y * -0.8
              }px)`,
            }}
          >
            <div className="text-sm font-semibold">📋 Tasks</div>
            <div className="text-xs text-gray-500 mt-1">2 in progress</div>
          </FloatingCard>

          {/* Enhanced Floating UI — Meds */}
          <FloatingCard
            className="top-[42%] right-[-40px]"
            delay="1.2s"
            style={{
              transform: `translate(${mousePosition.x * 0.6}px, ${
                mousePosition.y * 0.6
              }px)`,
            }}
          >
            <div className="text-sm font-semibold">💊 Daily meds</div>
            <div className="text-xs text-gray-500 mt-1">Reminder sent</div>
          </FloatingCard>

          {/* Enhanced Floating UI — Focus streak */}
          <FloatingCard
            className="bottom-[12%] left-[20px]"
            delay="1.4s"
            style={{
              transform: `translate(${mousePosition.x * -0.4}px, ${
                mousePosition.y * -0.4
              }px)`,
            }}
          >
            <div className="text-sm font-semibold">⭐ Focus streak</div>
            <div className="text-xs text-gray-500 mt-1">3 calm days</div>
          </FloatingCard>

          {/* Enhanced Progress Ring */}
          <div
            className="
    absolute bottom-[-20px] right-[140px]
    flex items-center justify-center
    cursor-pointer
    transition-transform duration-300 ease-out
    hover:-translate-y-[2px]
  "
            style={{
              transform: `translate3d(${mousePosition.x * 0.25}px, ${
                mousePosition.y * 0.25
              }px, 0)`,
            }}
            aria-label="Focus progress: 68 percent"
          >
            {/* Progress Ring */}
            <div
              className="relative w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: `
        conic-gradient(
          #6BAF8D 0deg,
          #6BAF8D ${68 * 3.6}deg,
          #E6F1EA ${68 * 3.6}deg,
          #E6F1EA 360deg
        )
      `,
              }}
            >
              {/* Inner circle */}
              <div className="w-[64px] h-[64px] bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                <span className="text-sm font-semibold text-primary">68%</span>
                <span className="text-[10px] text-textMuted">Focus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   Floating Card Component
========================================= */

function FloatingCard({
  children,
  className,
  delay,
  style,
}: {
  children: React.ReactNode;
  className: string;
  delay: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute ${className} bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:scale-105 transition-all duration-500 cursor-pointer`}
      style={{
        animation: `slideInUp 0.8s ease-out ${delay} both, floatCard 3s ease-in-out infinite`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
