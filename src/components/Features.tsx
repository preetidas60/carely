import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="px-8 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Helping ADHD Students Thrive
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🔔"
            title="Timely Reminders"
            description="Gentle reminders for meds, tasks, and routines."
          />
          <FeatureCard
            icon="⭐"
            title="Easy Routines"
            description="Simplified tasks to improve focus in short sessions."
          />
          <FeatureCard
            icon="📊"
            title="Focus Tracking"
            description="Smart monitoring to track focus and progress."
          />
        </div>
      </div>
    </section>
  );
}
