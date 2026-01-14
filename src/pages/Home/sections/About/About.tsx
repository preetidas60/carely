import ".././Hero/Hero.css";
import "../Features/Features";
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
  return (
    <main className="hero relative z-10 w-full min-h-screen py-12 md:py-20 flex flex-col items-center gap-y-10">
      {/* TITLE */}
      <div className="flex items-center justify-center gap-5 w-[90%] md:w-4/5">
        <hr className="flex-1 border-[#131313]" />

        <div className="font-octo-bold flex-1 text-center text-2xl sm:text-3xl md:text-4xl">
          About Us
        </div>

        <hr className="flex-1 border-[#131313]" />
      </div>

      {/* SUBTITLE */}
      <section className="max-w-5xl mx-auto text-center px-6 md:px-10">
        <p className="text-base md:text-lg text-[#6F6F6F] leading-relaxed">
          {aboutUs.subtitle}
        </p>
      </section>

      {/* VALUES */}
      <section className="w-[90%] max-w-7xl flex flex-col items-center gap-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {aboutUs.values.map((value, index) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              bg={valueCardBg[index]}
            />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-xl md:text-2xl font-medium">
          {aboutUs.whyCarelyTitle}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutUs.whyCarelyCards.map((value, index) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              bg={featureCard[index]}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  bg: string;
}

function ValueCard({ icon, title, description, bg }: ValueCardProps) {
  return (
    <div
      className={`${bg} w-full min-h-[260px] rounded-2xl p-6 flex flex-col items-center justify-center text-center`}
    >
      <div className="text-2xl mb-3">{icon}</div>

      <h3 className="text-lg font-medium mb-2">{title}</h3>

      <p className="text-sm text-[#6F6F6F] leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  );
}
