
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-center">О нас</h1>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Премиальный автомобиль" 
                className="w-full h-[400px] object-cover rounded-lg mb-8"
              />
              
              <h2 className="text-3xl font-bold mb-4">История MEOWEST</h2>
              <p className="text-lg mb-6 text-zinc-300">
                Компания MEOWEST была основана в 2015 году группой энтузиастов премиальных автомобилей с общей идеей — 
                сделать вождение эксклюзивных автомобилей доступным для всех ценителей роскоши и скорости.
              </p>
              <p className="text-lg mb-6 text-zinc-300">
                Мы начинали с небольшого парка из 5 автомобилей, но благодаря нашему вниманию к деталям, 
                безупречному сервису и растущему спросу на премиальные автомобили, сегодня наш автопарк 
                насчитывает более 30 эксклюзивных моделей от лучших производителей.
              </p>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Наша философия</h2>
              <p className="text-lg mb-6 text-zinc-300">
                В MEOWEST мы верим, что каждый должен иметь возможность испытать удовольствие от вождения 
                автомобиля своей мечты. Наша миссия — предоставить нашим клиентам не просто транспортное средство, 
                а настоящий опыт, который запомнится на всю жизнь.
              </p>
              <p className="text-lg mb-6 text-zinc-300">
                Мы тщательно отбираем каждый автомобиль в наш парк, обеспечиваем его безупречное техническое состояние 
                и предоставляем первоклассный сервис на всех этапах взаимодействия с клиентом.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Качество</h3>
                <p className="text-zinc-300">
                  Мы предлагаем только премиальные автомобили в идеальном техническом состоянии.
                </p>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Сервис</h3>
                <p className="text-zinc-300">
                  Индивидуальный подход к каждому клиенту и внимание к каждой детали.
                </p>
              </div>
              
              <div className="bg-zinc-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Инновации</h3>
                <p className="text-zinc-300">
                  Мы постоянно обновляем наш автопарк и внедряем новые технологии.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <ul className="list-disc list-inside text-lg space-y-4 text-zinc-300 ml-4">
                <li>Эксклюзивный автопарк премиальных и спортивных автомобилей</li>
                <li>Гибкие условия аренды и конкурентные цены</li>
                <li>Индивидуальный подход к каждому клиенту</li>
                <li>Безупречное техническое состояние всех автомобилей</li>
                <li>Дополнительные услуги (доставка автомобиля, персональный водитель и др.)</li>
                <li>Программа лояльности для постоянных клиентов</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
