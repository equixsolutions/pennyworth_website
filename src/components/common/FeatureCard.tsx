
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="relative border border-secondary/20 p-6 md:p-8 bg-primary/40 backdrop-blur-sm">
      <span className="absolute left-0 top-6 h-10 w-[3px] bg-secondary/70" />

      <h3 className="text-secondary font-medium text-sm md:text-base mb-4">
        {title}
      </h3>

      <p className="text-secondary/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default FeatureCard;
