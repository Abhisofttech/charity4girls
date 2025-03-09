import { PiggyBank, HandCoins, ReceiptText } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const DonationContent = () => {
  return (
    <div className="py-12 space-y-12">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={fadeInUp}
        className="text-center max-w-2xl mx-auto"
      >
        <h2 className="text-xl lg:text-3xl font-bold mb-4 text-[#5CA62D]">Support Girls' Education</h2>
        <p className="text-muted-foreground text-sm lg:text-lg">
          Your donation helps create a brighter future for girls around the world through education, 
          skill development, and mentorship programs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: HandCoins,
            title: "Direct Impact",
            description: "100% of your donation goes directly to supporting girls' education programs"
          },
          {
            icon: PiggyBank,
            title: "Monthly Giving",
            description: "Join our monthly giving program to make a sustained impact"
          },
          {
            icon: ReceiptText,
            title: "Tax Benefits",
            description: "All donations are tax-deductible under section 501(c)(3)"
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              hover: { duration: 0.2 }
            }}
            className="p-6 rounded-lg shadow-sm bg-[#5CA62D] cursor-pointer transform hover:bg-[#4a8924] transition-colors duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <item.icon className="w-12 h-12 text-white mb-4 mx-auto" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-center text-white">{item.title}</h3>
            <p className="text-white text-center">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
