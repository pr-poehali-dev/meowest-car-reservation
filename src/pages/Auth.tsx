
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useNavigate } from 'react-router-dom';

type AuthTab = 'login' | 'register';

const Auth = () => {
  const [activeTab, setActiveTab] = useState<AuthTab>('login');
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь будет отправка данных на сервер
    // Для демонстрации просто переходим в личный кабинет
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {activeTab === 'login' ? 'Вход в личный кабинет' : 'Регистрация'}
                </CardTitle>
                <CardDescription>
                  {activeTab === 'login' 
                    ? 'Войдите в свой аккаунт для доступа к бронированиям' 
                    : 'Создайте аккаунт для бронирования автомобилей'
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs 
                  defaultValue="login" 
                  value={activeTab}
                  onValueChange={(value) => setActiveTab(value as AuthTab)}
                >
                  <TabsList className="grid w-full grid-cols-2 mb-6 bg-zinc-800">
                    <TabsTrigger value="login">Вход</TabsTrigger>
                    <TabsTrigger value="register">Регистрация</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="login">
                    <form onSubmit={handleAuth} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email-login">Email</Label>
                        <Input 
                          id="email-login" 
                          type="email" 
                          placeholder="example@mail.ru" 
                          className="bg-zinc-800 border-zinc-700"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="password-login">Пароль</Label>
                          <a href="#" className="text-sm text-zinc-400 hover:text-white">
                            Забыли пароль?
                          </a>
                        </div>
                        <Input 
                          id="password-login" 
                          type="password" 
                          className="bg-zinc-800 border-zinc-700"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">Войти</Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="register">
                    <form onSubmit={handleAuth} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Имя</Label>
                          <Input 
                            id="first-name"
                            className="bg-zinc-800 border-zinc-700"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Фамилия</Label>
                          <Input 
                            id="last-name" 
                            className="bg-zinc-800 border-zinc-700"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-register">Email</Label>
                        <Input 
                          id="email-register" 
                          type="email" 
                          placeholder="example@mail.ru" 
                          className="bg-zinc-800 border-zinc-700"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone-register">Телефон</Label>
                        <Input 
                          id="phone-register" 
                          placeholder="+7 (___) ___-__-__" 
                          className="bg-zinc-800 border-zinc-700"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password-register">Пароль</Label>
                        <Input 
                          id="password-register" 
                          type="password" 
                          className="bg-zinc-800 border-zinc-700"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password-confirm">Подтверждение пароля</Label>
                        <Input 
                          id="password-confirm" 
                          type="password" 
                          className="bg-zinc-800 border-zinc-700"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">Зарегистрироваться</Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-zinc-400">
                  {activeTab === 'login' 
                    ? 'Нет аккаунта? ' 
                    : 'Уже есть аккаунт? '
                  }
                  <button 
                    onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
                    className="text-white hover:underline"
                  >
                    {activeTab === 'login' ? 'Зарегистрироваться' : 'Войти'}
                  </button>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Auth;
