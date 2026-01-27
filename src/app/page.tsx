"use client";

import HeroSection from "@/components/sections/home/HeroSection";
import NavigationMenu from "@/components/layout/NavigationMenu";
import { useState } from "react";
import StatsSection from "@/components/sections/home/StatsSection";
import AboutSection from "@/components/sections/home/AboutSection";
import LeadershipSection from "@/components/sections/home/LeadershipSection";
import ValuesSection from "@/components/sections/home/ValuesSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import NewsAndEvents from "@/components/sections/home/NewsAndEvents";
import FeaturesSection from "@/components/sections/home/FeaturesSection";
import AboutMoreSection from "@/components/sections/home/AboutMoreSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import Footer from "@/components/layout/Footer";
import SignatureProductSection from "@/components/sections/home/SignatureProductsSection";
import WhyPennywortSection from "@/components/sections/home/WhyPennywortSection";
import IntroLoader from "@/components/layout/IntroLoader";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && <IntroLoader onFinish={() => setLoadingDone(true)} />}
      <main id="home-content" className="min-h-screen">
        <HeroSection
          onMenuOpen={() => setIsMenuOpen(true)}
          ready={loadingDone}
        />
        <StatsSection />
        <AboutSection />
        <LeadershipSection />
        <SignatureProductSection />
        <WhyPennywortSection />
        <NewsAndEvents />
        <ValuesSection />
        <IndustriesSection />
        <FeaturesSection />
        <AboutMoreSection />
        <TestimonialSection />
        <Footer />
        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </main>
    </>
  );
};

export default Home;
