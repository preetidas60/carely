interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-2 text-sm text-textMuted">{description}</p>
    </div>
  );
}
