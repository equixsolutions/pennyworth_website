interface FeatureCardProps {
  title: string;
  description?: string;
  points?: string[];
}

function FeatureCard({ title, description, points }: FeatureCardProps) {
  return (
    <div className="relative border border-secondary/20 p-6 md:p-8 bg-primary/40 backdrop-blur-sm">
      <span className="absolute left-0 top-6 h-10 w-[3px] bg-secondary/70" />

      <h3 className="text-secondary md:text-body-md-bold text-body-sm-bold  mb-4">
        {title}
      </h3>
      {description && (
        <p className="text-secondary/70 text-sm leading-relaxed md:text-body-md text-body-sm">
          {description}
        </p>
      )}

      {points && (
        <ul className="space-y-2 text-secondary/70 text-sm leading-relaxed list-disc list-inside">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FeatureCard;
