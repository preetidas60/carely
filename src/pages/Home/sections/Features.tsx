import Assets from "../../../assets";
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
            icon={
              <img
                src={Assets.icons_notification}
                alt="notification"
                className="w-8 h-8"
              />
            }
            title="Timely Reminders"
            description="Gentle reminders for meds, tasks, and routines."
            variant="yellow"
          />
          <FeatureCard
            icon={
              <img
                src={Assets.icons_star}
                alt="notification"
                className="w-8 h-8"
              />
            }
            title="Easy Routines"
            description="Simplified tasks to improve focus in short sessions."
            variant="green"
          />
          <FeatureCard
            icon={
              <img
                src={Assets.icons_bar}
                alt="notification"
                className="w-8 h-8"
              />
            }
            title="Focus Tracking"
            description="Smart monitoring to track focus and progress."
            variant="blue"
          />
        </div>
      </div>
    </section>
  );
}
