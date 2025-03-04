
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container py-32">
        <h1 className="text-4xl font-bold">About Us</h1>
        {/* About information will be added later */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
