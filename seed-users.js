// seed-users.js
import { neon } from '@netlify/neon';

// автоматически берёт строку подключения из переменной NETLIFY_DATABASE_URL
const sql = neon();

async function seed() {
  // Создаём таблицу users, если её нет
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username TEXT NOT NULL,
      role TEXT NOT NULL
    )
  `;

  // Добавляем тестовых пользователей
  await sql`
    INSERT INTO users (username, role)
    VALUES
      ('admin', 'admin'),
      ('john_doe', 'user'),
      ('jane_smith', 'user')
  `;

  console.log("✅ Таблица users создана и тестовые пользователи добавлены!");
}

seed().catch(err => {
  console.error("❌ Ошибка при добавлении данных:", err);
});
