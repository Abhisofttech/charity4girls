
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[#5CA62D] text-white border-t-2 border-black">
      <div className="container py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="./images/NewShinyMediaLogo.jpg" 
                alt="Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded bg-white border-2 border-white" 
              />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                New Shiny Media & Social Welfare Association
              </h3>
            </div>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Empowering girls through education, skills development, and creating
              opportunities for a brighter future.
            </p>
          
          </div>

          {/* Quick Links */}
          <div className="mt-4 sm:mt-0">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Contact', 'Donate'].map((item) => (
                <li key={item}>
                  <a 
                    href={`/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-white/90 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-4 sm:mt-0">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:sunitasri74@gmail.com" 
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  sunitasri74@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:9560638073" 
                  className="text-white/90 hover:text-white transition-colors flex items-center gap-3 text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  +91 9560638073
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-white/90 text-sm">
            © 2024 <span className="text-white font-medium">CharityForGirl</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
