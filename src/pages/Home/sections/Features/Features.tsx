import ".././Hero/Hero.css";
import "./Features.css";
import FeatureCard from "../../../../components/layout/FeatureCards";
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
]

export default function FeaturesPage() {
  return (
    <main className="hero relative z-10 w-full min-h-screen py-24 flex flex-col items-center gap-y-8">
      <div
        className="flex items-center justify-center gap-5 w-[90%] md:w-4/5"
        style={{ opacity: 1, transform: "none" }}
      >
        <hr className="flex-1 border-[#131313]" />
        <div className="font-octo-bold flex-1 text-center text-3xl sm:text-4xl md:text-5xl ">
          {features.title}
        </div>
        <hr className="flex-1 border-[#131313]" />
      </div>

      <section className="max-w-5xl mx-auto text-center px-10 mb-10">
        <p className="text-xl text-[#6F6F6F] leading-relaxed">
          {features.subtitle}
        </p>
      </section>

      {/* WHITE CONTAINER START */}
      <div className="bg-white rounded-3xl overflow-visible">
        {/* FEATURES GRID */}
        <div className="p-10  grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {features.whyCarelyCards.map((value, index) => (
            <FeatureCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              bg={featureCard[index]}
            />
            ))}
        </div>
      </div>  
      {/* WHITE CONTAINER END */}

      {/* FOOTER ILLUSTRATION — INSIDE WHITE BG */
      /* <img
          src={Assets.images_featuresFooter}
          alt="Decorative foliage"
          className="
                absolute  
                left-0
                bottom-0      
                pointer-events-none
                z-10
              "
        /> */}
    </main>
  );
}
