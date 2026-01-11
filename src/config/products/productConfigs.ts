import { medicalScrubsConfig } from "../productSectionConfig/medicalScrubs";
import { workGlovesConfig } from "../productSectionConfig/workGloves";
import { safetyVestsConfig } from "../productSectionConfig/safetyVests";
import { frCoverallsConfig } from "../productSectionConfig/frCoveralls";
import { corporateTshirtsConfig } from "../productSectionConfig/corporateTshirts";

export const PRODUCT_CONFIGS = {
  "medical-scrubs": medicalScrubsConfig,
  "work-gloves": workGlovesConfig,
  "corporate-tshirts": corporateTshirtsConfig,
  "safety-vests": safetyVestsConfig,
  "fr-coveralls": frCoverallsConfig,
} as const;

export type ProductSlug = keyof typeof PRODUCT_CONFIGS;
