import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, Server, Lock, Network, AlertCircle } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
 // Слайд 1 - Що таке Docker Compose?
{
  title: "🐳 Що таке Docker Compose?",
  slideNumber: "1 / 12",
  gradient: "from-blue-500 to-cyan-600",
  content: (
    <div className="space-y-6">
      {/* Проблема */}
      <div className="bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
          <span className="text-2xl">😫</span>
          Проблема: Занадто багато команд!
        </h3>
        <pre className="bg-gray-900 text-red-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed">
{`# Запуск PostgreSQL
docker run -d \\
  --name postgres_db \\
  --network app-network \\
  -e POSTGRES_USER=user \\
  -e POSTGRES_PASSWORD=pass \\
  -e POSTGRES_DB=mydb \\
  -v postgres_data:/var/lib/postgresql/data \\
  postgres:15

# Запуск Backend
docker run -d \\
  --name fastapi_backend \\
  --network app-network \\
  -e DATABASE_URL=postgresql://user:pass@postgres_db:5432/mydb \\
  -e SECRET_KEY=secret \\
  --depends-on postgres_db \\  # Не працює в docker run!
  backend-image

# Запуск Frontend
docker run -d \\
  --name vue_frontend \\
  --network app-network \\
  -p 80:80 \\
  --depends-on fastapi_backend \\  # Не працює в docker run!
  frontend-image

# 😱 І це тільки для запуску!
# А якщо треба зупинити? Перезапустити? Rebuild?`}
        </pre>
      </div>

      {/* Рішення */}
      <div className="bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Рішення: Docker Compose!
        </h3>
        <pre className="bg-gray-900 text-green-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed">
{`# docker-compose.yml
version: '3.8'

services:
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

  backend:
    build: ./backend
    environment:
      DATABASE_URL: postgresql://user:pass@db:5432/mydb
      SECRET_KEY: secret
    depends_on:
      - db

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  postgres_data:

# 🚀 Запуск всього стеку:
# docker-compose up -d`}
        </pre>
      </div>

      {/* Переваги */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
          <h4 className="font-bold text-blue-700 mb-3 text-lg">✨ Переваги Docker Compose:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span><strong>Декларативний підхід:</strong> описуєте бажаний стан, а не команди</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span><strong>Одна команда:</strong> запускає весь стек (db + backend + frontend)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span><strong>Залежності:</strong> depends_on гарантує правильний порядок</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span><strong>Мережі:</strong> автоматично створює спільну мережу</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span><strong>Масштабування:</strong> легко додати нові сервіси</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600">✓</span>
              <span><strong>Відтворюваність:</strong> однакове середовище для всіх</span>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
          <h4 className="font-bold text-purple-700 mb-3 text-lg">🎯 Коли використовувати:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-purple-600">→</span>
              <span><strong>Локальна розробка:</strong> запуск повного стеку на dev машині</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">→</span>
              <span><strong>Тестування:</strong> CI/CD pipeline з multiple сервісами</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">→</span>
              <span><strong>Staging:</strong> середовище перед production</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600">→</span>
              <span><strong>Single-server prod:</strong> малі проекти на одному сервері</span>
            </div>
            <div className="bg-yellow-100 p-3 rounded mt-3 border border-yellow-300">
              <strong className="text-yellow-800">⚠️ Не для масштабованих production!</strong>
              <p className="text-xs text-yellow-700 mt-1">
                Для великих production систем → Kubernetes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Порівняння */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
        <h4 className="font-bold text-indigo-700 mb-3 text-lg">📊 Порівняння: docker run vs docker-compose</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="text-red-700">❌ docker run:</strong>
            <ul className="mt-2 space-y-1 text-red-800 text-xs">
              <li>• Багато окремих команд</li>
              <li>• Важко керувати залежностями</li>
              <li>• Треба вручну створювати networks</li>
              <li>• Складно відтворити на іншій машині</li>
              <li>• Немає версіонування конфігурації</li>
              <li>• Важко масштабувати</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-700">✅ docker-compose:</strong>
            <ul className="mt-2 space-y-1 text-green-800 text-xs">
              <li>• Одна команда для всього</li>
              <li>• Автоматичне управління залежностями</li>
              <li>• Автоматичне створення networks</li>
              <li>• Легко поділитися через git</li>
              <li>• Версіонування через YAML файл</li>
              <li>• Легко масштабувати та додавати сервіси</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Висновок */}
      <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5 flex gap-4">
        <div className="text-3xl">💡</div>
        <div>
          <h4 className="font-bold text-green-700 mb-2 text-lg">Підсумок:</h4>
          <p className="text-sm text-green-800 leading-relaxed">
            <strong>Docker Compose</strong> - це інструмент для визначення і запуску multi-container Docker застосунків. 
            Замість десятків команд <code className="bg-green-200 px-2 py-1 rounded">docker run</code>, ви описуєте всю 
            інфраструктуру в одному YAML файлі і керуєте всім стеком однією командою 
            <code className="bg-green-200 px-2 py-1 rounded">docker-compose up</code>!
          </p>
        </div>
      </div>
    </div>
  )
},
 // Слайд 2 - Структура docker-compose.yml (ВИПРАВЛЕНИЙ)
{
    title: "📁 Структура docker-compose.yml",
    slideNumber: "2 / 12",
    gradient: "from-purple-500 to-indigo-600",
    content: (
      <div className="space-y-6">
        {/* Базова структура */}
        <div className="bg-purple-50 border-4 border-purple-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-purple-700 mb-4">
            📋 Базова структура YAML файлу:
          </h3>
          <pre className="bg-gray-900 text-purple-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`version: '3.8'
  
  services:
    service1:
      image: example:latest
    service2:
      build: ./path
  
  networks:
    network1:
      driver: bridge
  
  volumes:
    volume1:`}
          </pre>
        </div>
  
        {/* Детальний приклад */}
        <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-blue-700 mb-4">
            🔍 Повний приклад:
          </h3>
          <pre className="bg-gray-900 text-blue-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`version: '3.8'
  
  services:
    db:
      image: postgres:15
      container_name: postgres_db
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: pass
      volumes:
        - postgres_data:/var/lib/postgresql/data
      networks:
        - app-network
  
    backend:
      build:
        context: ./backend
        dockerfile: Dockerfile.prod
      environment:
        DATABASE_URL: postgresql://user:pass@db:5432/mydb
      depends_on:
        - db
      networks:
        - app-network
  
    frontend:
      build: ./frontend
      ports:
        - "80:80"
      depends_on:
        - backend
      networks:
        - app-network
  
  networks:
    app-network:
      driver: bridge
  
  volumes:
    postgres_data:`}
          </pre>
        </div>
  
        {/* Ключові секції */}
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
              <h4 className="font-bold text-green-700 mb-2 text-sm">
                1️⃣ version
              </h4>
              <p className="text-xs text-green-800">
                Версія синтаксису Docker Compose. Рекомендується 3.8
              </p>
            </div>
  
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
              <h4 className="font-bold text-blue-700 mb-2 text-sm">
                2️⃣ services
              </h4>
              <p className="text-xs text-blue-800 mb-2">
                Список контейнерів. Кожен сервіс = один контейнер.
              </p>
              <div className="bg-white p-2 rounded text-xs">
                <strong>Основні параметри:</strong>
                <ul className="mt-1 space-y-1 ml-4">
                  <li>• image - готовий образ</li>
                  <li>• build - з Dockerfile</li>
                  <li>• ports - публічні порти</li>
                  <li>• environment - змінні</li>
                  <li>• volumes - дані</li>
                  <li>• depends_on - залежності</li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
              <h4 className="font-bold text-purple-700 mb-2 text-sm">
                3️⃣ networks
              </h4>
              <p className="text-xs text-purple-800">
                Мережі для з'єднання сервісів між собою
              </p>
            </div>
  
            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
              <h4 className="font-bold text-orange-700 mb-2 text-sm">
                4️⃣ volumes
              </h4>
              <p className="text-xs text-orange-800 mb-2">
                Named volumes для постійного зберігання даних
              </p>
              <div className="bg-white p-2 rounded text-xs">
                <strong>Типи:</strong>
                <ul className="mt-1 space-y-1 ml-4">
                  <li>• Named volume: postgres_data:/data</li>
                  <li>• Bind mount: ./code:/app</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* Порівняння */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
          <h4 className="font-bold text-yellow-700 mb-3 text-lg">
            image vs build
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-3 rounded">
              <strong>image:</strong>
              <pre className="bg-gray-900 text-yellow-400 p-2 rounded mt-2 text-xs">
  {`image: postgres:15`}
              </pre>
              <span className="text-xs text-gray-600">Готовий образ з Docker Hub</span>
            </div>
            <div className="bg-white p-3 rounded">
              <strong>build:</strong>
              <pre className="bg-gray-900 text-yellow-400 p-2 rounded mt-2 text-xs">
  {`build:
    context: ./backend
    dockerfile: Dockerfile.prod`}
              </pre>
              <span className="text-xs text-gray-600">Build з Dockerfile</span>
            </div>
          </div>
        </div>
  
        {/* Важливо */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
          <h4 className="font-bold text-indigo-700 mb-2 text-lg">💡 Важливо:</h4>
          <div className="text-sm text-indigo-800 space-y-1">
            <p>• Відступи YAML: 2 пробіли</p>
            <p>• Імена сервісів = hostname в мережі</p>
            <p>• depends_on чекає запуску, але не готовності</p>
            <p>• Порти: host:container (80:80)</p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 3 - docker-compose.dev.yml (Development)
  {
    title: "🔧 docker-compose.dev.yml - Development",
    slideNumber: "3 / 12",
    gradient: "from-green-500 to-teal-600",
    content: (
      <div className="space-y-6">
        {/* Повна конфігурація */}
        <div className="bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            📝 Повна конфігурація для розробки:
          </h3>
          <pre className="bg-gray-900 text-green-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`version: '3.8'
  
  services:
    # ═══════════════════════════════════════════
    # PostgreSQL Database
    # ═══════════════════════════════════════════
    db:
      image: postgres:15
      container_name: postgres_db_dev
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: pass
        POSTGRES_DB: mydb
      ports:
        - "5432:5432"  # ← Відкриваємо для прямого доступу!
      volumes:
        - postgres_data_dev:/var/lib/postgresql/data
      networks:
        - app-network
      restart: unless-stopped
  
    # ═══════════════════════════════════════════
    # FastAPI Backend (Development)
    # ═══════════════════════════════════════════
    backend:
      build:
        context: ./backend
        dockerfile: Dockerfile.dev  # ← Dev версія!
      container_name: fastapi_backend_dev
      environment:
        DATABASE_URL: postgresql://user:pass@db:5432/mydb
        SECRET_KEY: dev-secret-key-12345
        DEBUG: "true"
      ports:
        - "8000:8000"  # ← Відкриваємо для прямого доступу!
      volumes:
        - ./backend:/app           # ← Hot-reload!
        - /app/__pycache__         # Не перезаписуємо
      networks:
        - app-network
      depends_on:
        - db
      restart: unless-stopped
      command: uvicorn main:app --host 0.0.0.0 --reload  # --reload для hot-reload
  
    # ═══════════════════════════════════════════
    # Vue.js Frontend (Development)
    # ═══════════════════════════════════════════
    frontend:
      build:
        context: ./frontend
        dockerfile: Dockerfile.dev  # ← Dev версія!
      container_name: vue_frontend_dev
      environment:
        VITE_API_BASE: http://localhost:8000  # ← Прямий доступ до backend!
        VITE_ENABLE_DEBUG: "true"
      ports:
        - "5173:5173"  # ← Vite dev server
      volumes:
        - ./frontend:/app          # ← Hot-reload!
        - /app/node_modules        # Не перезаписуємо
      networks:
        - app-network
      depends_on:
        - backend
      restart: unless-stopped
  
  networks:
    app-network:
      driver: bridge
  
  volumes:
    postgres_data_dev:`}
          </pre>
        </div>
  
        {/* Ключові особливості Dev */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5">
            <h4 className="font-bold text-teal-700 mb-3 text-lg">✨ Особливості Development:</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border border-teal-200">
                <strong className="text-teal-700">1. Всі порти відкриті</strong>
                <pre className="bg-gray-900 text-teal-400 p-2 rounded mt-2 text-xs">
  {`ports:
    - "5432:5432"  # PostgreSQL
    - "8000:8000"  # Backend
    - "5173:5173"  # Frontend`}
                </pre>
                <span className="text-xs text-teal-600">Прямий доступ для debugging</span>
              </div>
  
              <div className="bg-white p-3 rounded border border-teal-200">
                <strong className="text-teal-700">2. Volumes для hot-reload</strong>
                <pre className="bg-gray-900 text-teal-400 p-2 rounded mt-2 text-xs">
  {`volumes:
    - ./frontend:/app
    - /app/node_modules`}
                </pre>
                <span className="text-xs text-teal-600">Синхронізація коду з хостом</span>
              </div>
  
              <div className="bg-white p-3 rounded border border-teal-200">
                <strong className="text-teal-700">3. Debug режим</strong>
                <pre className="bg-gray-900 text-teal-400 p-2 rounded mt-2 text-xs">
  {`environment:
    DEBUG: "true"
    VITE_ENABLE_DEBUG: "true"`}
                </pre>
                <span className="text-xs text-teal-600">Детальні логи та помилки</span>
              </div>
            </div>
          </div>
  
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h4 className="font-bold text-blue-700 mb-3 text-lg">🚀 Команди для роботи:</h4>
            <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Запуск development
  docker-compose -f docker-compose.dev.yml up
  
  # У фоновому режимі
  docker-compose -f docker-compose.dev.yml up -d
  
  # З rebuild
  docker-compose -f docker-compose.dev.yml up --build
  
  # Rebuild конкретного сервісу
  docker-compose -f docker-compose.dev.yml build frontend
  
  # Перегляд логів
  docker-compose -f docker-compose.dev.yml logs -f
  
  # Логи одного сервісу
  docker-compose -f docker-compose.dev.yml logs -f backend
  
  # Зупинка
  docker-compose -f docker-compose.dev.yml down
  
  # Зупинка + видалення volumes
  docker-compose -f docker-compose.dev.yml down -v
  
  # Перезапуск сервісу
  docker-compose -f docker-compose.dev.yml restart frontend`}
            </pre>
          </div>
        </div>
  
        {/* Volumes пояснення */}
        <div className="bg-yellow-50 border-4 border-yellow-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-yellow-700 mb-3">
            💾 Volumes - Hot-reload magic:
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-yellow-700">Bind mount для коду:</strong>
              <pre className="bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`volumes:
    - ./frontend:/app
  
  # Що це означає:
  # ./frontend (на хості) 
  #     ↓
  # /app (в контейнері)
  
  # Зміни в ./frontend автоматично
  # відображаються в /app`}
              </pre>
            </div>
            <div>
              <strong className="text-yellow-700">Anonymous volume для node_modules:</strong>
              <pre className="bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`volumes:
    - /app/node_modules
  
  # Захищає node_modules від 
  # перезапису з хоста
  
  # node_modules залишається 
  # тим, що був встановлений
  # в контейнері при build`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Доступ до сервісів */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
          <h4 className="font-bold text-purple-700 mb-3 text-lg">📍 Доступ до сервісів:</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border border-purple-200">
              <strong className="text-purple-700">Frontend:</strong><br/>
              <code className="text-purple-600 text-xs">http://localhost:5173</code><br/>
              <span className="text-xs text-gray-600">Vite dev server з HMR</span>
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <strong className="text-purple-700">Backend:</strong><br/>
              <code className="text-purple-600 text-xs">http://localhost:8000</code><br/>
              <span className="text-xs text-gray-600">FastAPI з auto-reload</span>
            </div>
            <div className="bg-white p-3 rounded border border-purple-200">
              <strong className="text-purple-700">Database:</strong><br/>
              <code className="text-purple-600 text-xs">localhost:5432</code><br/>
              <span className="text-xs text-gray-600">Прямий доступ для DBeaver</span>
            </div>
          </div>
        </div>
  
        {/* Переваги */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3">✅ Переваги для розробки:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">🔥</span>
                <span><strong>Hot-reload:</strong> зміни коду автоматично застосовуються</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">🐛</span>
                <span><strong>Debug:</strong> прямий доступ до всіх сервісів</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">💾</span>
                <span><strong>Volumes:</strong> код синхронізується миттєво</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">📊</span>
                <span><strong>Логи:</strong> детальні помилки та trace</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">🗄️</span>
                <span><strong>БД доступна:</strong> можна під'єднатися через GUI</span>
              </div>
            </div>
          </div>
  
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
            <h4 className="font-bold text-red-700 mb-3">⚠️ НЕ для Production:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Всі порти відкриті назовні</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Debug режим = більше інформації про помилки</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Використовує Vite dev server, а не Nginx</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Непотрібні volumes підключені</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Менш оптимізований для performance</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Важливо */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-indigo-700 mb-2 text-lg">Підсумок:</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              <code className="bg-indigo-200 px-2 py-1 rounded">docker-compose.dev.yml</code> налаштований для 
              <strong> максимальної зручності розробки</strong>: всі порти відкриті для debugging, volumes синхронізують 
              код для hot-reload, debug режим увімкнений. Одна команда 
              <code className="bg-indigo-200 px-2 py-1 rounded">docker-compose -f docker-compose.dev.yml up</code> 
              запускає весь стек (БД + Backend + Frontend) з усіма налаштуваннями для розробки!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 4 - docker-compose.yml (Production)
{
    title: "🚀 docker-compose.yml - Production",
    slideNumber: "4 / 12",
    gradient: "from-red-500 to-pink-600",
    content: (
      <div className="space-y-6">
        {/* Повна конфігурація */}
        <div className="bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-red-700 mb-4">
            📝 Повна конфігурація для Production:
          </h3>
          <pre className="bg-gray-900 text-red-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`version: '3.8'
  
  services:
    db:
      image: postgres:15
      container_name: postgres_db
      environment:
        POSTGRES_USER: user
        POSTGRES_PASSWORD: pass
        POSTGRES_DB: mydb
      volumes:
        - postgres_data:/var/lib/postgresql/data
      networks:
        - app-network
      restart: unless-stopped
      # Порт НЕ відкритий назовні!
  
    backend:
      build:
        context: ./backend
        dockerfile: Dockerfile.prod
      container_name: fastapi_backend
      environment:
        DATABASE_URL: postgresql://user:pass@db:5432/mydb
        SECRET_KEY: production-secret-key
      networks:
        - app-network
      depends_on:
        - db
      restart: unless-stopped
      # Порт НЕ відкритий назовні!
  
    frontend:
      build:
        context: ./frontend
        dockerfile: Dockerfile.prod
        args:
          VITE_API_BASE: /api
      container_name: vue_frontend
      ports:
        - "80:80"
      networks:
        - app-network
      depends_on:
        - backend
      restart: unless-stopped
  
  networks:
    app-network:
      driver: bridge
  
  volumes:
    postgres_data:`}
          </pre>
        </div>
  
        {/* Ключові відмінності */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3 text-lg">✅ Production особливості:</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border border-green-200">
                <strong className="text-green-700">1. Мінімум відкритих портів</strong>
                <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs">
  {`# Тільки frontend відкритий
  ports:
    - "80:80"
  
  # Backend і DB - internal only`}
                </pre>
                <span className="text-xs text-green-600">Безпека через ізоляцію</span>
              </div>
  
              <div className="bg-white p-3 rounded border border-green-200">
                <strong className="text-green-700">2. Production Dockerfiles</strong>
                <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs">
  {`dockerfile: Dockerfile.prod
  
  # Multi-stage build
  # Nginx замість Vite
  # Оптимізовані образи`}
                </pre>
                <span className="text-xs text-green-600">Мінімальний розмір, максимальна швидкість</span>
              </div>
  
              <div className="bg-white p-3 rounded border border-green-200">
                <strong className="text-green-700">3. БЕЗ volumes для коду</strong>
                <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs">
  {`# НЕ використовуємо:
  # volumes:
  #   - ./backend:/app
  
  # Код вбудований в образ`}
                </pre>
                <span className="text-xs text-green-600">Іммутабельні контейнери</span>
              </div>
  
              <div className="bg-white p-3 rounded border border-green-200">
                <strong className="text-green-700">4. Restart policies</strong>
                <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs">
  {`restart: unless-stopped
  
  # Автоматичний перезапуск
  # після збоїв або reboot`}
                </pre>
                <span className="text-xs text-green-600">Висока доступність</span>
              </div>
            </div>
          </div>
  
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h4 className="font-bold text-blue-700 mb-3 text-lg">🚀 Команди для Production:</h4>
            <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Запуск production
  docker-compose up -d
  
  # З rebuild
  docker-compose up --build -d
  
  # Rebuild без кешу
  docker-compose build --no-cache
  
  # Перегляд статусу
  docker-compose ps
  
  # Логи
  docker-compose logs -f
  
  # Логи за останню годину
  docker-compose logs --since 1h
  
  # Зупинка
  docker-compose down
  
  # Зупинка БЕЗ видалення volumes
  # (БД залишається!)
  docker-compose down
  
  # Перезапуск одного сервісу
  docker-compose restart backend
  
  # Масштабування (додати копії)
  docker-compose up -d --scale backend=3`}
            </pre>
          </div>
        </div>
  
        {/* Secrets & Environment */}
        <div className="bg-yellow-50 border-4 border-yellow-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-yellow-700 mb-3">
            🔐 Secrets & Environment variables:
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-yellow-700">.env файл (root):</strong>
              <pre className="bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`# .env
  POSTGRES_PASSWORD=super_secret_pass
  SECRET_KEY=jwt_secret_key_here
  DATABASE_URL=postgresql://user:pass@db/mydb`}
              </pre>
            </div>
            <div>
              <strong className="text-yellow-700">Використання в docker-compose:</strong>
              <pre className="bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`environment:
    POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
    SECRET_KEY: \${SECRET_KEY}
  
  # Docker Compose автоматично
  # підставить значення з .env`}
              </pre>
            </div>
          </div>
          <div className="bg-red-100 border border-red-300 p-3 rounded mt-3">
            <strong className="text-red-700">⚠️ Важливо:</strong>
            <p className="text-xs text-red-700 mt-1">
              Додайте .env в .gitignore! Ніколи не комітьте паролі в git!
            </p>
          </div>
        </div>
  
        {/* Порівняння Dev vs Prod */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
          <h4 className="font-bold text-purple-700 mb-3 text-lg">📊 Dev vs Production:</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-purple-100">
                <tr>
                  <th className="p-2 text-left">Параметр</th>
                  <th className="p-2 text-left">Development</th>
                  <th className="p-2 text-left">Production</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-t">
                  <td className="p-2 font-bold">Ports</td>
                  <td className="p-2 text-green-700">Всі відкриті (5432, 8000, 5173)</td>
                  <td className="p-2 text-blue-700">Тільки 80 (frontend)</td>
                </tr>
                <tr className="border-t bg-purple-50">
                  <td className="p-2 font-bold">Volumes</td>
                  <td className="p-2 text-green-700">Bind mounts для hot-reload</td>
                  <td className="p-2 text-blue-700">Тільки БД (named volume)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-bold">Dockerfile</td>
                  <td className="p-2 text-green-700">Dockerfile.dev (Vite server)</td>
                  <td className="p-2 text-blue-700">Dockerfile.prod (Nginx)</td>
                </tr>
                <tr className="border-t bg-purple-50">
                  <td className="p-2 font-bold">Debug</td>
                  <td className="p-2 text-green-700">Увімкнений</td>
                  <td className="p-2 text-blue-700">Вимкнений</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-bold">Restart</td>
                  <td className="p-2 text-green-700">unless-stopped</td>
                  <td className="p-2 text-blue-700">unless-stopped</td>
                </tr>
                <tr className="border-t bg-purple-50">
                  <td className="p-2 font-bold">Secrets</td>
                  <td className="p-2 text-green-700">Прості паролі</td>
                  <td className="p-2 text-blue-700">З .env файлу</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        {/* Доступ */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
          <h4 className="font-bold text-indigo-700 mb-3 text-lg">📍 Доступ у Production:</h4>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded border border-indigo-200">
              <strong className="text-indigo-700">Frontend:</strong><br/>
              <code className="text-indigo-600 text-xs">http://localhost/</code><br/>
              <span className="text-xs text-green-600">✓ Доступний</span>
            </div>
            <div className="bg-white p-3 rounded border border-indigo-200">
              <strong className="text-indigo-700">API через Nginx:</strong><br/>
              <code className="text-indigo-600 text-xs">http://localhost/api/</code><br/>
              <span className="text-xs text-green-600">✓ Через proxy</span>
            </div>
            <div className="bg-white p-3 rounded border border-gray-200">
              <strong className="text-gray-700">Backend + DB:</strong><br/>
              <code className="text-gray-600 text-xs">Internal only</code><br/>
              <span className="text-xs text-red-600">✗ Не доступні ззовні</span>
            </div>
          </div>
        </div>
  
        {/* Підсумок */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-green-700 mb-2 text-lg">Підсумок:</h4>
            <p className="text-sm text-green-800 leading-relaxed">
              Production конфігурація оптимізована для <strong>безпеки та performance</strong>: 
              мінімум відкритих портів, production Dockerfiles з multi-stage build та Nginx, 
              без volumes для коду (іммутабельні контейнери), secrets з .env файлу. 
              Команда <code className="bg-green-200 px-2 py-1 rounded">docker-compose up -d</code> 
              запускає весь production-ready стек!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 5 - Docker Networks
{
    title: "🔗 Docker Networks",
    slideNumber: "5 / 12",
    gradient: "from-indigo-500 to-purple-600",
    content: (
      <div className="space-y-6">
        {/* Схема мережі */}
        <div className="bg-indigo-50 border-4 border-indigo-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-indigo-700 mb-4 text-center">
            🌐 Як працює Docker Network:
          </h3>
          <div className="bg-white p-6 rounded-lg border-2 border-indigo-300">
            <pre className="text-indigo-700 text-xs leading-relaxed">
  {`┌─────────────────────────────────────────────────────────────┐
  │                  Docker Network: app-network                │
  │                         (bridge)                            │
  │                                                             │
  │  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
  │  │  Frontend    │    │   Backend    │    │  PostgreSQL  │  │
  │  │  (Nginx)     │◄──►│  (FastAPI)   │◄──►│     (DB)     │  │
  │  │              │    │              │    │              │  │
  │  │ Port: 80     │    │ Internal     │    │ Internal     │  │
  │  └──────┬───────┘    └──────────────┘    └──────────────┘  │
  │         │                                                   │
  │         │  Hostname резолюція:                             │
  │         │  • frontend → 172.20.0.2                         │
  │         │  • backend  → 172.20.0.3                         │
  │         │  • db       → 172.20.0.4                         │
  │         │                                                   │
  └─────────┼───────────────────────────────────────────────────┘
            │
            ↓
      [Host: 80] ← Тільки frontend доступний ззовні`}
            </pre>
          </div>
        </div>
  
        {/* Як це працює */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h4 className="font-bold text-blue-700 mb-3 text-lg">🎯 Як сервіси знаходять один одного:</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border border-blue-200">
                <strong className="text-blue-700">1. По імені сервісу</strong>
                <pre className="bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs">
  {`# Backend підключається до БД:
  DATABASE_URL=postgresql://user:pass@db:5432/mydb
                                      ↑
                              Ім'я сервісу з docker-compose!`}
                </pre>
              </div>
  
              <div className="bg-white p-3 rounded border border-blue-200">
                <strong className="text-blue-700">2. Nginx проксує на backend</strong>
                <pre className="bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs">
  {`# nginx.conf
  location /api/ {
      proxy_pass http://backend:8000;
                        ↑
                Ім'я сервісу з docker-compose!
  }`}
                </pre>
              </div>
  
              <div className="bg-white p-3 rounded border border-blue-200">
                <strong className="text-blue-700">3. Внутрішня DNS резолюція</strong>
                <p className="text-xs text-blue-600 mt-2">
                  Docker автоматично створює DNS записи для кожного сервісу. 
                  Коли контейнер звертається до "db", Docker резолвить це в IP адресу контейнера БД.
                </p>
              </div>
            </div>
          </div>
  
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3 text-lg">✨ Автоматичні можливості:</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong>Auto-discovery:</strong> Сервіси автоматично знаходять один одного по імені
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong>Ізоляція:</strong> Тільки сервіси в одній мережі можуть спілкуватися
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong>DNS:</strong> Внутрішній DNS server резолвить імена в IP
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong>Load balancing:</strong> При масштабуванні (scale) автоматично розподіляє навантаження
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <div>
                  <strong>No port conflicts:</strong> Внутрішні порти не конфліктують між контейнерами
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Конфігурація мережі */}
        <div className="bg-purple-50 border-4 border-purple-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-purple-700 mb-3">
            ⚙️ Конфігурація мережі в docker-compose:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-purple-700">Створення мережі:</strong>
              <pre className="bg-gray-900 text-purple-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`# В кінці docker-compose.yml
  networks:
    app-network:
      driver: bridge  # Тип мережі
  
  # bridge - default, для одного хоста
  # overlay - для Docker Swarm (multi-host)
  # host - використовує мережу хоста`}
              </pre>
            </div>
            <div>
              <strong className="text-purple-700">Підключення сервісів:</strong>
              <pre className="bg-gray-900 text-purple-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`services:
    backend:
      # ...
      networks:
        - app-network  # Підключаємо до мережі
  
    frontend:
      # ...
      networks:
        - app-network  # Та сама мережа!`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Типи мереж */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
          <h4 className="font-bold text-yellow-700 mb-3 text-lg">📡 Типи Docker Networks:</h4>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="bg-white p-3 rounded border border-yellow-200">
              <strong className="text-yellow-700">bridge (default)</strong>
              <p className="text-yellow-600 mt-2">
                Ізольована мережа на одному хості. Контейнери можуть спілкуватися між собою, 
                але ізольовані від інших мереж.
              </p>
              <div className="mt-2 text-green-600">✓ Використовуємо в наших compose файлах</div>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <strong className="text-yellow-700">host</strong>
              <p className="text-yellow-600 mt-2">
                Контейнер використовує мережу хоста напряму. Немає ізоляції портів.
              </p>
              <div className="mt-2 text-red-600">✗ Рідко використовується</div>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-200">
              <strong className="text-yellow-700">overlay</strong>
              <p className="text-yellow-600 mt-2">
                Для Docker Swarm. З'єднує контейнери на різних хостах.
              </p>
              <div className="mt-2 text-blue-600">→ Для кластерів</div>
            </div>
          </div>
        </div>
  
        {/* Debugging */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5">
          <h4 className="font-bold text-orange-700 mb-3 text-lg">🔍 Debugging мережі:</h4>
          <pre className="bg-gray-900 text-orange-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Переглянути всі мережі
  docker network ls
  
  # Інспектувати конкретну мережу
  docker network inspect app-network
  
  # Перевірити з'єднання між контейнерами
  docker exec frontend ping backend
  docker exec backend ping db
  
  # Переглянути IP адреси контейнерів
  docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' frontend
  
  # DNS резолюція
  docker exec frontend nslookup backend
  docker exec frontend getent hosts db
  
  # Порти, які слухають контейнери
  docker exec backend netstat -tulpn`}
          </pre>
        </div>
  
        {/* Multiple networks */}
        <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5">
          <h4 className="font-bold text-teal-700 mb-3 text-lg">🔀 Множинні мережі (Advanced):</h4>
          <pre className="bg-gray-900 text-teal-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Можна створити кілька мереж для ізоляції
  networks:
    frontend-network:    # Frontend + Backend
    backend-network:     # Backend + DB
  
  services:
    frontend:
      networks:
        - frontend-network
  
    backend:
      networks:
        - frontend-network  # Доступ від frontend
        - backend-network   # Доступ до db
  
    db:
      networks:
        - backend-network   # Тільки backend може звертатися!
  
  # Frontend НЕ може напряму звертатися до db`}
          </pre>
          <div className="bg-teal-100 p-3 rounded mt-3">
            <strong className="text-teal-800">💡 Use case:</strong>
            <p className="text-xs text-teal-700 mt-1">
              Додатковий рівень безпеки - frontend не має прямого доступу до БД
            </p>
          </div>
        </div>
  
        {/* Підсумок */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-blue-700 mb-2 text-lg">Підсумок:</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              Docker Compose автоматично створює <strong>bridge мережу</strong> для всіх сервісів. 
              Кожен сервіс отримує <strong>hostname = ім'я сервісу</strong> з docker-compose.yml. 
              Внутрішній DNS резолвить імена в IP адреси. Сервіси можуть спілкуватися між собою 
              по іменам (backend → db, frontend → backend), але ізольовані від зовнішнього світу 
              (якщо порти не відкриті через ports). Це забезпечує <strong>безпеку та зручність</strong>!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 6 - Volumes & Data Persistence
{
    title: "💾 Volumes & Data Persistence",
    slideNumber: "6 / 12",
    gradient: "from-orange-500 to-red-600",
    content: (
      <div className="space-y-6">
        {/* Проблема */}
        <div className="bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-red-700 mb-4">
            ❌ Проблема: Контейнери ephemeral (тимчасові)
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-red-800 mb-3">
                Коли контейнер видаляється, всі дані всередині нього теж видаляються!
              </p>
              <pre className="bg-gray-900 text-red-300 p-3 rounded text-xs leading-relaxed">
  {`# Запускаємо PostgreSQL
  docker-compose up -d
  
  # Додаємо дані в БД
  INSERT INTO users ...
  
  # Видаляємо контейнер
  docker-compose down
  
  # Запускаємо знову
  docker-compose up -d
  
  # 😱 Всі дані зникли!`}
              </pre>
            </div>
            <div className="bg-white p-4 rounded border border-red-300">
              <strong className="text-red-700">Що відбувається:</strong>
              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  <span>Контейнер створюється з образу</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💾</span>
                  <span>Дані пишуться всередину контейнера</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🗑️</span>
                  <span>docker-compose down видаляє контейнер</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💥</span>
                  <span className="text-red-600 font-bold">Всі дані втрачені!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Рішення */}
        <div className="bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            ✅ Рішення: Docker Volumes
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <pre className="bg-gray-900 text-green-300 p-3 rounded text-xs leading-relaxed">
  {`version: '3.8'
  
  services:
    db:
      image: postgres:15
      volumes:
        - postgres_data:/var/lib/postgresql/data
          ↑              ↑
        Named volume   Шлях в контейнері
  
  volumes:
    postgres_data:  # Оголошуємо volume
  
  # Тепер дані зберігаються ПОЗА контейнером!`}
              </pre>
            </div>
            <div className="bg-white p-4 rounded border border-green-300">
              <strong className="text-green-700">Що відбувається тепер:</strong>
              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  <span>Контейнер створюється</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💾</span>
                  <span>Дані пишуться у VOLUME (поза контейнером)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🗑️</span>
                  <span>docker-compose down видаляє контейнер</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="text-green-600 font-bold">Дані залишаються у volume!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Типи volumes */}
        <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-blue-700 mb-4">
            📚 Три типи volumes:
          </h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-4 rounded border-2 border-green-400">
              <h4 className="font-bold text-green-700 mb-2">1️⃣ Named Volume</h4>
              <pre className="bg-gray-900 text-green-400 p-2 rounded text-xs mt-2">
  {`volumes:
    - postgres_data:/data
  
  volumes:
    postgres_data:`}
              </pre>
              <div className="mt-3 space-y-1 text-xs">
                <p><strong>Де зберігається:</strong></p>
                <p className="text-gray-600">/var/lib/docker/volumes/</p>
                <p className="mt-2"><strong>Використання:</strong></p>
                <p className="text-green-600">✓ БД (PostgreSQL, MySQL)</p>
                <p className="text-green-600">✓ Постійні дані в production</p>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded border-2 border-blue-400">
              <h4 className="font-bold text-blue-700 mb-2">2️⃣ Bind Mount</h4>
              <pre className="bg-gray-900 text-blue-400 p-2 rounded text-xs mt-2">
  {`volumes:
    - ./frontend:/app
    - ./backend:/app`}
              </pre>
              <div className="mt-3 space-y-1 text-xs">
                <p><strong>Де зберігається:</strong></p>
                <p className="text-gray-600">На хості (./frontend)</p>
                <p className="mt-2"><strong>Використання:</strong></p>
                <p className="text-blue-600">✓ Development (hot-reload)</p>
                <p className="text-blue-600">✓ Синхронізація коду</p>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded border-2 border-purple-400">
              <h4 className="font-bold text-purple-700 mb-2">3️⃣ Anonymous Volume</h4>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded text-xs mt-2">
  {`volumes:
    - /app/node_modules`}
              </pre>
              <div className="mt-3 space-y-1 text-xs">
                <p><strong>Де зберігається:</strong></p>
                <p className="text-gray-600">Docker створює автоматично</p>
                <p className="mt-2"><strong>Використання:</strong></p>
                <p className="text-purple-600">✓ Захист папок від перезапису</p>
                <p className="text-purple-600">✓ node_modules, __pycache__</p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Приклад використання */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
          <h4 className="font-bold text-purple-700 mb-3 text-lg">🎯 Реальний приклад використання:</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-purple-700">Development:</strong>
              <pre className="bg-gray-900 text-purple-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`frontend:
    volumes:
      # Bind mount - hot-reload
      - ./frontend:/app
      
      # Anonymous - захист node_modules
      - /app/node_modules
  
  backend:
    volumes:
      - ./backend:/app
      - /app/__pycache__
  
  db:
    volumes:
      # Named - постійні дані БД
      - postgres_data:/var/lib/postgresql/data`}
              </pre>
            </div>
            <div>
              <strong className="text-purple-700">Production:</strong>
              <pre className="bg-gray-900 text-purple-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`frontend:
    # БЕЗ volumes!
    # Код вбудований в образ
  
  backend:
    # БЕЗ volumes!
    # Код вбудований в образ
  
  db:
    volumes:
      # Тільки БД має volume
      - postgres_data:/var/lib/postgresql/data
  
  volumes:
    postgres_data:`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Команди для роботи */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
          <h4 className="font-bold text-yellow-700 mb-3 text-lg">🛠️ Команди для роботи з volumes:</h4>
          <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Переглянути всі volumes
  docker volume ls
  
  # Інспектувати конкретний volume
  docker volume inspect postgres_data
  
  # Де фізично зберігається volume
  docker volume inspect postgres_data | grep Mountpoint
  
  # Видалити невикористані volumes
  docker volume prune
  
  # Видалити конкретний volume
  docker volume rm postgres_data
  
  # Backup volume
  docker run --rm -v postgres_data:/data -v $(pwd):/backup \\
    alpine tar czf /backup/backup.tar.gz /data
  
  # Restore volume
  docker run --rm -v postgres_data:/data -v $(pwd):/backup \\
    alpine tar xzf /backup/backup.tar.gz -C /
  
  # Видалити контейнери і volumes
  docker-compose down -v  # ← Видалить volumes!
  docker-compose down     # ← Залишить volumes`}
          </pre>
        </div>
  
        {/* Важливо */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3">✅ Best Practices:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Named volumes</strong> для БД та постійних даних</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Bind mounts</strong> тільки в development</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Anonymous volumes</strong> для захисту node_modules</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>В production: код в образі, дані у volumes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Регулярні backups важливих volumes</span>
              </div>
            </div>
          </div>
  
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
            <h4 className="font-bold text-red-700 mb-3">⚠️ Увага:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-600">!</span>
                <span><strong>docker-compose down -v</strong> видаляє volumes!</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">!</span>
                <span>Volumes займають місце на диску - прибирайте старі</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">!</span>
                <span>БД volumes потребують регулярних backups</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">!</span>
                <span>Bind mounts мають permissions issues на Linux</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">!</span>
                <span>НЕ використовуйте bind mounts в production!</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Підсумок */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-indigo-700 mb-2 text-lg">Підсумок:</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              <strong>Volumes</strong> зберігають дані поза контейнерами. <strong>Named volumes</strong> для 
              постійних даних (БД), <strong>bind mounts</strong> для development (hot-reload), 
              <strong>anonymous volumes</strong> для захисту папок від перезапису. В production: 
              тільки БД має volume, код вбудований в образ. 
              Команда <strong>docker-compose down</strong> зберігає volumes, <strong>docker-compose down -v</strong> - видаляє!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 7 - Environment Variables (ВИПРАВЛЕНИЙ)
{
    title: "⚙️ Environment Variables & .env файли",
    slideNumber: "7 / 12",
    gradient: "from-yellow-500 to-orange-600",
    content: (
      <div className="space-y-6">
        {/* Навіщо потрібні */}
        <div className="bg-yellow-50 border-4 border-yellow-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-yellow-700 mb-4">
            🤔 Навіщо потрібні Environment Variables?
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded border border-red-300">
              <strong className="text-red-700">❌ Погана практика:</strong>
              <pre className="bg-gray-900 text-red-400 p-3 rounded mt-2 text-xs">
  {`# Хардкод в коді
  DATABASE_URL = "postgresql://user:pass@db/mydb"
  SECRET_KEY = "my-secret-key"
  
  # Проблеми:
  # - Паролі в git
  # - Не можна змінити без rebuild`}
              </pre>
            </div>
            <div className="bg-white p-4 rounded border border-green-300">
              <strong className="text-green-700">✅ Правильно:</strong>
              <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs">
  {`# Змінні середовища
  DATABASE_URL = os.getenv("DATABASE_URL")
  SECRET_KEY = os.getenv("SECRET_KEY")
  
  # Переваги:
  # - Паролі в .env (не в git)
  # - Можна змінити без rebuild`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Структура */}
        <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-5">
          <h3 className="text-xl font-bold text-blue-700 mb-3">
            📝 Структура файлів:
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-blue-700">.env файл:</strong>
              <pre className="bg-gray-900 text-blue-400 p-3 rounded mt-2 text-xs">
  {`# .env в root проекту
  POSTGRES_USER=user
  POSTGRES_PASSWORD=secure_pass
  POSTGRES_DB=mydb
  
  SECRET_KEY=jwt_secret_key
  DEBUG=false
  
  VITE_API_BASE=/api`}
              </pre>
            </div>
            <div>
              <strong className="text-blue-700">Структура:</strong>
              <pre className="bg-gray-900 text-blue-400 p-3 rounded mt-2 text-xs">
  {`project/
  ├── .env
  ├── .env.example
  ├── .gitignore
  ├── docker-compose.yml
  ├── frontend/
  └── backend/`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Використання */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
          <h4 className="font-bold text-green-700 mb-3">🔧 Використання в docker-compose:</h4>
          <pre className="bg-gray-900 text-green-300 p-4 rounded text-xs">
  {`services:
    db:
      environment:
        POSTGRES_USER: \${POSTGRES_USER}
        POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
  
    backend:
      environment:
        SECRET_KEY: \${SECRET_KEY}
        DEBUG: \${DEBUG}`}
          </pre>
        </div>
  
        {/* ARG vs ENV */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
          <h4 className="font-bold text-purple-700 mb-3">🔀 ARG vs ENV:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-3 rounded">
              <strong>ARG (Build-time):</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2 text-xs">
  {`# Dockerfile
  ARG VITE_API_BASE
  ENV VITE_API_BASE=\${VITE_API_BASE}
  
  # docker-compose
  build:
    args:
      VITE_API_BASE: /api`}
              </pre>
              <p className="text-xs text-purple-600 mt-2">Під час build</p>
            </div>
            <div className="bg-white p-3 rounded">
              <strong>ENV (Runtime):</strong>
              <pre className="bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs">
  {`# docker-compose
  environment:
    DATABASE_URL: postgresql://...
    SECRET_KEY: \${SECRET_KEY}`}
              </pre>
              <p className="text-xs text-blue-600 mt-2">В запущеному контейнері</p>
            </div>
          </div>
        </div>
  
        {/* .env.example */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5">
          <h4 className="font-bold text-orange-700 mb-3">📄 .env.example:</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>.env.example (комітимо):</strong>
              <pre className="bg-gray-900 text-orange-400 p-3 rounded mt-2 text-xs">
  {`POSTGRES_USER=user
  POSTGRES_PASSWORD=CHANGE_ME
  POSTGRES_DB=mydb
  SECRET_KEY=GENERATE_KEY
  DEBUG=false`}
              </pre>
            </div>
            <div>
              <strong>.gitignore:</strong>
              <pre className="bg-gray-900 text-orange-400 p-3 rounded mt-2 text-xs">
  {`# Не комітьте!
  .env
  .env.local
  
  # Комітьте template
  # .env.example`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Best Practices */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3">✅ Best Practices:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>.env для secrets</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>.env.example як template</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>.env в .gitignore</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Різні .env для dev/prod</span>
              </div>
            </div>
          </div>
  
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
            <h4 className="font-bold text-red-700 mb-3">❌ НЕ робіть:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Комітити .env в git</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Хардкодити паролі</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Прості паролі в prod</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Підсумок */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
          <h4 className="font-bold text-blue-700 mb-2">💡 Підсумок:</h4>
          <p className="text-sm text-blue-800">
            Environment variables дозволяють змінювати конфігурацію без rebuild. 
            .env файл зберігає secrets і НЕ комітиться в git. 
            ARG для build-time, ENV для runtime. 
            Docker Compose автоматично читає .env з root проекту.
          </p>
        </div>
      </div>
    )
  },
  // Слайд 8 - Depends_on & Service Dependencies
{
    title: "⏱️ Depends_on & Service Dependencies",
    slideNumber: "8 / 12",
    gradient: "from-pink-500 to-rose-600",
    content: (
      <div className="space-y-6">
        {/* Проблема */}
        <div className="bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-red-700 mb-4">
            ❌ Проблема: Неправильний порядок запуску
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-red-700">Що відбувається БЕЗ depends_on:</strong>
              <pre className="bg-gray-900 text-red-300 p-3 rounded mt-2 text-xs leading-relaxed">
  {`# docker-compose up
  
  # Всі сервіси стартують одночасно:
  Starting db... done
  Starting backend... done
  Starting frontend... done
  
  # Backend намагається з'єднатися з БД
  Error: Connection refused (db:5432)
  # БД ще не готова!
  
  # Backend падає з помилкою
  backend exited with code 1`}
              </pre>
            </div>
            <div className="bg-white p-4 rounded border border-red-300">
              <strong className="text-red-700">Проблема:</strong>
              <div className="mt-3 space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🗄️</span>
                  <span>БД починає ініціалізацію (повільно)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>Backend стартує одразу (швидко)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💥</span>
                  <span className="text-red-600 font-bold">Backend не може з'єднатися!</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔄</span>
                  <span>Контейнер перезапускається, але знову помилка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Рішення 1 - depends_on */}
        <div className="bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            ✅ Рішення 1: depends_on (базовий)
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <pre className="bg-gray-900 text-green-300 p-3 rounded text-xs leading-relaxed">
  {`version: '3.8'
  
  services:
    db:
      image: postgres:15
      # БД стартує першою
  
    backend:
      build: ./backend
      depends_on:
        - db  # Чекаємо запуску db
  
    frontend:
      build: ./frontend
      depends_on:
        - backend  # Чекаємо запуску backend
  
  # Порядок запуску:
  # 1. db
  # 2. backend (після db)
  # 3. frontend (після backend)`}
              </pre>
            </div>
            <div className="bg-white p-4 rounded border border-green-300">
              <strong className="text-green-700">Що робить depends_on:</strong>
              <div className="mt-3 space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">1️⃣</span>
                  <span>Спочатку запускає db</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">2️⃣</span>
                  <span>Потім backend (після запуску db)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">3️⃣</span>
                  <span>Потім frontend (після запуску backend)</span>
                </div>
                <div className="mt-4 bg-yellow-100 p-3 rounded border border-yellow-400">
                  <strong className="text-yellow-800">⚠️ Але!</strong>
                  <p className="text-yellow-700 mt-1">
                    depends_on чекає тільки ЗАПУСКУ контейнера,<br/>
                    а НЕ його готовності!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Проблема з depends_on */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
          <h4 className="font-bold text-yellow-700 mb-3 text-lg">⚠️ Обмеження depends_on:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-yellow-700">Що НЕ робить depends_on:</strong>
              <pre className="bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`# depends_on чекає запуску контейнера
  # але НЕ чекає:
  
  # PostgreSQL готова приймати з'єднання?
  # ✗ Може ще ініціалізуватися
  
  # FastAPI готова обробляти запити?
  # ✗ Може ще імпортувати модулі
  
  # Nginx готовий проксувати?
  # ✗ Може ще парсити конфіг`}
              </pre>
            </div>
            <div>
              <strong className="text-yellow-700">Часові рамки запуску:</strong>
              <div className="mt-2 space-y-2 text-xs">
                <div className="bg-white p-2 rounded">
                  <strong>PostgreSQL:</strong><br/>
                  Контейнер запустився: 1 сек<br/>
                  БД готова: 5-10 сек
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>FastAPI:</strong><br/>
                  Контейнер запустився: 1 сек<br/>
                  App готова: 2-3 сек
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Nginx:</strong><br/>
                  Контейнер запустився: 1 сек<br/>
                  Nginx готовий: 1-2 сек
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Рішення 2 - healthcheck */}
        <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-blue-700 mb-4">
            ✅ Рішення 2: depends_on + healthcheck (краще)
          </h3>
          <pre className="bg-gray-900 text-blue-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`version: '3.8'
  
  services:
    db:
      image: postgres:15
      # Health check - перевіряє чи БД готова
      healthcheck:
        test: ["CMD-SHELL", "pg_isready -U user"]
        interval: 5s      # Перевіряти кожні 5 сек
        timeout: 5s       # Timeout для команди
        retries: 5        # Кількість спроб
        start_period: 10s # Чекати 10 сек перед першою перевіркою
  
    backend:
      build: ./backend
      depends_on:
        db:
          condition: service_healthy  # Чекати ГОТОВНОСТІ!
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
        interval: 10s
        timeout: 5s
        retries: 3
  
    frontend:
      build: ./frontend
      depends_on:
        backend:
          condition: service_healthy
  
  # Тепер чекає ГОТОВНОСТІ, а не тільки запуску!`}
          </pre>
        </div>
  
        {/* Health check приклади */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
          <h4 className="font-bold text-purple-700 mb-3 text-lg">🏥 Приклади Health Checks:</h4>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <strong className="text-purple-700">PostgreSQL:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`healthcheck:
    test: ["CMD-SHELL", "pg_isready -U user"]
    interval: 5s
    timeout: 5s
    retries: 5`}
              </pre>
              <strong className="text-purple-700 mt-3 block">MySQL:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`healthcheck:
    test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
    interval: 5s
    timeout: 5s
    retries: 5`}
              </pre>
            </div>
            <div>
              <strong className="text-purple-700">FastAPI:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`# Потрібен endpoint /health
  healthcheck:
    test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
    interval: 10s
    timeout: 5s
    retries: 3`}
              </pre>
              <strong className="text-purple-700 mt-3 block">Redis:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`healthcheck:
    test: ["CMD", "redis-cli", "ping"]
    interval: 5s
    timeout: 3s
    retries: 5`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Рішення 3 - wait-for-it */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
          <h4 className="font-bold text-indigo-700 mb-3 text-lg">✅ Рішення 3: wait-for-it скрипт</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-indigo-700">Dockerfile.prod (backend):</strong>
              <pre className="bg-gray-900 text-indigo-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`FROM python:3.11
  
  WORKDIR /app
  
  # Додаємо wait-for-it скрипт
  ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /wait-for-it.sh
  RUN chmod +x /wait-for-it.sh
  
  COPY requirements.txt .
  RUN pip install -r requirements.txt
  
  COPY . .
  
  # Чекаємо БД, потім запускаємо
  CMD ["/wait-for-it.sh", "db:5432", "--", "uvicorn", "main:app", "--host", "0.0.0.0"]`}
              </pre>
            </div>
            <div>
              <strong className="text-indigo-700">docker-compose.yml:</strong>
              <pre className="bg-gray-900 text-indigo-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`services:
    db:
      image: postgres:15
  
    backend:
      build: ./backend
      depends_on:
        - db
      # wait-for-it вбудований в CMD
  
  # Backend почекає поки db:5432 буде доступний
  # І тільки потім запустить uvicorn`}
              </pre>
              <div className="mt-3 bg-green-100 p-3 rounded border border-green-400">
                <strong className="text-green-800 text-xs">✓ Переваги:</strong>
                <p className="text-xs text-green-700 mt-1">
                  • Просто впровадити<br/>
                  • Не потрібен health check<br/>
                  • Працює з будь-якими сервісами
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Порівняння */}
        <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5">
          <h4 className="font-bold text-teal-700 mb-3 text-lg">📊 Порівняння підходів:</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-teal-100">
                <tr>
                  <th className="p-2 text-left">Підхід</th>
                  <th className="p-2 text-left">Складність</th>
                  <th className="p-2 text-left">Надійність</th>
                  <th className="p-2 text-left">Коли використовувати</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2 font-bold">depends_on</td>
                  <td className="p-2 text-green-700">✓ Просто</td>
                  <td className="p-2 text-yellow-700">⚠️ Середня</td>
                  <td className="p-2">Малі проекти, швидкі сервіси</td>
                </tr>
                <tr className="border-t bg-teal-50">
                  <td className="p-2 font-bold">+ healthcheck</td>
                  <td className="p-2 text-yellow-700">⚠️ Складніше</td>
                  <td className="p-2 text-green-700">✓ Висока</td>
                  <td className="p-2">Production, критичні сервіси</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2 font-bold">wait-for-it</td>
                  <td className="p-2 text-green-700">✓ Середня</td>
                  <td className="p-2 text-green-700">✓ Висока</td>
                  <td className="p-2">Коли немає health endpoint</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        {/* Команди */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5">
          <h4 className="font-bold text-orange-700 mb-3 text-lg">🔍 Перевірка статусу:</h4>
          <pre className="bg-gray-900 text-orange-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Переглянути статус health checks
  docker-compose ps
  
  # Детальна інформація
  docker inspect --format='{{.State.Health.Status}}' postgres_db
  
  # Історія health checks
  docker inspect --format='{{json .State.Health}}' postgres_db | jq
  
  # Логи під час запуску
  docker-compose logs -f
  
  # Порядок запуску сервісів
  docker-compose config --services`}
          </pre>
        </div>
  
        {/* Best Practices */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3">✅ Best Practices:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Завжди використовуйте depends_on</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Додайте healthcheck для БД</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Створіть /health endpoint в API</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Використовуйте restart: unless-stopped</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Тестуйте порядок запуску локально</span>
              </div>
            </div>
          </div>
  
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
            <h4 className="font-bold text-red-700 mb-3">⚠️ Поширені помилки:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Покладатися тільки на depends_on</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Немає retry логіки в додатку</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Занадто короткий interval для healthcheck</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Немає start_period для повільних сервісів</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Підсумок */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-blue-700 mb-2 text-lg">Підсумок:</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>depends_on</strong> контролює порядок запуску, але чекає тільки старту контейнера. 
              Для production додайте <strong>healthcheck</strong> з 
              <code className="bg-blue-200 px-1 rounded">condition: service_healthy</code> 
              - це гарантує, що сервіс дійсно готовий. Альтернатива - <strong>wait-for-it</strong> 
              скрипт в CMD. Завжди створюйте <strong>/health endpoint</strong> в API для моніторингу!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 9 - Команди Docker Compose
{
    title: "▶️ Команди Docker Compose",
    slideNumber: "9 / 12",
    gradient: "from-emerald-500 to-green-600",
    content: (
      <div className="space-y-6">
        {/* Основні команди */}
        <div className="bg-emerald-50 border-4 border-emerald-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-emerald-700 mb-4">
            🚀 Основні команди:
          </h3>
          <pre className="bg-gray-900 text-emerald-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Запуск всіх сервісів
  docker-compose up
  
  # Запуск у фоновому режимі (detached)
  docker-compose up -d
  
  # Запуск з rebuild образів
  docker-compose up --build
  
  # Запуск конкретного сервісу
  docker-compose up frontend
  
  # Зупинка всіх сервісів (контейнери залишаються)
  docker-compose stop
  
  # Зупинка та видалення контейнерів
  docker-compose down
  
  # Зупинка + видалення volumes (БД буде очищена!)
  docker-compose down -v
  
  # Зупинка + видалення всього (images також)
  docker-compose down --rmi all`}
          </pre>
        </div>
  
        {/* Build команди */}
        <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-blue-700 mb-3">
            🔨 Build команди:
          </h3>
          <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Build всіх сервісів
  docker-compose build
  
  # Build без кешу
  docker-compose build --no-cache
  
  # Build конкретного сервісу
  docker-compose build frontend
  
  # Build з іншим compose файлом
  docker-compose -f docker-compose.dev.yml build
  
  # Build і одразу запуск
  docker-compose up --build -d`}
          </pre>
        </div>
  
        {/* Логи та моніторинг */}
        <div className="bg-purple-50 border-4 border-purple-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-purple-700 mb-3">
            📊 Логи та моніторинг:
          </h3>
          <pre className="bg-gray-900 text-purple-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Перегляд логів всіх сервісів
  docker-compose logs
  
  # Логи в live режимі (follow)
  docker-compose logs -f
  
  # Логи конкретного сервісу
  docker-compose logs -f frontend
  
  # Останні 100 рядків
  docker-compose logs --tail 100 backend
  
  # Логи за останню годину
  docker-compose logs --since 1h
  
  # Логи кількох сервісів
  docker-compose logs frontend backend
  
  # Переглянути статус сервісів
  docker-compose ps
  
  # Детальна інформація
  docker-compose ps -a`}
          </pre>
        </div>
  
        {/* Управління сервісами */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
          <h4 className="font-bold text-yellow-700 mb-3 text-lg">⚙️ Управління сервісами:</h4>
          <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Перезапуск всіх сервісів
  docker-compose restart
  
  # Перезапуск конкретного сервісу
  docker-compose restart backend
  
  # Зупинити сервіс
  docker-compose stop frontend
  
  # Запустити зупинений сервіс
  docker-compose start frontend
  
  # Пауза (freeze) сервісу
  docker-compose pause backend
  
  # Зняти паузу
  docker-compose unpause backend
  
  # Видалити зупинені контейнери
  docker-compose rm
  
  # Видалити без підтвердження
  docker-compose rm -f`}
          </pre>
        </div>
  
        {/* Exec і Run */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3">🔧 exec - команди в запущеному контейнері:</h4>
            <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs leading-relaxed">
  {`# Зайти в shell контейнера
  docker-compose exec backend sh
  docker-compose exec frontend sh
  
  # Виконати команду
  docker-compose exec backend python manage.py migrate
  docker-compose exec frontend npm run build
  
  # Як root
  docker-compose exec -u root backend sh
  
  # Без TTY (для scripts)
  docker-compose exec -T backend python script.py`}
            </pre>
          </div>
  
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h4 className="font-bold text-blue-700 mb-3">🏃 run - разова команда (новий контейнер):</h4>
            <pre className="bg-gray-900 text-blue-400 p-3 rounded text-xs leading-relaxed">
  {`# Запустити разову команду
  docker-compose run backend python script.py
  
  # Без залежностей
  docker-compose run --no-deps backend pytest
  
  # Видалити після виконання
  docker-compose run --rm backend pytest
  
  # З іншими змінними
  docker-compose run -e DEBUG=true backend python manage.py shell`}
            </pre>
          </div>
        </div>
  
        {/* Масштабування */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5">
          <h4 className="font-bold text-orange-700 mb-3 text-lg">📈 Масштабування сервісів:</h4>
          <pre className="bg-gray-900 text-orange-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Запустити 3 копії backend
  docker-compose up -d --scale backend=3
  
  # Масштабувати кілька сервісів
  docker-compose up -d --scale backend=3 --scale frontend=2
  
  # Перевірити статус
  docker-compose ps
  
  # Переглянути логи всіх копій
  docker-compose logs -f backend
  
  # Примітка: Не можна масштабувати сервіс з явним container_name
  # Видаліть container_name для масштабування`}
          </pre>
        </div>
  
        {/* Конфігурація */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
          <h4 className="font-bold text-indigo-700 mb-3 text-lg">🔍 Перевірка конфігурації:</h4>
          <pre className="bg-gray-900 text-indigo-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Валідація docker-compose.yml
  docker-compose config
  
  # Показати конфігурацію
  docker-compose config --services
  
  # Показати volumes
  docker-compose config --volumes
  
  # Перевірити з іншим файлом
  docker-compose -f docker-compose.dev.yml config
  
  # Показати resolved змінні (.env підставлені)
  docker-compose config`}
          </pre>
        </div>
  
        {/* Множинні файли */}
        <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5">
          <h4 className="font-bold text-teal-700 mb-3 text-lg">📂 Робота з множинними файлами:</h4>
          <pre className="bg-gray-900 text-teal-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Використати інший файл
  docker-compose -f docker-compose.dev.yml up
  
  # Комбінувати кілька файлів (override)
  docker-compose -f docker-compose.yml -f docker-compose.override.yml up
  
  # Змінна середовища для default файлу
  export COMPOSE_FILE=docker-compose.dev.yml
  docker-compose up
  
  # Порядок пріоритету:
  # 1. docker-compose.yml (base)
  # 2. docker-compose.override.yml (автоматично, якщо існує)
  # 3. docker-compose -f custom.yml (явно вказаний)`}
          </pre>
        </div>
  
        {/* Корисні комбінації */}
        <div className="bg-purple-50 border-4 border-purple-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-purple-700 mb-3">
            💡 Корисні комбінації команд:
          </h3>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <strong className="text-purple-700">Швидкий restart з rebuild:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`docker-compose down
  docker-compose up --build -d`}
              </pre>
            </div>
            <div>
              <strong className="text-purple-700">Очистити все і почати заново:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`docker-compose down -v --rmi all
  docker-compose up --build -d`}
              </pre>
            </div>
            <div>
              <strong className="text-purple-700">Перевірити logs під час запуску:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`docker-compose up
  # Без -d щоб бачити логи`}
              </pre>
            </div>
            <div>
              <strong className="text-purple-700">Backup БД:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`docker-compose exec db pg_dump -U user mydb > backup.sql`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Шпаргалка */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-4 border-blue-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-blue-700 mb-3 text-center">
            📋 Шпаргалка - найчастіше використовувані:
          </h3>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-green-700">Запуск:</strong>
              <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2">
  {`docker-compose up -d`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-blue-700">Логи:</strong>
              <pre className="bg-gray-900 text-blue-400 p-2 rounded mt-2">
  {`docker-compose logs -f`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-purple-700">Статус:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`docker-compose ps`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-orange-700">Rebuild:</strong>
              <pre className="bg-gray-900 text-orange-400 p-2 rounded mt-2">
  {`docker-compose up --build -d`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-red-700">Зупинка:</strong>
              <pre className="bg-gray-900 text-red-400 p-2 rounded mt-2">
  {`docker-compose down`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-teal-700">Shell:</strong>
              <pre className="bg-gray-900 text-teal-400 p-2 rounded mt-2">
  {`docker-compose exec backend sh`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Підсумок */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-indigo-700 mb-2 text-lg">Підсумок:</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              Docker Compose має команди для всього життєвого циклу: <strong>up</strong> (запуск), 
              <strong>down</strong> (зупинка), <strong>logs</strong> (перегляд логів), 
              <strong>exec</strong> (команди в контейнері), <strong>build</strong> (rebuild образів). 
              Прапор <strong>-d</strong> для фонового режиму, <strong>-f</strong> для іншого файлу. 
              Найчастіше використовують: <code className="bg-indigo-200 px-1 rounded">up -d</code>, 
              <code className="bg-indigo-200 px-1 rounded">logs -f</code>, 
              <code className="bg-indigo-200 px-1 rounded">down</code>!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 10 - Best Practices
{
    title: "⭐ Best Practices",
    slideNumber: "10 / 12",
    gradient: "from-indigo-500 to-purple-600",
    content: (
      <div className="space-y-6">
        {/* Заголовок */}
        <div className="bg-indigo-50 border-4 border-indigo-500 rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-indigo-700 mb-2">
            🏆 Найкращі практики Docker Compose
          </h3>
          <p className="text-indigo-600">
            Перевірені підходи для production-ready проектів
          </p>
        </div>
  
        {/* 1. Структура файлів */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
          <h4 className="font-bold text-green-700 mb-3 text-lg flex items-center gap-2">
            <span>1️⃣</span> Структура файлів
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-green-700">✅ Правильно:</strong>
              <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs">
  {`project/
  ├── docker-compose.yml           # Production
  ├── docker-compose.dev.yml       # Development
  ├── docker-compose.override.yml  # Local overrides
  ├── .env.example                 # Template
  ├── .env                         # Secrets (в .gitignore)
  ├── .dockerignore
  ├── frontend/
  │   ├── Dockerfile.dev
  │   └── Dockerfile.prod
  └── backend/
      ├── Dockerfile.dev
      └── Dockerfile.prod`}
              </pre>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Окремі файли для dev і prod</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Override файл для локальних змін</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>.env.example для onboarding команди</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>.dockerignore для швидкого build</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* 2. Іменування */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
          <h4 className="font-bold text-blue-700 mb-3 text-lg flex items-center gap-2">
            <span>2️⃣</span> Іменування сервісів
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-red-700">❌ Погано:</strong>
              <pre className="bg-gray-900 text-red-400 p-3 rounded mt-2 text-xs">
  {`services:
    container1:
      # Незрозуміло що це
    my-app:
      # Занадто загально
    frontend-production-v2:
      # Занадто специфічно`}
              </pre>
            </div>
            <div>
              <strong className="text-green-700">✅ Добре:</strong>
              <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs">
  {`services:
    frontend:
      # Зрозуміло і коротко
    backend:
      # Описує призначення
    db:
      # Стандартна назва
    redis:
      # По типу сервісу`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* 3. Версіонування образів */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5">
          <h4 className="font-bold text-purple-700 mb-3 text-lg flex items-center gap-2">
            <span>3️⃣</span> Версіонування образів
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-red-700">❌ Погано:</strong>
              <pre className="bg-gray-900 text-red-400 p-3 rounded mt-2 text-xs">
  {`services:
    db:
      image: postgres
      # Якщо версія зміниться - проблеми!
      
    redis:
      image: redis:latest
      # Latest нестабільний!`}
              </pre>
            </div>
            <div>
              <strong className="text-green-700">✅ Добре:</strong>
              <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs">
  {`services:
    db:
      image: postgres:15
      # Конкретна версія
      
    redis:
      image: redis:7-alpine
      # Major version + alpine для розміру`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* 4. Health Checks */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-5">
          <h4 className="font-bold text-orange-700 mb-3 text-lg flex items-center gap-2">
            <span>4️⃣</span> Health Checks обов'язкові
          </h4>
          <pre className="bg-gray-900 text-orange-400 p-4 rounded text-xs">
  {`services:
    db:
      image: postgres:15
      healthcheck:
        test: ["CMD-SHELL", "pg_isready -U user"]
        interval: 10s
        timeout: 5s
        retries: 5
        start_period: 10s
  
    backend:
      depends_on:
        db:
          condition: service_healthy  # Чекає готовності!
      healthcheck:
        test: ["CMD", "curl", "-f", "http://localhost:8000/health"]
        interval: 30s`}
          </pre>
        </div>
  
        {/* 5. Restart Policies */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
          <h4 className="font-bold text-yellow-700 mb-3 text-lg flex items-center gap-2">
            <span>5️⃣</span> Restart Policies
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-yellow-700">Для Production:</strong>
              <pre className="bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs">
  {`services:
    backend:
      restart: unless-stopped
      # Перезапуск при падінні
      # Але не після manual stop
  
    db:
      restart: unless-stopped
      # Критичні сервіси`}
              </pre>
            </div>
            <div>
              <strong className="text-yellow-700">Для Development:</strong>
              <pre className="bg-gray-900 text-yellow-400 p-3 rounded mt-2 text-xs">
  {`services:
    backend:
      restart: "no"
      # Або unless-stopped
      # Залежить від вподобань
  
    frontend:
      restart: unless-stopped`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* 6. Resources Limits */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
          <h4 className="font-bold text-red-700 mb-3 text-lg flex items-center gap-2">
            <span>6️⃣</span> Resources Limits (Production)
          </h4>
          <pre className="bg-gray-900 text-red-400 p-4 rounded text-xs">
  {`services:
    backend:
      deploy:
        resources:
          limits:
            cpus: '0.5'      # Макс 50% CPU
            memory: 512M     # Макс 512MB RAM
          reservations:
            cpus: '0.25'     # Мін 25% CPU
            memory: 256M     # Мін 256MB RAM
  
    db:
      deploy:
        resources:
          limits:
            memory: 1G       # БД потребує більше
          reservations:
            memory: 512M`}
          </pre>
        </div>
  
        {/* 7. Secrets Management */}
        <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-5">
          <h4 className="font-bold text-teal-700 mb-3 text-lg flex items-center gap-2">
            <span>7️⃣</span> Secrets Management
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="text-red-700">❌ Ніколи:</strong>
              <pre className="bg-gray-900 text-red-400 p-3 rounded mt-2 text-xs">
  {`services:
    backend:
      environment:
        DB_PASSWORD: "hardcoded_pass"
        SECRET_KEY: "12345"
        # Паролі в коді!`}
              </pre>
            </div>
            <div>
              <strong className="text-green-700">✅ Правильно:</strong>
              <pre className="bg-gray-900 text-green-400 p-3 rounded mt-2 text-xs">
  {`# .env
  DB_PASSWORD=secure_password
  SECRET_KEY=random_key
  
  # docker-compose.yml
  services:
    backend:
      environment:
        DB_PASSWORD: \${DB_PASSWORD}
        SECRET_KEY: \${SECRET_KEY}`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* 8. Logging */}
        <div className="bg-pink-50 border-l-4 border-pink-500 rounded-lg p-5">
          <h4 className="font-bold text-pink-700 mb-3 text-lg flex items-center gap-2">
            <span>8️⃣</span> Logging Configuration
          </h4>
          <pre className="bg-gray-900 text-pink-400 p-4 rounded text-xs">
  {`services:
    backend:
      logging:
        driver: "json-file"
        options:
          max-size: "10m"      # Макс розмір файлу
          max-file: "3"        # Кількість файлів
          # Запобігає заповненню диску логами
  
    frontend:
      logging:
        driver: "json-file"
        options:
          max-size: "5m"
          max-file: "2"`}
          </pre>
        </div>
  
        {/* Чеклист */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
            ✅ Production Readiness Checklist:
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>Окремі compose файли для dev/prod</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>Конкретні версії образів (не latest)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>Health checks для всіх сервісів</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>depends_on з condition: service_healthy</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>restart: unless-stopped</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>Resources limits налаштовані</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>Secrets в .env (не в git)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>.env.example створений</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>Logging з max-size налаштований</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>Named volumes для БД</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>Networks явно створені</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">☐</span>
                <span>.dockerignore створений</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Підсумок */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-indigo-700 mb-2 text-lg">Підсумок:</h4>
            <p className="text-sm text-indigo-800 leading-relaxed">
              <strong>Best practices</strong> забезпечують стабільність, безпеку та зручність підтримки. 
              Ключові моменти: окремі файли для dev/prod, конкретні версії образів, health checks, 
              restart policies, resources limits, secrets в .env, logging налаштування. 
              Використовуйте checklist перед deploy в production!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 11 - Troubleshooting
{
    title: "🔴 Troubleshooting",
    slideNumber: "11 / 12",
    gradient: "from-red-500 to-pink-600",
    content: (
      <div className="space-y-4">
        {/* Проблема 1 */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
          <h4 className="font-bold text-red-800 mb-2 text-sm flex items-center gap-2">
            <span>🔴</span> Сервіс не запускається
          </h4>
          <pre className="bg-gray-900 text-red-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити статус
  docker-compose ps
  
  # Подивитись логи
  docker-compose logs backend
  
  # Перевірити конфігурацію
  docker-compose config
  
  # Перевірити чи порт вільний
  lsof -i :8000
  netstat -tulpn | grep 8000
  
  # Restart з rebuild
  docker-compose down
  docker-compose up --build -d`}
          </pre>
        </div>
  
        {/* Проблема 2 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
          <h4 className="font-bold text-yellow-800 mb-2 text-sm flex items-center gap-2">
            <span>🟡</span> Сервіси не бачать один одного
          </h4>
          <pre className="bg-gray-900 text-yellow-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити мережу
  docker network ls
  docker network inspect project_app-network
  
  # Перевірити чи сервіси в одній мережі
  docker-compose config | grep networks
  
  # Перевірити з'єднання
  docker-compose exec frontend ping backend
  docker-compose exec backend ping db
  
  # Перевірити DNS
  docker-compose exec frontend nslookup backend
  
  # Пересторити мережу
  docker-compose down
  docker network prune
  docker-compose up -d`}
          </pre>
        </div>
  
        {/* Проблема 3 */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
          <h4 className="font-bold text-blue-800 mb-2 text-sm flex items-center gap-2">
            <span>🔵</span> Backend не може з'єднатися з БД
          </h4>
          <pre className="bg-gray-900 text-blue-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити чи БД запущена
  docker-compose ps db
  
  # Перевірити health check
  docker inspect --format='{{.State.Health.Status}}' postgres_db
  
  # Перевірити з'єднання з БД
  docker-compose exec backend ping db
  
  # Перевірити змінні середовища
  docker-compose exec backend env | grep DATABASE
  
  # Додати depends_on з condition
  services:
    backend:
      depends_on:
        db:
          condition: service_healthy`}
          </pre>
        </div>
  
        {/* Проблема 4 */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
          <h4 className="font-bold text-green-800 mb-2 text-sm flex items-center gap-2">
            <span>🟢</span> Volume не зберігає дані
          </h4>
          <pre className="bg-gray-900 text-green-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити volumes
  docker volume ls
  
  # Інспектувати volume
  docker volume inspect project_postgres_data
  
  # Перевірити чи volume підключений
  docker-compose config | grep volumes
  
  # Видалити і створити заново
  docker-compose down -v
  docker-compose up -d
  
  # УВАГА: -v видаляє дані!
  # Без -v дані залишаються:
  docker-compose down
  docker-compose up -d`}
          </pre>
        </div>
  
        {/* Проблема 5 */}
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
          <h4 className="font-bold text-purple-800 mb-2 text-sm flex items-center gap-2">
            <span>🟣</span> Змінні з .env не підставляються
          </h4>
          <pre className="bg-gray-900 text-purple-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити чи .env існує
  ls -la .env
  
  # Перевірити синтаксис .env (без пробілів!)
  cat .env
  # Правильно: KEY=value
  # Неправильно: KEY = value
  
  # Перевірити підставлення
  docker-compose config
  
  # Перевірити в контейнері
  docker-compose exec backend env
  
  # Restart після зміни .env
  docker-compose down
  docker-compose up -d`}
          </pre>
        </div>
  
        {/* Проблема 6 */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
          <h4 className="font-bold text-orange-800 mb-2 text-sm flex items-center gap-2">
            <span>🟠</span> Build fails або дуже повільний
          </h4>
          <pre className="bg-gray-900 text-orange-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Build без кешу
  docker-compose build --no-cache
  
  # Очистити все
  docker system prune -a
  docker volume prune
  
  # Перевірити .dockerignore
  cat frontend/.dockerignore
  # Має містити:
  # node_modules
  # .git
  # .env
  
  # Rebuild конкретного сервісу
  docker-compose build frontend
  
  # Паралельний build
  docker-compose build --parallel`}
          </pre>
        </div>
  
        {/* Проблема 7 */}
        <div className="bg-teal-50 border-l-4 border-teal-500 rounded-lg p-4">
          <h4 className="font-bold text-teal-800 mb-2 text-sm flex items-center gap-2">
            <span>🔷</span> Port already in use
          </h4>
          <pre className="bg-gray-900 text-teal-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Знайти процес на порту
  lsof -i :80
  lsof -i :8000
  netstat -tulpn | grep 80
  
  # Вбити процес
  kill -9 <PID>
  
  # Або змінити порт в docker-compose.yml
  ports:
    - "8080:80"  # Використовує 8080 замість 80
  
  # Зупинити всі контейнери
  docker stop $(docker ps -aq)`}
          </pre>
        </div>
  
        {/* Проблема 8 */}
        <div className="bg-pink-50 border-l-4 border-pink-500 rounded-lg p-4">
          <h4 className="font-bold text-pink-800 mb-2 text-sm flex items-center gap-2">
            <span>🔶</span> Контейнер постійно перезапускається
          </h4>
          <pre className="bg-gray-900 text-pink-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Подивитись логи
  docker-compose logs --tail 50 backend
  
  # Перевірити exit code
  docker-compose ps
  
  # Вимкнути restart для debugging
  services:
    backend:
      restart: "no"
  
  # Запустити вручну для перевірки
  docker-compose run --rm backend sh
  
  # Перевірити CMD в Dockerfile
  docker inspect project_backend | grep -A 5 Cmd`}
          </pre>
        </div>
  
        {/* Загальні команди */}
        <div className="bg-indigo-50 border-4 border-indigo-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-indigo-700 mb-3">
            🛠️ Загальні debugging команди:
          </h3>
          <pre className="bg-gray-900 text-indigo-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Статус всіх сервісів
  docker-compose ps
  
  # Логи всіх сервісів
  docker-compose logs -f
  
  # Логи за останні 5 хвилин
  docker-compose logs --since 5m
  
  # Інспектувати контейнер
  docker inspect project_backend
  
  # Статистика ресурсів
  docker stats
  
  # Перевірити файли в контейнері
  docker-compose exec backend ls -la /app
  
  # Перевірити процеси в контейнері
  docker-compose exec backend ps aux
  
  # Тест з'єднання
  docker-compose exec frontend wget -O- http://backend:8000/health
  
  # Повна діагностика мережі
  docker network inspect project_app-network | jq
  
  # Експорт логів у файл
  docker-compose logs > debug.log`}
          </pre>
        </div>
  
        {/* Швидке вирішення */}
        <div className="bg-green-50 border-4 border-green-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-green-700 mb-3">
            ⚡ Швидке вирішення більшості проблем:
          </h3>
          <pre className="bg-gray-900 text-green-300 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# "Turn it off and on again" для Docker:
  
  # 1. Повна зупинка
  docker-compose down
  
  # 2. Очистити volumes (якщо не критичні дані)
  docker-compose down -v
  
  # 3. Очистити Docker кеш
  docker system prune -a
  
  # 4. Rebuild без кешу
  docker-compose build --no-cache
  
  # 5. Запустити заново
  docker-compose up -d
  
  # 6. Перевірити логи
  docker-compose logs -f
  
  # Це вирішує ~80% проблем! 🎯`}
          </pre>
        </div>
  
        {/* Коли питати допомоги */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
          <h4 className="font-bold text-yellow-700 mb-3 text-lg">❓ Коли питати допомоги:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-yellow-600">1.</span>
              <span>Зберіть інформацію: <code className="bg-yellow-200 px-1 rounded text-xs">docker-compose logs > logs.txt</code></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-600">2.</span>
              <span>Конфігурація: <code className="bg-yellow-200 px-1 rounded text-xs">docker-compose config > config.yml</code></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-600">3.</span>
              <span>Статус: <code className="bg-yellow-200 px-1 rounded text-xs">docker-compose ps</code></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-yellow-600">4.</span>
              <span>Версії: <code className="bg-yellow-200 px-1 rounded text-xs">docker-compose version</code>, <code className="bg-yellow-200 px-1 rounded text-xs">docker version</code></span>
            </div>
          </div>
        </div>
  
        {/* Підсумок */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-blue-700 mb-2 text-lg">Підсумок:</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              Більшість проблем вирішуються через <strong>перегляд логів</strong> і 
              <strong>перевірку конфігурації</strong>. Використовуйте 
              <code className="bg-blue-200 px-1 rounded">docker-compose ps</code>, 
              <code className="bg-blue-200 px-1 rounded">logs -f</code>, 
              <code className="bg-blue-200 px-1 rounded">config</code>. 
              Для складних випадків: повне очищення 
              <code className="bg-blue-200 px-1 rounded">down -v</code> → 
              <code className="bg-blue-200 px-1 rounded">system prune</code> → 
              <code className="bg-blue-200 px-1 rounded">build --no-cache</code> → 
              <code className="bg-blue-200 px-1 rounded">up -d</code>!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 12 - Підсумок & Чеклист
{
    title: "✅ Підсумок & Чеклист",
    slideNumber: "12 / 12",
    gradient: "from-green-500 to-emerald-600",
    content: (
      <div className="space-y-6">
        {/* Заголовок */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-500 rounded-xl p-6 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-3">
            🎉 Docker Compose освоєно!
          </h3>
          <p className="text-lg text-gray-600">
            Тепер ви можете керувати multi-container застосунками як про!
          </p>
        </div>
  
        {/* Що ви навчились */}
        <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
            📚 Що ви навчились:
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <span className="text-xl">📋</span> Основи
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Що таке Docker Compose</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Структура docker-compose.yml</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>services, networks, volumes</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🔧</span> Конфігурація
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Dev vs Prod налаштування</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Environment variables</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Depends_on & Health checks</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Практика
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Команди Docker Compose</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Best Practices</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Troubleshooting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Повний стек */}
        <div className="bg-purple-50 border-4 border-purple-500 rounded-xl p-5">
          <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">
            🎯 Ваш повний стек тепер:
          </h3>
          <pre className="bg-gray-900 text-purple-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`project/
  ├── docker-compose.yml              # Production
  ├── docker-compose.dev.yml          # Development
  ├── .env                            # Secrets
  ├── .env.example                    # Template
  │
  ├── frontend/
  │   ├── Dockerfile.dev              # Vite dev server
  │   ├── Dockerfile.prod             # Nginx + multi-stage
  │   ├── nginx.conf                  # API proxy
  │   └── src/
  │
  ├── backend/
  │   ├── Dockerfile.dev              # FastAPI + hot-reload
  │   ├── Dockerfile.prod             # Optimized
  │   └── main.py
  │
  # Одна команда запускає все:
  docker-compose up -d
  
  # Frontend: http://localhost
  # Backend: internal (через nginx proxy)
  # Database: internal (тільки для backend)`}
          </pre>
        </div>
  
        {/* Чеклист готовності */}
        <div className="bg-green-50 border-4 border-green-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-700 mb-4 text-center">
            ✅ Production Readiness Checklist:
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="bg-white p-3 rounded shadow">
                <strong className="text-green-700">📁 Структура:</strong>
                <div className="mt-2 space-y-1 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">☐</span>
                    <span>docker-compose.yml і .dev.yml</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">☐</span>
                    <span>.env.example створений</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">☐</span>
                    <span>.env в .gitignore</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">☐</span>
                    <span>.dockerignore налаштований</span>
                  </div>
                </div>
              </div>
  
              <div className="bg-white p-3 rounded shadow">
                <strong className="text-blue-700">🔧 Конфігурація:</strong>
                <div className="mt-2 space-y-1 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">☐</span>
                    <span>Конкретні версії образів</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">☐</span>
                    <span>Health checks налаштовані</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">☐</span>
                    <span>depends_on з condition</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600">☐</span>
                    <span>restart: unless-stopped</span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="space-y-2">
              <div className="bg-white p-3 rounded shadow">
                <strong className="text-purple-700">🔒 Безпека:</strong>
                <div className="mt-2 space-y-1 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">☐</span>
                    <span>Secrets в .env файлі</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">☐</span>
                    <span>Мінімум відкритих портів</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">☐</span>
                    <span>Resources limits</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-600">☐</span>
                    <span>Logging налаштований</span>
                  </div>
                </div>
              </div>
  
              <div className="bg-white p-3 rounded shadow">
                <strong className="text-orange-700">💾 Дані:</strong>
                <div className="mt-2 space-y-1 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">☐</span>
                    <span>Named volumes для БД</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">☐</span>
                    <span>Backup стратегія готова</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">☐</span>
                    <span>Networks налаштовані</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600">☐</span>
                    <span>Протестовано локально</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Основні команди */}
        <div className="bg-yellow-50 border-4 border-yellow-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-yellow-700 mb-3 text-center">
            ⚡ Команди на кожен день:
          </h3>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-green-700">🚀 Запуск:</strong>
              <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2">
  {`docker-compose up -d`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-blue-700">📊 Логи:</strong>
              <pre className="bg-gray-900 text-blue-400 p-2 rounded mt-2">
  {`docker-compose logs -f`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-purple-700">🔄 Restart:</strong>
              <pre className="bg-gray-900 text-purple-400 p-2 rounded mt-2">
  {`docker-compose restart`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-orange-700">🔨 Build:</strong>
              <pre className="bg-gray-900 text-orange-400 p-2 rounded mt-2">
  {`docker-compose build`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-red-700">🛑 Stop:</strong>
              <pre className="bg-gray-900 text-red-400 p-2 rounded mt-2">
  {`docker-compose down`}
              </pre>
            </div>
            <div className="bg-white p-3 rounded shadow">
              <strong className="text-teal-700">💻 Shell:</strong>
              <pre className="bg-gray-900 text-teal-400 p-2 rounded mt-2">
  {`docker-compose exec backend sh`}
              </pre>
            </div>
          </div>
        </div>
  
        {/* Порівняння */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
          <h4 className="font-bold text-indigo-700 mb-3 text-lg">📊 docker run vs docker-compose:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-4 rounded">
              <strong className="text-red-700">❌ Без Compose:</strong>
              <ul className="mt-2 space-y-1 text-xs text-red-600">
                <li>• Багато команд docker run</li>
                <li>• Важко керувати залежностями</li>
                <li>• Ручне створення networks</li>
                <li>• Складно відтворити на іншій машині</li>
                <li>• Немає версіонування</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <strong className="text-green-700">✅ З Compose:</strong>
              <ul className="mt-2 space-y-1 text-xs text-green-600">
                <li>• Одна команда для всього</li>
                <li>• Автоматичні залежності (depends_on)</li>
                <li>• Автоматичні networks</li>
                <li>• YAML файл в git = просто поділитися</li>
                <li>• Версіонування через git</li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Наступні кроки */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
          <h4 className="font-bold text-blue-700 mb-3 text-lg">🚀 Наступні кроки:</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>CI/CD:</strong> GitHub Actions, GitLab CI</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Docker Swarm:</strong> для кластеризації</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Kubernetes:</strong> для великих проектів</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Monitoring:</strong> Prometheus, Grafana</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Logging:</strong> ELK Stack</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">→</span>
                <span><strong>Security:</strong> Docker security best practices</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Фінальний підсумок */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-500 rounded-xl p-6 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Вітаємо!
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Тепер ви можете розгортати повний стек<br/>
            <strong>Vue.js + FastAPI + PostgreSQL</strong><br/>
            однією командою!
          </p>
          <div className="bg-white inline-block px-6 py-3 rounded-lg shadow-lg">
            <code className="text-green-600 text-xl font-bold">docker-compose up -d</code>
          </div>
          <p className="text-gray-600 mt-4 text-sm">
            Docker + Docker Compose = 💪
          </p>
        </div>
      </div>
    )
  }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl min-h-[600px] flex flex-col">
          <div className="p-8 flex-1 flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {slides[currentSlide].title}
              </h1>
              {slides[currentSlide].subtitle && (
                <p className="text-xl text-gray-600">{slides[currentSlide].subtitle}</p>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {slides[currentSlide].content}
            </div>
          </div>

          <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="w-5 h-5" />
                Назад
              </button>

              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition ${
                      index === currentSlide
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {currentSlide + 1} / {slides.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentSlide === slides.length - 1}
                >
                  Далі
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;