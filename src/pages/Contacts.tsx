
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-center">Контакты</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Связаться с нами</h2>
                <p className="text-lg mb-8 text-zinc-300">
                  У вас есть вопросы о наших автомобилях или услугах? Заполните форму, и мы свяжемся с вами в ближайшее время.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Ваше имя
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя" 
                        className="bg-zinc-900 border-zinc-800"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Телефон
                      </label>
                      <Input 
                        id="phone" 
                        placeholder="+7 (___) ___-__-__" 
                        className="bg-zinc-900 border-zinc-800"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="example@mail.ru" 
                      className="bg-zinc-900 border-zinc-800"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Ваше сообщение" 
                      className="bg-zinc-900 border-zinc-800 min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full">Отправить</Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-white mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Телефон</h3>
                      <p className="text-zinc-300">+7 (495) 123-45-67</p>
                      <p className="text-zinc-300">+7 (800) 123-45-67 (бесплатно по России)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-white mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-zinc-300">info@meowest.ru</p>
                      <p className="text-zinc-300">support@meowest.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-white mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Адрес</h3>
                      <p className="text-zinc-300">г. Москва, ул. Тверская, д. 1</p>
                      <p className="text-zinc-300">БЦ "Премиум", 3 этаж</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-white mt-1" />
                    <div>
                      <h3 className="text-lg font-medium">Время работы</h3>
                      <p className="text-zinc-300">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-zinc-300">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-4">Мы в социальных сетях</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] w-full bg-zinc-800 rounded-lg overflow-hidden">
              {/* Здесь будет карта Google Maps или Яндекс.Карты */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-zinc-400">Карта с расположением офиса</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contacts;
