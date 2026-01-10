function ProductSpecifications() {
  const sizeRange = {
    title: "Size Range",
    value: "XS to 5XL",
    note: "(custom sizing available for bulk orders)",
  };

  const colorOptions = {
    title: "Color Options",
    standardLabel: "Standard",
    colors: [
      { name: "Navy blue", color: "#0A1A4F" },
      { name: "Royal blue", color: "#4169E1" },
      { name: "Orange", color: "#FFA500" },
      { name: "Red", color: "#FF0000" },
      { name: "Grey", color: "#8E8E8E" },
    ],
    customNote: "Custom: Any Pantone color match (MOQ: 2500 pieces)",
  };

  const designFeatures = {
    title: "Design Features",
    items: [
      "Zip-front closure with storm flap",
      "Elastic waist or button adjustment",
      "Two chest pockets with flaps and closures",
      "Two side pockets with reinforced openings",
      "Back pocket with secure closure",
      "Hammer loop and tool holder options",
      "Knee pad insert pockets (available on request)",
    ],
  };

  const customizationOptions = {
    title: "Customization Options",
    items: [
      "Company logo embroidery (chest, back, sleeve)",
      "Reflective strips (2-inch, 3-inch, segmented)",
      "Employee name tags",
      "Department color coding",
      "Custom patch placements",
      "Specialized pocket configurations",
    ],
  };

  return (
    <section className="px-5 md:px-10 py-20">
      <div>
        <div className="mb-10">
          <h3 className="text-sm font-medium text-primary mb-3">
            Product Specifications
          </h3>
          <hr className="border-muted-foreground/40" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-sm font-medium text-primary mb-2">
              {sizeRange.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {sizeRange.value} <br />
              <span className="text-xs">{sizeRange.note}</span>
            </p>
          </div>
          <div className="md:border-l md:border-muted-foreground/40 md:pl-12">
            <h4 className="text-sm font-medium text-primary mb-4">
              {colorOptions.title}
            </h4>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs text-muted-foreground w-16">
                {colorOptions.standardLabel}
              </span>

              <div className="flex gap-4">
                {colorOptions.colors.map((item) => (
                  <div key={item.name} className="text-center">
                    <div
                      className="w-5 h-5 rounded-full mx-auto mb-1"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="text-[10px] text-muted-foreground">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              {colorOptions.customNote}
            </p>
          </div>
        </div>

        <hr className="border-muted-foreground/40 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-sm font-medium text-primary mb-4">
              {designFeatures.title}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              {designFeatures.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-primary mb-4">
              {customizationOptions.title}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              {customizationOptions.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSpecifications;
