
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

type CarCategory = 'all' | 'porsche' | 'luxury' | 'business';

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const Cars = () => {
  const [activeCategory, setActiveCategory] = useState<CarCategory>('all');
  
  const cars: Car[] = [
    // Porsche
    {
      id: 1,
      name: "Porsche 911 Carrera",
      category: "porsche",
      price: 20000,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Легендарный спортивный автомобиль с задним расположением двигателя и непревзойденной управляемостью."
    },
    {
      id: 2,
      name: "Porsche Taycan",
      category: "porsche",
      price: 18000,
      image: "https://images.unsplash.com/photo-1619767886558-efdc7326e231?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Первый полностью электрический спортивный автомобиль Porsche, сочетающий высокую производительность и экологичность."
    },
    {
      id: 3,
      name: "Porsche Cayenne",
      category: "porsche",
      price: 15000,
      image: "https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Спортивный внедорожник, предлагающий динамику спорткара и практичность SUV."
    },
    {
      id: 4,
      name: "Porsche Panamera",
      category: "porsche",
      price: 17000,
      image: "https://images.unsplash.com/photo-1563720360363-8e80c1d08abf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Роскошный спортивный седан, предлагающий непревзойденную комбинацию производительности и комфорта."
    },
    {
      id: 5,
      name: "Porsche Macan",
      category: "porsche",
      price: 14000,
      image: "https://images.unsplash.com/photo-1580273707956-eda268dc45d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Компактный спортивный кроссовер с отличной маневренностью и характерной для Porsche динамикой."
    },
    
    // Luxury
    {
      id: 6,
      name: "Rolls-Royce Ghost",
      category: "luxury",
      price: 35000,
      image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Воплощение роскоши и элегантности, символ престижа и совершенства."
    },
    {
      id: 7,
      name: "Bentley Continental GT",
      category: "luxury",
      price: 30000,
      image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Изысканный гран-туризмо, сочетающий роскошь ручной работы и впечатляющую производительность."
    },
    {
      id: 8,
      name: "Mercedes-Maybach S-Class",
      category: "luxury",
      price: 28000,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ультрароскошный седан, предлагающий непревзойденный комфорт и передовые технологии."
    },
    {
      id: 9,
      name: "Aston Martin DB11",
      category: "luxury",
      price: 27000,
      image: "https://images.unsplash.com/photo-1579116774875-ac0f838ff927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Элегантный спортивный автомобиль, воплощающий британскую роскошь и превосходные ходовые качества."
    },
    {
      id: 10,
      name: "Ferrari Roma",
      category: "luxury",
      price: 32000,
      image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Итальянский спортивный автомобиль, сочетающий классическую элегантность и современную производительность."
    },
    {
      id: 11,
      name: "Lamborghini Huracan",
      category: "luxury",
      price: 31000,
      image: "https://images.unsplash.com/photo-1585011664466-e94f6d8a205c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Экстремальный суперкар с потрясающим дизайном и невероятной динамикой."
    },
    {
      id: 12,
      name: "Maserati Quattroporte",
      category: "luxury",
      price: 25000,
      image: "https://images.unsplash.com/photo-1570733577438-4c68c36b9ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Итальянский роскошный спортивный седан с впечатляющей динамикой и изысканным стилем."
    },
    {
      id: 13,
      name: "Bugatti Chiron",
      category: "luxury",
      price: 50000,
      image: "https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Гиперкар с невероятной мощностью и эксклюзивностью, символ абсолютного превосходства."
    },
    {
      id: 14,
      name: "Lexus LC",
      category: "luxury",
      price: 23000,
      image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Роскошное купе, сочетающее потрясающий дизайн, высокий комфорт и управляемость."
    },
    {
      id: 15,
      name: "McLaren 720S",
      category: "luxury",
      price: 35000,
      image: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Высокотехнологичный суперкар с футуристическим дизайном и исключительной динамикой."
    },
    
    // Business
    {
      id: 16,
      name: "Mercedes-Benz S-Class",
      category: "business",
      price: 15000,
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Эталон роскошного бизнес-седана с инновационными технологиями и непревзойденным комфортом."
    },
    {
      id: 17,
      name: "BMW 7 Series",
      category: "business",
      price: 14500,
      image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Представительский седан, сочетающий роскошь, инновации и спортивный характер."
    },
    {
      id: 18,
      name: "Audi A8",
      category: "business",
      price: 14000,
      image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Роскошный флагманский седан с передовыми технологиями автономного вождения и премиальным комфортом."
    },
    {
      id: 19,
      name: "Volvo S90",
      category: "business",
      price: 12000,
      image: "https://images.unsplash.com/photo-1625365435113-c498ab847708?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Скандинавская роскошь с акцентом на безопасность, комфорт и минималистичный дизайн."
    },
    {
      id: 20,
      name: "Lexus LS",
      category: "business",
      price: 13000,
      image: "https://images.unsplash.com/photo-1543796076-236e78ceb8d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Японский флагманский седан, предлагающий непревзойденное качество, тишину и комфорт."
    },
    {
      id: 21,
      name: "Genesis G90",
      category: "business",
      price: 12500,
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Корейский представительский седан с впечатляющим уровнем роскоши и внимания к деталям."
    },
    {
      id: 22,
      name: "Jaguar XJ",
      category: "business",
      price: 13500,
      image: "https://images.unsplash.com/photo-1551952238-2a1b60c8e8f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Британский бизнес-седан с характерным спортивным характером и элегантным дизайном."
    },
    {
      id: 23,
      name: "Mercedes-Benz E-Class",
      category: "business",
      price: 10000,
      image: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Бизнес-седан среднего размера, сочетающий комфорт, технологии и престиж."
    },
    {
      id: 24,
      name: "BMW 5 Series",
      category: "business",
      price: 9500,
      image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Спортивный бизнес-седан с отличной управляемостью и престижным имиджем."
    },
    {
      id: 25,
      name: "Audi A6",
      category: "business",
      price: 9000,
      image: "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Элегантный и технологичный бизнес-седан с прогрессивным дизайном."
    },
    {
      id: 26,
      name: "Lexus ES",
      category: "business",
      price: 8500,
      image: "https://images.unsplash.com/photo-1600706432502-77a0e2e50339?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Комфортный и надежный премиальный седан с отличной шумоизоляцией."
    },
    {
      id: 27,
      name: "Volvo V90",
      category: "business",
      price: 10500,
      image: "https://images.unsplash.com/photo-1594070319944-7c0cbebb6f58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Роскошный универсал, сочетающий практичность, безопасность и скандинавский дизайн."
    },
    {
      id: 28,
      name: "Mercedes-Benz CLS",
      category: "business",
      price: 11000,
      image: "https://images.unsplash.com/photo-1605954836566-286591d97f18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Четырехдверное купе с элегантным дизайном и спортивным характером."
    },
    {
      id: 29,
      name: "Maserati Ghibli",
      category: "business",
      price: 13000,
      image: "https://images.unsplash.com/photo-1574697453346-3e4c7e7db751?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Итальянский спортивный седан с эмоциональным характером и харизматичным дизайном."
    },
    {
      id: 30,
      name: "Jaguar XF",
      category: "business",
      price: 10000,
      image: "https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Спортивный бизнес-седан с динамичным характером и британской элегантностью."
    }
  ];
  
  const filteredCars = activeCategory === 'all' 
    ? cars 
    : cars.filter(car => car.category === activeCategory);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-center">Наш автопарк</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            MEOWEST предлагает широкий выбор премиальных и спортивных автомобилей для любых целей. 
            От роскошных бизнес-седанов до эксклюзивных суперкаров — мы предлагаем только лучшее.
          </p>
          
          <Tabs 
            defaultValue="all" 
            value={activeCategory}
            onValueChange={(value) => setActiveCategory(value as CarCategory)}
            className="w-full"
          >
            <div className="flex justify-center mb-10">
              <TabsList className="bg-zinc-900">
                <TabsTrigger value="all" className="text-lg px-6">Все автомобили</TabsTrigger>
                <TabsTrigger value="porsche" className="text-lg px-6">Porsche</TabsTrigger>
                <TabsTrigger value="luxury" className="text-lg px-6">Люкс авто</TabsTrigger>
                <TabsTrigger value="business" className="text-lg px-6">Бизнес авто</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                  <Card key={car.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={car.image} 
                        alt={car.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{car.name}</CardTitle>
                      <CardDescription className="text-zinc-400">
                        {car.category === 'porsche' ? 'Porsche' : 
                         car.category === 'luxury' ? 'Люкс автомобиль' : 
                         'Бизнес автомобиль'}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-zinc-400 mb-4">{car.description}</p>
                      <p className="text-xl font-bold">{car.price.toLocaleString()} ₽/день</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Забронировать</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cars;
