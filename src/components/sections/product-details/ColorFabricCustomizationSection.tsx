import ColorSwatches from "@/components/common/ColorSwatches";
import { availableColors, benefits } from "@/constance/products";

function ColorFabricCustomizationSection() {
  return (
    <section className="bg-secondary px-5 md:px-10 py-20">
      <div>
        <div className="mb-10">
          <h3 className="md:text-body-lg text-body-sm text-primary mb-2">
            Color & Fabric Customization
          </h3>
          <hr className="border-muted-foreground/40" />
        </div>

        <h2 className="text-xl md:text-2xl font-serif mb-4">We Dye for You!</h2>

        <p className="md:text-body-md-bold text-body-xs-bold mb-6">
          Can’t find the exact shade you need?
          <br />
          No problem!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="pr-0 md:pr-10 md:border-r border-muted-foreground/40">
            <p className="md:text-body-md-bold text-body-xs-bold mb-4">
              We offer custom color matching services
            </p>

            <ul className="space-y-3 md:text-body-md text-body-xs text-primary/80">
              {benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary ">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className=" text-body-xs mt-6">
              Minimum Order: 100 pieces
            </p>
          </div>
          <ColorSwatches
            title="Available Colors (Standard Stock)"
            colors={availableColors}
          />
        </div>
      </div>
    </section>
  );
}

export default ColorFabricCustomizationSection;
