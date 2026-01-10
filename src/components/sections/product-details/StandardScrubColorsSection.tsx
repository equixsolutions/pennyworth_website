import ColorSwatches from "@/components/common/ColorSwatches";
import { scrubColors } from "@/constance/products";

function StandardScrubColorsSection() {
  return (
    <section className="bg-white px-5 md:px-10 py-10">
      <div>
        <h3 className="">
          Standard Scrub Colors
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {scrubColors.map((group) => (
            <ColorSwatches
              key={group.title}
              title={group.title}
              colors={group.colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StandardScrubColorsSection;
