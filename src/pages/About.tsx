import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Computer, Coffee, ScrollText, UserCircle } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container py-32">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            className="text-5xl font-bold mb-12 text-center"
            style={{ color: '#5CA62D' }}
            {...fadeIn}
          >
            About Us
          </motion.h1>
          
          <div className="space-y-16">
            <motion.p 
              className="text-xl text-center max-w-3xl mx-auto leading-relaxed"
              {...fadeIn}
            >
              Founded in 2023, our NGO is committed to empowering underprivileged girls by providing them with essential computer education at a minimal cost. In today's world, where artificial intelligence and digital skills have become the foundation of most jobs, many underprivileged girls remain deprived of even the most basic computer knowledge.
            </motion.p>
            
            <motion.div 
              className="grid sm:grid-cols-2 gap-10"
              variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              initial="initial"
              animate="animate"
            >
              <motion.div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" variants={fadeIn}>
                <Computer className="w-16 h-16 mb-6" style={{ color: '#5CA62D' }} />
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5CA62D' }}>Digital Education</h3>
                <p className="text-gray-600 text-lg">
                  Providing essential computer education to bridge the digital divide and create opportunities.
                </p>
              </motion.div>
              
              <motion.div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" variants={fadeIn}>
                <Coffee className="w-16 h-16 mb-6" style={{ color: '#5CA62D' }} />
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5CA62D' }}>Nutritional Support</h3>
                <p className="text-gray-600 text-lg">
                  Free one-time meal program to support students' learning journey and well-being.
                </p>
              </motion.div>
              
              <motion.div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" variants={fadeIn}>
                <ScrollText className="w-16 h-16 mb-6" style={{ color: '#5CA62D' }} />
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5CA62D' }}>Certifications</h3>
                <p className="text-gray-600 text-lg">
                  Fully documented and recognized with Darpan, 12A, and ATG certifications.
                </p>
              </motion.div>
              
              <motion.div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow" variants={fadeIn}>
                <UserCircle className="w-16 h-16 mb-6" style={{ color: '#5CA62D' }} />
                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#5CA62D' }}>Leadership</h3>
                <p className="text-gray-600 text-lg">
                  Led by Sunita Srivastava, an experienced educator with B.A., B.Ed., and NTT qualifications.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-[#5CA62D] p-10 rounded-xl shadow-lg"
              {...fadeIn}
            >
              <motion.h2 
                className="text-4xl font-bold mb-6 text-center bg-red-600 text-white py-4 rounded-lg shadow-md"
                animate={{ 
                  scale: [1, 1.02, 1],
                  backgroundColor: ['#dc2626', '#ea580c', '#dc2626']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Current Status & Support Needed
              </motion.h2>
              <motion.p 
                className="text-white text-lg mb-8 font-medium"
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Our initiative is temporarily on hold due to financial constraints. We need support for:
              </motion.p>
              <ul className="space-y-4 text-lg  pl-8 text-[#fff]">
                <li className="list-disc">Three months' advance rent for the learning center</li>
                <li className="list-disc">Teacher salaries and staff compensation</li>
                <li className="list-disc">Electricity bills and operational costs</li>
                <li className="list-disc">Educational materials and computer equipment</li>
              </ul>
            </motion.div>

            <motion.div 
              className="text-center py-10"
              {...fadeIn}
            >
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We strongly believe that education is the key to breaking the cycle of poverty. Your support can help us restart and sustain this initiative, creating opportunities for underprivileged girls to succeed in the digital age.
              </p>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
