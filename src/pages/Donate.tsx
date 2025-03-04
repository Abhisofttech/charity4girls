
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container py-32">
        <h1 className="text-4xl font-bold">Donate</h1>
        {/* Donation information and QR codes will be added later */}
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
