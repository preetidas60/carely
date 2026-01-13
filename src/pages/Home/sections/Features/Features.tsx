import ".././Hero/Hero.css";
import "./Features.css";
import FeatureCard from "../../../../components/cards/FeatureCards";
import { features } from "../../../../utils/String";

const featureCard = [
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

export default function FeaturesPage() {
  return (
    <main className="hero relative z-10 w-full min-h-screen py-12 md:py-20 flex flex-col items-center gap-y-10">
      {/* TITLE */}
      <div className="flex items-center justify-center gap-5 w-[90%] md:w-4/5">
        <hr className="flex-1 border-[#131313]" />

        <div className="font-octo-bold flex-1 text-center text-2xl sm:text-3xl md:text-4xl">
          {features.title}
        </div>

        <hr className="flex-1 border-[#131313]" />
      </div>

      {/* SUBTITLE */}
      <section className="max-w-5xl mx-auto text-center px-6 md:px-10">
        <p className="text-base md:text-lg text-[#6F6F6F] leading-relaxed">
          {features.subtitle}
        </p>
      </section>

      {/* WHITE CONTAINER */}
      <section className="w-[90%] max-w-7xl bg-white rounded-3xl">
        <div className="p-6 md:p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {features.whyCarelyCards.map((value, index) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              bg={featureCard[index]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
