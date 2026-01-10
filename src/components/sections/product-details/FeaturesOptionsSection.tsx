import { CustomizationOptionsSectionProps } from "@/types/products";

function FeaturesOptionsSection({
  title,
  sections,
}: CustomizationOptionsSectionProps) {
  return (
    <section className="bg-white px-5 md:px-10 py-16">
      <div>
        <div className="mb-8">
          <h3 className="text-m-sm  md:text-m-md font-light text-primary px-18 mb-2">
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
              <h4 className="text-sm font-medium text-primary mb-4">
                {section.title}
              </h4>

              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
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
