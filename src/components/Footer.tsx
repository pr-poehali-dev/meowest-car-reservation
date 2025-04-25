
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://cdn.poehali.dev/files/982b3a5a-0e26-481e-a788-4c32d8e60291.jpg" 
                alt="Meowest Logo" 
                className="h-12 w-auto" 
              />
            </div>
            <p className="text-zinc-400 mb-6">
              Премиальный сервис аренды эксклюзивных автомобилей для особых моментов и незабываемых впечатлений.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-white hover:text-zinc-400 transition-colors">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-white hover:text-zinc-400 transition-colors">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-white hover:text-zinc-400 transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Навигация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-zinc-400 hover:text-white transition-colors">
                  Автопарк
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-zinc-400 hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-zinc-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-zinc-400 hover:text-white transition-colors">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Автомобили</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/cars/porsche" className="text-zinc-400 hover:text-white transition-colors">
                  Porsche
                </Link>
              </li>
              <li>
                <Link to="/cars/luxury" className="text-zinc-400 hover:text-white transition-colors">
                  Люкс автомобили
                </Link>
              </li>
              <li>
                <Link to="/cars/business" className="text-zinc-400 hover:text-white transition-colors">
                  Бизнес автомобили
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-zinc-400 mt-0.5" />
                <span className="text-zinc-400">Москва, ул. Автомобильная, 123</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-zinc-400" />
                <a href="tel:+74951234567" className="text-zinc-400 hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-zinc-400" />
                <a href="mailto:info@meowest.ru" className="text-zinc-400 hover:text-white transition-colors">
                  info@meowest.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-zinc-800 my-8" />
        
        <div className="text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} MEOWEST. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
