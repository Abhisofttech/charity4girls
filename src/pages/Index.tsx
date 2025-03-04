
import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DonationSection } from "@/components/DonationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroCarousel />
        <DonationSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
