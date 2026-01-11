import {
  customizationOptionsSection,
  heroSafetyVestsConfig,
  safetysVastsAbout,
} from "@/constance/products/safetyVests";
import { ProductConfig } from "@/types/products";

export const safetyVestsConfig: ProductConfig = {
  hero: heroSafetyVestsConfig,
  sections: [
    { type: "productAbout", props: safetysVastsAbout },
    { type: "overview" },
    { type: "featureGrid", props: customizationOptionsSection },
    { type: "complianceStandards" },
    { type: "similarProducts" },
  ],
};
