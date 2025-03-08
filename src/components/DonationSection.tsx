import { Button } from "@/components/ui/button";
import { QrCodeDisplay } from "./QrCodeDisplay";
import { HandHelping } from "lucide-react";

export const DonationSection = () => {
  return (
    <div className="relative pb-6 md:py-8  bg-white">
      {/* Background Video */}
      {/* <div className="absolute inset-0 overflow-hidden">
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
      </div> */}

      <div className="container relative z-20">
        <div className=" flex flex-col lg:flex-row gap-4">
          <div className="w-full">
            <QrCodeDisplay />
          </div>
          <div className="text-white w-full">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Make a Difference Today
            </h2>
            <p className="text-lg mb-8 text-black">
              Your contribution can help provide education, develop skills, and create
              opportunities for girls who dream of a better future. Every donation,
              no matter how small, has the power to transform lives.
            </p>
            <Button size="sm" className="hover:bg-[#5CA62D] text-[#5CA62D] border-[1px] border-[#5CA62D] hover:text-[#fff] bg-[#fffff] font-bold lg:text-lg xl:text-xl">
          <HandHelping className="w-6 h-6" />
          Donate
        </Button>
          </div>


        </div>
      </div>
    </div>
  );
};
