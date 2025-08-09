# Database Schema - NoName Shop

## Overview
This document describes the database schema for the NoName Shop e-commerce platform using Supabase (PostgreSQL).

## Tables

### 1. users
Stores user account information and authentication data.

```sql
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  avatar text,
  role text DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id`: Unique identifier for the user
- `email`: User's email address (unique)
- `name`: User's full name
- `avatar`: URL to user's profile picture (optional)
- `role`: User role (customer or admin)
- `created_at`: Account creation timestamp
- `updated_at`: Last update timestamp

**Indexes:**
- `idx_users_email` on `email`
- `idx_users_role` on `role`

**RLS Policies:**
- Users can read/update their own data
- Admins can read all users

### 2. products
Stores product catalog information.

```sql
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL CHECK (price > 0),
  discount_price decimal(10,2) CHECK (discount_price IS NULL OR discount_price > 0),
  category text NOT NULL,
  images text[] NOT NULL DEFAULT '{}',
  brand text NOT NULL,
  rating decimal(3,2) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  stock integer DEFAULT 0 CHECK (stock >= 0),
  colors text[] DEFAULT '{}',
  sizes text[] DEFAULT '{}',
  tags text[] DEFAULT '{}',
  featured boolean DEFAULT false,
  bestseller boolean DEFAULT false,
  new_arrival boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id`: Unique identifier for the product
- `name`: Product name
- `description`: Product description
- `price`: Regular price
- `discount_price`: Sale price (optional)
- `category`: Product category
- `images`: Array of image URLs
- `brand`: Product brand
- `rating`: Average rating (0-5)
- `stock`: Available quantity
- `colors`: Available colors (optional)
- `sizes`: Available sizes (optional)
- `tags`: Product tags for search/filtering
- `featured`: Featured product flag
- `bestseller`: Bestseller flag
- `new_arrival`: New arrival flag
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

**Indexes:**
- `idx_products_category` on `category`
- `idx_products_brand` on `brand`
- `idx_products_featured` on `featured`
- `idx_products_bestseller` on `bestseller`
- `idx_products_new_arrival` on `new_arrival`
- `idx_products_price` on `price`
- `idx_products_rating` on `rating`

**RLS Policies:**
- Public read access
- Admin-only write access

### 3. orders
Stores order information.

```sql
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'canceled')),
  subtotal decimal(10,2) NOT NULL CHECK (subtotal >= 0),
  shipping decimal(10,2) DEFAULT 0 CHECK (shipping >= 0),
  tax decimal(10,2) DEFAULT 0 CHECK (tax >= 0),
  total decimal(10,2) NOT NULL CHECK (total >= 0),
  payment_method text NOT NULL,
  shipping_address jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id`: Unique identifier for the order
- `user_id`: Reference to the user who placed the order
- `status`: Order status (pending, processing, shipped, delivered, canceled)
- `subtotal`: Subtotal amount
- `shipping`: Shipping cost
- `tax`: Tax amount
- `total`: Total order amount
- `payment_method`: Payment method used
- `shipping_address`: Shipping address as JSON
- `created_at`: Order creation timestamp
- `updated_at`: Last update timestamp

**Indexes:**
- `idx_orders_user_id` on `user_id`
- `idx_orders_status` on `status`
- `idx_orders_created_at` on `created_at`

**RLS Policies:**
- Users can read their own orders
- Admins can read/update all orders
- Users can create orders

### 4. order_items
Stores individual items within orders.

```sql
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  quantity integer NOT NULL CHECK (quantity > 0),
  price decimal(10,2) NOT NULL CHECK (price > 0),
  color text,
  size text,
  created_at timestamptz DEFAULT now()
);
```

**Columns:**
- `id`: Unique identifier for the order item
- `order_id`: Reference to the parent order
- `product_id`: Reference to the product
- `quantity`: Quantity ordered
- `price`: Price at time of order
- `color`: Selected color (optional)
- `size`: Selected size (optional)
- `created_at`: Creation timestamp

**Indexes:**
- `idx_order_items_order_id` on `order_id`
- `idx_order_items_product_id` on `product_id`

**RLS Policies:**
- Users can read their own order items
- Admins can read all order items
- Users can create order items for their orders

### 5. reviews
Stores product reviews and ratings.

```sql
CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(product_id, user_id)
);
```

**Columns:**
- `id`: Unique identifier for the review
- `product_id`: Reference to the reviewed product
- `user_id`: Reference to the user who wrote the review
- `rating`: Rating (1-5 stars)
- `comment`: Review comment
- `created_at`: Review creation timestamp
- `updated_at`: Last update timestamp

**Constraints:**
- Unique constraint on `(product_id, user_id)` - one review per user per product

**Indexes:**
- `idx_reviews_product_id` on `product_id`
- `idx_reviews_user_id` on `user_id`
- `idx_reviews_rating` on `rating`

**RLS Policies:**
- Public read access
- Authenticated users can create reviews
- Users can update/delete their own reviews

## Relationships

```
users (1) ----< orders (M)
orders (1) ----< order_items (M)
products (1) ----< order_items (M)
products (1) ----< reviews (M)
users (1) ----< reviews (M)
```

## Triggers and Functions

### 1. update_updated_at_column()
Automatically updates the `updated_at` timestamp when a record is modified.

```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';
```

Applied to: `users`, `products`, `orders`, `reviews`

### 2. update_product_rating()
Automatically recalculates product rating when reviews are added/updated/deleted.

```sql
CREATE OR REPLACE FUNCTION update_product_rating()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE products 
  SET rating = (
    SELECT COALESCE(AVG(rating), 0)
    FROM reviews 
    WHERE product_id = COALESCE(NEW.product_id, OLD.product_id)
  )
  WHERE id = COALESCE(NEW.product_id, OLD.product_id);
  
  RETURN COALESCE(NEW, OLD);
END;
$$ language 'plpgsql';
```

## Row Level Security (RLS)

All tables have RLS enabled with appropriate policies:

### Security Model
- **Public Access**: Product catalog and reviews are publicly readable
- **User Access**: Users can only access their own orders, profiles, and reviews
- **Admin Access**: Admins have full access to all data
- **Data Integrity**: Constraints ensure data validity and prevent orphaned records

### Policy Examples

**Users Table:**
```sql
-- Users can read their own data
CREATE POLICY "Users can read own data"
  ON users FOR SELECT TO authenticated
  USING (auth.uid() = id);

-- Admins can read all users
CREATE POLICY "Admins can read all users"
  ON users FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() AND role = 'admin'
  ));
```

**Products Table:**
```sql
-- Public read access
CREATE POLICY "Products are publicly readable"
  ON products FOR SELECT TO anon, authenticated
  USING (true);

-- Admin write access
CREATE POLICY "Admins can manage products"
  ON products FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() AND role = 'admin'
  ));
```

## Performance Considerations

1. **Indexes**: Strategic indexes on frequently queried columns
2. **Constraints**: Database-level validation for data integrity
3. **Cascading Deletes**: Automatic cleanup of related records
4. **Triggers**: Automatic maintenance of calculated fields
5. **RLS**: Row-level security for data isolation

## Migration Order

Execute migrations in this order:
1. `001_create_users_table.sql`
2. `002_create_products_table.sql`
3. `003_create_orders_table.sql`
4. `004_create_order_items_table.sql`
5. `005_create_reviews_table.sql`

This ensures proper foreign key relationships and dependencies.