
import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DonationSection } from "@/components/DonationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16 lg:pt-20 xl:pt-24">
        <div className="w-full flex justify-center items-center py-4 text-[16px] lg:text-[24px] xl:text-[30px] font-bold bg-[#5CA62D] text-white"> New Shiny Media & Social Welfare Association</div>
        <DonationSection />
        <HeroCarousel />

      </main>

      <Footer />
    </div>
  );
};

export default Index;
