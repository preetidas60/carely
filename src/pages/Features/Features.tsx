import Assets from "../../assets";
import "../../pages/Home/sections/Hero.css";

export default function FeaturesPage() {
  return (
    <main className="hero">
      {/* HERO SECTION */}
      <section className="hero relative py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-100 items-center">
        {/* LEFT CONTENT */}
        <div className="translate-y-[-100px] translate-x-100">
          <h1 className="text-[70px] leading-tight text-textMain">
            Features
          </h1>

          <p className="mt-8 max-w-md text-[22px] leading-[1.8] text-textMuted textSubtle">
            Empowering ADHD students, parents, and teachers with tools designed
              for focus, calm, and consistency.
          </p>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="relative flex justify-end">
          <img
            src={Assets.images_featuresHero}
            alt="ADHD focus illustration"
            className="
              w-[1100px]
              max-w-none
              translate-x-8
              translate-y-[-10px]
            "
          />
        </div>
      </div>
    </section>

      {/* FEATURES GRID */}
      <section className="px-8 pb-32">
        <div className="hero max-w-7xl mx-auto text-center">
          <h2 className="text-[35px] leading-tight text-textMuted">
            Empowering Focus and Calm for the ADHD Community
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Feature Card */}
            <FeatureCard
              icon="🎯"
              title="Focus Sessions"
              description="Guided timers to improve concentration in short, manageable sessions."
            />

            <FeatureCard
              icon="📈"
              title="Progress Tracking"
              description="Monitor focus levels, task completion, and overall progress over time."
            />

            <FeatureCard
              icon="🔔"
              title="Smart Reminders"
              description="Gentle reminders for meds, tasks, and daily routines."
            />

            <FeatureCard
              icon="👨‍👩‍👧"
              title="Parent Dashboard"
              description="Stay connected with your child’s progress and receive helpful insights."
            />

            <FeatureCard
              icon="🏫"
              title="Teacher Portal"
              description="Tools to support student focus and classroom organization."
            />

            <FeatureCard
              icon="📘"
              title="ADHD-Friendly Lessons"
              description="Interactive, bite-sized lessons designed for ADHD learners."
            />

            <FeatureCard
              icon="🧘"
              title="Calming Breaks"
              description="Relaxing activities to reset and recharge during study breaks."
            />
          </div>
        </div>
      </section>

      {/* FOOTER ILLUSTRATION */}
      <section className="relative">
        <img
          src="/images/features-footer.png"
          alt="Decorative foliage"
          className="w-full"
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
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition">
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="text-lg font-medium">{title}</h3>

      <p className="mt-3 text-sm text-textMuted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
