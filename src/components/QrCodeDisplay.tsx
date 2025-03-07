
import { QrCode } from "lucide-react";

interface QrCodeDisplayProps {
  size?: string;
  className?: string;
}

export const QrCodeDisplay = ({ size = "32", className = "" }: QrCodeDisplayProps) => {
  return (
    <div className={` p-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center ${className}`}>
      <div className="aspect-square w-full max-w-[260px] bg-gray-100 rounded-lg flex items-center justify-center">
        {/* <QrCode className="w-32 h-32" /> */}

        <img src="/images/DummyQR.webp" alt="QR Code" className="h-full w-full object-cover border-2 border-[#5CA62D] rounded-md" />
      </div>
      <p className="text-center mt-4 text-lg font-bold  text-[#5CA62D]">
        Scan to donate directly
      </p>
    </div>
  );
};
