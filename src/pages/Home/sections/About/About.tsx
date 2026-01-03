import Assets from "../../../../assets";
import "../Hero.css";
import "../Features/Features";
import FeatureCard from "../../../../components/layout/FeatureCards";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="hero text-[#2A2A2A]">
      {/* OUR MISSION */}
      <section className="max-w-5xl mx-auto text-center px-10 pb-20">
        <h2 className="text-[32px] font-medium mb-6">Our Mission</h2>

        <p className="text-[18px] text-[#6F6F6F] leading-relaxed">
          At Carely, we are dedicated to empowering students with ADHD by
          providing tools that make it easier to manage tasks, routines, and
          focus with confidence.
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
        <h2 className="text-[34px] font-medium mb-14">Why Choose Carely?</h2>

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
    <div className={`${bg} rounded-3xl p-8 text-center shadow-sm`}>
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-[18px] font-medium mb-3">{title}</h3>
      <p className="text-[15px] text-[#6F6F6F] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
