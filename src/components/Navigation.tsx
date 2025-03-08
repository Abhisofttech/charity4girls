
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Home, Mail, Heart, Info } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


export const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Contact", path: "/contact", icon: Mail },
    { name: "Donate", path: "/donate", icon: Heart },
    { name: "About Us", path: "/about", icon: Info },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 lg:h-20 xl:h-24">
        <div className="flex flex-col items-start gap-1  font-medium text-[#5CA62D]">
          <span className="flex  items-center gap-2 text-lg lg:text-xl xl:text-2xl font-medium text-[#5CA62D]">
            <img src="./images/NewShinyMediaLogo.jpg" alt="Logo" className="w-8 h-8 lg:w-10 lg:h-10 xl:h-14 xl:w-14 border border-[#5CA62D] rounded" /> NSMSWA
          </span>
          <p className="text-black text-[12px] lg:text-[14px] xl:text-[16px]">CIN : U85499DL2023NPL415242</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild className="w-full justify-start hover:bg-[#5CA62D] hover:text-white transition-colors lg:text-[16px] xl:text-[20px]">
              <Link to={item.path} className="flex items-center gap-2">
                <item.icon className=" w-4 h-4 " />
                {item.name}
              </Link>
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5 text-[#5CA62D]" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Button 
                  key={item.name} 
                  variant="ghost" 
                  asChild 
                  className="w-full justify-start hover:bg-[#5CA62D] hover:text-white transition-colors"
                >
                  <Link to={item.path} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
