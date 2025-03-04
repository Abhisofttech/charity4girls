
import { QrCode } from "lucide-react";

interface QrCodeDisplayProps {
  size?: string;
  className?: string;
}

export const QrCodeDisplay = ({ size = "full", className = "" }: QrCodeDisplayProps) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg ${className}`}>
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <QrCode className={`w-${size} h-${size} p-8`} />
      </div>
      <p className="text-center mt-4 text-sm text-muted-foreground">
        Scan to donate directly
      </p>
    </div>
  );
};
