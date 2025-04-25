
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User, Car, Calendar, CreditCard, LogOut, Settings, Bell } from "lucide-react";

interface Reservation {
  id: number;
  carName: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'active' | 'completed' | 'cancelled';
  image: string;
}

const mockReservations: Reservation[] = [
  {
    id: 1,
    carName: "Porsche 911 Carrera",
    startDate: "2023-10-15",
    endDate: "2023-10-18",
    totalPrice: 60000,
    status: 'active',
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    carName: "Mercedes-Benz S-Class",
    startDate: "2023-09-10",
    endDate: "2023-09-12",
    totalPrice: 30000,
    status: 'completed',
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    carName: "BMW 7 Series",
    startDate: "2023-11-05",
    endDate: "2023-11-07",
    totalPrice: 29000,
    status: 'active',
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Имитация данных пользователя
const mockUserData = {
  firstName: "Александр",
  lastName: "Иванов",
  email: "alex@example.com",
  phone: "+7 (123) 456-78-90",
  drivingLicense: "7777 123456",
  address: "г. Москва, ул. Ленина, д. 10, кв. 15"
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState('reservations');
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };
  
  const getStatusBadgeClass = (status: Reservation['status']) => {
    switch(status) {
      case 'active':
        return 'bg-green-500/20 text-green-500';
      case 'completed':
        return 'bg-blue-500/20 text-blue-500';
      case 'cancelled':
        return 'bg-red-500/20 text-red-500';
      default:
        return 'bg-gray-500/20 text-gray-500';
    }
  };
  
  const getStatusText = (status: Reservation['status']) => {
    switch(status) {
      case 'active':
        return 'Активно';
      case 'completed':
        return 'Завершено';
      case 'cancelled':
        return 'Отменено';
      default:
        return 'Неизвестно';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Личный кабинет</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Боковое меню */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900 rounded-lg p-6 sticky top-24">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
                    <User className="w-12 h-12" />
                  </div>
                  <h2 className="text-xl font-bold">{mockUserData.firstName} {mockUserData.lastName}</h2>
                  <p className="text-zinc-400">{mockUserData.email}</p>
                </div>
                
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('reservations')}
                    className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors ${
                      activeTab === 'reservations' ? 'bg-white text-black' : 'hover:bg-zinc-800'
                    }`}
                  >
                    <Car className="w-5 h-5" />
                    Мои бронирования
                  </button>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors ${
                      activeTab === 'profile' ? 'bg-white text-black' : 'hover:bg-zinc-800'
                    }`}
                  >
                    <User className="w-5 h-5" />
                    Личные данные
                  </button>
                  <button
                    onClick={() => setActiveTab('payment')}
                    className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors ${
                      activeTab === 'payment' ? 'bg-white text-black' : 'hover:bg-zinc-800'
                    }`}
                  >
                    <CreditCard className="w-5 h-5" />
                    Способы оплаты
                  </button>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors ${
                      activeTab === 'notifications' ? 'bg-white text-black' : 'hover:bg-zinc-800'
                    }`}
                  >
                    <Bell className="w-5 h-5" />
                    Уведомления
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 p-3 rounded-md transition-colors ${
                      activeTab === 'settings' ? 'bg-white text-black' : 'hover:bg-zinc-800'
                    }`}
                  >
                    <Settings className="w-5 h-5" />
                    Настройки
                  </button>
                  <button
                    className="w-full flex items-center gap-3 p-3 rounded-md text-red-500 hover:bg-red-500/10 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    Выйти
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Основной контент */}
            <div className="lg:col-span-3">
              {activeTab === 'reservations' && (
                <div>
                  <Card className="bg-zinc-900 border-zinc-800 mb-6">
                    <CardHeader>
                      <CardTitle>Мои бронирования</CardTitle>
                      <CardDescription>История и активные бронирования автомобилей</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {mockReservations.length > 0 ? (
                        <div className="space-y-6">
                          {mockReservations.map((reservation) => (
                            <div key={reservation.id} className="flex flex-col md:flex-row gap-4 p-4 bg-zinc-800 rounded-lg">
                              <div className="w-full md:w-40 h-32 rounded-md overflow-hidden">
                                <img 
                                  src={reservation.image} 
                                  alt={reservation.carName} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <h3 className="text-xl font-bold">{reservation.carName}</h3>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(reservation.status)}`}>
                                    {getStatusText(reservation.status)}
                                  </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <p className="text-zinc-400 text-sm">Период аренды:</p>
                                    <p className="font-medium">{formatDate(reservation.startDate)} — {formatDate(reservation.endDate)}</p>
                                  </div>
                                  <div>
                                    <p className="text-zinc-400 text-sm">Стоимость:</p>
                                    <p className="font-medium">{reservation.totalPrice.toLocaleString()} ₽</p>
                                  </div>
                                </div>
                                {reservation.status === 'active' && (
                                  <div className="flex gap-2">
                                    <Button variant="outline" size="sm">Изменить даты</Button>
                                    <Button variant="outline" size="sm" className="text-red-500 border-red-500 hover:bg-red-500/10">
                                      Отменить
                                    </Button>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <Calendar className="w-16 h-16 mx-auto mb-4 text-zinc-600" />
                          <h3 className="text-xl font-bold mb-2">У вас пока нет бронирований</h3>
                          <p className="text-zinc-400 mb-4">Выберите автомобиль из нашего каталога для бронирования</p>
                          <Button>Перейти к автопарку</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {activeTab === 'profile' && (
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle>Личные данные</CardTitle>
                    <CardDescription>Управление личной информацией</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">Имя</Label>
                          <Input 
                            id="firstName" 
                            defaultValue={mockUserData.firstName}
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Фамилия</Label>
                          <Input 
                            id="lastName" 
                            defaultValue={mockUserData.lastName}
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            defaultValue={mockUserData.email}
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input 
                            id="phone" 
                            defaultValue={mockUserData.phone}
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="drivingLicense">Водительское удостоверение</Label>
                          <Input 
                            id="drivingLicense" 
                            defaultValue={mockUserData.drivingLicense}
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Адрес</Label>
                          <Input 
                            id="address" 
                            defaultValue={mockUserData.address}
                            className="bg-zinc-800 border-zinc-700"
                          />
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button>Сохранить изменения</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === 'payment' && (
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle>Способы оплаты</CardTitle>
                    <CardDescription>Управление платежными данными</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <CreditCard className="w-16 h-16 mx-auto mb-4 text-zinc-600" />
                      <h3 className="text-xl font-bold mb-2">У вас пока нет сохраненных способов оплаты</h3>
                      <p className="text-zinc-400 mb-4">Добавьте карту для удобной оплаты бронирований</p>
                      <Button>Добавить карту</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === 'notifications' && (
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle>Уведомления</CardTitle>
                    <CardDescription>Управление настройками уведомлений</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 mb-4">Пока нет новых уведомлений</p>
                  </CardContent>
                </Card>
              )}
              
              {activeTab === 'settings' && (
                <Card className="bg-zinc-900 border-zinc-800">
                  <CardHeader>
                    <CardTitle>Настройки</CardTitle>
                    <CardDescription>Управление настройками аккаунта</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400 mb-4">Настройки аккаунта находятся в разработке</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
