# NoName Shop - E-commerce Platform

Современная платформа электронной коммерции с административной панелью, построенная на React, TypeScript, Tailwind CSS и Supabase.

## 🚀 Особенности

### Клиентская часть
- **Современный дизайн**: Responsive дизайн с Tailwind CSS
- **Каталог товаров**: Фильтрация, поиск, сортировка
- **Корзина покупок**: Управление товарами в корзине
- **Список желаний**: Сохранение понравившихся товаров
- **Аутентификация**: Регистрация и вход пользователей
- **Профиль пользователя**: Управление личными данными и адресами
- **Оформление заказов**: Полный процесс покупки
- **Отзывы и рейтинги**: Система оценок товаров

### Административная панель
- **Панель управления**: Статистика и аналитика
- **Управление товарами**: CRUD операции для товаров
- **Управление заказами**: Просмотр и изменение статусов заказов
- **Управление пользователями**: Просмотр и управление ролями
- **Экспорт данных**: PDF, Excel, JSON, CSV форматы
- **Безопасность**: Отдельная аутентификация для администраторов

## 🛠 Технологический стек

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: Context API, Zustand
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Export**: jsPDF, xlsx
- **Build Tool**: Vite

## 📦 Установка и запуск

### Предварительные требования
- Node.js 18+ 
- npm или yarn
- Аккаунт Supabase

### 1. Клонирование репозитория
```bash
git clone <repository-url>
cd noname-shop
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка Supabase

1. Создайте новый проект в [Supabase](https://supabase.com)
2. Скопируйте URL проекта и анонимный ключ
3. Создайте файл `.env` на основе `.env.example`:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

VITE_ADMIN_EMAIL=admin@nonameshop.com
VITE_ADMIN_PASSWORD=admin123
```

### 4. Выполнение миграций базы данных

В панели Supabase SQL Editor выполните миграции в следующем порядке:

1. `supabase/migrations/001_create_users_table.sql`
2. `supabase/migrations/002_create_products_table.sql`
3. `supabase/migrations/003_create_orders_table.sql`
4. `supabase/migrations/004_create_order_items_table.sql`
5. `supabase/migrations/005_create_reviews_table.sql`

### 5. Запуск приложения
```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## 🗄 Схема базы данных

### Таблицы

#### users
- `id` (uuid, PK) - ID пользователя
- `email` (text, unique) - Email пользователя
- `name` (text) - Имя пользователя
- `avatar` (text, nullable) - URL аватара
- `role` (text) - Роль (customer/admin)
- `created_at`, `updated_at` (timestamptz) - Временные метки

#### products
- `id` (uuid, PK) - ID товара
- `name` (text) - Название товара
- `description` (text) - Описание
- `price` (decimal) - Цена
- `discount_price` (decimal, nullable) - Цена со скидкой
- `category` (text) - Категория
- `images` (text[]) - Массив URL изображений
- `brand` (text) - Бренд
- `rating` (decimal) - Рейтинг
- `stock` (integer) - Количество на складе
- `colors`, `sizes`, `tags` (text[], nullable) - Опции товара
- `featured`, `bestseller`, `new_arrival` (boolean) - Флаги
- `created_at`, `updated_at` (timestamptz) - Временные метки

#### orders
- `id` (uuid, PK) - ID заказа
- `user_id` (uuid, FK) - ID пользователя
- `status` (text) - Статус заказа
- `subtotal`, `shipping`, `tax`, `total` (decimal) - Суммы
- `payment_method` (text) - Способ оплаты
- `shipping_address` (jsonb) - Адрес доставки
- `created_at`, `updated_at` (timestamptz) - Временные метки

#### order_items
- `id` (uuid, PK) - ID позиции заказа
- `order_id` (uuid, FK) - ID заказа
- `product_id` (uuid, FK) - ID товара
- `quantity` (integer) - Количество
- `price` (decimal) - Цена на момент заказа
- `color`, `size` (text, nullable) - Выбранные опции
- `created_at` (timestamptz) - Временная метка

#### reviews
- `id` (uuid, PK) - ID отзыва
- `product_id` (uuid, FK) - ID товара
- `user_id` (uuid, FK) - ID пользователя
- `rating` (integer) - Оценка (1-5)
- `comment` (text) - Комментарий
- `created_at`, `updated_at` (timestamptz) - Временные метки

## 🔐 Безопасность (RLS)

Все таблицы защищены Row Level Security политиками:

- **Пользователи**: могут читать/изменять только свои данные
- **Товары**: публичное чтение, изменение только для админов
- **Заказы**: пользователи видят только свои заказы, админы - все
- **Отзывы**: публичное чтение, создание для авторизованных пользователей

## 👨‍💼 Административная панель

### Доступ
- URL: `/admin/login`
- Email: `admin@nonameshop.com`
- Пароль: `admin123`

### Функционал
- **Dashboard**: Общая статистика и метрики
- **Товары**: Управление каталогом товаров
- **Заказы**: Просмотр и управление заказами
- **Пользователи**: Управление пользователями и ролями

## 📊 Экспорт данных

Поддерживаемые форматы:
- **PDF**: Заказы и счета
- **Excel**: Товары и заказы
- **JSON**: Все данные
- **CSV**: Табличные данные

## 🚀 Развертывание

### Vercel/Netlify
1. Подключите репозиторий к платформе
2. Добавьте переменные окружения
3. Выполните деплой

### Docker
```bash
# Создание образа
docker build -t noname-shop .

# Запуск контейнера
docker run -p 3000:3000 --env-file .env noname-shop
```

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/AmazingFeature`)
3. Зафиксируйте изменения (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте в ветку (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 📝 Лицензия

Этот проект лицензирован под MIT License - см. файл [LICENSE](LICENSE) для деталей.

## 📞 Поддержка

Если у вас есть вопросы или проблемы:
- Создайте Issue в репозитории
- Напишите на email: support@nonameshop.com

## 🎯 Roadmap

- [ ] Интеграция с платежными системами (Stripe, PayPal)
- [ ] Многоязычность (i18n)
- [ ] PWA поддержка
- [ ] Мобильное приложение
- [ ] Расширенная аналитика
- [ ] Система уведомлений
- [ ] API для интеграций
- [ ] Система скидок и купонов