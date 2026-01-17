import {} from "@/constance/products";
import {
  customizationOptions,
  designPlacementGuide,
  fitStyleData,
  heroTShirtsConfig,
  printingOptionsSection,
  TShirtsAbout,
} from "@/constance/products/corporateTshirts";
import { ProductConfig } from "@/types/products";

export const corporateTshirtsConfig: ProductConfig = {
  hero: heroTShirtsConfig,
  sections: [
    { type: "productAbout", props: TShirtsAbout },
    { type: "overview" },
    { type: "featureGrid", props: printingOptionsSection },
    { type: "featureOptions", props: customizationOptions },
    { type: "infoGrid", props: designPlacementGuide },
    { type: "colorFabricCustomization" },
    { type: "sizeChart" },
    { type: "fitStyle", props: fitStyleData },
    { type: "orderingProcess" },
    { type: "similarProducts" },
  ],
};
