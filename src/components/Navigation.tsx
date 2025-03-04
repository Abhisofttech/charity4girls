
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
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2 text-lg font-medium text-primary">
          <Heart className="w-6 h-6" /> CharityForGirl
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link to={item.path} className="flex items-center gap-2">
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Button key={item.name} variant="ghost" asChild className="w-full justify-start">
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
