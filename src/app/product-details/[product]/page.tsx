"use client";
import ProductsOverviews from "@/components/common/ProductsOverviews";
import Footer from "@/components/layout/Footer";
import NavigationMenu from "@/components/layout/NavigationMenu";
import BulkOrderBenefits from "@/components/sections/product-details/BulkOrderBenefits";
import CarAndMaintenanceSection from "@/components/sections/product-details/CarAndMaintenanceSection";
import ChooseByTaskSection from "@/components/sections/product-details/ChooseByTaskSection";
import ColorFabricCustomizationSection from "@/components/sections/product-details/ColorFabricCustomizationSection";
import ComplianceStandardsSection from "@/components/sections/product-details/ComplianceStandardsSection";
import FeatureCombinedSection from "@/components/sections/product-details/FeatureCombinedSection";
import FeatureGridSection from "@/components/sections/product-details/FeatureGridSection";
import FeaturesOptionsSection from "@/components/sections/product-details/FeaturesOptionsSection";
import FitStyleSection from "@/components/sections/product-details/FitStyleSection";
import HeroSection from "@/components/sections/product-details/HeroSection";
import InfoGridSection from "@/components/sections/product-details/InfoGridSection";
import OrderingProcessSection from "@/components/sections/product-details/OrderingProcessSection";
import ParallaxSection from "@/components/sections/product-details/ParallaxSection";
import ProductAbout from "@/components/sections/product-details/ProductAbout";
import ProductSpecifications from "@/components/sections/product-details/ProductSpecifications";
import SizeChartSection from "@/components/sections/product-details/SizeChartSection";
import StandardScrubColorsSection from "@/components/sections/product-details/StandardScrubColorsSection";
import TestingQualitySection from "@/components/sections/product-details/TestingQualitySection";
import ViewSimilarProductsSection from "@/components/sections/product-details/ViewSimilarProductsSection";
import {
  bulkOrderAndProgramsSection,
  customizationOptions,
  customizationOptionsSection,
  customizationServicesSection,
  designPlacementGuide,
  fitStyleData,
  printingOptionsSection,
  sizeRangeGuide,
} from "@/constance/products";
import React, { useState } from "react";

function Product() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeroSection onMenuOpen={() => setIsMenuOpen(true)} />
      <ProductAbout />
      <ProductsOverviews />
      <TestingQualitySection />
      <ProductSpecifications />
      <CarAndMaintenanceSection />
      <ParallaxSection />
      <BulkOrderBenefits />
      <ViewSimilarProductsSection />
      <ComplianceStandardsSection />
      <OrderingProcessSection />
      <FitStyleSection {...fitStyleData} />
      <ChooseByTaskSection />
      <FeaturesOptionsSection {...customizationOptions} />
      <FeatureCombinedSection {...bulkOrderAndProgramsSection} />;
      <SizeChartSection />
      <ColorFabricCustomizationSection />
      <FeatureGridSection {...printingOptionsSection} />
      <StandardScrubColorsSection />
      <InfoGridSection {...designPlacementGuide} />
      <FeatureGridSection {...customizationOptionsSection} />
      <InfoGridSection {...sizeRangeGuide} />
      <FeatureGridSection {...customizationServicesSection} />
      <Footer />
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Product;
