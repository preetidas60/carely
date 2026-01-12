import RoutineCard from "../../../components/cards/RoutineCard";
import QuickActionCard from "../../../components/cards/QuickActionCard";

export default function RoutineBlock() {
  return (
    <div className="col-span-2 space-y-6">
      <Section title="Today’s Routine">
        <RoutineCard
          title="Starting my day off right"
          meta="12 min · 3 days"
          icon="🌅"
        />
        <RoutineCard title="Today’s self check-in" icon="😊" />
      </Section>

      <Section title="Continue Routine">
        <div className="grid grid-cols-3 gap-5">
          <QuickActionCard
            title="Tasks"
            subtitle="12 tasks total"
            icon="📘"
            variant="blue"
          />

          <QuickActionCard
            title="Notes"
            subtitle="23 unassigned"
            icon="✏️"
            variant="yellow"
          />

          <QuickActionCard
            title="Focus Tracker"
            subtitle="07 focus sessions"
            icon="🌱"
            variant="green"
            action="View Report"
          />
        </div>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-medium mb-4">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
