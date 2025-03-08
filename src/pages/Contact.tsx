import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 animate-fade-in text-[#5CA62D]">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-black" />
                <div>
                  <h3 className="font-semibold text-[#5CA62D]">Email</h3>
                  <p className="text-black">support@charityforgirl.org</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-black" />
                <div>
                  <h3 className="font-semibold text-[#5CA62D]">Phone</h3>
                  <p className="text-black">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-black" />
                <div>
                  <h3 className="font-semibold text-[#5CA62D]">Address</h3>
                  <p className="text-black">123 Charity Street, Suite 456<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <form className="space-y-6 animate-fade-in-slow">
              <div>
                <Input placeholder="Your Name" className="border-[#5CA62D] focus:ring-[#5CA62D] focus:border-[#5CA62D] outline-[#5CA62D] foucs:outline" />
              </div>
              <div> 
                <Input type="email" placeholder="Your Email" className="border-[#5CA62D] focus:ring-[#5CA62D] focus:border-[#5CA62D]" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="min-h-[150px] border-[#5CA62D] focus:ring-[#5CA62D] focus:border-[#5CA62D]" />
              </div>
              <Button 
                type="submit" 
                variant="outline"
                className="w-full border-2 border-[#5CA62D] bg-white text-[#5CA62D] hover:text-white hover:bg-[#5CA62D]"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
