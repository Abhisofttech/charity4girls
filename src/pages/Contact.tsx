import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container px-4 py-16 sm:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5CA62D] mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Have questions or want to get involved? We'd love to hear from you. Reach out to us using the form below or through our contact details.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8 p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-[#5CA62D]"
            >
              <div className="flex flex-col space-y-6">
                <h2 className="text-2xl font-semibold text-[#5CA62D] mb-6">Get in Touch</h2>
                
                <div className="flex items-center gap-4 p-4 bg-[#5CA62D]/5 rounded-lg hover:bg-[#5CA62D]/10 transition-colors">
                  <div className="p-3 bg-[#5CA62D]/10 rounded-full">
                    <Mail className="w-6 h-6 text-[#5CA62D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#5CA62D]">Email</h3>
                    <a href="mailto:sunitasri74@gmail.com" className="text-gray-600 hover:text-[#5CA62D] transition-colors">
                      sunitasri74@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-[#5CA62D]/5 rounded-lg hover:bg-[#5CA62D]/10 transition-colors">
                  <div className="p-3 bg-[#5CA62D]/10 rounded-full">
                    <Phone className="w-6 h-6 text-[#5CA62D]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#5CA62D]">Phone</h3>
                    <a href="tel:+919560638073" className="text-gray-600 hover:text-[#5CA62D] transition-colors">
                      +91 9560638073
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-[#5CA62D]"
            >
              <h2 className="text-2xl font-semibold text-[#5CA62D] mb-6">Send Message</h2>
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input 
                    placeholder="Your Name" 
                    className="h-12 border-[#5CA62D]/20 focus:border-[#5CA62D] focus:ring-1 focus:ring-[#5CA62D] placeholder:text-gray-400"
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="h-12 border-[#5CA62D]/20 focus:border-[#5CA62D] focus:ring-1 focus:ring-[#5CA62D] placeholder:text-gray-400"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-[150px] border-[#5CA62D]/20 focus:border-[#5CA62D] focus:ring-1 focus:ring-[#5CA62D] placeholder:text-gray-400"
                  />
                </div>
                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full h-12 text-base border-2 border-[#5CA62D] bg-white text-[#5CA62D] hover:text-white hover:bg-[#5CA62D] transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
