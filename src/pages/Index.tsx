
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CarouselComponent } from "@/components/CarouselComponent";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <HeroSection />
      
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Наш премиальный автопарк</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          MEOWEST предлагает вам доступ к эксклюзивной коллекции роскошных и спортивных автомобилей.
          Выберите свой идеальный автомобиль и отправляйтесь в путешествие с комфортом и стилем.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-zinc-900 p-6 rounded-lg transition-all hover:bg-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Porsche</h3>
            <p className="mb-6">Легендарные спортивные автомобили с безупречной управляемостью и характерным стилем.</p>
            <Button 
              variant="outline" 
              className="border-white hover:bg-white hover:text-black transition-colors"
              onClick={() => navigate('/cars/porsche')}
            >
              Смотреть модели
            </Button>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg transition-all hover:bg-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Люкс автомобили</h3>
            <p className="mb-6">Изысканные автомобили премиум-класса для тех, кто ценит комфорт и престиж.</p>
            <Button 
              variant="outline" 
              className="border-white hover:bg-white hover:text-black transition-colors"
              onClick={() => navigate('/cars/luxury')}
            >
              Смотреть модели
            </Button>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg transition-all hover:bg-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Бизнес автомобили</h3>
            <p className="mb-6">Идеальное сочетание комфорта, надежности и представительности для деловых поездок.</p>
            <Button 
              variant="outline" 
              className="border-white hover:bg-white hover:text-black transition-colors"
              onClick={() => navigate('/cars/business')}
            >
              Смотреть модели
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-zinc-300"
            onClick={() => navigate('/cars')}
          >
            Весь автопарк
          </Button>
        </div>
      </section>
      
      <AboutSection />
      
      <section className="bg-zinc-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Популярные модели</h2>
          <CarouselComponent />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
