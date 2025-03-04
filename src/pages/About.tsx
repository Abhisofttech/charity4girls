
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Heart, Book, Users, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 animate-fade-in">About Us</h1>
          
          <div className="prose max-w-none space-y-8 animate-fade-in">
            <p className="text-lg text-muted-foreground">
              CharityForGirl is dedicated to empowering girls through education, skill development, and creating opportunities for their growth. We believe that every girl deserves the chance to pursue her dreams and reach her full potential.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 my-12">
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide educational opportunities and support for girls in underserved communities.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Book className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Education First</h3>
                <p className="text-muted-foreground">
                  We believe education is the key to breaking cycles of poverty and creating lasting change.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                <p className="text-muted-foreground">
                  We've helped over 10,000 girls access quality education and skill development programs.
                </p>
              </div>
              
              <div className="p-6 bg-card rounded-lg shadow-sm">
                <Trophy className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
                <p className="text-muted-foreground">
                  Our graduates have gone on to become leaders in their communities and various professional fields.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-slow">
              <h2 className="text-2xl font-bold mb-4">Our Impact</h2>
              <p className="text-muted-foreground mb-6">
                Since our founding, we have:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provided scholarships to over 5,000 girls</li>
                <li>Built or renovated 50+ schools in underserved areas</li>
                <li>Trained 1,000+ teachers in modern education methods</li>
                <li>Developed mentorship programs connecting students with professional women</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
