import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { TechStack } from "@/components/TechStack";
import { Deployment } from "@/components/Deployment";
import { PurchaseContact } from "@/components/PurchaseContact";
import { LiveDemo } from "@/components/LiveDemo";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <TechStack />
      <Deployment />
      <PurchaseContact />
      <LiveDemo />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
