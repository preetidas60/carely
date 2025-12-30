import Assets from "../../assets";
import "../../pages/Home/sections/Hero.css";
import "./Features.css"
import FeatureCard from "../../components/layout/FeatureCards";


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
              className="featuresHero w-[1080px] h-auto absolute top-20 right-40"
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




