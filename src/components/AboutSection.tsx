
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6">Об автопарке MEOWEST</h2>
            <p className="text-zinc-300 mb-6">
              MEOWEST — это не просто прокат автомобилей, это возможность прикоснуться к легенде. 
              Мы стремимся предоставить вам не просто средство передвижения, а настоящее произведение 
              автомобильного искусства, которое подчеркнет ваш статус и стиль.
            </p>
            <p className="text-zinc-300 mb-6">
              Наш автопарк тщательно отобран и включает только лучшие модели от ведущих 
              мировых производителей. Каждый автомобиль проходит регулярное техническое 
              обслуживание и предоставляется вам в идеальном состоянии.
            </p>
            <p className="text-zinc-300 mb-8">
              Мы гордимся своей репутацией надежного партнера и делаем все, чтобы ваш опыт 
              аренды автомобиля был безупречным от начала до конца.
            </p>
            <Button 
              className="bg-white text-black hover:bg-zinc-300"
              onClick={() => navigate('/about')}
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1964&auto=format&fit=crop" 
                  alt="Luxury car"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Sports car" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="rounded-lg overflow-hidden h-48">
                <img 
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Classic car" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern car" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
