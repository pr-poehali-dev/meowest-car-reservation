
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Премиальный автопарк для особых моментов
          </h1>
          <p className="text-xl mb-10 max-w-xl">
            MEOWEST — ваш путь к исключительным впечатлениям от вождения. 
            Бронируйте роскошные и спортивные автомобили онлайн.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-zinc-300"
              onClick={() => navigate('/cars')}
            >
              Выбрать автомобиль
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white hover:bg-white hover:text-black"
              onClick={() => navigate('/about')}
            >
              О нашем автопарке
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
