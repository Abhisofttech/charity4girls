
import { Download, HandHelping, QrCode, Share2 } from "lucide-react";
import { Button } from "./ui/button";

interface QrCodeDisplayProps {
  size?: string;
  className?: string;
}

export const QrCodeDisplay = ({ size = "32", className = "" }: QrCodeDisplayProps) => {
  return (
    <div className={` p-6 rounded-lg shadow-lg flex flex-col  items-center ${className}`}>
      <div className="aspect-square w-[200px] h-[260px] lg:w-[235px] lg:h-[315px] xl:w-[260px] xl:h-[340px] bg-gray-100 rounded-lg flex items-center justify-center">
        {/* <QrCode className="w-32 h-32" /> */}

        <img src="/images/shinyMediaQR.jpg" alt="QR Code" className="h-full w-full object-cover border-2 border-[#5CA62D] rounded-md" />
      </div>
      <p className="text-center my-2 lg:my-6 text-lg lg:text-xl xl:text-2xl font-bold  text-[#5CA62D]">
        Scan to donate directly
      </p>
      <div className="w-full flex justify-around md:px-[100px] lg:px-[50px] xl:px-[100px]">
        <Button size="sm" className="hover:bg-[#5CA62D] text-[#5CA62D] border-[1px] border-[#5CA62D] hover:text-[#fff] bg-[#fffff] font-bold lg:text-lg xl:text-xl">
          <Download className="w-6 h-6" />
         
          Download
        </Button>
        <Button size="sm" className="hover:bg-[#5CA62D] text-[#5CA62D] border-[1px] border-[#5CA62D] hover:text-[#fff] bg-[#fffff] font-bold lg:text-lg xl:text-xl">
          <Share2 className="w-6 h-6 " />
          
          Share
        </Button>
      </div>
    </div>
  );
};
