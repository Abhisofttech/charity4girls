
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1.5 bg-secondary rounded-full text-sm font-medium">
              Introducing Our Platform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6 text-balance">
              Create beautiful experiences with minimal effort
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Crafted with precision and care, our platform helps you build stunning
              interfaces that leave lasting impressions.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-secondary/50">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3 animate-fade-in-slow">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Intuitive Design</h3>
                <p className="text-muted-foreground">
                  Create beautiful interfaces with our easy-to-use design system.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Powerful Features</h3>
                <p className="text-muted-foreground">
                  Built with modern technologies for optimal performance.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Seamless Experience</h3>
                <p className="text-muted-foreground">
                  Everything you need to create amazing products.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
