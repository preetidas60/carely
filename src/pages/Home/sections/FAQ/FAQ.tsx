import { useState, useEffect } from "react";
import Assets from "../../../../assets";
import { faq } from "../../../../utils/String";

export default function FAQ() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
      const faqSection = document.getElementById("faq");
      if (!faqSection) return;

      const rect = faqSection.getBoundingClientRect();
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

  // Intersection Observer
  useEffect(() => {
    const section = document.getElementById("faq");
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
      id="faq"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `linear-gradient(135deg, 
            rgba(241, 245, 249, ${1 - scrollProgress * 0.3}) 0%, 
            rgba(248, 250, 252, ${1 - scrollProgress * 0.2}) 50%,
            rgba(241, 245, 241, ${1 - scrollProgress * 0.1}) 100%)`,
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridPulse 4s ease-in-out infinite alternate",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute -top-64 -right-32 w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-3xl transition-all duration-700"
        style={{
          transform: `translate(${mousePosition.x * -0.3}px, ${
            mousePosition.y * -0.3
          }px) scale(${1 + scrollProgress * 0.2})`,
          opacity: 1 - scrollProgress * 0.3,
        }}
      />
      <div
        className="absolute top-[60%] -left-32 w-[500px] h-[500px] bg-teal-200/15 rounded-full blur-3xl transition-all duration-700"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${
            mousePosition.y * 0.4
          }px) scale(${1 + scrollProgress * 0.15})`,
          opacity: 1 - scrollProgress * 0.2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center gap-8 px-4 sm:px-8">
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
              {faq.title}
            </h1>

            <div className="flex-1 h-[1.5px] sm:h-[2px] bg-gradient-to-l from-transparent via-primary/30 to-primary/50 rounded-full max-w-[100px] sm:max-w-[200px] md:max-w-none" />
          </div>

          <p
            className="max-w-3xl text-center text-sm sm:text-base md:text-lg text-[#666] leading-relaxed px-4 sm:px-6"
            style={{
              animation: inView ? "slideInUp 0.8s ease-out 0.4s both" : "none",
            }}
          >
            {faq.subtitle}
          </p>
        </div>

        {/* FAQ GRID */}
        <section className="w-full max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {faq.questions.map((item, i) => (
              <FAQCard
                key={i}
                question={item.question}
                index={i}
                inView={inView}
                isExpanded={expandedIndex === i}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              />
            ))}
          </div>
        </section>

        {/* STILL HAVE QUESTIONS */}
        <section
          className="w-full max-w-6xl px-4 sm:px-6"
          style={{
            animation: inView ? "fadeInScale 0.8s ease-out 1s both" : "none",
          }}
        >
          <div className="relative bg-gradient-to-br from-[#F1F5F1] to-[#E8F2E8] rounded-[32px] px-8 md:px-14 py-12 md:py-8 grid md:grid-cols-2 gap-12 items-center shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-white/60 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200/10 rounded-full blur-2xl" />

            {/* LEFT */}
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  💬
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-[#2A2A2A]">
                  {faq.contactSection.title}
                </h3>
              </div>

              <p className="text-[#7A7A7A] max-w-md leading-relaxed pt-3">
                {faq.contactSection.description}
              </p>

              <button className="mt-8 bg-primary text-white px-8 md:px-10 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
                {faq.contactSection.buttonText}
              </button>
            </div>

            {/* RIGHT ILLUSTRATION */}
            <div className="flex justify-end relative z-10">
              <img
                src={Assets.images_aboutUsFooter}
                alt="Support Illustration"
                className="w-[280px] md:w-[360px] transition-transform duration-500 hover:scale-105"
              />
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
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(180deg); }
        }
      `}</style>
    </main>
  );
}

interface FAQCardProps {
  question: string;
  index: number;
  inView: boolean;
  isExpanded: boolean;
  onClick: () => void;
}

function FAQCard({
  question,
  index,
  inView,
  isExpanded,
  onClick,
}: FAQCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white/80 backdrop-blur-xl rounded-[28px] p-5 flex justify-between items-center gap-x-6 cursor-pointer transition-all duration-500 group border border-white/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        animation: inView
          ? `fadeInScale 0.6s ease-out ${0.6 + 0.1 * index}s both`
          : "none",
        transform: isHovered
          ? "translateY(-4px) scale(1.01)"
          : "translateY(0) scale(1)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 0, 0, 0.12)"
          : "0 8px 24px rgba(0, 0, 0, 0.04)",
      }}
    >
      <p className="text-sm md:text-[15px] text-[#2A2A2A] group-hover:text-primary transition-colors duration-300">
        {question}
      </p>

      <div
        className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm flex-shrink-0 transition-all duration-300 shadow-lg"
        style={{
          transform: isExpanded
            ? "rotate(45deg) scale(1.1)"
            : isHovered
            ? "rotate(0deg) scale(1.1)"
            : "rotate(0deg) scale(1)",
          backgroundColor: isExpanded ? "#059669" : undefined,
        }}
      >
        +
      </div>
    </div>
  );
}
