import Assets from "../../assets";
import "../../pages/Home/sections/Hero.css";
import "./../Features/Features.css";
import FeatureCard from "../../components/layout/FeatureCards";;


export default function About() {
  return (
    <main className="hero text-[#2A2A2A]">

      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden pt-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-8 ">

          {/* LEFT CONTENT */}
          <div className=" flex flex-col z-10">
            <h1 className="text-[70px] leading-tight text-textMain">
              About Us
            </h1>

            <p className="mt-6 max-w-md text-[22px] leading-relaxed text-textMuted">
              Helping ADHD students thrive with care and understanding.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="">
            <img
              src={Assets.images_aboutUsHero}
              alt="ADHD focus illustration"
              className="featuresHero w-[1200px] h-auto absolute top-10 right-40"
            />
          </div>

        </div>
      </section>

      {/* OUR MISSION */}
      <section className="max-w-5xl mx-auto text-center px-10 pb-20">
        <h2 className="text-[32px] font-medium mb-6">
          Our Mission
        </h2>

        <p className="text-[18px] text-[#6F6F6F] leading-relaxed">
          At Carely, we are dedicated to empowering students with ADHD by
          providing tools that make it easier to manage tasks, routines,
          and focus with confidence.
        </p>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-10 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon="💛"
            title="Empathy"
            description="We understand the challenges of ADHD and design with compassion."
            bg="bg-[#FFF4EC]"
          />
          <ValueCard
            icon="✔️"
            title="Simplicity"
            description="We create simple, easy-to-use tools that reduce overwhelm."
            bg="bg-[#EEF6F0]"
          />
          <ValueCard
            icon="💡"
            title="Guidance"
            description="We provide supportive guidance to help students stay on track."
            bg="bg-[#FFF7E6]"
          />
          <ValueCard
            icon="⭐"
            title="Positivity"
            description="We celebrate progress and encourage positivity every step."
            bg="bg-[#F0F7F6]"
          />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-6xl mx-auto px-10 pb-28 text-center">
        <h2 className="text-[34px] font-medium mb-14">
          Why Choose Carely?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <FeatureCard
            icon="💡"
            title="Evidence-Based"
            description="Our tools are rooted in the latest ADHD research and best practices."
            bg="bg-[#EEF1F7]"
          />
          <FeatureCard
            icon="🧠"
            title="ADHD-Friendly"
            description="Designed with ADHD students in mind, prioritizing clarity and calm."
            bg="bg-[#F7EFE3]"
          />
          <FeatureCard
            icon="🔒"
            title="Safe & Secure"
            description="Privacy and data security are top priorities for all users."
            bg="bg-[#EAF2EC]"
          />
        </div>
      </section>

      {/* JOIN US */}
      <section className="max-w-7xl mx-auto px-10 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT */}
        <div>
          <h2 className="text-[36px] font-medium mb-6">
            Join Us on Our Journey
          </h2>

          <p className="text-[18px] text-[#6F6F6F] leading-relaxed max-w-md mb-10">
            We're here to support ADHD students, parents, and educators in
            creating a calmer, more focused life.
          </p>

          <button className="bg-[#8FB39B] hover:bg-[#7DAA8A] text-white px-10 py-4 rounded-full text-[16px] transition">
            Get Started
          </button>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div>
          <img
            src={Assets.images_aboutUsFooter}
            alt="Student working illustration"
            className="w-[1180px] mx-auto"
          />
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

function ValueCard({
  icon,
  title,
  description,
  bg,
}: ValueCardProps) {
  return (
    <div className={`${bg} rounded-3xl p-8 text-center shadow-sm`}>
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-[18px] font-medium mb-3">{title}</h3>
      <p className="text-[15px] text-[#6F6F6F] leading-relaxed">
        {description}
      </p>
    </div>
  );
}


interface ReasonCardProps {
  icon: string;
  title: string;
  description: string;
}

function ReasonCard({
  icon,
  title,
  description,
}: ReasonCardProps) {
  return (
    <div className="bg-white rounded-3xl p-10 shadow-sm text-left">
      <div className="text-3xl mb-6">{icon}</div>
      <h3 className="text-[18px] font-medium mb-4">{title}</h3>
      <p className="text-[15px] text-[#6F6F6F] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
