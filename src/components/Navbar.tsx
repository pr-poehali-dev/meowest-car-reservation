
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="https://cdn.poehali.dev/files/982b3a5a-0e26-481e-a788-4c32d8e60291.jpg" 
            alt="Meowest Logo" 
            className="h-12 w-auto" 
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">
            Главная
          </Link>
          <Link to="/cars" className="text-white hover:text-gray-300 transition-colors">
            Автопарк
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
            О нас
          </Link>
          <Link to="/contacts" className="text-white hover:text-gray-300 transition-colors">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            Забронировать
          </Button>
          <Link to="/profile">
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-zinc-800">
          <nav className="container mx-auto py-6 px-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-white py-2 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/cars" 
              className="text-white py-2 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Автопарк
            </Link>
            <Link 
              to="/about" 
              className="text-white py-2 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contacts" 
              className="text-white py-2 hover:text-gray-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="flex flex-col gap-4 mt-4">
              <Button className="w-full bg-white text-black hover:bg-zinc-300">
                Забронировать
              </Button>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-white text-white">
                  Личный кабинет
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
