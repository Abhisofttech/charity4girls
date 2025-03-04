
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="text-lg font-medium text-primary">CharityForGirl</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link to={item.path}>{item.name}</Link>
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
                  <Link to={item.path}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
