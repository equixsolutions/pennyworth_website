"use client";

import HeroSection from "@/components/sections/HeroSection";
import NavigationMenu from "@/components/layout/NavigationMenu";
import { useState } from "react";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
// import Footer from "@/components/Footer";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <main className="min-h-screen">
        <HeroSection onMenuOpen={() => setIsMenuOpen(true)} />
        <StatsSection />
        <AboutSection />
        <LeadershipSection />
        {/* <Footer /> */}
        <NavigationMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </main>
    </>
  );
};

export default Home;
