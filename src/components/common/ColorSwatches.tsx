import { ColorSwatchesProps } from "@/types/products";


function ColorSwatches({ title, colors }: ColorSwatchesProps) {
  return (
    <div>
      <h4 className="md:text-body-md-bold text-body-xs-bold text-primary mb-6">{title}</h4>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-y-6 gap-x-4">
        {colors.map((color) => (
          <div key={color.name} className="text-center">
            <div
              className={`w-8 h-8 rounded-full mx-auto mb-2 ${
                color.border ? "border border-muted-foreground/40" : ""
              }`}
              style={{ backgroundColor: color.hex }}
            />
            <p className="md:text-body-md text-body-xs text-primary/80">{color.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorSwatches;
