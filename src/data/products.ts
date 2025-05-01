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
      "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
    name: "Шерстяная смесь пиджака",
    description: "Этот изысканный пиджак для шерсти привносит универсальную элегантность в ваш гардероб.Показывая современную режущую, надрезанные лацканы и качественную подкладку, он легко переходит от офиса к вечерним случаям.",
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
        comment: "Отличное качество и идеальное посадка.Очень впечатлен!",
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
    name: "Толстовка с капюшоном",
    description: "Сохраняйте теплые и стильные с этой удобной толстовкой с капюшоном.Изготовленная из мягкой хлопковой смеси с матовым интерьером для дополнительного тепла, имеет передний карман кенгуру, регулируемый капюшон с застенчиванием, а также ребристые манжеты и подол.",
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
    name: "Вязаный свитер",
    description: "Этот роскошный трикотажный свитер сочетает в себе комфорт с элегантным стилем.Изготовленная из мягкой хлопковой валковой смеси, имеет классическую шею экипажа, ребристые манжеты и подол, а также расслабленная посадка, которая идеально подходит для наслоения в более холодную погоду.",
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
    name: "Летнее платье",
    description: "Это легкое летнее платье сочетает в себе стиль с комфортом в теплую погоду.Изготовленный из дышащего хлопка с оттенком растяжения, он имеет лестный силуэт A-Line, регулируемые ремни и удобные боковые карманы.",
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
        userName: "Райли Мартинес",
        rating: 5,
        comment: "Люблю это платье!Это удобно, лестно и имеет карманы!",
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
    name: "Беспроводные наушники с шумоподавлением",
    description: "Опыт премиум-аудио с этими беспроводными наушниками с шумоподавлением.Показывая передовую акустическую технологию, они обеспечивают кристально чистый звук, эффективно блокируя внешний шум.Ушные подушки для ушей памяти и регулируемая повязка на голову обеспечивают удобный износ в течение всего дня, в то время как 30-часовое срок службы батареи поддерживает вашу музыку в течение длительных поездок и рейсов.",
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
        comment: "Эти наушники невероятны!Шумовая отмена лучше всего в своем классе.",
        createdAt: "2023-04-18T15:33:00Z"
      },
      {
        id: uuidv4(),
        userId: "user10",
        userName: "Jordan Taylor",
        rating: 4,
        comment: "Отличное качество звука и удобное в течение длительных периодов времени.Срок службы батареи так же рекламируется.",
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
    description: "Просмотр домашних развлечений с этим потрясающим 55-дюймовым Ultra HD Smart TV это прекрасно.Обладая разрешением 4K, поддержкой HDR и местными зонами для затемнения, он обеспечивает захватывающее захватывающее качество изображения с глубокими черными и яркими цветами.Встроенная интеллектуальная платформа предоставляет вам доступ ко всем вашим любимым потоковым приложениям, в то время как функциональность голосового управления делает поиск контента без усилий.",
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
        comment: "Невероятное качество изображения и очень интуитивно понятные умные функции!",
        createdAt: "2023-03-30T14:22:00Z"
      }
    ],
    stock: 25,
    tags: ["tv", "4k", "smart tv", "entertainment"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Профессиональная цифровая камера",
    description: "запечатлетьМоментыЖизниСИсключительнойЯсностью,ИспользуяЭтуПрофессиональнуюЦифровуюКамеру24,2МегапиксельныйДатчикПолнокадровогоДатчикаОбеспечиваетПотрясающееКачествоИзображенияДажеВСложныхУсловияхОсвещения,ВТоВремяКакРасширеннаяСистемаАвтофокусированияГарантирует,ЧтоВашиСубъектыВсегдаОстрыеБлагодаря4KВидеоВозможностей,НепрерывнойСтрельбе10КадровВСекундуИСтроительством,ЗастрахованнойПогодой,ОнаИдеальноПодходитКакДляПрофессиональныхФотографов,ТакИДляСерьезныхЭнтузиастов",
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
        comment: "Невероятная камера!Качество изображения выдающееся, а эргономика идеальна.",
        createdAt: "2023-02-14T09:18:00Z"
      }
    ],
    stock: 20,
    colors: ["Black"],
    tags: ["camera", "photography", "professional", "4k video"]
  },
  {
    id: uuidv4(),
    name: "Умные фитнес-часы",
    description: "Возьмите под контроль свое здоровье и физическую форму с помощью этих расширенных Smart Fitness Watch.Отслеживайте свои шаги, частоту сердечных сокращений, качество сна и больше с точными датчиками, в то время как функциональность GPS контролирует ваши беговые и велосипедные маршруты.На дискром на сенсорном дисплее показаны уведомления от вашего смартфона, а 7-дневное срок службы батареи означает меньшую зарядку и большую активность.",
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
        comment: "Люблю эти часы!Фитнес -отслеживание точное, и приложение легко использовать.",
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
    name: "Беспроводной динамик Bluetooth",
    description: "Воплотите свою музыку в жизнь с помощью этого мощного беспроводного оратора Bluetooth.Двойные драйверы и пассивные басовые радиаторы доставляют богатый, заполняющий номера звук, в то время как водонепроницаемый дизайн делает его идеальным для приключений на открытом воздухе.С 20-часовым сроком службы батареи и встроенным микрофоном для вызовов, это Ultimate Portable Audio Companion.",
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
        comment: "Отличное качество звука для размера, и батарея длится вечно!",
        createdAt: "2023-04-05T13:27:00Z"
      }
    ],
    stock: 80,
    colors: ["Black", "Blue", "Red"],
    tags: ["speaker", "bluetooth", "wireless", "portable"]
  },
  {
    id: uuidv4(),
    name: "Игровой ноутбук",
    description: "Доминируйте свои игры с этим высокопроизводительным игровым ноутбуком.Работающий на последнем процессоре и специальной видеокарте, она с легкостью обрабатывает даже самые требовательные названия.Дисплей с высоким уровнем высокого уровня 15,6 , обеспечивает плавный, отзывчивый игровой процесс, в то время как настраиваемая клавиатура RGB добавляет прикосновение личного стиля. Усовершенствованная технология охлаждения сохраняет производительность оптимальной во время интенсивных игровых сессий.",
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
        comment: "Этот ноутбук - зверь!Запускает все мои игры в настройках Max, не напрягаясь",
        createdAt: "2023-03-14T17:55:00Z"
      }
    ],
    stock: 30,
    tags: ["laptop", "gaming", "computer", "high-performance"]
  },
  {
    id: uuidv4(),
    name: "Беспроводные наушники",
    description: "Опыт истинную свободу беспроводной связи с этими наушниками премиум -класса.Усовершенствованная технология Bluetooth обеспечивает стабильное соединение, в то время как драйверы, разработанные на заказ, обеспечивают исключительное качество звука с глубокими басами и четкими максимумами.Контрольные элементы управления позволяют вам управлять музыкой и звонить без усилий, а корпус компактной зарядки обеспечивает до 24 часов общего времени автономной работы.",
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
    name: "Умный дом",
    description: "Централизуйте свой умный управление домом с помощью этого интуитивно понятного концентратора умного дома.Подключите и управляйте всеми вашими совместимыми устройствами - от огней и термостатов к камерам безопасности и дверным замкам - через один простой интерфейс.Возможность голосового управления позволяет настроить домашнюю среду без рук, в то время как настраиваемые процедуры автоматизируют несколько действий с помощью одной команды.",
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
        comment: "Отличный центр, который хорошо интегрируется с большинством моих умных устройств.Приложение интуитивно понятно и надежно.",
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
    name: "Классические кожаные кроссовки",
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
        comment: "Эти кроссовки идеальны!Удобные прямо из коробки, и они отлично смотрятся со всем.",
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
    name: "Высокоэффективные беговые кроссовки",
    description: "Поднимите свои пробежки на новый уровень с этими высокоэффективными беговыми кроссовками. Отзывчивая амортизирующая технология обеспечивает отличное возвращение энергии, а инженерный сетчатый верх обеспечивает дышащую поддержку там, где она вам больше всего необходима. Прочная резиновая подошва обеспечивает превосходное сцепление на различных поверхностях, а светоотражающие детали улучшают видимость во время пробежек при слабом освещении.",
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
        comment: "Лучшие беговые кроссовки, которые у меня когда-либо были! Отличная амортизация и поддержка для длительных дистанций.",
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
    name: "Водонепроницаемые походные ботинки",
    description: "Покорите любую тропу с этими прочными водонепроницаемыми походными ботинками. Верх из натуральной кожи и синтетических материалов обеспечивает долговечность и защиту, а водонепроницаемая мембрана сохраняет ваши ноги сухими при переходе через ручьи и в дождь. Агрессивная рифленая подошва обеспечивает отличное сцепление на разнообразной местности, а амортизирующая средняя подошва гарантирует комфорт во время долгих дней на тропе.",
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
        comment: "Эти ботинки невероятны! Преодолел 15-мильный поход в дождливых условиях, и мои ноги остались полностью сухими.",
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
    name: "Повседневные холщовые слипоны",
    description: "Добавьте непринужденный стиль к своему повседневному гардеробу с этими удобными холщовыми слипонами. Легкая конструкция и гибкая подошва делают их идеальными для повседневной носки, а амортизированная стелька сохраняет ваши ноги комфортными в течение всего дня. Классический дизайн легко сочетается с джинсами, шортами или повседневными брюками для расслабленного, собранного образа.",
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
        comment: "Супер удобные и практичные. Отличная повседневная обувь для ежедневной носки.",
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
    name: "Классические кожаные туфли",
    description: "Создайте изысканный образ с этими неподвластными времени кожаными туфлями. Изготовленные из высококачественной телячьей кожи с использованием традиционных методов конструирования, они обладают исключительным качеством и долговечностью. Кожаная подошва обеспечивает изысканную отделку, а амортизированная стелька гарантирует комфорт во время длительных дней или особых событий. Универсальное дополнение к любому формальному гардеробу.",
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
        comment: "Исключительное качество и мастерство. Эти туфли удобны прямо из коробки и выглядят безупречно.",
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
    name: "Легкие тренировочные кроссовки",
    description: "Максимизируйте эффективность тренировок с этими универсальными тренировочными кроссовками. Легкий дышащий верх сохраняет ваши ноги прохладными во время интенсивных тренировок, а стабильная средняя подошва обеспечивает отличную поддержку для подъема тяжестей и боковых движений. Прочная резиновая подошва обеспечивает надежное сцепление с различными поверхностями для упражнений, что делает их идеальными для всего: от высокоинтенсивных интервальных тренировок до силовых тренировок.",
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
        comment: "Отличные тренировочные кроссовки! Легкие, но достаточно поддерживающие для различных тренировок.",
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
    name: "Замшевые ботинки Челси",
    description: "Сочетайте неподвластный времени стиль с современным комфортом в этих замшевых ботинках Челси. Элегантный силуэт с эластичными боковыми вставками для легкого надевания и снятия, а амортизированная стелька обеспечивает комфорт на весь день. Прочная резиновая подошва обеспечивает надежное сцепление, а универсальный дизайн идеально сочетается как с повседневными, так и с элегантными повседневными нарядами для круглогодичной носки.",
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
        comment: "Эти ботинки абсолютное совершенство! Они выглядят потрясающе и ощущаются еще лучше.",
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
    name: "Водонепроницаемые сандалии",
    description: "Наслаждайтесь приключениями на открытом воздухе с этими универсальными водонепроницаемыми сандалиями. Быстросохнущий синтетический верх и регулируемые ремешки обеспечивают надежную, индивидуальную посадку, а амортизированная стелька из EVA обеспечивает исключительный комфорт для ношения в течение всего дня. Прочная подошва обеспечивает отличное сцепление на мокрых и сухих поверхностях, что делает их идеальными для походов, пляжного отдыха или водных активностей.",
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
        comment: "Отличные сандалии для походов и водных активностей! Удобные и быстро сохнут.",
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
    name: "Увлажняющая сыворотка для лица",
    description: "Оживите вашу кожу с помощью этой мощной увлажняющей сыворотки. Созданная с гиалуроновой кислотой, витамином С и растительными экстрактами, она глубоко увлажняет, одновременно осветляя и выравнивая тон кожи. Легкая, быстро впитывающаяся формула быстро проникает в кожу, обеспечивая интенсивное увлажнение без закупорки пор, оставляя вашу кожу упругой, сияющей и освеженной.",
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
        comment: "Эта сыворотка преобразила мою кожу! Она такая увлажненная и упругая уже после недели использования.",
        createdAt: "2023-05-12T09:20:00Z"
      }
    ],
    stock: 65,
    tags: ["skincare", "serum", "hydrating", "face"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Стойкая матовая помада",
    description: "Достигните яркого, долговременного цвета губ с этой премиальной матовой помадой. Кремовая формула легко наносится и закрепляется для комфортного матового финиша, который держится до 12 часов без растекания или сушения губ. Обогащена питательными маслами и витамином Е, она сохраняет губы мягкими и ухоженными, обеспечивая интенсивный, устойчивый к выцветанию цвет.",
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
        comment: "Лучшая помада, которую я когда-либо использовала! Цвет великолепен, и она действительно держится весь день.",
        createdAt: "2023-04-30T15:48:00Z"
      }
    ],
    stock: 80,
    colors: ["Classic Red", "Mauve Pink", "Coral Bliss", "Berry Wine", "Nude Beige"],
    tags: ["makeup", "lipstick", "matte", "long-wear"]
  },
  {
    id: uuidv4(),
    name: "Профессиональный набор кистей для макияжа",
    description: "Улучшите нанесение макияжа с этим комплексным набором из 15 кистей. Изготовленные из мягкого, не тестированного на животных синтетического ворса и элегантных деревянных ручек, эти профессиональные кисти безупречно растушевывают продукты для безупречного финиша. Набор включает всё: от кистей для тонального крема и консилера до детальных кистей для глаз, представленных в элегантном дорожном футляре.",
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
        comment: "Потрясающий набор кистей! Качество сравнимо с гораздо более дорогими брендами, которые я пробовала.",
        createdAt: "2023-03-25T12:34:00Z"
      }
    ],
    stock: 40,
    tags: ["makeup", "brushes", "beauty tools", "professional"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Натуральная глиняная маска для лица",
    description: "Детоксифицируйте и очистите вашу кожу с этой натуральной глиняной маской для лица. Разработанная с каолином и бентонитовой глиной, она вытягивает загрязнения и избыток масла, в то время как растительные экстракты успокаивают и питают кожу. Регулярное использование помогает минимизировать появление пор, контролировать жирность и улучшать общую текстуру кожи для более чистого, утонченного цвета лица.",
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
        comment: "Эта маска полностью изменила мою жирную/комбинированную кожу! Мои поры выглядят меньше, и высыпания гораздо реже.",
        createdAt: "2023-02-14T18:55:00Z"
      }
    ],
    stock: 70,
    tags: ["skincare", "mask", "clay", "purifying"]
  },
  {
    id: uuidv4(),
    name: "Объемная тушь для ресниц",
    description: "Достигните драматичных, объемных ресниц с этой премиальной тушью. Инновационная щеточка разделяет и покрывает каждую ресницу от корня до кончика, а наращиваемая формула добавляет исключительный объем и длину без комков или осыпания. Долговечная, устойчивая к смазыванию формула держится весь день, а питательные ингредиенты ухаживают за вашими ресницами.",
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
        comment: "Эта тушь просто невероятна! Она дает мне желаемый объем и длину без комкования.",
        createdAt: "2023-05-28T10:12:00Z"
      }
    ],
    stock: 90,
    colors: ["Intense Black", "Blackest Black", "Brown Black"],
    tags: ["makeup", "mascara", "volumizing", "eyes"]
  },
  {
    id: uuidv4(),
    name: "Омолаживающий ночной крем",
    description: "Омолодите свою кожу за ночь с этим роскошным омолаживающим ночным кремом. Созданный с ретинолом, пептидами и богатыми антиоксидантами растительными экстрактами, он работает пока вы спите, чтобы уменьшить появление тонких линий и морщин, улучшить эластичность и выровнять тон кожи. Богатая, питательная текстура глубоко увлажняет, не ощущаясь тяжело, оставляя вашу кожу выглядящей свежей и молодой к утру.",
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
        comment: "Этот крем сделал заметную разницу в текстуре и упругости моей кожи. Определенно стоит своей цены!",
        createdAt: "2023-04-10T19:27:00Z"
      }
    ],
    stock: 45,
    tags: ["skincare", "night cream", "anti-aging", "moisturizer"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Минеральная тональная пудра",
    description: "Достигните безупречного цвета лица с этой нежной минеральной тональной пудрой. Легкая, наращиваемая формула обеспечивает естественное покрытие, позволяя коже дышать. Сделана из чистых минералов и не содержит талька, парабенов и синтетических ароматов, она идеальна для чувствительной и склонной к акне кожи. Долговечная формула контролирует жирный блеск и сохраняет свежесть в течение всего дня.",
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
        comment: "Наконец нашла тональное средство, которое не раздражает мою чувствительную кожу! Покрытие можно наращивать и выглядит очень естественно.",
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
    name: "Отшелушивающий скраб для лица",
    description: "Откройте более гладкую, яркую кожу с этим мягким отшелушивающим скрабом для лица. Тонкие частицы бамбука и фруктовые энзимы работают вместе, чтобы удалить омертвевшие клетки кожи и очистить поры без агрессивных абразивов. Алоэ вера и ромашка успокаивают и увлажняют, оставляя вашу кожу освеженной, мягкой и сияющей. Подходит для всех типов кожи при использовании 2-3 раза в неделю.",
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
        comment: "Обожаю этот скраб! Он мягкий, но эффективный, и моя кожа ощущается удивительно мягкой после его использования.",
        createdAt: "2023-06-02T14:32:00Z"
      }
    ],
    stock: 75,
    tags: ["skincare", "exfoliant", "scrub", "facial"]
  },
  
  // Accessories
  {
    id: uuidv4(),
    name: "Классические кожаные часы",
    description: "Подчеркните свой стиль этими неподвластными времени кожаными часами. Высококачественный корпус из нержавеющей стали вмещает точный кварцевый механизм, а ремешок из натуральной кожи добавляет изысканный комфорт. Минималистичный циферблат оснащен люминесцентными стрелками и маркерами для легкой читаемости в любых условиях. Водонепроницаемость до 50 метров, они безупречно переходят от деловых встреч к выходным прогулкам.",
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
        comment: "Безупречное качество изготовления и неподвластный времени дизайн. Чрезвычайно доволен этой покупкой!",
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
    name: "Поляризованные солнцезащитные очки",
    description: "Защитите свои глаза стильно с этими премиальными поляризованными солнцезащитными очками. Легкая, но прочная оправа обеспечивает комфорт на весь день, а поляризованные линзы уменьшают блики и обеспечивают 100% защиту от УФ-лучей. Вневременной дизайн дополняет любую форму лица и наряд, делая их универсальным дополнением к вашей коллекции аксессуаров.",
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
        comment: "Потрясающее качество! Поляризация действительно имеет огромное значение при вождении или вблизи воды.",
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
    name: "Кошелек из натуральной кожи",
    description: "Организуйте свои незаменимые вещи с этим премиальным кожаным кошельком. Изготовленный из кожи высшего качества, которая со временем приобретает красивую патину, он имеет несколько отделений для карт, отделений для купюр и окошко для ID-карты для максимальной функциональности. Тонкий профиль удобно помещается в кармане, при этом обеспечивая достаточное пространство для ваших ежедневных потребностей.",
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
        comment: "Исключительное качество. Кожа мягкая, но прочная, а качество изготовления - высшего класса.",
        createdAt: "2023-03-12T11:18:00Z"
      }
    ],
    stock: 55,
    colors: ["Brown", "Black", "Tan"],
    tags: ["wallet", "leather", "accessories", "bifold"]
  },
  {
    id: uuidv4(),
    name: "Минималистичный серебряный ювелирный набор",
    description: "Добавьте элегантности к любому наряду с этим минималистичным серебряным ювелирным набором. Включающий в себя кулон-подвеску, серьги-гвоздики и изящный браслет, каждый элемент изготовлен из стерлингового серебра с высокополированной отделкой. Простой, но изысканный дизайн прекрасно подходит как для повседневной носки, так и для особых случаев.",
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
        comment: "Этот набор просто великолепен! Элементы изящные, но хорошо сделанные и сочетаются со всем.",
        createdAt: "2023-05-08T14:22:00Z"
      }
    ],
    stock: 30,
    tags: ["jewelry", "silver", "necklace", "bracelet", "earrings"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "Кожаная сумка через плечо",
    description: "Сочетайте стиль и практичность с этой универсальной кожаной сумкой через плечо. Премиальная внешняя отделка из кожи высшего качества обеспечивает долговечность и со временем приобретает уникальную патину, а регулируемый ремень позволяет носить её с комфортом. Продуманный внутренний дизайн с несколькими карманами позволяет держать все необходимые вещи в порядке, а компактный размер делает её идеальной для ежедневного использования.",
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
        comment: "Эта сумка просто идеальна! Кожа прекрасна, и она идеального размера для повседневных вещей.",
        createdAt: "2023-02-18T09:33:00Z"
      }
    ],
    stock: 45,
    colors: ["Brown", "Black", "Tan", "Burgundy"],
    tags: ["bag", "crossbody", "leather", "accessories"]
  },
  {
    id: uuidv4(),
    name: "Вязаная зимняя шапка",
    description: "Оставайтесь в тепле и стиле в холодную погоду с этой премиальной вязаной шапкой. Изготовленная из мягкой, утепляющей шерстяной смеси, она обеспечивает исключительное тепло, оставаясь при этом воздухопроницаемой. Классический рельефный дизайн обеспечивает универсальную посадку и вневременную привлекательность, что делает её неотъемлемой частью зимнего гардероба, дополняющей любой зимний наряд.",
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
        comment: "Невероятно мягкая и теплая! Она стала моей любимой шапкой для зимы.",
        createdAt: "2023-01-25T15:46:00Z"
      }
    ],
    stock: 85,
    colors: ["Grey", "Black", "Navy", "Burgundy", "Forest Green"],
    tags: ["beanie", "winter", "hat", "knitted", "accessories"]
  },
  {
    id: uuidv4(),
    name: "Ремень из натуральной кожи",
    description: "Завершите свой образ этим классическим кожаным ремнем. Изготовленный из кожи высшего качества, которая становится лучше с возрастом, он обладает вневременным дизайном с прочной пряжкой, выдерживающей ежедневную носку. Универсальный стиль одинаково хорошо сочетается как с джинсами, так и с брюками, делая его необходимым дополнением к любому гардеробу.",
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
        comment: "Отличный качественный ремень, который выглядит гораздо дороже своей цены. Очень доволен этой покупкой.",
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
    name: "Шейный платок из 100% шелка",
    description: "Добавьте нотку роскоши к любому наряду с этим универсальным шелковым платком. Изготовленный из 100% высококачественного тутового шелка, он красиво драпируется и ощущается невероятно мягким на коже. Яркий принт добавляет всплеск цвета и интереса как к повседневным, так и к формальным образам, а щедрый размер позволяет создавать множество вариантов стилизации в течение всего года.",
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
        comment: "Этот платок абсолютно великолепен! Шелк роскошный, а цвета даже ярче, чем на фото.",
        createdAt: "2023-06-12T10:33:00Z"
      }
    ],
    stock: 35,
    colors: ["Blue Floral", "Red Paisley", "Geometric Print", "Abstract Art"],
    tags: ["scarf", "silk", "accessories", "luxury"]
  },
  
  // Мебель
  {
    id: uuidv4(),
    name: "Современный диван",
    description: "Привнесите вечный стиль в свое жилое пространство с этим современным диваном в стиле середины века. Чистые линии и конические ножки создают классический силуэт, в то время как удобная набивка обеспечивает исключительную поддержку для отдыха. Обитый прочной, устойчивой к пятнам тканью, он сочетает в себе ретро-стиль с практической функциональностью для современных домов.",
    price: 899.99,
    discountPrice: 799.99,
    category: "furniture",
    images: [
      "https://images.pexels.com/photos/28576394/pexels-photo-28576394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/31847006/pexels-photo-31847006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    brand: "ModernHome",
    rating: 4.7,
    reviews: [
      {
        id: uuidv4(),
        userId: "user42",
        userName: "Jordan Lee",
        rating: 5,
        comment: "Этот диван абсолютно идеален! Качество выдающееся, и он выглядит именно так, как на фото.",
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
    name: "Скандинавский обеденный стол",
    description: "Создайте уютное обеденное пространство с этим элегантным столом в скандинавском стиле. Конструкция из массива дуба обеспечивает исключительную долговечность, а естественная отделка подчеркивает красивую текстуру дерева. Минималистичный дизайн с мягко расширяющимися ножками и гладкой столешницей создает вневременное изделие, которое дополняет различные стили интерьера.",
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
        comment: "Потрясающе великолепный стол! Мастерство изготовления превосходное, и он еще красивее вживую.",
        createdAt: "2023-03-18T09:33:00Z"
      }
    ],
    stock: 12,
    tags: ["table", "dining", "scandinavian", "furniture"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Эргономичное офисное кресло",
    description: "Улучшите свою домашнюю рабочую обстановку с этим премиальным эргономичным офисным креслом. Регулируемая высота, поясничная поддержка и механизм наклона позволяют найти идеальное положение для сидения, а дышащая сетчатая спинка сохраняет прохладу во время длительных рабочих сессий. Прочная конструкция и плавно катящиеся колесики обеспечивают годы комфортного использования.",
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
        comment: "Игра-изменитель для моего домашнего офиса! Моя боль в спине значительно уменьшилась с тех пор, как я приобрел это кресло.",
        createdAt: "2023-05-10T16:45:00Z"
      }
    ],
    stock: 25,
    colors: ["Black", "Grey", "Blue"],
    tags: ["chair", "office", "ergonomic", "furniture"]
  },
  {
    id: uuidv4(),
    name: "Книжный шкаф из массива дерева",
    description: "Демонстрируйте свои книги и ценные предметы с этим красивым книжным шкафом из массива дерева. Прочная конструкция обеспечивает стабильность, а натуральная деревянная отделка добавляет тепла любой комнате. Пять просторных полок предоставляют достаточно места для хранения, а вневременной дизайн гармонично сочетается с различными стилями интерьера от традиционного до современного.",
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
        comment: "Этот книжный шкаф абсолютно великолепен! Качество дерева отличное, а сборка была простой.",
        createdAt: "2023-02-20T13:22:00Z"
      }
    ],
    stock: 18,
    colors: ["Natural Oak", "Walnut", "Cherry"],
    tags: ["bookshelf", "storage", "wooden", "furniture"]
  },
  {
    id: uuidv4(),
    name: "Платформенная кровать размера Queen",
    description: "Преобразите свою спальню с этой стильной и функциональной платформенной кроватью. Рама из массива дерева обеспечивает исключительную поддержку для вашего матраса без необходимости в пружинном блоке, а мягкое изголовье создает удобную спинку для чтения в постели. Минималистичный дизайн и четкие линии прекрасно смотрятся в современной обстановке спальни.",
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
        comment: "Обожаю эту кровать! Она прочная, красивая, а мягкое изголовье очень удобно для опоры.",
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
    name: "Журнальный столик со стеклянной столешницей",
    description: "Добавьте нотку элегантности в вашу гостиную с этим современным журнальным столиком со стеклянной столешницей. Поверхность из закаленного стекла создает ощущение открытости, одновременно демонстрируя изящную металлическую раму под ней. Минималистичный дизайн сочетает форму и функциональность, обеспечивая стильную, но практичную поверхность для напитков, книг и декоративных предметов.",
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
        comment: "Красивый стол, который выглядит дороже, чем стоит. Легко собирается и очень прочный.",
        createdAt: "2023-06-02T11:18:00Z"
      }
    ],
    stock: 22,
    colors: ["Black/Clear", "Gold/Clear", "Chrome/Smoked"],
    tags: ["coffee table", "glass", "living room", "furniture"]
  },
  {
    id: uuidv4(),
    name: "Пуф с отделением для хранения",
    description: "Максимально используйте свое пространство с этим универсальным пуфом для хранения. Мягкий верх обеспечивает удобное дополнительное сиденье или место для отдыха ног, а открывающаяся крышка открывает просторное место для хранения одеял, подушек или других предметов. Прочная обивка и надежная конструкция гарантируют, что этот практичный предмет будет служить вашему дому долгие годы.",
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
        comment: "Идеальное дополнение к моей гостиной! Он достаточно прочный, чтобы на нем сидеть, и вмещает все мои пледы.",
        createdAt: "2023-03-15T17:40:00Z"
      }
    ],
    stock: 30,
    colors: ["Grey", "Beige", "Navy", "Black"],
    tags: ["ottoman", "storage", "seating", "furniture"]
  },
  {
    id: uuidv4(),
    name: "Регулируемый стоячий стол",
    description: "Улучшите свою рабочую среду с этим премиальным регулируемым стоячим столом. Электрическая система регулировки высоты плавно переходит между положениями сидя и стоя одним нажатием кнопки, позволяя вам менять позу в течение дня. Просторная столешница предоставляет достаточно места для вашего компьютера и рабочих материалов, а прочная рама обеспечивает стабильность на любой высоте.",
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
        comment: "Этот стол преобразил мой опыт работы из дома! Регулировка плавная и тихая, а качество превосходное.",
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
    name: "Полночная библиотека",
    description: "Между жизнью и смертью существует библиотека, и в этой библиотеке полки продолжаются бесконечно. Каждая книга дает шанс прожить другую жизнь, которую вы могли бы иметь. Увидеть, как сложились бы вещи, если бы вы сделали другой выбор... Сделали бы вы что-нибудь иначе, если бы у вас был шанс исправить свои сожаления? Ослепительный роман обо всех выборах, которые складываются в хорошо прожитую жизнь.",
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
        comment: "Одна из самых красивых, заставляющих задуматься книг, которые я когда-либо читал. Не мог оторваться!",
        createdAt: "2023-04-18T15:33:00Z"
      }
    ],
    stock: 45,
    tags: ["fiction", "fantasy", "philosophical", "contemporary"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Атомные привычки",
    description: "Независимо от ваших целей, 'Атомные привычки' предлагает проверенную систему для улучшения каждый день. Джеймс Клир, один из ведущих мировых экспертов по формированию привычек, раскрывает практические стратегии, которые научат вас точно, как формировать хорошие привычки, избавляться от плохих и осваивать крошечные поведенческие изменения, ведущие к поразительным результатам. Эта прорывная книга раскрывает, как небольшие изменения могут привести к массовым преобразованиям.",
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
        comment: "Книга, меняющая жизнь, с практическими советами, которые действительно работают. Я рекомендовал её всем, кого знаю!",
        createdAt: "2023-03-10T09:27:00Z"
      }
    ],
    stock: 60,
    tags: ["non-fiction", "self-help", "productivity", "psychology"],
    featured: true
  },
  {
    id: uuidv4(),
    name: "Проект 'Аве Мария'",
    description: "Райланд Грейс - единственный выживший в отчаянной миссии последнего шанса, и если он потерпит неудачу, человечество и сама Земля погибнут. Только вот сейчас он этого не знает. Он даже не может вспомнить своё собственное имя, не говоря уже о характере своего задания или о том, как его выполнить. Всё, что он знает, - это то, что он очень, очень долго спал. И его только что разбудили, чтобы обнаружить себя в миллионах миль от дома, без ничего, кроме двух трупов в качестве компании.",
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
        comment: "Даже лучше, чем 'Марсианин'! Идеальное сочетание науки, юмора и захватывающего дух напряжения.",
        createdAt: "2023-05-22T16:45:00Z"
      }
    ],
    stock: 40,
    tags: ["science fiction", "space", "adventure", "thriller"]
  },
  {
    id: uuidv4(),
    name: "Психология денег",
    description: "Успех в обращении с деньгами не обязательно зависит от того, что вы знаете. Это зависит от того, как вы себя ведёте. А поведению трудно научить, даже очень умных людей. В 'Психологии денег' отмеченный наградами автор Морган Хаузел делится 19 короткими историями, исследующими странные способы мышления людей о деньгах, и учит вас лучше понимать одну из самых важных тем в жизни.",
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
        comment: "Одна из лучших книг о личных финансах, которые я когда-либо читал. Ясные, проницательные и практические советы для всех.",
        createdAt: "2023-02-14T09:18:00Z"
      }
    ],
    stock: 55,
    tags: ["non-fiction", "finance", "psychology", "economics"],
    newArrival: true
  },
  {
    id: uuidv4(),
    name: "Песнь Ахилла",
    description: "Греция в эпоху героев. Патрокл, неловкий молодой принц, был изгнан ко двору царя Пелея и его совершенного сына Ахилла. По всем правилам их пути никогда не должны были пересечься, но Ахилл берёт опозоренного принца в друзья, и когда они растут и становятся молодыми людьми, искусными в военном деле и медицине, их связь расцветает во что-то более глубокое - несмотря на недовольство матери Ахилла Фетиды, жестокой морской богини.",
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
        comment: "Абсолютно потрясающий пересказ Илиады. Проза прекрасна, а история одновременно душераздирающая и захватывающая.",
        createdAt: "2023-05-25T16:40:00Z"
      }
    ],
    stock: 35,
    tags: ["fiction", "historical fiction", "mythology", "romance"]
  },
  {
    id: uuidv4(),
    name: "Туда, где раки поют",
    description: "В течение многих лет слухи о 'Болотной девочке' преследуют Баркли-Коув, тихий городок на побережье Северной Каролины. Поэтому в конце 1969 года, когда красавец Чейз Эндрюс найден мёртвым, местные жители сразу подозревают Кию Кларк, так называемую Болотную девочку. Но Кия не такая, как о ней говорят. Чувствительная и умная, она годами выживала одна на болоте, которое называет своим домом, находя друзей в чайках и уроки в песке.",
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
        comment: "Прекрасно написанная история, которая полностью перенесла меня на болота Северной Каролины. Не мог оторваться!",
        createdAt: "2023-03-30T14:22:00Z"
      }
    ],
    stock: 50,
    tags: ["fiction", "mystery", "coming of age", "nature"],
    bestseller: true
  },
  {
    id: uuidv4(),
    name: "Образованная: Мемуары",
    description: "Рождённая в семье выживальщиков в горах Айдахо, Тара Вестовер было семнадцать, когда она впервые переступила порог класса. Её семья была настолько изолирована от основного общества, что никто не следил за тем, чтобы дети получали образование, и никто не вмешивался, когда один из её старших братьев стал жестоким. Когда другой брат поступил в колледж, Тара решила попробовать новый образ жизни. Её стремление к знаниям преобразило её, перенеся через океаны и континенты, в Гарвард и в Кембриджский университет.",
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
        comment: "Одни из самых сильных мемуаров, которые я когда-либо читал. Свидетельство человеческого духа и преобразующей силы образования.",
        createdAt: "2023-04-05T13:27:00Z"
      }
    ],
    stock: 45,
    tags: ["non-fiction", "memoir", "autobiography", "education"]
  },
  {
    id: uuidv4(),
    name: "Невидимая жизнь Адди Ларю",
    description: "Франция, 1714 год: в момент отчаяния молодая женщина заключает фаустовскую сделку, чтобы жить вечно, и проклята быть забытой всеми, кого она встречает. Так начинается необычайная жизнь Адди Ларю и ослепительное приключение, которое разворачивается на протяжении веков и континентов, через историю и искусство, когда молодая женщина узнает, как далеко она готова пойти, чтобы оставить свой след в мире. Но всё меняется, когда, почти через 300 лет, Адди натыкается на молодого человека в скрытом книжном магазине, и он помнит её имя.",
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
        comment: "Преследующая, красивая история о памяти, искусстве и о том, что значит оставить след в мире. Совершенно завораживает.",
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
    category: "Возврат товаров и возврат денежных средств"
  },
  {
    id: uuidv4(),
    question: "Сколько времени занимает доставка?",
    answer: "Стандартная доставка обычно занимает 3-5 рабочих дней в континентальной части США.Экспресс-варианты доставки (2-дневная и ночевка) также доступны при оформлении заказа за дополнительную плату.Международное время доставки варьируется в зависимости от пункта назначения, обычно занимая 7-14 рабочих дней.",
    category: "Доставка"
  },
  {
    id: uuidv4(),
    question: "Вы отправляете на международном уровне?",
    answer: "Да, мы отправляемся в большинство стран по всему миру.Международные варианты доставки, затраты и сроки доставки будут рассчитаны при оформлении заказа на основе вашего местоположения.Обратите внимание, что клиенты несут ответственность за любые таможенные сборы или импортные пошлины, которые могут применяться.",
    category: "Доставка"
  },
  {
    id: uuidv4(),
    question: "Как я могу изменить или отменить заказ?",
    answer: "Если вам нужно изменить или отменить заказ, пожалуйста, свяжитесь с нашей командой по обслуживанию клиентов как можно скорее.Обычно мы можем приспособить изменения, если заказ еще не был обработан для доставки, что обычно происходит в течение 1-2 часов после заказа.",
    category: "Заказы"
  },
  {
    id: uuidv4(),
    question: "Какие способы оплаты вы принимаете?",
    answer: "Мы принимаем все основные кредитные карты (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay и Google Pay.По соображениям безопасности мы не принимаем наличные, чеки или COD (наличные на доставке).",
    category: "Оплата"
  },
  {
    id: uuidv4(),
    question: "Мои платежные данные безопасны?",
    answer: "Абсолютно.Мы используем стандартный отраслевой шифрование и безопасные процессоры платежей, чтобы гарантировать, что ваша платежная информация всегда защищена.Мы никогда не храним ваши полные данные кредитной карты на наших серверах.",
    category: "Оплата"
  },
  {
    id: uuidv4(),
    question: "Как создать учетную запись?",
    answer: "Вы можете создать учетную запись, нажав ссылку «Зарегистрироваться» в правом верхнем углу нашего веб -сайта.Вам нужно будет предоставить свой адрес электронной почты и создать пароль.Вы также можете зарегистрироваться в процессе оформления заказа, если вы совершаете свою первую покупку.",
    category: "Счет"
  },
  {
    id: uuidv4(),
    question: "Как сбросить пароль?",
    answer: "Если вы забыли свой пароль, нажмите на ссылку «Вход», затем выберите «Забыли свой пароль?»Введите адрес электронной почты, связанный с вашей учетной записью, и мы отправим вам инструкции для сброса вашего пароля.",
    category: "Счет"
  },
  {
    id: uuidv4(),
    question: "Вы предлагаете гарантию на продукты?",
    answer: "Гарантийное покрытие варьируется в зависимости от категории продуктов и бренда.Большинство электроники поставляются с 1-летней гарантией производителя, в то время как мебель обычно включает в себя 3-летнюю гарантию на производственные дефекты.Полная гарантийная информация доступна на каждой странице продукта.",
    category: "Товары"
  }
];