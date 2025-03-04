
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="text-lg font-medium">Brand</div>
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="text-sm">About</Button>
          <Button variant="ghost" className="text-sm">Features</Button>
          <Button variant="ghost" className="text-sm">Contact</Button>
          <Button className="text-sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};
