import { Button } from "@/components/ui/button";
import { QrCodeDisplay } from "./QrCodeDisplay";
import { HandHelping } from "lucide-react";
import RequestVedio from "./RequestVedio";

export const DonationSection = () => {
  return (
    <div className="relative pb-6 md:py-8 lg:py-0  bg-white">
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
          <div className="w-full flex flex-col justify-center">
              {/* <div className="relative w-full rounded-lg border-2 border-[#5CA62D] overflow-hidden mb-6">
                <video
                  className="w-full h-auto"
                  controls
                  preload="metadata"
                  poster="/placeholder.svg"
                >
                  <source src="/placeholder.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div> */}

           <RequestVedio />
          </div>


        </div>
      </div>
    </div>
  );
};
