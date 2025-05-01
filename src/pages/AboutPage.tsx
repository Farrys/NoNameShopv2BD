import { Users, Star, Award, Package, CreditCard, ShoppingBag, Shield, Headphones } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NoName Shop</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
           Ваше доверенное место для качественных продуктов и исключительного опыта покупок.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Наша история</h2>
              <p className="text-gray-600 mb-4">
              NoName Shop начался в 2025 году с простой миссии: создать онлайн -платформу для покупок, которая объединяет
Качественные продукты, конкурентные цены и исключительное обслуживание клиентов.
              </p>
              <p className="text-gray-600 mb-4">
                То, что началось как небольшое предприятие, быстро превратилось в исчерпывающее место для электронной коммерции
Предлагая тысячи продуктов по нескольким категориям.Мы построили прочные отношения
с производителями и брендами по всему миру, чтобы принести вам лучший выбор.
              </p>
              <p className="text-gray-600">
                Сегодня мы гордимся тем, что обслуживаем клиентов по всей стране с растущим сообществом
Довольны покупателям, которые возвращаются к нам снова и снова за свои покупки.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg" 
                alt="NoName Shop Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality First</h3>
              <p className="text-gray-600">
                Мы тщательно выбираем каждый продукт в нашем каталоге, гарантируя, что он соответствует нашим высоким стандартам для качества и производительности.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Фокус клиента</h3>
              <p className="text-gray-600">
               Все, что мы делаем, сосредоточено на предоставлении исключительного опыта покупок для наших клиентов.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
               Мы работаем с честностью и прозрачностью во всех наших деловых практиках, укрепляя доверие с нашими клиентами и партнерами.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Почему выбирают NoName Shop</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Package size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Быстрая и надежная доставка к вашему порогу с отслеживанием в реальном времени.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CreditCard size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Безопасные платежи</h3>
              <p className="text-gray-600">
               Несколько вариантов безопасного платежа с стандартом отрасли.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Выбор качества</h3>
              <p className="text-gray-600">
                Кураторские продукты от доверенных брендов и производителей.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Легкий возврат</h3>
              <p className="text-gray-600">
                Беспроблемная 30-дневная политика возврата для вашего душевного спокойствия.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Познакомьтесь с нашим руководством</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg" 
                alt="CEO Portrait" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Farrys</h3>
                <p className="text-primary mb-3">Основатель и генеральный директор</p>
                <p className="text-gray-600">
                 С более чем более чем 6 -летним опытом работы в розничной торговле Farrys основал NoName Shop с видением революции в онлайн -магазинах.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg" 
                alt="CTO Portrait" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Марго</h3>
                <p className="text-primary mb-3">CTO</p>
                <p className="text-gray-600">
                  Марго возглавляет нашу техническую команду, обеспечивая беспрепятственный опыт покупок на всех платформах.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg" 
                alt="COO Portrait" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Александра</h3>
                <p className="text-primary mb-3">COO</p>
                <p className="text-gray-600">
                  Александра курирует нашу деятельность, от управления цепочками поставок до превосходства обслуживания клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <Headphones size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Мы здесь, чтобы помочь</h2>
            <p className="text-lg mb-8">
              У вас есть вопросы о наших продуктах или вам нужны помощь в вашем заказе?
            Наша команда поддержки клиентов здесь, чтобы помочь вам на каждом этапе пути.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:support@nonameshop.com" className="btn bg-white text-primary hover:bg-gray-100">
                Напишите нам
              </a>
              <a href="tel:+15551234567" className="btn bg-transparent border-white hover:bg-white/10">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}