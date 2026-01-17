import { InfoGridSectionProps } from "@/types/products";
import Image from "next/image";

function InfoGridSection({
  heading,
  columns,
  image,
  actionButton,
}: InfoGridSectionProps) {
  return (
    <section className="bg-secondary px-5 md:px-10">
      <div>
        <div className="mb-6">
          <h3 className="md:text-body-lg text-body-sm text-primary mb-2">
            {heading}
          </h3>
        </div>
        <div
          className={`
            border border-muted-foreground/40
            grid gap-0
            ${
              image || actionButton
                ? "grid-cols-1 md:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2"
            }
          `}
        >
          {columns.map((col, index) => (
            <div
              key={col.title}
              className={`
                p-6 md:p-8
                ${
                  index !== columns.length - 1
                    ? "md:border-r border-muted-foreground/40"
                    : ""
                }
              `}
            >
              <h4 className="md:text-body-md-bold text-body-xs-bold mb-4">
                {col.title}
              </h4>

              <ul className="space-y-2 md:text-body-md text-body-xs text-primary/80 list-disc list-inside">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          {image && (
            <div className="flex justify-end w-full h-[350px]">
              <img
                src={image.src}
                alt={image.alt}
                className="object-contain"
              />
            </div>
          )}

          {actionButton && (
            <div className="flex items-end justify-end p-6 md:p-8">
              <button
                onClick={actionButton.onClick}
                className="
                  border border-primary text-primary
                  px-4 py-2 text-sm
                  hover:bg-primary hover:text-white transition
                "
              >
                {actionButton.label}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default InfoGridSection;
