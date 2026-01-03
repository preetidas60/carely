import "../Hero.css";
import "../Features/Features";
import FeatureCard from "../../../../components/layout/FeatureCards";

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

      {/* OUR MISSION */}
      <section className="max-w-5xl mx-auto text-center px-10 mb-10">
        <p className="text-xl text-[#6F6F6F] leading-relaxed">
          At Carely, we are dedicated to empowering students with ADHD by
          providing tools that make it easier to manage tasks, routines, and
          focus with confidence.
        </p>
      </section>

      {/* VALUES */}
      <section className="w-[90%] max-w-7xl flex flex-col items-center gap-8">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch mb-14">
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
      <section className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-[30px] font-medium">Why Choose Carely?</h2>

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
