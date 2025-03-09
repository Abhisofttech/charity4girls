
import { Navigation } from "@/components/Navigation";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DonationSection } from "@/components/DonationSection";
import { Footer } from "@/components/Footer";
import SupportContent from "@/components/SupportContent";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-10 lg:pt-20">
        <div className="w-full flex justify-center items-center py-4 text-[16px] lg:text-[24px] xl:text-[30px] font-bold bg-[#5CA62D] text-white  flex-col"> New Shiny Media & Social Welfare Association <br/>  <p className="text-white text-[12px] lg:text-[14px] xl:text-[16px] border-2 border-white rounded-md px-2 py-1 mt-2">CIN : U85499DL2023NPL415242</p> </div>
        <DonationSection />
        <HeroCarousel />
        <div className="w-full p-4 lg:px-10 lg:py-5">
          <SupportContent />
        </div>

        {/* About Section */}
        <motion.section 
          className="w-full py-16 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-center text-[#5CA62D] mb-8"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.h2>
            
            <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
              <motion.p 
                className="text-lg text-center leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Founded in 2023, NSMSWA is dedicated to empowering underprivileged girls through essential computer education. We believe in creating opportunities for a digital future, supported by our certified NGO status and experienced leadership.
              </motion.p>

              <motion.div 
                className="grid md:grid-cols-3 gap-6 mt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#5CA62D]">
                  <h3 className="font-semibold text-[#5CA62D] mb-2">Our Mission</h3>
                  <p>Providing affordable computer education to underprivileged girls for their digital empowerment.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#5CA62D]">
                  <h3 className="font-semibold text-[#5CA62D] mb-2">Our Support</h3>
                  <p>Free one-time meal program and essential learning resources for holistic development.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-[#5CA62D]">
                  <h3 className="font-semibold text-[#5CA62D] mb-2">Our Goal</h3>
                  <p>Breaking the cycle of poverty through education and creating opportunities for financial independence.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
