import { Button } from "@/components/ui/button";
import { QrCodeDisplay } from "./QrCodeDisplay";

export const DonationSection = () => {
  return (
    <div className="relative py-24">
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="/placeholder.svg"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Make a Difference Today
            </h2>
            <p className="text-lg mb-8">
              Your contribution can help provide education, develop skills, and create
              opportunities for girls who dream of a better future. Every donation,
              no matter how small, has the power to transform lives.
            </p>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Donate Now
            </Button>
          </div>
          
          <QrCodeDisplay />
        </div>
      </div>
    </div>
  );
};
