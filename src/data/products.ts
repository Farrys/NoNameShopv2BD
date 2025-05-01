import { Product, Category, FAQ } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Sample product data
export const products: Product[] = [
  // Clothing
  {
    id: uuidv4(),
    name: "Футболка хлопка премиум-класса",
    description: "Эта футболка, созданная из 100% органического хлопка, предлагает исключительный комфорт и долговечность.Дышащая ткань гарантирует, что вы останетесь прохладными весь день.",
    price: 29.99,
    discountPrice: 24.99,
    category: "clothing",
    images: [
      "https://images.pexels.com/photos/9594655/pexels-photo-9594655.jpeg",
      "https://images.pexels.com/photos/9594651/pexels-photo-9594651.jpeg"
    ],
    brand: "UrbanStyle",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user1",
        userName: "Алексей",
        rating: 5,
        comment: "Лучшая футболка на свете!Очень удобно и хорошо.",
        createdAt: "2023-05-15T08:12:00Z"
      },
      {
        id: uuidv4(),
        userId: "user2",
        userName: "Саша",
        rating: 4,
        comment: "Отличное качество, но работает немного маленьким.",
        createdAt: "2023-06-22T14:30:00Z"
      }
    ],
    stock: 150,
    colors: ["Черный", "Белый", "Комуфляжный", "Серый"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["футболка", "хлопок", "базовая одежда"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Слим подходит для джинсов",
    description: "Эти джинсы премиум -класса сочетаются в стиле комфорта с комфортом.Сделано из высококачественной джинсовой ткани с оттенком растяжения для простоты движения, они имеют современную тонкую пореза, которая льстит вашему силуэту, не ограничивая подвижность.",
    price: 79.99,
    category: "clothing",
    images: [
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg",
      "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg"
    ],
    brand: "DenimCo",
    rating: 4.5,
    reviews: [
      {
        id: uuidv4(),
        userId: "user3",
        userName: "Дмитрий",
        rating: 5,
        comment: "Идеально подходит и очень удобно!",
        createdAt: "2023-04-10T09:45:00Z"
      }
    ],
    stock: 85,
    colors: ["Синий", "Черный", "Серый"],
    sizes: ["28", "30", "32", "34", "36"],
    tags: ["джинсы", "джинсовая", "стройная посадка"]
  },
  {
    id: uuidv4(),
    name: "Классическая оксфордская рубашка",
    description: "Эта оксфордская рубашка, необходимая для гардероба, сочетает в себе вечный стиль с повседневным комфортом.Изготовленная из хлопчатобумажной ткани премиум-класса, имеет ошейник на пуговицах, бочковые манжеты и грудный карман для классического универсального вида.",
    price: 59.99,
    discountPrice: 49.99,
    category: "clothing",
    images: [
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
      "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg"
    ],
    brand: "ClassicWear",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user4",
        userName: "Taylor Wong",
        rating: 5,
        comment: "Excellent quality and fits perfectly!",
        createdAt: "2023-03-28T11:20:00Z"
      }
    ],
    stock: 60,
    colors: ["White", "Blue", "Pink", "Lavender"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["shirt", "oxford", "formal", "business casual"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Wool Blend Blazer",
    description: "This sophisticated wool blend blazer brings versatile elegance to your wardrobe. Featuring a modern cut, notched lapels, and quality lining, it transitions effortlessly from office to evening occasions.",
    price: 149.99,
    category: "clothing",
    images: [
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg"
    ],
    brand: "UrbanStyle",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user5",
        userName: "Jordan Lee",
        rating: 5,
        comment: "Excellent quality and perfect fit. Very impressed!",
        createdAt: "2023-02-15T16:40:00Z"
      }
    ],
    stock: 40,
    colors: ["Black", "Navy", "Charcoal"],
    sizes: ["36", "38", "40", "42", "44"],
    tags: ["blazer", "formal", "wool", "business"]
  },
  {
    id: uuidv4(),
    name: "Hooded Sweatshirt",
    description: "Stay warm and stylish with this comfortable hooded sweatshirt. Made from a soft cotton blend with a brushed interior for extra warmth, it features a front kangaroo pocket, adjustable drawstring hood, and ribbed cuffs and hem.",
    price: 54.99,
    discountPrice: 44.99,
    category: "clothing",
    images: [
      "https://images.pexels.com/photos/4210672/pexels-photo-4210672.jpeg",
      "https://images.pexels.com/photos/6311475/pexels-photo-6311475.jpeg"
    ],
    brand: "StreetStyle",
    rating: 4.4,
    reviews: [
      {
        id: uuidv4(),
        userId: "user6",
        userName: "Casey Brown",
        rating: 4,
        comment: "Very cozy and good quality, but sizing runs a bit large.",
        createdAt: "2023-01-30T13:15:00Z"
      }
    ],
    stock: 120,
    colors: ["Grey", "Black", "Navy", "Burgundy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["hoodie", "sweatshirt", "casual", "streetwear"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "Knit Sweater",
    description: "This luxurious knit sweater combines comfort with elegant style. Crafted from a soft cotton-wool blend, it features a classic crew neck, ribbed cuffs and hem, and a relaxed fit that's perfect for layering in colder weather.",
    price: 89.99,
    category: "clothing",
    images: [
      "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg",
      "https://images.pexels.com/photos/8485834/pexels-photo-8485834.jpeg"
    ],
    brand: "ClassicWear",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user7",
        userName: "Morgan Kelly",
        rating: 5,
        comment: "Incredibly soft and well-made. Worth every penny!",
        createdAt: "2023-01-05T10:22:00Z"
      }
    ],
    stock: 75,
    colors: ["Cream", "Navy", "Burgundy", "Forest Green"],
    sizes: ["S", "M", "L", "XL"],
    tags: ["sweater", "knitwear", "winter", "layering"]
  },
  {
    id: uuidv4(),
    name: "Summer Dress",
    description: "This lightweight summer dress combines style with comfort for warm weather days. Made from breathable cotton with a hint of stretch, it features a flattering A-line silhouette, adjustable straps, and convenient side pockets.",
    price: 69.99,
    category: "clothing",
    images: [
      "https://images.pexels.com/photos/7691467/pexels-photo-7691467.jpeg",
      "https://images.pexels.com/photos/7691416/pexels-photo-7691416.jpeg"
    ],
    brand: "SummerChic",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user8",
        userName: "Riley Martinez",
        rating: 5,
        comment: "Love this dress! It's comfortable, flattering, and has pockets!",
        createdAt: "2023-06-30T09:14:00Z"
      }
    ],
    stock: 60,
    colors: ["Blue Floral", "Yellow", "White", "Black"],
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: ["dress", "summer", "casual", "floral"]
  },
  
  // Electronics
  {
    id: uuidv4(),
    name: "Wireless Noise-Cancelling Headphones",
    description: "Experience premium audio with these wireless noise-cancelling headphones. Featuring advanced acoustic technology, they deliver crystal-clear sound while effectively blocking external noise. The memory foam ear cushions and adjustable headband ensure comfortable all-day wear, while the 30-hour battery life keeps your music playing through long commutes and flights.",
    price: 249.99,
    discountPrice: 199.99,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
      "https://images.pexels.com/photos/3394664/pexels-photo-3394664.jpeg"
    ],
    brand: "SoundMaster",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user9",
        userName: "Alex Chen",
        rating: 5,
        comment: "These headphones are incredible! The noise cancellation is best-in-class.",
        createdAt: "2023-04-18T15:33:00Z"
      },
      {
        id: uuidv4(),
        userId: "user10",
        userName: "Jordan Taylor",
        rating: 4,
        comment: "Great sound quality and comfortable for long periods. Battery life is as advertised.",
        createdAt: "2023-05-02T11:27:00Z"
      }
    ],
    stock: 45,
    colors: ["Black", "Silver", "Blue"],
    tags: ["headphones", "wireless", "noise-cancelling", "audio"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Ultra HD Smart TV 55\"",
    description: "Transform your home entertainment with this stunning 55-inch Ultra HD Smart TV. Featuring 4K resolution, HDR support, and local dimming zones, it delivers breathtaking picture quality with deep blacks and vibrant colors. The built-in smart platform gives you access to all your favorite streaming apps, while the voice control functionality makes finding content effortless.",
    price: 799.99,
    discountPrice: 699.99,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg",
      "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg"
    ],
    brand: "VisionTech",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user11",
        userName: "Morgan Lewis",
        rating: 5,
        comment: "Incredible picture quality and very intuitive smart features!",
        createdAt: "2023-03-30T14:22:00Z"
      }
    ],
    stock: 25,
    tags: ["tv", "4k", "smart tv", "entertainment"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Professional Digital Camera",
    description: "Capture life's moments with exceptional clarity using this professional digital camera. The 24.2MP full-frame sensor delivers stunning image quality even in challenging lighting conditions, while the advanced autofocus system ensures your subjects are always sharp. With 4K video capabilities, 10fps continuous shooting, and weather-sealed construction, it's perfect for both professional photographers and serious enthusiasts.",
    price: 1299.99,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg",
      "https://images.pexels.com/photos/225157/pexels-photo-225157.jpeg"
    ],
    brand: "PhotoPro",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user12",
        userName: "Jamie Rivera",
        rating: 5,
        comment: "Incredible camera! The image quality is outstanding and the ergonomics are perfect.",
        createdAt: "2023-02-14T09:18:00Z"
      }
    ],
    stock: 20,
    colors: ["Black"],
    tags: ["camera", "photography", "professional", "4k video"]
  },
  {
    id: uuidv4(),
    name: "Smart Fitness Watch",
    description: "Take control of your health and fitness with this advanced smart fitness watch. Track your steps, heart rate, sleep quality, and more with precision sensors, while GPS functionality monitors your running and cycling routes. The vibrant touch display shows notifications from your smartphone, and the 7-day battery life means less charging and more activity.",
    price: 179.99,
    discountPrice: 149.99,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
    ],
    brand: "FitTech",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user13",
        userName: "Taylor Johnson",
        rating: 5,
        comment: "Love this watch! The fitness tracking is accurate and the app is easy to use.",
        createdAt: "2023-05-25T16:40:00Z"
      }
    ],
    stock: 65,
    colors: ["Black", "Silver", "Rose Gold"],
    tags: ["smartwatch", "fitness", "health", "wearable"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "Wireless Bluetooth Speaker",
    description: "Bring your music to life with this powerful wireless Bluetooth speaker. Dual drivers and passive bass radiators deliver rich, room-filling sound, while the waterproof design makes it perfect for outdoor adventures. With a 20-hour battery life and built-in microphone for calls, it's the ultimate portable audio companion.",
    price: 129.99,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/14527034/pexels-photo-14527034.jpeg",
      "https://images.pexels.com/photos/2651794/pexels-photo-2651794.jpeg"
    ],
    brand: "SoundMaster",
    rating: 4.5,
    reviews: [
      {
        id: uuidv4(),
        userId: "user14",
        userName: "Casey Wilson",
        rating: 4,
        comment: "Great sound quality for the size and the battery lasts forever!",
        createdAt: "2023-04-05T13:27:00Z"
      }
    ],
    stock: 80,
    colors: ["Black", "Blue", "Red"],
    tags: ["speaker", "bluetooth", "wireless", "portable"]
  },
  {
    id: uuidv4(),
    name: "Gaming Laptop",
    description: "Dominate your games with this high-performance gaming laptop. Powered by the latest processor and dedicated graphics card, it handles even the most demanding titles with ease. The 15.6\" high-refresh-rate display delivers smooth, responsive gameplay, while the customizable RGB keyboard adds a touch of personal style. Advanced cooling technology keeps performance optimal during intense gaming sessions.",
    price: 1499.99,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/7974/pexels-photo.jpg",
      "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg"
    ],
    brand: "TechPower",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user15",
        userName: "Riley Cooper",
        rating: 5,
        comment: "This laptop is a beast! Runs all my games at max settings without breaking a sweat.",
        createdAt: "2023-03-14T17:55:00Z"
      }
    ],
    stock: 30,
    tags: ["laptop", "gaming", "computer", "high-performance"]
  },
  {
    id: uuidv4(),
    name: "Wireless Earbuds",
    description: "Experience true wireless freedom with these premium earbuds. The advanced Bluetooth technology ensures a stable connection, while the custom-designed drivers deliver exceptional sound quality with deep bass and clear highs. Touch controls let you manage music and calls effortlessly, and the compact charging case provides up to 24 hours of total battery life.",
    price: 129.99,
    discountPrice: 99.99,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
      "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg"
    ],
    brand: "SoundMaster",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user16",
        userName: "Jordan Martin",
        rating: 5,
        comment: "These earbuds are fantastic! Great sound, comfortable fit, and the battery life is impressive.",
        createdAt: "2023-06-10T10:42:00Z"
      }
    ],
    stock: 55,
    colors: ["Black", "White"],
    tags: ["earbuds", "wireless", "bluetooth", "audio"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Smart Home Hub",
    description: "Centralize your smart home control with this intuitive smart home hub. Connect and manage all your compatible devices—from lights and thermostats to security cameras and door locks—through one simple interface. Voice control capability lets you adjust your home environment hands-free, while customizable routines automate multiple actions with a single command.",
    price: 149.99,
    category: "electronics",
    images: [
      "https://images.pexels.com/photos/4500738/pexels-photo-4500738.jpeg",
      "https://images.pexels.com/photos/10290537/pexels-photo-10290537.jpeg"
    ],
    brand: "SmartLife",
    rating: 4.5,
    reviews: [
      {
        id: uuidv4(),
        userId: "user17",
        userName: "Morgan Brown",
        rating: 4,
        comment: "Great hub that integrates well with most of my smart devices. The app is intuitive and reliable.",
        createdAt: "2023-02-28T14:15:00Z"
      }
    ],
    stock: 40,
    colors: ["White", "Black"],
    tags: ["smart home", "automation", "voice control", "hub"]
  },
  
  // Footwear
  {
    id: uuidv4(),
    name: "Classic Leather Sneakers",
    description: "Elevate your casual style with these timeless leather sneakers. Crafted from premium full-grain leather, they combine sophisticated looks with all-day comfort. The cushioned insole and flexible rubber outsole provide excellent support, while the minimalist design ensures they pair effortlessly with virtually any outfit.",
    price: 89.99,
    category: "footwear",
    images: [
      "https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg",
      "https://images.pexels.com/photos/1892629/pexels-photo-1892629.jpeg"
    ],
    brand: "UrbanWalk",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user18",
        userName: "Alex Moore",
        rating: 5,
        comment: "These sneakers are perfect! Comfortable right out of the box and they look great with everything.",
        createdAt: "2023-04-22T11:18:00Z"
      }
    ],
    stock: 60,
    colors: ["White", "Black", "Brown", "Navy"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    tags: ["sneakers", "leather", "casual", "everyday"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Performance Running Shoes",
    description: "Take your runs to the next level with these high-performance running shoes. The responsive cushioning technology provides excellent energy return, while the engineered mesh upper delivers breathable support where you need it most. The durable rubber outsole offers superior traction on various surfaces, and reflective details enhance visibility during low-light runs.",
    price: 129.99,
    discountPrice: 109.99,
    category: "footwear",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg"
    ],
    brand: "SpeedRunner",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user19",
        userName: "Jamie Lee",
        rating: 5,
        comment: "Best running shoes I've ever owned! Great cushioning and support for long distances.",
        createdAt: "2023-03-15T16:42:00Z"
      }
    ],
    stock: 45,
    colors: ["Black/Red", "Blue/Yellow", "Grey/Pink", "White/Green"],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    tags: ["running", "athletic", "performance", "sports"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Waterproof Hiking Boots",
    description: "Conquer any trail with these rugged waterproof hiking boots. The full-grain leather and synthetic upper provides durability and protection, while the waterproof membrane keeps your feet dry through streams and rain. The aggressive lugged outsole delivers excellent traction on varied terrain, and the cushioned midsole ensures comfort during long days on the trail.",
    price: 149.99,
    category: "footwear",
    images: [
      "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      "https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg"
    ],
    brand: "TrailMaster",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user20",
        userName: "Taylor Smith",
        rating: 5,
        comment: "These boots are incredible! Tackled a 15-mile hike in rainy conditions and my feet stayed completely dry.",
        createdAt: "2023-05-10T09:27:00Z"
      }
    ],
    stock: 35,
    colors: ["Brown", "Grey", "Black"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    tags: ["hiking", "waterproof", "boots", "outdoors"]
  },
  {
    id: uuidv4(),
    name: "Casual Canvas Slip-Ons",
    description: "Add effortless style to your casual wardrobe with these comfortable canvas slip-on shoes. The lightweight construction and flexible outsole make them perfect for everyday wear, while the cushioned insole keeps your feet comfortable all day long. The classic design pairs easily with jeans, shorts, or casual trousers for a relaxed, put-together look.",
    price: 49.99,
    discountPrice: 39.99,
    category: "footwear",
    images: [
      "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg",
      "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg"
    ],
    brand: "EasyStep",
    rating: 4.5,
    reviews: [
      {
        id: uuidv4(),
        userId: "user21",
        userName: "Riley Johnson",
        rating: 4,
        comment: "Super comfortable and convenient. Great casual shoes for everyday wear.",
        createdAt: "2023-06-05T13:19:00Z"
      }
    ],
    stock: 80,
    colors: ["Navy", "Black", "Grey", "Red", "White"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    tags: ["slip-on", "canvas", "casual", "everyday"]
  },
  {
    id: uuidv4(),
    name: "Classic Leather Dress Shoes",
    description: "Make a sophisticated statement with these timeless leather dress shoes. Crafted from premium calfskin with traditional construction methods, they offer exceptional quality and durability. The leather sole provides a refined finish, while the cushioned footbed ensures comfort during long days or special events. A versatile addition to any formal wardrobe.",
    price: 179.99,
    category: "footwear",
    images: [
      "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg",
      "https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg"
    ],
    brand: "ClassicStep",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user22",
        userName: "Jordan Clark",
        rating: 5,
        comment: "Exceptional quality and craftsmanship. These shoes are comfortable right out of the box and look impeccable.",
        createdAt: "2023-04-18T15:33:00Z"
      }
    ],
    stock: 30,
    colors: ["Black", "Brown", "Burgundy"],
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    tags: ["dress shoes", "formal", "leather", "business"]
  },
  {
    id: uuidv4(),
    name: "Lightweight Training Shoes",
    description: "Maximize your workout performance with these versatile training shoes. The lightweight, breathable upper keeps your feet cool during intense sessions, while the stable midsole provides excellent support for lifting and lateral movements. The durable rubber outsole delivers reliable traction for various exercise surfaces, making them perfect for everything from HIIT workouts to strength training.",
    price: 99.99,
    category: "footwear",
    images: [
      "https://images.pexels.com/photos/2421375/pexels-photo-2421375.jpeg",
      "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg"
    ],
    brand: "FitStep",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user23",
        userName: "Casey Taylor",
        rating: 5,
        comment: "Great training shoes! Lightweight but supportive enough for various workouts.",
        createdAt: "2023-02-22T10:15:00Z"
      }
    ],
    stock: 55,
    colors: ["Black/Grey", "Blue/Orange", "White/Pink"],
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11"],
    tags: ["training", "gym", "workout", "athletic"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "Suede Chelsea Boots",
    description: "Blend timeless style with modern comfort in these suede Chelsea boots. The sleek silhouette features elastic side panels for easy on-off, while the cushioned footbed ensures all-day comfort. The durable rubber sole provides reliable traction, and the versatile design pairs perfectly with both casual and smart-casual outfits for year-round wear.",
    price: 139.99,
    discountPrice: 119.99,
    category: "footwear",
    images: [
      "https://images.pexels.com/photos/14718319/pexels-photo-14718319.jpeg",
      "https://images.pexels.com/photos/2146789/pexels-photo-2146789.jpeg"
    ],
    brand: "UrbanWalk",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user24",
        userName: "Morgan Ross",
        rating: 5,
        comment: "These boots are absolute perfection! They look amazing and feel even better.",
        createdAt: "2023-03-30T14:22:00Z"
      }
    ],
    stock: 40,
    colors: ["Tan", "Black", "Grey", "Navy"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    tags: ["boots", "chelsea", "suede", "casual"]
  },
  {
    id: uuidv4(),
    name: "Waterproof Sandals",
    description: "Enjoy outdoor adventures with these versatile waterproof sandals. The quick-drying synthetic upper and adjustable straps provide a secure, customizable fit, while the cushioned EVA footbed delivers exceptional comfort for all-day wear. The rugged outsole offers excellent traction on wet and dry surfaces, making them perfect for hiking, beach outings, or water activities.",
    price: 69.99,
    category: "footwear",
    images: [
      "https://images.pexels.com/photos/2562992/pexels-photo-2562992.png",
      "https://images.pexels.com/photos/1123250/pexels-photo-1123250.jpeg"
    ],
    brand: "TrailMaster",
    rating: 4.5,
    reviews: [
      {
        id: uuidv4(),
        userId: "user25",
        userName: "Alex Williams",
        rating: 4,
        comment: "Great sandals for hiking and water activities! Comfortable and dry quickly.",
        createdAt: "2023-06-18T11:45:00Z"
      }
    ],
    stock: 60,
    colors: ["Black", "Grey/Blue", "Brown/Orange"],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    tags: ["sandals", "waterproof", "hiking", "outdoor"]
  },

  // Cosmetics
  {
    id: uuidv4(),
    name: "Hydrating Face Serum",
    description: "Revitalize your skin with this powerful hydrating serum. Formulated with hyaluronic acid, vitamin C, and botanical extracts, it deeply moisturizes while brightening and evening skin tone. The lightweight, fast-absorbing formula penetrates quickly to deliver intense hydration without clogging pores, leaving your skin plump, radiant, and refreshed.",
    price: 49.99,
    category: "cosmetics",
    images: [
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg"
    ],
    brand: "PureSkin",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user26",
        userName: "Jamie Roberts",
        rating: 5,
        comment: "This serum transformed my skin! It feels so hydrated and plump after just a week of use.",
        createdAt: "2023-05-12T09:20:00Z"
      }
    ],
    stock: 65,
    tags: ["skincare", "serum", "hydrating", "face"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Long-Wear Matte Lipstick",
    description: "Achieve bold, long-lasting lip color with this premium matte lipstick. The creamy formula glides on smoothly and sets to a comfortable matte finish that stays put for up to 12 hours without feathering or drying your lips. Infused with nourishing oils and vitamin E, it keeps your lips soft and conditioned while delivering intense, fade-resistant color.",
    price: 24.99,
    category: "cosmetics",
    images: [
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
      "https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg"
    ],
    brand: "GlowUp",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user27",
        userName: "Taylor Kim",
        rating: 5,
        comment: "Best lipstick I've ever used! The color is gorgeous and it really does last all day.",
        createdAt: "2023-04-30T15:48:00Z"
      }
    ],
    stock: 80,
    colors: ["Classic Red", "Mauve Pink", "Coral Bliss", "Berry Wine", "Nude Beige"],
    tags: ["makeup", "lipstick", "matte", "long-wear"]
  },
  {
    id: uuidv4(),
    name: "Professional Makeup Brush Set",
    description: "Elevate your makeup application with this comprehensive 15-piece brush set. Crafted with soft, cruelty-free synthetic bristles and sleek wooden handles, these professional-quality brushes blend products seamlessly for a flawless finish. The set includes everything from foundation and concealer brushes to detailed eye brushes, all presented in an elegant travel case.",
    price: 59.99,
    discountPrice: 49.99,
    category: "cosmetics",
    images: [
      "https://images.pexels.com/photos/4620824/pexels-photo-4620824.jpeg",
      "https://images.pexels.com/photos/4046717/pexels-photo-4046717.jpeg"
    ],
    brand: "BeautyPro",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user28",
        userName: "Jordan Peterson",
        rating: 5,
        comment: "Amazing brush set! The quality is comparable to much more expensive brands I've tried.",
        createdAt: "2023-03-25T12:34:00Z"
      }
    ],
    stock: 40,
    tags: ["makeup", "brushes", "beauty tools", "professional"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Natural Clay Face Mask",
    description: "Detoxify and purify your skin with this natural clay face mask. Formulated with kaolin and bentonite clays, it draws out impurities and excess oil while botanical extracts calm and nourish the skin. Regular use helps minimize the appearance of pores, control shine, and improve overall skin texture for a clearer, more refined complexion.",
    price: 34.99,
    category: "cosmetics",
    images: [
      "https://images.pexels.com/photos/3762880/pexels-photo-3762880.jpeg",
      "https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg"
    ],
    brand: "PureSkin",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user29",
        userName: "Casey Garcia",
        rating: 5,
        comment: "This mask has completely changed my oily/combination skin! My pores look smaller and breakouts are much less frequent.",
        createdAt: "2023-02-14T18:55:00Z"
      }
    ],
    stock: 70,
    tags: ["skincare", "mask", "clay", "purifying"]
  },
  {
    id: uuidv4(),
    name: "Volumizing Mascara",
    description: "Achieve dramatic, voluminous lashes with this premium mascara. The innovative brush separates and coats each lash from root to tip, while the buildable formula adds exceptional volume and length without clumping or flaking. The long-wearing, smudge-proof formula stays put all day while nourishing ingredients condition your lashes.",
    price: 22.99,
    discountPrice: 19.99,
    category: "cosmetics",
    images: [
      "https://images.pexels.com/photos/3737639/pexels-photo-3737639.jpeg",
      "https://images.pexels.com/photos/2537930/pexels-photo-2537930.jpeg"
    ],
    brand: "GlowUp",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user30",
        userName: "Riley Barnes",
        rating: 5,
        comment: "This mascara is incredible! It gives me the volume and length I want without any clumping.",
        createdAt: "2023-05-28T10:12:00Z"
      }
    ],
    stock: 90,
    colors: ["Intense Black", "Blackest Black", "Brown Black"],
    tags: ["makeup", "mascara", "volumizing", "eyes"]
  },
  {
    id: uuidv4(),
    name: "Age-Defying Night Cream",
    description: "Rejuvenate your skin overnight with this luxurious age-defying night cream. Formulated with retinol, peptides, and antioxidant-rich botanical extracts, it works while you sleep to reduce the appearance of fine lines and wrinkles, improve elasticity, and even skin tone. The rich, nourishing texture deeply hydrates without feeling heavy, leaving your skin looking refreshed and youthful by morning.",
    price: 64.99,
    category: "cosmetics",
    images: [
      "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
      "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg"
    ],
    brand: "PureSkin",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user31",
        userName: "Morgan Wilson",
        rating: 5,
        comment: "This cream has made a noticeable difference in my skin's texture and firmness. Well worth the price!",
        createdAt: "2023-04-10T19:27:00Z"
      }
    ],
    stock: 45,
    tags: ["skincare", "night cream", "anti-aging", "moisturizer"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Mineral Foundation Powder",
    description: "Achieve a flawless complexion with this gentle mineral foundation powder. The lightweight, buildable formula provides natural-looking coverage while letting your skin breathe. Made with pure minerals and free from talc, parabens, and synthetic fragrances, it's perfect for sensitive and acne-prone skin. The long-wearing formula controls shine and stays fresh all day.",
    price: 39.99,
    category: "cosmetics",
    images: [
      "https://images.pexels.com/photos/2697786/pexels-photo-2697786.jpeg",
      "https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg"
    ],
    brand: "BeautyPro",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user32",
        userName: "Alex Turner",
        rating: 5,
        comment: "Finally found a foundation that doesn't irritate my sensitive skin! Coverage is buildable and looks very natural.",
        createdAt: "2023-03-18T11:40:00Z"
      }
    ],
    stock: 60,
    colors: ["Fair", "Light", "Medium", "Tan", "Deep", "Dark"],
    tags: ["makeup", "foundation", "mineral", "powder"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "Exfoliating Facial Scrub",
    description: "Reveal smoother, brighter skin with this gentle exfoliating facial scrub. Fine bamboo particles and fruit enzymes work together to remove dead skin cells and unclog pores without harsh abrasives. Aloe vera and chamomile soothe and hydrate, leaving your skin refreshed, soft, and glowing. Suitable for all skin types when used 2-3 times weekly.",
    price: 29.99,
    category: "cosmetics",
    images: [
      "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg",
      "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg"
    ],
    brand: "PureSkin",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user33",
        userName: "Jamie Lee",
        rating: 4,
        comment: "Love this scrub! It's gentle but effective, and my skin feels amazingly soft after using it.",
        createdAt: "2023-06-02T14:32:00Z"
      }
    ],
    stock: 75,
    tags: ["skincare", "exfoliant", "scrub", "facial"]
  },
  
  // Accessories
  {
    id: uuidv4(),
    name: "Classic Leather Watch",
    description: "Elevate your style with this timeless leather watch. The premium stainless steel case houses a precise quartz movement, while the genuine leather strap adds sophisticated comfort. The minimalist dial features luminous hands and markers for easy readability in all conditions. Water-resistant to 50 meters, it transitions seamlessly from business meetings to weekend outings.",
    price: 149.99,
    discountPrice: 129.99,
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
      "https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg"
    ],
    brand: "TimeWell",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user34",
        userName: "Taylor Black",
        rating: 5,
        comment: "Impeccable craftsmanship and timeless design. Extremely satisfied with this purchase!",
        createdAt: "2023-04-15T10:27:00Z"
      }
    ],
    stock: 40,
    colors: ["Brown/Silver", "Black/Gold", "Tan/Rose Gold"],
    tags: ["watch", "leather", "timepiece", "accessories"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Polarized Sunglasses",
    description: "Protect your eyes in style with these premium polarized sunglasses. The lightweight yet durable frame offers all-day comfort, while polarized lenses reduce glare and provide 100% UV protection. The timeless design complements any face shape and outfit, making them a versatile addition to your accessory collection.",
    price: 89.99,
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg",
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg"
    ],
    brand: "VisionStyle",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user35",
        userName: "Jordan Miller",
        rating: 5,
        comment: "Amazing quality! The polarization makes a huge difference when driving or near water.",
        createdAt: "2023-05-20T16:45:00Z"
      }
    ],
    stock: 65,
    colors: ["Black/Grey", "Tortoise/Brown", "Navy/Blue"],
    tags: ["sunglasses", "polarized", "eyewear", "accessories"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Genuine Leather Wallet",
    description: "Organize your essentials with this premium leather wallet. Crafted from full-grain leather that develops a beautiful patina with use, it features multiple card slots, bill compartments, and an ID window for maximum functionality. The slim profile fits comfortably in your pocket while still providing ample storage for your daily needs.",
    price: 59.99,
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
      "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg"
    ],
    brand: "LeatherCraft",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user36",
        userName: "Casey Thompson",
        rating: 5,
        comment: "Exceptional quality. The leather is soft yet durable and the craftsmanship is top-notch.",
        createdAt: "2023-03-12T11:18:00Z"
      }
    ],
    stock: 55,
    colors: ["Brown", "Black", "Tan"],
    tags: ["wallet", "leather", "accessories", "bifold"]
  },
  {
    id: uuidv4(),
    name: "Minimalist Silver Jewelry Set",
    description: "Add a touch of elegance to any outfit with this minimalist silver jewelry set. Including a pendant necklace, stud earrings, and a delicate bracelet, each piece is crafted from sterling silver with a high-polish finish. The simple yet sophisticated design works beautifully for both everyday wear and special occasions.",
    price: 79.99,
    discountPrice: 69.99,
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg",
      "https://images.pexels.com/photos/8014603/pexels-photo-8014603.jpeg"
    ],
    brand: "SilverLux",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user37",
        userName: "Riley Evans",
        rating: 5,
        comment: "This set is absolutely beautiful! The pieces are delicate yet well-made and go with everything.",
        createdAt: "2023-05-08T14:22:00Z"
      }
    ],
    stock: 30,
    tags: ["jewelry", "silver", "necklace", "bracelet", "earrings"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "Leather Crossbody Bag",
    description: "Combine style and practicality with this versatile leather crossbody bag. The premium full-grain leather exterior offers durability and develops a unique patina over time, while the adjustable strap allows for comfortable wear. The thoughtfully designed interior features multiple pockets to keep your essentials organized, and the compact size makes it perfect for everyday use.",
    price: 119.99,
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg",
      "https://images.pexels.com/photos/5947556/pexels-photo-5947556.jpeg"
    ],
    brand: "LeatherCraft",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user38",
        userName: "Morgan Chen",
        rating: 5,
        comment: "This bag is absolutely perfect! The leather is beautiful, and it's the ideal size for daily essentials.",
        createdAt: "2023-02-18T09:33:00Z"
      }
    ],
    stock: 45,
    colors: ["Brown", "Black", "Tan", "Burgundy"],
    tags: ["bag", "crossbody", "leather", "accessories"]
  },
  {
    id: uuidv4(),
    name: "Knitted Winter Beanie",
    description: "Stay warm and stylish during cold weather with this premium knitted beanie. Made from a soft, insulating wool blend, it provides exceptional warmth while remaining breathable. The classic ribbed design offers a universal fit and timeless appeal, making it a winter wardrobe essential that complements any cold-weather outfit.",
    price: 29.99,
    discountPrice: 24.99,
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg",
      "https://images.pexels.com/photos/8053906/pexels-photo-8053906.jpeg"
    ],
    brand: "WinterStyle",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user39",
        userName: "Alex Rivera",
        rating: 5,
        comment: "Incredibly soft and warm! This has become my go-to beanie for winter.",
        createdAt: "2023-01-25T15:46:00Z"
      }
    ],
    stock: 85,
    colors: ["Grey", "Black", "Navy", "Burgundy", "Forest Green"],
    tags: ["beanie", "winter", "hat", "knitted", "accessories"]
  },
  {
    id: uuidv4(),
    name: "Genuine Leather Belt",
    description: "Complete your look with this classic leather belt. Crafted from full-grain leather that improves with age, it features a timeless design with a durable buckle that stands up to daily wear. The versatile style works equally well with jeans or dress pants, making it an essential addition to any wardrobe.",
    price: 44.99,
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg",
      "https://images.pexels.com/photos/13598629/pexels-photo-13598629.jpeg"
    ],
    brand: "LeatherCraft",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user40",
        userName: "Jamie Wilson",
        rating: 5,
        comment: "Excellent quality belt that looks much more expensive than it is. Very pleased with this purchase.",
        createdAt: "2023-04-03T12:18:00Z"
      }
    ],
    stock: 70,
    colors: ["Brown", "Black", "Tan"],
    sizes: ["32", "34", "36", "38", "40", "42"],
    tags: ["belt", "leather", "accessories", "wardrobe essentials"]
  },
  {
    id: uuidv4(),
    name: "100% Silk Neck Scarf",
    description: "Add a touch of luxury to any outfit with this versatile silk scarf. Made from 100% premium mulberry silk, it drapes beautifully and feels incredibly soft against your skin. The vibrant print adds a pop of color and interest to both casual and formal looks, while the generous size allows for multiple styling options year-round.",
    price: 49.99,
    category: "accessories",
    images: [
      "https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg",
      "https://images.pexels.com/photos/45924/pexels-photo-45924.jpeg"
    ],
    brand: "LuxeFabrics",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user41",
        userName: "Taylor Martinez",
        rating: 5,
        comment: "This scarf is absolutely gorgeous! The silk is luxurious and the colors are even more vibrant in person.",
        createdAt: "2023-06-12T10:33:00Z"
      }
    ],
    stock: 35,
    colors: ["Blue Floral", "Red Paisley", "Geometric Print", "Abstract Art"],
    tags: ["scarf", "silk", "accessories", "luxury"]
  },
  
  // Furniture
  {
    id: uuidv4(),
    name: "Mid-Century Modern Sofa",
    description: "Bring timeless style to your living space with this mid-century modern sofa. The clean lines and tapered legs create a classic silhouette, while the comfortable cushioning provides exceptional support for lounging. Upholstered in durable, stain-resistant fabric, it combines retro-inspired design with practical functionality for today's homes.",
    price: 899.99,
    discountPrice: 799.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/5998297/pexels-photo-5998297.jpeg",
      "https://images.pexels.com/photos/4916510/pexels-photo-4916510.jpeg"
    ],
    brand: "ModernHome",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user42",
        userName: "Jordan Lee",
        rating: 5,
        comment: "This sofa is absolutely perfect! The quality is outstanding and it looks exactly as pictured.",
        createdAt: "2023-04-25T14:18:00Z"
      }
    ],
    stock: 15,
    colors: ["Grey", "Blue", "Green", "Mustard"],
    tags: ["sofa", "mid-century", "living room", "furniture"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Scandinavian Dining Table",
    description: "Create a welcoming dining space with this elegant Scandinavian-inspired table. The solid oak construction ensures exceptional durability, while the natural finish highlights the beautiful wood grain. The minimalist design features gently splayed legs and a smooth tabletop, creating a timeless piece that complements a variety of interior styles.",
    price: 649.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg",
      "https://images.pexels.com/photos/2092058/pexels-photo-2092058.jpeg"
    ],
    brand: "NordicDesign",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user43",
        userName: "Casey Johnson",
        rating: 5,
        comment: "Absolutely stunning table! The craftsmanship is excellent and it's even more beautiful in person.",
        createdAt: "2023-03-18T09:33:00Z"
      }
    ],
    stock: 12,
    tags: ["table", "dining", "scandinavian", "furniture"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Ergonomic Office Chair",
    description: "Enhance your work-from-home setup with this premium ergonomic office chair. The adjustable height, lumbar support, and tilting mechanism allow you to find your perfect sitting position, while the breathable mesh backrest keeps you cool during long work sessions. The durable construction and smooth-rolling castors ensure years of comfortable use.",
    price: 299.99,
    discountPrice: 249.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg",
      "https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg"
    ],
    brand: "ErgoWorks",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user44",
        userName: "Riley Thompson",
        rating: 5,
        comment: "Game-changer for my home office! My back pain has significantly decreased since getting this chair.",
        createdAt: "2023-05-10T16:45:00Z"
      }
    ],
    stock: 25,
    colors: ["Black", "Grey", "Blue"],
    tags: ["chair", "office", "ergonomic", "furniture"]
  },
  {
    id: uuidv4(),
    name: "Solid Wood Bookshelf",
    description: "Display your books and treasured items with this beautiful solid wood bookshelf. The sturdy construction ensures stability, while the natural wood finish adds warmth to any room. Five spacious shelves provide ample storage space, and the timeless design blends seamlessly with various interior styles from traditional to contemporary.",
    price: 399.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg",
      "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg"
    ],
    brand: "WoodCraft",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user45",
        userName: "Morgan Smith",
        rating: 5,
        comment: "This bookshelf is absolutely gorgeous! The wood quality is excellent and assembly was straightforward.",
        createdAt: "2023-02-20T13:22:00Z"
      }
    ],
    stock: 18,
    colors: ["Natural Oak", "Walnut", "Cherry"],
    tags: ["bookshelf", "storage", "wooden", "furniture"]
  },
  {
    id: uuidv4(),
    name: "Queen Size Platform Bed",
    description: "Transform your bedroom with this stylish and functional platform bed. The solid wood frame provides exceptional support for your mattress without the need for a box spring, while the upholstered headboard creates a comfortable backrest for reading in bed. The minimalist design and clean lines work beautifully in contemporary bedroom settings.",
    price: 749.99,
    discountPrice: 649.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
    ],
    brand: "ModernHome",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user46",
        userName: "Jamie Anderson",
        rating: 5,
        comment: "Love this bed frame! It's sturdy, beautiful, and the upholstered headboard is very comfortable to lean against.",
        createdAt: "2023-04-08T14:55:00Z"
      }
    ],
    stock: 10,
    colors: ["Grey", "Beige", "Blue"],
    sizes: ["Queen", "King"],
    tags: ["bed", "platform", "bedroom", "furniture"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "Glass Top Coffee Table",
    description: "Add a touch of elegance to your living room with this contemporary glass top coffee table. The tempered glass surface creates a sense of openness while showcasing the sleek metal frame below. The minimalist design combines form and function, providing a stylish yet practical surface for drinks, books, and decorative items.",
    price: 249.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg"
    ],
    brand: "GlassModern",
    rating: 4.5,
    reviews: [
      {
        id: uuidv4(),
        userId: "user47",
        userName: "Alex Morgan",
        rating: 4,
        comment: "Beautiful table that looks more expensive than it is. Easy to assemble and very sturdy.",
        createdAt: "2023-06-02T11:18:00Z"
      }
    ],
    stock: 22,
    colors: ["Black/Clear", "Gold/Clear", "Chrome/Smoked"],
    tags: ["coffee table", "glass", "living room", "furniture"]
  },
  {
    id: uuidv4(),
    name: "Storage Ottoman",
    description: "Maximize your space with this versatile storage ottoman. The padded top provides comfortable extra seating or a place to rest your feet, while the hinged lid reveals generous storage space for blankets, pillows, or other items. The durable upholstery and solid construction ensure this practical piece will serve your home for years to come.",
    price: 129.99,
    discountPrice: 109.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg",
      "https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg"
    ],
    brand: "SmartSpace",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user48",
        userName: "Taylor Wilson",
        rating: 5,
        comment: "Perfect addition to my living room! It's sturdy enough to sit on and holds all my throw blankets.",
        createdAt: "2023-03-15T17:40:00Z"
      }
    ],
    stock: 30,
    colors: ["Grey", "Beige", "Navy", "Black"],
    tags: ["ottoman", "storage", "seating", "furniture"]
  },
  {
    id: uuidv4(),
    name: "Adjustable Standing Desk",
    description: "Improve your work environment with this premium adjustable standing desk. The electric height adjustment system smoothly transitions between sitting and standing positions at the touch of a button, allowing you to vary your posture throughout the day. The spacious desktop provides ample room for your computer setup and work materials, while the sturdy frame ensures stability at any height.",
    price: 499.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/5702381/pexels-photo-5702381.jpeg",
      "https://images.pexels.com/photos/4050324/pexels-photo-4050324.jpeg"
    ],
    brand: "ErgoWorks",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user49",
        userName: "Jordan Taylor",
        rating: 5,
        comment: "This desk has transformed my work-from-home experience! The adjustment is smooth and quiet, and the quality is excellent.",
        createdAt: "2023-05-30T09:27:00Z"
      }
    ],
    stock: 15,
    colors: ["White/Silver", "Black/Black", "Walnut/Black"],
    tags: ["desk", "standing", "adjustable", "office", "furniture"]
  },
  
  // Books
  {
    id: uuidv4(),
    name: "The Midnight Library",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets? A dazzling novel about all the choices that go into a life well lived.",
    price: 24.99,
    discountPrice: 19.99,
    category: "books",
    images: [
      "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg",
      "https://images.pexels.com/photos/2925304/pexels-photo-2925304.jpeg"
    ],
    brand: "Matt Haig",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user50",
        userName: "Casey Adams",
        rating: 5,
        comment: "One of the most beautiful, thought-provoking books I've ever read. Couldn't put it down!",
        createdAt: "2023-04-18T15:33:00Z"
      }
    ],
    stock: 45,
    tags: ["fiction", "fantasy", "philosophical", "contemporary"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Atomic Habits",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. This breakthrough book reveals how small changes can yield massive transformation.",
    price: 27.99,
    category: "books",
    images: [
      "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg",
      "https://images.pexels.com/photos/4170624/pexels-photo-4170624.jpeg"
    ],
    brand: "James Clear",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user51",
        userName: "Morgan Williams",
        rating: 5,
        comment: "Life-changing book with actionable advice that actually works. I've recommended it to everyone I know!",
        createdAt: "2023-03-10T09:27:00Z"
      }
    ],
    stock: 60,
    tags: ["non-fiction", "self-help", "productivity", "psychology"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Project Hail Mary",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company.",
    price: 28.99,
    discountPrice: 24.99,
    category: "books",
    images: [
      "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg",
      "https://images.pexels.com/photos/4170624/pexels-photo-4170624.jpeg"
    ],
    brand: "Andy Weir",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user52",
        userName: "Jamie Zhang",
        rating: 5,
        comment: "Even better than The Martian! The perfect blend of science, humor, and heart-pounding suspense.",
        createdAt: "2023-05-22T16:45:00Z"
      }
    ],
    stock: 40,
    tags: ["science fiction", "space", "adventure", "thriller"]
  },
  {
    id: uuidv4(),
    name: "The Psychology of Money",
    description: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life's most important topics.",
    price: 19.99,
    category: "books",
    images: [
      "https://images.pexels.com/photos/5238117/pexels-photo-5238117.jpeg",
      "https://images.pexels.com/photos/5238118/pexels-photo-5238118.jpeg"
    ],
    brand: "Morgan Housel",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user53",
        userName: "Riley Johnson",
        rating: 5,
        comment: "One of the best books on personal finance I've ever read. Clear, insightful, and practical advice for everyone.",
        createdAt: "2023-02-14T09:18:00Z"
      }
    ],
    stock: 55,
    tags: ["non-fiction", "finance", "psychology", "economics"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "The Song of Achilles",
    description: "Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the court of King Peleus and his perfect son Achilles. By all rights, their paths should never cross, but Achilles takes the shamed prince as his friend, and as they grow into young men skilled in the arts of war and medicine, their bond blossoms into something deeper - despite the displeasure of Achilles' mother Thetis, a cruel sea goddess.",
    price: 16.99,
    discountPrice: 14.99,
    category: "books",
    images: [
      "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg",
      "https://images.pexels.com/photos/2925304/pexels-photo-2925304.jpeg"
    ],
    brand: "Madeline Miller",
    rating: 4.8,
    reviews: [
      {
        id: uuidv4(),
        userId: "user54",
        userName: "Alex Rivera",
        rating: 5,
        comment: "Absolutely stunning retelling of the Iliad. The prose is beautiful and the story is both heartbreaking and captivating.",
        createdAt: "2023-05-25T16:40:00Z"
      }
    ],
    stock: 35,
    tags: ["fiction", "historical fiction", "mythology", "romance"]
  },
  {
    id: uuidv4(),
    name: "Where the Crawdads Sing",
    description: "For years, rumors of the 'Marsh Girl' have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, when handsome Chase Andrews is found dead, the locals immediately suspect Kya Clark, the so-called Marsh Girl. But Kya is not what they say. Sensitive and intelligent, she has survived for years alone in the marsh that she calls home, finding friends in the gulls and lessons in the sand.",
    price: 18.99,
    category: "books",
    images: [
      "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg",
      "https://images.pexels.com/photos/2925304/pexels-photo-2925304.jpeg"
    ],
    brand: "Delia Owens",
    rating: 4.6,
    reviews: [
      {
        id: uuidv4(),
        userId: "user55",
        userName: "Jordan Taylor",
        rating: 5,
        comment: "A beautifully written story that completely transported me to the North Carolina marshes. Couldn't put it down!",
        createdAt: "2023-03-30T14:22:00Z"
      }
    ],
    stock: 50,
    tags: ["fiction", "mystery", "coming of age", "nature"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Educated: A Memoir",
    description: "Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom. Her family was so isolated from mainstream society that there was no one to ensure the children received an education, and no one to intervene when one of her older brothers became violent. When another brother got himself into college, Tara decided to try a new kind of life. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge University.",
    price: 17.99,
    discountPrice: 15.99,
    category: "books",
    images: [
      "https://images.pexels.com/photos/4170629/pexels-photo-4170629.jpeg",
      "https://images.pexels.com/photos/4170624/pexels-photo-4170624.jpeg"
    ],
    brand: "Tara Westover",
    rating: 4.9,
    reviews: [
      {
        id: uuidv4(),
        userId: "user56",
        userName: "Casey Wilson",
        rating: 5,
        comment: "One of the most powerful memoirs I've ever read. A testament to the human spirit and the transformative power of education.",
        createdAt: "2023-04-05T13:27:00Z"
      }
    ],
    stock: 45,
    tags: ["non-fiction", "memoir", "autobiography", "education"]
  },
  {
    id: uuidv4(),
    name: "The Invisible Life of Addie LaRue",
    description: "France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever—and is cursed to be forgotten by everyone she meets. Thus begins the extraordinary life of Addie LaRue, and a dazzling adventure that will play out across centuries and continents, across history and art, as a young woman learns how far she will go to leave her mark on the world. But everything changes when, after nearly 300 years, Addie stumbles across a young man in a hidden bookstore and he remembers her name.",
    price: 26.99,
    category: "books",
    images: [
      "https://images.pexels.com/photos/1907785/pexels-photo-1907785.jpeg",
      "https://images.pexels.com/photos/2925304/pexels-photo-2925304.jpeg"
    ],
    brand: "V.E. Schwab",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user57",
        userName: "Morgan Lee",
        rating: 5,
        comment: "A haunting, beautiful tale about memory, art, and what it means to leave a mark on the world. Absolutely mesmerizing.",
        createdAt: "2023-06-10T10:42:00Z"
      }
    ],
    stock: 38,
    tags: ["fiction", "fantasy", "historical fiction", "romance"],
    featured: true
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

// Helper function to get bestseller products
export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.bestseller);
};

// Helper function to get new arrival products
export const getNewArrivalProducts = (): Product[] => {
  return products.filter(product => product.newArrival);
};

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get related products
export const getRelatedProducts = (id: string, limit: number = 4): Product[] => {
  const product = getProductById(id);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== id)
    .slice(0, limit);
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) || 
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const categories: { id: Category; name: string; image: string }[] = [
  { 
    id: 'clothing', 
    name: 'Одежда', 
    image: 'https://images.pexels.com/photos/581339/pexels-photo-581339.jpeg' 
  },
  { 
    id: 'electronics', 
    name: 'Электроника', 
    image: 'https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg' 
  },
  { 
    id: 'footwear', 
    name: 'Обувь', 
    image: 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg' 
  },
  { 
    id: 'cosmetics', 
    name: 'Косметика', 
    image: 'https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg' 
  },
  { 
    id: 'accessories', 
    name: 'Аксессуары', 
    image: 'https://images.pexels.com/photos/1078973/pexels-photo-1078973.jpeg' 
  },
  { 
    id: 'furniture', 
    name: 'Мебель', 
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg' 
  },
  { 
    id: 'books', 
    name: 'Книги', 
    image: 'https://images.pexels.com/photos/1666320/pexels-photo-1666320.jpeg' 
  }
];

export const faqData: FAQ[] = [
  {
    id: uuidv4(),
    question: "Как мне отслеживать свой заказ?",
    answer: "Вы можете отслеживать свой заказ, войдя в свою учетную запись и перейдя в раздел истории заказа.Там вы найдете список всех ваших заказов вместе с их текущим статусом и информацией о отслеживании.",
    category: "Orders"
  },
  {
    id: uuidv4(),
    question: "Какова ваша политика возврата?",
    answer: "Мы предлагаем 30-дневную политику возврата для большинства предметов.Продукты должны быть неиспользованы в их оригинальной упаковке, а в том же состоянии вы их получили.Чтобы начать возврат, войдите в свою учетную запись и перейдите в раздел истории заказа.",
    category: "Returns & Refunds"
  },
  {
    id: uuidv4(),
    question: "Сколько времени занимает доставка?",
    answer: "Стандартная доставка обычно занимает 3-5 рабочих дней в континентальной части США.Экспресс-варианты доставки (2-дневная и ночевка) также доступны при оформлении заказа за дополнительную плату.Международное время доставки варьируется в зависимости от пункта назначения, обычно занимая 7-14 рабочих дней.",
    category: "Shipping"
  },
  {
    id: uuidv4(),
    question: "Вы отправляете на международном уровне?",
    answer: "Да, мы отправляемся в большинство стран по всему миру.Международные варианты доставки, затраты и сроки доставки будут рассчитаны при оформлении заказа на основе вашего местоположения.Обратите внимание, что клиенты несут ответственность за любые таможенные сборы или импортные пошлины, которые могут применяться.",
    category: "Shipping"
  },
  {
    id: uuidv4(),
    question: "Как я могу изменить или отменить заказ?",
    answer: "Если вам нужно изменить или отменить заказ, пожалуйста, свяжитесь с нашей командой по обслуживанию клиентов как можно скорее.Обычно мы можем приспособить изменения, если заказ еще не был обработан для доставки, что обычно происходит в течение 1-2 часов после заказа.",
    category: "Orders"
  },
  {
    id: uuidv4(),
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем все основные кредитные карты (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay и Google Pay.По соображениям безопасности мы не принимаем наличные, чеки или COD (наличные на доставке).",
    category: "Payment"
  },
  {
    id: uuidv4(),
    question: "Мои платежные данные безопасны?",
    answer: "Абсолютно.Мы используем стандартный отраслевой шифрование и безопасные процессоры платежей, чтобы гарантировать, что ваша платежная информация всегда защищена.Мы никогда не храним ваши полные данные кредитной карты на наших серверах.",
    category: "Payment"
  },
  {
    id: uuidv4(),
    question: "HКак создать учетную запись?",
    answer: "Вы можете создать учетную запись, нажав ссылку «Зарегистрироваться» в правом верхнем углу нашего веб -сайта.Вам нужно будет предоставить свой адрес электронной почты и создать пароль.Вы также можете зарегистрироваться в процессе оформления заказа, если вы совершаете свою первую покупку.",
    category: "Account"
  },
  {
    id: uuidv4(),
    question: "Как сбросить пароль?",
    answer: "Если вы забыли свой пароль, нажмите на ссылку «Вход», затем выберите «Забыли свой пароль?»Введите адрес электронной почты, связанный с вашей учетной записью, и мы отправим вам инструкции для сброса вашего пароля.",
    category: "Account"
  },
  {
    id: uuidv4(),
    question: "Вы предлагаете гарантию на продукты?",
    answer: "Гарантийное покрытие варьируется в зависимости от категории продуктов и бренда.Большинство электроники поставляются с 1-летней гарантией производителя, в то время как мебель обычно включает в себя 3-летнюю гарантию на производственные дефекты.Полная гарантийная информация доступна на каждой странице продукта.",
    category: "Products"
  }
];