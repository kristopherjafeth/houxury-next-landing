import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import PropertyTypesSection from "@/app/components/PropertyTypesSection";
import CitiesSection from "@/app/components/CitiesSection";
import StatsSection from "@/app/components/StatsSection";
// import PropertiesSection from "@/app/components/PropertiesSection";
// import CommunitySection from "@/app/components/CommunitySection";
// import InvestorsSection from "@/app/components/InvestorsSection";
// import FAQSection from "@/app/components/FAQSection";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Home - Houxury",
  description: "Exclusividad y confort en alquiler por España",
  icons: {
    icon: "/h.png",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PropertyTypesSection />
      <CitiesSection />
      <StatsSection />
      {/* <PropertiesSection />
      <CommunitySection />
      <InvestorsSection />
      <FAQSection /> */}
      <Footer />
    </main>
  );
}
