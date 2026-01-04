import ".././Hero/Hero.css";
import "./Features.css";
import FeatureCard from "../../../../components/layout/FeatureCards";

export default function FeaturesPage() {
  return (
    <main className="hero relative z-10 w-full min-h-screen py-24 flex flex-col items-center gap-y-8">
      <div
        className="flex items-center justify-center gap-5 w-[90%] md:w-4/5"
        style={{ opacity: 1, transform: "none" }}
      >
        <hr className="flex-1 border-[#131313]" />
        <div className="font-octo-bold flex-1 text-center text-3xl sm:text-4xl md:text-5xl ">
          Features
        </div>
        <hr className="flex-1 border-[#131313]" />
      </div>

      <section className="max-w-5xl mx-auto text-center px-10 mb-10">
        <p className="text-xl text-[#6F6F6F] leading-relaxed">
          Empowering focus and calm for the ADHD community by creating
          supportive tools that reduce overwhelm, build clarity, and help
          individuals navigate daily challenges with confidence and balance
        </p>
      </section>

      {/* WHITE CONTAINER START */}
      <div className="bg-white rounded-3xl overflow-visible">
        {/* FEATURES GRID */}
        <div className="p-10  grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
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
