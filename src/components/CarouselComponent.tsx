
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Car = {
  id: number;
  name: string;
  category: "porsche" | "luxury" | "business";
  image: string;
  price: number;
};

const featuredCars: Car[] = [
  {
    id: 1,
    name: "Porsche 911",
    category: "porsche",
    image: "https://images.unsplash.com/photo-1584060622420-0673aad46076?q=80&w=1974&auto=format&fit=crop",
    price: 25000
  },
  {
    id: 2,
    name: "Mercedes-Benz S-Class",
    category: "luxury",
    image: "https://images.unsplash.com/photo-1549399542-7e8ee8c77a4d?q=80&w=1931&auto=format&fit=crop",
    price: 18000
  },
  {
    id: 3,
    name: "BMW 5 Series",
    category: "business",
    image: "https://images.unsplash.com/photo-1523983302122-73e869a1b154?q=80&w=1780&auto=format&fit=crop",
    price: 12000
  }
];

export const CarouselComponent = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = featuredCars.length - 1;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative" ref={containerRef}>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${featuredCars.length * 100}%` 
          }}
        >
          {featuredCars.map((car) => (
            <div 
              key={car.id} 
              className="relative w-full"
              style={{ width: `${100 / featuredCars.length}%` }}
            >
              <div className="aspect-[16/9] mx-4 overflow-hidden rounded-lg">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 mx-4 mt-4 bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-zinc-300 mb-3">Категория: {car.category === "porsche" ? "Porsche" : car.category === "luxury" ? "Люкс" : "Бизнес"}</p>
                <p className="text-lg font-semibold mb-4">{car.price} ₽ / день</p>
                <Button 
                  className="w-full bg-white text-black hover:bg-zinc-300"
                  onClick={() => navigate(`/cars/${car.id}`)}
                >
                  Забронировать
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
        onClick={handleNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};
