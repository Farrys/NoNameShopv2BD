import { Product, FAQ, Category } from '../types';

// Categories with images
export const categories: Array<Category & { image: string }> = [
  {
    id: 'clothing',
    name: 'Одежда',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg'
  },
  {
    id: 'electronics',
    name: 'Электроника',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg'
  },
  {
    id: 'footwear',
    name: 'Обувь',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
  },
  {
    id: 'cosmetics',
    name: 'Косметика',
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg'
  },
  {
    id: 'accessories',
    name: 'Аксессуары',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg'
  },
  {
    id: 'furniture',
    name: 'Мебель',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg'
  },
  {
    id: 'books',
    name: 'Книги',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg'
  }
];

// Sample products data
export const products: Product[] = [
  // Clothing
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    description: 'Comfortable and stylish cotton t-shirt made from 100% organic cotton. Perfect for casual wear with a modern fit that flatters all body types.',
    price: 29.99,
    discountPrice: 24.99,
    category: 'clothing',
    images: [
      'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg',
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'
    ],
    brand: 'UrbanStyle',
    rating: 4.5,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'John Doe',
        rating: 5,
        comment: 'Great quality t-shirt, very comfortable!',
        createdAt: '2025-01-15T10:30:00Z'
      },
      {
        id: '2',
        userId: '2',
        userName: 'Jane Smith',
        rating: 4,
        comment: 'Nice fit and good material.',
        createdAt: '2025-01-10T14:20:00Z'
      }
    ],
    stock: 50,
    colors: ['Black', 'White', 'Blue', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    tags: ['casual', 'cotton', 'organic'],
    featured: true,
    bestseller: true,
    newArrival: false
  },
  {
    id: '2',
    name: 'Classic Denim Jeans',
    description: 'Timeless denim jeans with a perfect fit. Made from premium denim fabric with stretch for comfort and durability.',
    price: 79.99,
    discountPrice: 59.99,
    category: 'clothing',
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg'
    ],
    brand: 'DenimCo',
    rating: 4.3,
    reviews: [
      {
        id: '3',
        userId: '3',
        userName: 'Mike Johnson',
        rating: 4,
        comment: 'Good quality jeans, fits well.',
        createdAt: '2025-01-12T09:15:00Z'
      }
    ],
    stock: 30,
    colors: ['Blue', 'Black', 'Light Blue'],
    sizes: ['28', '30', '32', '34', '36'],
    tags: ['denim', 'classic', 'stretch'],
    featured: false,
    bestseller: true,
    newArrival: false
  },

  // Electronics
  {
    id: '3',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
    price: 199.99,
    category: 'electronics',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg'
    ],
    brand: 'SoundMaster',
    rating: 4.8,
    reviews: [
      {
        id: '4',
        userId: '4',
        userName: 'Sarah Wilson',
        rating: 5,
        comment: 'Amazing sound quality and battery life!',
        createdAt: '2025-01-08T16:45:00Z'
      },
      {
        id: '5',
        userId: '5',
        userName: 'David Brown',
        rating: 5,
        comment: 'Best headphones I\'ve ever owned.',
        createdAt: '2025-01-05T11:30:00Z'
      }
    ],
    stock: 15,
    colors: ['Black', 'White', 'Silver'],
    tags: ['wireless', 'bluetooth', 'noise-cancelling'],
    featured: true,
    bestseller: false,
    newArrival: true
  },
  {
    id: '4',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity. Track your health and fitness goals.',
    price: 299.99,
    discountPrice: 249.99,
    category: 'electronics',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg',
      'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg'
    ],
    brand: 'FitTech',
    rating: 4.6,
    reviews: [
      {
        id: '6',
        userId: '6',
        userName: 'Emily Davis',
        rating: 5,
        comment: 'Great fitness tracker, very accurate!',
        createdAt: '2025-01-03T13:20:00Z'
      }
    ],
    stock: 25,
    colors: ['Black', 'Silver', 'Rose Gold'],
    tags: ['fitness', 'smartwatch', 'health'],
    featured: false,
    bestseller: true,
    newArrival: true
  },

  // Footwear
  {
    id: '5',
    name: 'Running Sneakers',
    description: 'Professional running shoes with advanced cushioning and breathable mesh upper. Designed for comfort and performance.',
    price: 129.99,
    discountPrice: 99.99,
    category: 'footwear',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'
    ],
    brand: 'RunFast',
    rating: 4.4,
    reviews: [
      {
        id: '7',
        userId: '7',
        userName: 'Tom Anderson',
        rating: 4,
        comment: 'Very comfortable for long runs.',
        createdAt: '2025-01-01T08:00:00Z'
      }
    ],
    stock: 40,
    colors: ['White', 'Black', 'Blue', 'Red'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    tags: ['running', 'sports', 'comfortable'],
    featured: false,
    bestseller: false,
    newArrival: true
  },

  // Cosmetics
  {
    id: '6',
    name: 'Luxury Face Cream',
    description: 'Premium anti-aging face cream with natural ingredients. Hydrates and rejuvenates your skin for a youthful glow.',
    price: 89.99,
    discountPrice: 69.99,
    category: 'cosmetics',
    images: [
      'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg',
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg'
    ],
    brand: 'BeautyLux',
    rating: 4.7,
    reviews: [
      {
        id: '8',
        userId: '8',
        userName: 'Lisa Garcia',
        rating: 5,
        comment: 'My skin feels amazing after using this!',
        createdAt: '2024-12-28T19:30:00Z'
      }
    ],
    stock: 20,
    tags: ['skincare', 'anti-aging', 'luxury'],
    featured: true,
    bestseller: false,
    newArrival: false
  },

  // Accessories
  {
    id: '7',
    name: 'Classic Leather Watch',
    description: 'Elegant leather watch with Swiss movement. Perfect accessory for both casual and formal occasions.',
    price: 149.99,
    discountPrice: 129.99,
    category: 'accessories',
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
      'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg'
    ],
    brand: 'TimeWell',
    rating: 4.7,
    reviews: [
      {
        id: '9',
        userId: '9',
        userName: 'Robert Lee',
        rating: 5,
        comment: 'Beautiful watch, excellent craftsmanship.',
        createdAt: '2024-12-25T12:00:00Z'
      }
    ],
    stock: 25,
    colors: ['Brown', 'Black'],
    tags: ['watch', 'leather', 'classic'],
    featured: false,
    bestseller: true,
    newArrival: false
  },

  // Furniture
  {
    id: '8',
    name: 'Modern Office Chair',
    description: 'Ergonomic office chair with lumbar support and adjustable height. Perfect for long working hours with maximum comfort.',
    price: 299.99,
    discountPrice: 249.99,
    category: 'furniture',
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg'
    ],
    brand: 'ComfortSeating',
    rating: 4.5,
    reviews: [
      {
        id: '10',
        userId: '10',
        userName: 'Anna Martinez',
        rating: 4,
        comment: 'Very comfortable and well-built.',
        createdAt: '2024-12-20T15:45:00Z'
      }
    ],
    stock: 12,
    colors: ['Black', 'Gray', 'White'],
    tags: ['office', 'ergonomic', 'adjustable'],
    featured: false,
    bestseller: false,
    newArrival: true
  },

  // Books
  {
    id: '9',
    name: 'Web Development Guide',
    description: 'Comprehensive guide to modern web development covering HTML, CSS, JavaScript, and popular frameworks.',
    price: 39.99,
    discountPrice: 29.99,
    category: 'books',
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
      'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg'
    ],
    brand: 'TechBooks',
    rating: 4.8,
    reviews: [
      {
        id: '11',
        userId: '11',
        userName: 'Chris Taylor',
        rating: 5,
        comment: 'Excellent resource for learning web development!',
        createdAt: '2024-12-15T10:20:00Z'
      }
    ],
    stock: 100,
    tags: ['programming', 'web-development', 'education'],
    featured: true,
    bestseller: true,
    newArrival: false
  },

  // Additional products for variety
  {
    id: '10',
    name: 'Wireless Gaming Mouse',
    description: 'High-precision wireless gaming mouse with RGB lighting and programmable buttons. Perfect for competitive gaming.',
    price: 79.99,
    discountPrice: 59.99,
    category: 'electronics',
    images: [
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
    ],
    brand: 'GameTech',
    rating: 4.6,
    reviews: [],
    stock: 35,
    colors: ['Black', 'White'],
    tags: ['gaming', 'wireless', 'rgb'],
    featured: false,
    bestseller: false,
    newArrival: true
  }
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getBestsellerProducts(): Product[] {
  return products.filter(product => product.bestseller);
}

export function getNewArrivalProducts(): Product[] {
  return products.filter(product => product.newArrival);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    (product.tags && product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );
}

export function getRelatedProducts(productId: string): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  
  // Get products from the same category, excluding the current product
  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== productId
  );
  
  // Return up to 4 related products
  return relatedProducts.slice(0, 4);
}

// FAQ Data
export const faqData: FAQ[] = [
  {
    id: '1',
    question: 'Как я могу отследить свой заказ?',
    answer: 'После размещения заказа вы получите электронное письмо с подтверждением с номером отслеживания. Вы также можете проверить статус своего заказа в разделе «Мои заказы» в своем аккаунте.',
    category: 'Заказы'
  },
  {
    id: '2',
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем все основные кредитные карты (Visa, MasterCard, American Express), PayPal и банковские переводы. Все платежи обрабатываются безопасно.',
    category: 'Оплата'
  },
  {
    id: '3',
    question: 'Сколько времени занимает доставка?',
    answer: 'Стандартная доставка занимает 3-5 рабочих дней. Экспресс-доставка доступна за дополнительную плату и занимает 1-2 рабочих дня. Бесплатная доставка предоставляется для заказов свыше $50.',
    category: 'Доставка'
  },
  {
    id: '4',
    question: 'Могу ли я вернуть товар?',
    answer: 'Да, мы предлагаем 30-дневную политику возврата для всех товаров в оригинальном состоянии. Товары должны быть неиспользованными и в оригинальной упаковке.',
    category: 'Возвраты'
  },
  {
    id: '5',
    question: 'Как я могу связаться со службой поддержки?',
    answer: 'Вы можете связаться с нашей службой поддержки по электронной почте support@nonameshop.com или по телефону (555) 123-4567. Мы работаем с понедельника по пятницу с 9:00 до 18:00.',
    category: 'Поддержка'
  },
  {
    id: '6',
    question: 'Предлагаете ли вы международную доставку?',
    answer: 'В настоящее время мы осуществляем доставку только по России. Мы работаем над расширением наших услуг доставки на другие страны.',
    category: 'Доставка'
  },
  {
    id: '7',
    question: 'Как я могу изменить или отменить свой заказ?',
    answer: 'Заказы можно изменить или отменить в течение 1 часа после размещения. После этого заказ поступает в обработку. Свяжитесь с нашей службой поддержки как можно скорее.',
    category: 'Заказы'
  },
  {
    id: '8',
    question: 'Безопасна ли моя личная информация?',
    answer: 'Да, мы используем шифрование SSL и соблюдаем все стандарты безопасности данных. Ваша личная информация никогда не передается третьим лицам без вашего согласия.',
    category: 'Безопасность'
  }
];