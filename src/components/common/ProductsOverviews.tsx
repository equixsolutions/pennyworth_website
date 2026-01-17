import React from "react";
import ProductOverview from "../sections/product-details/ProductOverview";

export const standardIndustrialCoveralls = {
  title: "Standard Industrial Coveralls",
  // imagePosition: "left" as const,

  images: [
    {
      id: 1,
      src: "/assets/images/design/product_2.png",
      alt: "Coverall Black",
    },
    {
      id: 2,
      src: "/assets/images/design/product_6.png",
      alt: "Coverall White",
    },
    {
      id: 3,
      src: "/assets/images/design/product_1.png",
      alt: "Coverall Grey",
    },
    {
      id: 4,
      src: "/assets/images/design/product_5.png",
      alt: "Coverall Detail",
    },
  ],

  accordionItems: [
    {
      id: 1,
      title: "Material",
      content: "100% Cotton (180–300 GSM)",
    },
    {
      id: 2,
      title: "Price",
      content: "Pricing varies based on order quantity and customization.",
    },
    {
      id: 3,
      title: "Applications",
      content: "Oil & Gas, Manufacturing, Construction, Utilities",
    },
    {
      id: 4,
      title: "Features",
      content: "Flame resistant, breathable fabric, reinforced stitching",
    },
    {
      id: 5,
      title: "Minimum Order",
      content: "500 pieces",
    },
    {
      id: 6,
      title: "Customization",
      content: "Logo printing, color options, size variations",
    },
  ],
};
function ProductsOverviews() {
  return (
    <section className="w-full overflow-hidden mt-10">
      <div className="pt-4 px-5 md:px-10">
        <h2 className="md:text-body-lg text-body-sm text-primary mb-2">Product Overview</h2>
        <hr className="border-t border-main border-muted-foreground/50" />
      </div>
      <ProductOverview {...standardIndustrialCoveralls} imagePosition="left" />
      <ProductOverview {...standardIndustrialCoveralls} imagePosition="right"/>
      <ProductOverview {...standardIndustrialCoveralls}  imagePosition="left"/>
    </section>
  );
}

export default ProductsOverviews;
