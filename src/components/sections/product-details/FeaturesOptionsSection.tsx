import { CustomizationOptionsSectionProps } from "@/types/products";

function FeaturesOptionsSection({
  title,
  sections,
}: CustomizationOptionsSectionProps) {
  return (
    <section className="bg-secondary px-5 md:px-10 py-16">
      <div>
        <div className="mb-8">
          <h3 className="md:text-body-lg text-body-sm text-primary mb-2">
            {title}
          </h3>
          <hr className="border-muted-foreground/40" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-muted-foreground/40">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`
                p-6 md:p-8
                ${
                  index !== sections.length - 1
                    ? "md:border-r border-muted-foreground/40"
                    : ""
                }
                border-b md:border-b-0 border-muted-foreground/40
              `}
            >
              <h4 className="md:text-body-md-bold text-body-xs-bold text-primary mb-4">
                {section.title}
              </h4>

              <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesOptionsSection;
