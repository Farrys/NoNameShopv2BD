/*
  # Seed Initial Data

  1. Sample Data
    - Insert sample users (admin and customers)
    - Insert product categories and products
    - Insert sample orders and order items
    - Insert sample reviews

  2. Admin User
    - Create admin user for testing
    - Set admin role

  3. Sample Products
    - Insert products from different categories
    - Include images, pricing, and inventory data

  Note: This is sample data for development/testing purposes
*/

-- Insert admin user
INSERT INTO users (id, email, name, role) VALUES 
('00000000-0000-0000-0000-000000000001', 'admin@nonameshop.com', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample customers
INSERT INTO users (email, name, role) VALUES 
('john.doe@example.com', 'John Doe', 'customer'),
('jane.smith@example.com', 'Jane Smith', 'customer'),
('mike.johnson@example.com', 'Mike Johnson', 'customer'),
('sarah.wilson@example.com', 'Sarah Wilson', 'customer'),
('david.brown@example.com', 'David Brown', 'customer')
ON CONFLICT (email) DO NOTHING;

-- Insert sample products
INSERT INTO products (
  name, description, price, discount_price, category, images, brand, 
  rating, stock, colors, sizes, tags, featured, bestseller, new_arrival
) VALUES 
(
  'Premium Cotton T-Shirt',
  'Comfortable and stylish cotton t-shirt made from 100% organic cotton. Perfect for casual wear with a modern fit that flatters all body types.',
  29.99,
  24.99,
  'clothing',
  ARRAY['https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg', 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'],
  'UrbanStyle',
  4.5,
  50,
  ARRAY['Black', 'White', 'Blue', 'Gray'],
  ARRAY['S', 'M', 'L', 'XL'],
  ARRAY['casual', 'cotton', 'organic'],
  true,
  true,
  false
),
(
  'Classic Denim Jeans',
  'Timeless denim jeans with a perfect fit. Made from premium denim fabric with stretch for comfort and durability.',
  79.99,
  59.99,
  'clothing',
  ARRAY['https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg'],
  'DenimCo',
  4.3,
  30,
  ARRAY['Blue', 'Black', 'Light Blue'],
  ARRAY['28', '30', '32', '34', '36'],
  ARRAY['denim', 'classic', 'stretch'],
  false,
  true,
  false
),
(
  'Wireless Bluetooth Headphones',
  'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
  199.99,
  NULL,
  'electronics',
  ARRAY['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg', 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg'],
  'SoundMaster',
  4.8,
  15,
  ARRAY['Black', 'White', 'Silver'],
  NULL,
  ARRAY['wireless', 'bluetooth', 'noise-cancelling'],
  true,
  false,
  true
),
(
  'Smart Fitness Watch',
  'Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity. Track your health and fitness goals.',
  299.99,
  249.99,
  'electronics',
  ARRAY['https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg', 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg'],
  'FitTech',
  4.6,
  25,
  ARRAY['Black', 'Silver', 'Rose Gold'],
  NULL,
  ARRAY['fitness', 'smartwatch', 'health'],
  false,
  true,
  true
),
(
  'Running Sneakers',
  'Professional running shoes with advanced cushioning and breathable mesh upper. Designed for comfort and performance.',
  129.99,
  99.99,
  'footwear',
  ARRAY['https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg', 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg'],
  'RunFast',
  4.4,
  40,
  ARRAY['White', 'Black', 'Blue', 'Red'],
  ARRAY['7', '8', '9', '10', '11', '12'],
  ARRAY['running', 'sports', 'comfortable'],
  false,
  false,
  true
),
(
  'Luxury Face Cream',
  'Premium anti-aging face cream with natural ingredients. Hydrates and rejuvenates your skin for a youthful glow.',
  89.99,
  69.99,
  'cosmetics',
  ARRAY['https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg', 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg'],
  'BeautyLux',
  4.7,
  20,
  NULL,
  NULL,
  ARRAY['skincare', 'anti-aging', 'luxury'],
  true,
  false,
  false
),
(
  'Classic Leather Watch',
  'Elegant leather watch with Swiss movement. Perfect accessory for both casual and formal occasions.',
  149.99,
  129.99,
  'accessories',
  ARRAY['https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg', 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg'],
  'TimeWell',
  4.7,
  25,
  ARRAY['Brown', 'Black'],
  NULL,
  ARRAY['watch', 'leather', 'classic'],
  false,
  true,
  false
),
(
  'Modern Office Chair',
  'Ergonomic office chair with lumbar support and adjustable height. Perfect for long working hours with maximum comfort.',
  299.99,
  249.99,
  'furniture',
  ARRAY['https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg', 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg'],
  'ComfortSeating',
  4.5,
  12,
  ARRAY['Black', 'Gray', 'White'],
  NULL,
  ARRAY['office', 'ergonomic', 'adjustable'],
  false,
  false,
  true
),
(
  'Web Development Guide',
  'Comprehensive guide to modern web development covering HTML, CSS, JavaScript, and popular frameworks.',
  39.99,
  29.99,
  'books',
  ARRAY['https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg', 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg'],
  'TechBooks',
  4.8,
  100,
  NULL,
  NULL,
  ARRAY['programming', 'web-development', 'education'],
  true,
  true,
  false
),
(
  'Wireless Gaming Mouse',
  'High-precision wireless gaming mouse with RGB lighting and programmable buttons. Perfect for competitive gaming.',
  79.99,
  59.99,
  'electronics',
  ARRAY['https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg', 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'],
  'GameTech',
  4.6,
  35,
  ARRAY['Black', 'White'],
  NULL,
  ARRAY['gaming', 'wireless', 'rgb'],
  false,
  false,
  true
)
ON CONFLICT (name) DO NOTHING;

-- Insert sample reviews (after products are inserted)
DO $$
DECLARE
    product_1_id uuid;
    product_2_id uuid;
    product_3_id uuid;
    user_1_id uuid;
    user_2_id uuid;
    user_3_id uuid;
BEGIN
    -- Get product IDs
    SELECT id INTO product_1_id FROM products WHERE name = 'Premium Cotton T-Shirt' LIMIT 1;
    SELECT id INTO product_2_id FROM products WHERE name = 'Classic Denim Jeans' LIMIT 1;
    SELECT id INTO product_3_id FROM products WHERE name = 'Wireless Bluetooth Headphones' LIMIT 1;
    
    -- Get user IDs
    SELECT id INTO user_1_id FROM users WHERE email = 'john.doe@example.com' LIMIT 1;
    SELECT id INTO user_2_id FROM users WHERE email = 'jane.smith@example.com' LIMIT 1;
    SELECT id INTO user_3_id FROM users WHERE email = 'mike.johnson@example.com' LIMIT 1;
    
    -- Insert reviews if products and users exist
    IF product_1_id IS NOT NULL AND user_1_id IS NOT NULL THEN
        INSERT INTO reviews (product_id, user_id, rating, comment) VALUES 
        (product_1_id, user_1_id, 5, 'Great quality t-shirt, very comfortable!')
        ON CONFLICT (product_id, user_id) DO NOTHING;
    END IF;
    
    IF product_1_id IS NOT NULL AND user_2_id IS NOT NULL THEN
        INSERT INTO reviews (product_id, user_id, rating, comment) VALUES 
        (product_1_id, user_2_id, 4, 'Nice fit and good material.')
        ON CONFLICT (product_id, user_id) DO NOTHING;
    END IF;
    
    IF product_2_id IS NOT NULL AND user_3_id IS NOT NULL THEN
        INSERT INTO reviews (product_id, user_id, rating, comment) VALUES 
        (product_2_id, user_3_id, 4, 'Good quality jeans, fits well.')
        ON CONFLICT (product_id, user_id) DO NOTHING;
    END IF;
    
    IF product_3_id IS NOT NULL AND user_1_id IS NOT NULL THEN
        INSERT INTO reviews (product_id, user_id, rating, comment) VALUES 
        (product_3_id, user_1_id, 5, 'Amazing sound quality and battery life!')
        ON CONFLICT (product_id, user_id) DO NOTHING;
    END IF;
END $$;

-- Insert sample orders
DO $$
DECLARE
    user_1_id uuid;
    user_2_id uuid;
    product_1_id uuid;
    product_2_id uuid;
    order_1_id uuid;
    order_2_id uuid;
BEGIN
    -- Get user IDs
    SELECT id INTO user_1_id FROM users WHERE email = 'john.doe@example.com' LIMIT 1;
    SELECT id INTO user_2_id FROM users WHERE email = 'jane.smith@example.com' LIMIT 1;
    
    -- Get product IDs
    SELECT id INTO product_1_id FROM products WHERE name = 'Premium Cotton T-Shirt' LIMIT 1;
    SELECT id INTO product_2_id FROM products WHERE name = 'Wireless Bluetooth Headphones' LIMIT 1;
    
    -- Insert sample orders if users exist
    IF user_1_id IS NOT NULL THEN
        INSERT INTO orders (user_id, status, subtotal, shipping, tax, total, payment_method, shipping_address)
        VALUES (
            user_1_id,
            'delivered',
            49.98,
            0.00,
            3.50,
            53.48,
            'Credit Card',
            '{"name": "Home", "street": "123 Main St", "city": "San Francisco", "state": "CA", "zipCode": "94105", "country": "USA"}'::jsonb
        )
        RETURNING id INTO order_1_id;
        
        -- Insert order items if order and products exist
        IF order_1_id IS NOT NULL AND product_1_id IS NOT NULL THEN
            INSERT INTO order_items (order_id, product_id, quantity, price, color, size)
            VALUES (order_1_id, product_1_id, 2, 24.99, 'Black', 'L');
        END IF;
    END IF;
    
    IF user_2_id IS NOT NULL THEN
        INSERT INTO orders (user_id, status, subtotal, shipping, tax, total, payment_method, shipping_address)
        VALUES (
            user_2_id,
            'processing',
            199.99,
            5.99,
            14.00,
            219.98,
            'PayPal',
            '{"name": "Work", "street": "456 Business Ave", "city": "New York", "state": "NY", "zipCode": "10001", "country": "USA"}'::jsonb
        )
        RETURNING id INTO order_2_id;
        
        -- Insert order items if order and products exist
        IF order_2_id IS NOT NULL AND product_2_id IS NOT NULL THEN
            INSERT INTO order_items (order_id, product_id, quantity, price, color)
            VALUES (order_2_id, product_2_id, 1, 199.99, 'Black');
        END IF;
    END IF;
END $$;