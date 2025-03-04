
import { QrCode } from "lucide-react";

interface QrCodeDisplayProps {
  size?: string;
  className?: string;
}

export const QrCodeDisplay = ({ size = "32", className = "" }: QrCodeDisplayProps) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <div className="aspect-square w-48 bg-gray-100 rounded-lg flex items-center justify-center">
        <QrCode className="w-32 h-32" />
      </div>
      <p className="text-center mt-4 text-sm text-muted-foreground">
        Scan to donate directly
      </p>
    </div>
  );
};
