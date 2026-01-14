import { useState, useEffect } from "react";
import { FeatureCard } from "../../../../components/cards/FeatureCards";
import "./Features.css";

/* =========================================
   Features Section
========================================= */

export default function FeaturesPage() {
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

  // Scroll progress for background transitions
  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features");
      if (!featuresSection) return;

      const rect = featuresSection.getBoundingClientRect();
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

  // Animate on view
  useEffect(() => {
    const section = document.getElementById("features");
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

  const features = {
    title: "Everything you need to thrive",
    subtitle:
      "A complete toolkit designed specifically for ADHD students. Simple, effective, and built around how your brain actually works.",
    whyCarelyCards: [
      {
        icon: "🎯",
        title: "Smart Task Breakdown",
        description:
          "Automatically breaks overwhelming tasks into bite-sized, manageable steps that don't trigger anxiety.",
      },
      {
        icon: "⏰",
        title: "Gentle Reminders",
        description:
          "No harsh notifications. Just calm, timely nudges that help you stay on track without the stress.",
      },
      {
        icon: "📊",
        title: "Visual Progress",
        description:
          "See your wins in real-time with beautiful, motivating visualizations that celebrate every step forward.",
      },
      {
        icon: "🧘",
        title: "Focus Sessions",
        description:
          "Built-in Pomodoro timers and break reminders designed to match your natural attention rhythms.",
      },
      {
        icon: "💊",
        title: "Medication Tracker",
        description:
          "Never miss a dose with smart reminders that adapt to your schedule and routine.",
      },
      {
        icon: "📝",
        title: "Quick Capture",
        description:
          "Brain dump those random thoughts instantly before they disappear. We'll organize them later.",
      },
      {
        icon: "🌙",
        title: "Evening Wind-Down",
        description:
          "Guided routines that help you transition from day to night without the usual chaos.",
      },
      {
        icon: "📈",
        title: "Habit Building",
        description:
          "Build routines that actually stick with science-backed habit formation techniques.",
      },
      {
        icon: "🎨",
        title: "Customizable Themes",
        description:
          "Choose colors and layouts that work for your brain. Because everyone focuses differently.",
      },
    ],
  };

  const featureColors = [
    "bg-[#EAF2EC]",
    "bg-[#F7EFE3]",
    "bg-[#EEF1F7]",
    "bg-[#EEF1F7]",
    "bg-[#EAF2EC]",
    "bg-[#F7EFE3]",
    "bg-[#F7EFE3]",
    "bg-[#EEF1F7]",
    "bg-[#EAF2EC]",
  ];

  return (
    <main
      id="features"
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
        className="absolute -top-64 -left-32 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl transition-all duration-700"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${
            mousePosition.y * -0.3
          }px) scale(${1 + scrollProgress * 0.2})`,
          opacity: 1 - scrollProgress * 0.3,
        }}
      />
      <div
        className="absolute top-[30%] -right-32 w-[500px] h-[500px] bg-purple-200/15 rounded-full blur-3xl transition-all duration-700"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${
            mousePosition.y * 0.4
          }px) scale(${1 + scrollProgress * 0.15})`,
          opacity: 1 - scrollProgress * 0.2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center gap-10 px-4 sm:px-6 sm:py-6">
        <div className="flex flex-col items-center gap-6 w-full max-w-6xl">
          <div
            className="flex items-center justify-center gap-3 sm:gap-4 w-full"
            style={{
              animation: inView
                ? "slideInDown 0.8s ease-out 0.2s both"
                : "none",
            }}
          >
            <div className="flex-1 h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-primary/50 rounded-full max-w-[100px] sm:max-w-[200px] md:max-w-none" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center text-textMain px-2 sm:px-4 whitespace-nowrap sm:whitespace-normal">
              {features.title}
            </h2>

            <div className="flex-1 h-[1.5px] sm:h-[2px] bg-gradient-to-l from-transparent via-primary/30 to-primary/50 rounded-full max-w-[100px] sm:max-w-[200px] md:max-w-none" />
          </div>

          <p
            className="max-w-3.5xl text-center text-sm sm:text-base md:text-lg text-[#666] leading-relaxed px-4 sm:px-6"
            style={{
              animation: inView ? "slideInUp 0.8s ease-out 0.4s both" : "none",
            }}
          >
            {features.subtitle}
          </p>
        </div>

        <section className="w-full max-w-7xl">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-white/60">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.whyCarelyCards.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                  bg={featureColors[index % featureColors.length]}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-3xl -z-10 scale-105" />
        </section>

        {/* Bottom decorative element */}
        <div
          className="z-10 flex items-center gap-3 text-sm text-[#888]"
          style={{
            animation: inView ? "slideInUp 0.8s ease-out 1s both" : "none",
          }}
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/30" />
          <span>Designed with ADHD brains in mind</span>
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/30" />
        </div>
      </div>
    </main>
  );
}
