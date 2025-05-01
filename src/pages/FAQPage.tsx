import { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { faqData } from '../data/products';
import { FAQ } from '../types/index.ts';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  
  // Get unique categories
  const categories = [...new Set(faqData.map(faq => faq.category))];
  
  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === null || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already live, but we could add analytics or other logic here
  };
  
  return (
    <div className="py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Найдите ответы на общие вопросы о наших продуктах, заказе, доставке, возврате и многом другом.
Не можете найти то, что вы ищете?Свяжитесь с нашей командой поддержки.
          </p>
        </div>
        
        {/* Search */}
        <div className="max-w-xl mx-auto mb-10">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </form>
        </div>
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full ${
              activeCategory === null 
                ? 'bg-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-4">
              {filteredFAQs.map(faq => (
                <div 
                  key={faq.id}
                  className="border rounded-lg overflow-hidden"
                  id={faq.category.toLowerCase().replace(/\s+/g, '-')}
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {openItems[faq.id] ? (
                      <ChevronUp size={18} className="flex-shrink-0 text-gray-500" />
                    ) : (
                      <ChevronDown size={18} className="flex-shrink-0 text-gray-500" />
                    )}
                  </button>
                  
                  {openItems[faq.id] && (
                    <div className="p-4 bg-gray-50 border-t">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">No results found for "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-primary hover:underline"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Все еще есть вопросы?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Если вы не могли найти ответ, который искал, наша команда поддержки здесь, чтобы помочь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@nonameshop.com" className="btn btn-primary">
              Поддержка электронной почты
            </a>
            <a href="tel:+15551234567" className="btn btn-outline">
              Позвони нам
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}