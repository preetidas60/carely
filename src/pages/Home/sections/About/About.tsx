import ".././Hero/Hero.css";
import "../Features/Features";
import FeatureCard from "../../../../components/layout/FeatureCards";
import { aboutUs } from "../../../../utils/String";

const valueCardBg = [
  "bg-[#FFF4EC]",
  "bg-[#EEF6F0]",
  "bg-[#FFF7E6]",
  "bg-[#F0F7F6]",
];

const featureCard = [
  "bg-[#EEF1F7]",
  "bg-[#F7EFE3]",
  "bg-[#EAF2EC]",
]

export default function About() {
  return (
    <main className="hero relative z-10 w-full min-h-screen py-24 flex flex-col items-center gap-y-8">
      <div
        className="flex items-center justify-center gap-5 w-[90%] md:w-4/5"
        style={{ opacity: 1, transform: "none" }}
      >
        <hr className="flex-1 border-[#131313]" />
        <div className="font-octo-bold flex-1 text-center text-3xl sm:text-4xl md:text-5xl ">
          About Us
        </div>
        <hr className="flex-1 border-[#131313]" />
      </div>

      <section className="max-w-5xl mx-auto text-center px-10 mb-10">
        <p className="text-xl text-[#6F6F6F] leading-relaxed">
          {aboutUs.subtitle}
        </p>
      </section>

      {/* VALUES */}
      <section className="w-[90%] max-w-7xl flex flex-col items-center gap-8">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch mb-14">
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
        <h2 className="text-[30px] font-medium">{aboutUs.whyCarelyTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {aboutUs.whyCarelyCards.map((value, index) => (
            <FeatureCard
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

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  bg: string;
}

function ValueCard({ icon, title, description, bg }: ValueCardProps) {
  return (
    <div
      className={`${bg} w-full aspect-square rounded-2xl p-3  flex flex-col items-center justify-center relative overflow-hidden text-center`}
    >
      <div className="text-xl mb-4">{icon}</div>
      <h3 className="text-xl  font-medium mb-3">{title}</h3>
      <p className="text-[15px] text-[#6F6F6F] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
