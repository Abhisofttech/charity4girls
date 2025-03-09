
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    title: "Empowering Girls Through Education",
    description: "Every girl deserves the opportunity to learn, grow, and achieve her dreams.",
    image: "/images/lab.jpg"
  },
  {
    title: "Building Future Leaders",
    description: "Supporting skills development and leadership training for young girls.",
    image: "/images/crousal2.webp"
  },
  {
    title: "Creating Lasting Change",
    description: "Your donation can help transform lives and communities through education.",
    image: "/images/crousal3.webp"
  }
];

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[30vh]  xl:h-[75vh]   w-full overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transform transition-transform duration-500 ease-in-out",
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h2 className=" text-xl lg:text-4xl md:text-5xl font-bold mb-4">{item.title}</h2>
              <p className=" text-base lg:text-lg md:text-xl mb-8">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/50"
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
