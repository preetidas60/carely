import Assets from "../../assets";
import "../../pages/Home/sections/Hero.css";
import "./Features.css"

export default function FeaturesPage() {
  return (
    <main className="hero">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden pt-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-8 ">

          {/* LEFT CONTENT */}
          <div className=" flex flex-col z-10">
            <h1 className="text-[70px] leading-tight text-textMain">
              Features
            </h1>

            <p className="mt-6 max-w-md text-[22px] leading-relaxed text-textMuted">
              Empowering ADHD students, parents, and teachers with tools designed
              for focus, calm, and consistency.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="">
            <img
              src={Assets.images_featuresHero}
              alt="ADHD focus illustration"
              className="featuresHero max-w-none absolute top-10 right-40"
            />
          </div>

        </div>
      </section>



      {/* FEATURES GRID */}
      {/* FEATURES SECTION */}
      <section className="hero relative px-8">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-[35px] pb-16 leading-tight text-textMuted">
            Empowering Focus and Calm for the ADHD Community
          </h2>

          {/* WHITE CONTAINER START */}
          <div className="relative bg-white rounded-t-3xl pt-7 pb-56 overflow-visible">

            {/* FEATURES GRID */}
            <div className="px-6 sm:px-10 lg:px-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
              <FeatureCard
                icon="🎯"
                title="Focus Sessions"
                description="Guided timers to improve concentration in short, manageable sessions."
                bg="bg-[#EAF2EC]"
              />

              <FeatureCard
                icon="📈"
                title="Progress Tracking"
                description="Monitor focus levels, task completion, and overall progress over time."
                bg="bg-[#F7EFE3]"
              />

              <FeatureCard
                icon="🔔"
                title="Smart Reminders"
                description="Gentle reminders for meds, tasks, and routines."
                bg="bg-[#EEF1F7]"
              />

              <FeatureCard
                icon="👨‍👩‍👧"
                title="Parent Dashboard"
                description="Stay connected with your child’s progress and receive helpful insights."
                bg="bg-[#EAF2EC]"
              />

              <FeatureCard
                icon="🏫"
                title="Teacher Portal"
                description="Tools to support students’ focus and organization in the classroom."
                bg="bg-[#EEF1F7]"
              />

              <FeatureCard
                icon="📘"
                title="ADHD-Friendly Lessons"
                description="Interactive, bite-sized lessons designed for ADHD learners."
                bg="bg-[#F7EFE3]"
              />

              <FeatureCard
                icon="😴"
                title="Calming Breaks"
                description="Relaxing activities to reset and recharge during study breaks"
                bg="bg-[#F7EFE3]"
              />

              <FeatureCard
                icon="📘"
                title="ADHD-Friendly Lessons"
                description="Interactive, bite-sized lessons designed for ADHD learners."
                bg="bg-[#EEF1F7]"
              />

              <FeatureCard
                icon="📘"
                title="ADHD-Friendly Lessons"
                description="Interactive, bite-sized lessons designed for ADHD learners."
                bg="bg-[#EAF2EC]"
              />
            </div>



          </div>
          {/* WHITE CONTAINER END */}

        </div>
        {/* FOOTER ILLUSTRATION — INSIDE WHITE BG */}
        <img
          src={Assets.images_featuresFooter}
          alt="Decorative foliage"
          className="
                absolute  
                left-0
                bottom-0      
                pointer-events-none
                z-10
              "
        />

      </section>

    </main>
  );
}

/* -------------------------------- */
/* Feature Card Component */
/* -------------------------------- */

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bg: string;
}

function FeatureCard({ icon, title, description, bg }: FeatureCardProps) {
  return (
    <div
      className={`
        ${bg}
        rounded-[28px]
        px-6
        py-4
        flex
        items-center
        gap-6
        shadow-[0_8px_24px_rgba(0,0,0,0.04)]
        h-[180px]
      `}
    >
      {/* Icon */}
      <div className="w-20 h-20 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm">
        <span className="text-[20px]">{icon}</span>
      </div>

      {/* Text (LEFT ALIGNED) */}
      <div className="flex-1 text-left">
        <h3 className="text-[22px] font-medium text-[#2E2E2E] mb-1">
          {title}
        </h3>

        <p className="text-[16px] leading-[1.5] text-[#7A7A7A] max-w-[300px]">
          {description}
        </p>
      </div>
    </div>
  );
}


