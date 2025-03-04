
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CharityForGirl</h3>
            <p className="text-gray-400">
              Empowering girls through education, skills development, and creating
              opportunities for a brighter future.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/donate" className="hover:text-white transition">Donate</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@charityforgirl.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Charity Street, City</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 CharityForGirl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
