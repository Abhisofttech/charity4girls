
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DonationSection } from "@/components/DonationSection";
import { DonationContent } from "@/components/DonationContent";
import { motion } from "framer-motion";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg lg:text-[36px] leading-tight font-bold mt-4 py-2 px-6 rounded-lg bg-[#5CA62D] text-white ]"
          >
            Make a Difference
          </motion.h1>
          <DonationSection />
          <DonationContent />
         
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Donate;
