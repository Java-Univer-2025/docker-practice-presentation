import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, Server, Lock, Network, AlertCircle } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Слайд 1 - Структура Vue.js проекту
{
    title: "📁 Структура Vue.js проекту",
    slideNumber: "1 / 12",
    gradient: "from-green-600 to-blue-600",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Best Practices */}
          <div className="bg-green-50 border-4 border-green-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              Best Practices
            </h3>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`frontend/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── views/
  │   ├── router/
  │   ├── store/
  │   │   └── auth.ts
  │   ├── services/
  │   │   └── api.ts      ✓
  │   ├── types/
  │   ├── App.vue
  │   └── main.ts
  ├── public/
  ├── .env.development
  ├── .env.production
  ├── Dockerfile.dev
  ├── Dockerfile.prod
  ├── nginx.conf
  ├── docker-compose.yml
  ├── package.json
  └── vite.config.ts`}
            </pre>
          </div>
  
          {/* Simple */}
          <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Simple
            </h3>
            <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`frontend/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── views/
  │   ├── router/
  │   ├── store/
  │   │   └── auth.ts
  │   ├── App.vue
  │   └── main.ts
  ├── public/
  ├── api.ts           ✓
  ├── .env.development
  ├── .env.production
  ├── Dockerfile.dev
  ├── Dockerfile.prod
  ├── nginx.conf
  ├── docker-compose.yml
  ├── package.json
  └── vite.config.ts`}
            </pre>
          </div>
        </div>
  
        {/* Порівняння */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3 text-lg">⭐ Best Practices</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Логічна структура для великих проектів</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Легко додати нові сервіси</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Зручно для команди</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Масштабування без проблем</span>
              </div>
            </div>
          </div>
  
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h4 className="font-bold text-blue-700 mb-3 text-lg">🚀 Simple</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Швидкий старт для малих проектів</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Менше папок - простіше навігація</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Ідеально для прототипів</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span>Мінімалістичний підхід</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  // Слайд 2 - .env файли
  {
    title: "⚙️ .env файли для Frontend",
    slideNumber: "2 / 12",
    gradient: "from-yellow-500 to-red-500",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Development */}
          <div className="bg-yellow-50 border-4 border-yellow-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-yellow-700 mb-2 flex items-center gap-2">
              <span className="text-2xl">🔧</span>
              Development
            </h3>
            <div className="text-sm text-yellow-600 font-mono mb-3">.env.development</div>
            <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Прямий доступ до backend
  VITE_API_BASE=http://localhost:8000
  
  VITE_APP_TITLE=My App (Dev)
  VITE_ENABLE_DEBUG=true`}
            </pre>
          </div>
  
          {/* Production */}
          <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Production
            </h3>
            <div className="text-sm text-blue-600 font-mono mb-3">.env.production</div>
            <pre className="bg-gray-900 text-blue-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Через nginx proxy
  VITE_API_BASE=/api
  
  VITE_APP_TITLE=My App
  VITE_ENABLE_DEBUG=false`}
            </pre>
          </div>
        </div>
  
        {/* Використання */}
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
          <h4 className="font-bold text-green-700 mb-3 text-lg">💻 Використання в коді (api.ts):</h4>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`import axios from 'axios'
  
  const API_BASE = import.meta.env.VITE_API_BASE as string 
                  || 'http://localhost:8000'
  
  const api = axios.create({
    baseURL: API_BASE,
  })
  
  // Development: baseURL = 'http://localhost:8000'
  // Production:  baseURL = '/api'`}
          </pre>
        </div>
  
        {/* Важливо */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-yellow-700 mb-2 text-lg">Важливо!</h4>
            <p className="text-sm text-yellow-800 leading-relaxed">
              <strong>Development:</strong> <code className="bg-yellow-200 px-2 py-1 rounded">VITE_API_BASE=http://localhost:8000</code> - frontend звертається напряму до backend<br/><br/>
              <strong>Production:</strong> <code className="bg-yellow-200 px-2 py-1 rounded">VITE_API_BASE=/api</code> - frontend звертається через Nginx proxy (same origin, CORS не потрібен!)
            </p>
          </div>
        </div>
      </div>
    )
  },
{
    title: "🔧 Dockerfile.dev (Development)",
    slideNumber: "3 / 12",
    gradient: "from-teal-500 to-cyan-600",
    content: (
      <div className="space-y-6">
        <div className="bg-teal-50 border-4 border-teal-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-teal-700 mb-3">
            З Hot-Reload для розробки
          </h3>
          <pre className="bg-gray-900 text-teal-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`FROM node:20-alpine
  
  WORKDIR /app
  
  # Копіюємо package файли
  COPY package*.json ./
  
  # Встановлюємо залежності
  RUN npm install
  
  # Копіюємо весь код
  COPY . .
  
  # Відкриваємо порт для Vite dev server
  EXPOSE 5173
  
  # Запускаємо dev server з hot-reload
  CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]`}
          </pre>
        </div>
  
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
          <h4 className="font-bold text-blue-700 mb-3 text-lg">
            vite.config.ts:
          </h4>
          <pre className="bg-gray-900 text-blue-400 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  
  export default defineConfig({
    plugins: [vue()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      watch: {
        usePolling: true  // Для Docker
      }
    }
  })`}
          </pre>
        </div>
  
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-green-700 mb-2 text-lg">Важливо!</h4>
            <p className="text-sm text-green-800 leading-relaxed">
              <code className="bg-green-200 px-2 py-1 rounded">usePolling: true</code> потрібен для hot-reload в Docker, інакше зміни файлів не відслідковуються!
            </p>
          </div>
        </div>
      </div>
    )
  },
  
  // Слайд 4 - Dockerfile.prod
  {
    title: "🚀 Dockerfile.prod (Production)",
    slideNumber: "4 / 12",
    gradient: "from-red-500 to-pink-600",
    content: (
      <div className="space-y-6">
        <div className="bg-red-50 border-4 border-red-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-red-700 mb-3">
            Multi-stage build з Nginx
          </h3>
          <pre className="bg-gray-900 text-red-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Stage 1: Build
  FROM node:20-alpine as build
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --only=production
  COPY . .
  
  # Build для production з правильним API_BASE
  ARG VITE_API_BASE=/api
  ENV VITE_API_BASE=\${VITE_API_BASE}
  
  RUN npm run build
  
  # Stage 2: Production з nginx
  FROM nginx:alpine
  
  # Копіюємо білд
  COPY --from=build /app/dist /usr/share/nginx/html
  
  # Копіюємо nginx конфіг
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]`}
          </pre>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3">✓ Переваги Multi-stage:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Малий розмір образу (~25MB vs ~500MB)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Без dev залежностей</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Швидше розгортання</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>Безпечніше для production</span>
              </div>
            </div>
          </div>
  
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
            <h4 className="font-bold text-yellow-700 mb-3">💡 ARG + ENV для API:</h4>
            <div className="text-sm text-yellow-800 leading-relaxed space-y-2">
              <p>
                <code className="bg-yellow-200 px-2 py-1 rounded font-semibold">ARG</code> дозволяє змінювати API URL при build:
              </p>
              <code className="block bg-gray-800 text-green-300 px-2 py-1 rounded text-xs">
                docker build --build-arg VITE_API_BASE=/v2/api
              </code>
              <p className="mt-2">
                Vite вбудовує це значення в JavaScript під час <code className="bg-yellow-200 px-1 rounded">npm run build</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // Слайд - Vite vs Nginx (для вставки перед Multi-stage)
  {
    title: "🤔 Чому Nginx замість Vite в Production?",
    slideNumber: "5 / 12",
    gradient: "from-purple-500 to-pink-600",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Development - Vite */}
          <div className="bg-teal-50 border-4 border-teal-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-teal-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔧</span>
              Development - Vite
            </h3>
            <pre className="bg-gray-900 text-teal-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`FROM node:20-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  EXPOSE 5173
  
  # Vite dev server
  CMD ["npm", "run", "dev"]`}
            </pre>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Hot-reload для розробки</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Source maps для debugging</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-teal-600">✓</span>
                <span>Швидкий рестарт</span>
              </div>
            </div>
          </div>
  
          {/* Production - Nginx */}
          <div className="bg-orange-50 border-4 border-orange-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-orange-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Production - Nginx
            </h3>
            <pre className="bg-gray-900 text-orange-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Stage 1: Build
  FROM node:20-alpine as build
  WORKDIR /app
  COPY package*.json ./
  ...
  RUN npm run build
  
  # Stage 2: Nginx
  FROM nginx:alpine
  COPY --from=build /app/dist /usr/share/nginx/html
  CMD ["nginx", "-g", "daemon off;"]`}
            </pre>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Оптимізовано для production</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Малий розмір (~25MB)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-orange-600">✓</span>
                <span>Максимальна швидкість</span>
              </div>
            </div>
            <div className="mt-3 bg-orange-100 p-2 rounded text-xs text-orange-700">
              <strong>📝 daemon off:</strong> тримає nginx у foreground (PID 1), щоб Docker не зупинив контейнер. Офіційний nginx:alpine вже має це.
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
            <h4 className="font-bold text-red-700 mb-2">⚡ Performance</h4>
            <p className="text-xs text-red-800 leading-relaxed">
              <strong>Vite:</strong> Node.js процес (~200MB RAM)<br/>
              <strong>Nginx:</strong> C-написаний (~10MB RAM)<br/>
              <span className="text-green-600 font-bold">Nginx в 100x швидше!</span>
            </p>
          </div>
  
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
            <h4 className="font-bold text-blue-700 mb-2">🔒 Безпека</h4>
            <p className="text-xs text-blue-800 leading-relaxed">
              <strong>Vite dev server:</strong> НЕ для production!<br/>
              <strong>Nginx:</strong> Battle-tested, DDoS захист, rate limiting
            </p>
          </div>
  
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
            <h4 className="font-bold text-green-700 mb-2">📦 Розмір</h4>
            <p className="text-xs text-green-800 leading-relaxed">
              <strong>З Vite:</strong> ~500MB (Node + modules)<br/>
              <strong>З Nginx:</strong> ~25MB (тільки статика)<br/>
              <span className="text-green-600 font-bold">95% економії!</span>
            </p>
          </div>
        </div>
  
        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-purple-700 mb-2 text-lg">Підсумок:</h4>
            <div className="text-sm text-purple-800 leading-relaxed">
              <strong>Development:</strong> Vite dev server - hot-reload, debugging, зручність<br/>
              <strong>Production:</strong> Vite build → Nginx - швидкість, безпека, економія ресурсів<br/><br/>
              <span className="font-bold">Vite компілює в обох випадках, але:</span><br/>
              • Dev: запускає dev server<br/>
              • Prod: робить build → віддає Nginx
            </div>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 5 - Multi-stage Build
{
    title: "📦 Multi-stage Build - Пояснення",
    slideNumber: "5 / 12",
    gradient: "from-indigo-500 to-purple-600",
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-4 border-indigo-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-indigo-700 mb-4">
            Етапи Multi-stage Build:
          </h3>
          <pre className="bg-gray-900 text-indigo-300 p-5 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# ═══════════════════════════════════════════════════
  # Stage 1: BUILD (node:20-alpine ~500MB)
  # ═══════════════════════════════════════════════════
  FROM node:20-alpine as build
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci --only=production
  COPY . .
  RUN npm run build
  # Результат: /app/dist з статичними файлами
  
  # ═══════════════════════════════════════════════════
  # Stage 2: PRODUCTION (nginx:alpine ~25MB)
  # ═══════════════════════════════════════════════════
  FROM nginx:alpine
  # Копіюємо ТІЛЬКИ білд з першого stage
  COPY --from=build /app/dist /usr/share/nginx/html
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  CMD ["nginx", "-g", "daemon off;"]
  
  # ✓ Фінальний образ: тільки nginx + статичні файли`}
          </pre>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3 text-lg">✓ Переваги:</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">📉</span>
                <div>
                  <strong>Малий розмір:</strong> ~25MB замість ~500MB<br/>
                  <span className="text-green-600">Економія: 95%!</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">🚀</span>
                <div>
                  <strong>Швидше:</strong> менший образ = швидше завантаження і розгортання
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">🔒</span>
                <div>
                  <strong>Безпечніше:</strong> немає node_modules, npm, dev залежностей
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">⚡</span>
                <div>
                  <strong>Оптимізовано:</strong> тільки nginx + мініфіковані файли
                </div>
              </div>
            </div>
          </div>
  
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
            <h4 className="font-bold text-red-700 mb-3 text-lg">✗ Single-stage (погано):</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">📈</span>
                <div>
                  <strong>Великий розмір:</strong> ~500MB<br/>
                  <span className="text-red-600">Непотрібні node_modules у фіналі</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">🐌</span>
                <div>
                  <strong>Повільніше:</strong> довге завантаження і розгортання
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">⚠️</span>
                <div>
                  <strong>Небезпечно:</strong> вихідний код + залежності в production
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-600 font-bold">💰</span>
                <div>
                  <strong>Дорожче:</strong> більше місця = більші витрати на хостинг
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-blue-700 mb-2 text-lg">Як це працює:</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Stage 1:</strong> Використовує Node.js для збірки (npm install, npm run build)<br/>
              <strong>Stage 2:</strong> Бере ТІЛЬКИ результат збірки (/app/dist) і копіює в легкий nginx<br/>
              <strong>Результат:</strong> Фінальний образ не містить Node.js, npm, node_modules - тільки статичні файли!
            </p>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 6 - Nginx конфігурація
{
    title: "⚙️ Nginx конфігурація",
    slideNumber: "6 / 12",
    gradient: "from-orange-500 to-red-600",
    content: (
      <div className="space-y-6">
        <div className="bg-orange-50 border-4 border-orange-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-orange-700 mb-3">
            nginx.conf - повна конфігурація:
          </h3>
          <pre className="bg-gray-900 text-orange-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`server {
      listen 80;
      server_name localhost;
      root /usr/share/nginx/html;
      index index.html;
  
      # ════════════════════════════════════════════
      # Gzip compression для швидкості
      # ════════════════════════════════════════════
      gzip on;
      gzip_types text/css application/javascript application/json;
  
      # ════════════════════════════════════════════
      # API proxy до FastAPI backend
      # ════════════════════════════════════════════
      location /api/ {
          # Видаляємо /api з URL перед проксуванням
          # /api/users → http://backend:8000/users
          rewrite ^/api/(.*) /$1 break;
          
          proxy_pass http://backend:8000;
          proxy_http_version 1.1;
          
          # Headers для правильної роботи
          proxy_set_header Host $host;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto $scheme;
          
          # WebSocket підтримка (якщо потрібно)
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
      }
  
      # ════════════════════════════════════════════
      # SPA routing - всі запити на index.html
      # ════════════════════════════════════════════
      location / {
          try_files $uri $uri/ /index.html;
      }
  
      # ════════════════════════════════════════════
      # Кешування статичних файлів
      # ════════════════════════════════════════════
      location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
          expires 1y;
          add_header Cache-Control "public, immutable";
      }
  }`}
          </pre>
        </div>
  
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
            <h4 className="font-bold text-blue-700 mb-2 text-sm">🔀 API Proxy</h4>
            <p className="text-xs text-blue-800 leading-relaxed">
              <code className="bg-blue-200 px-1 py-0.5 rounded text-xs">/api/*</code> запити перенаправляються на backend:8000. 
              Rewrite видаляє /api з URL.
            </p>
          </div>
  
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
            <h4 className="font-bold text-green-700 mb-2 text-sm">🎯 SPA Routing</h4>
            <p className="text-xs text-green-800 leading-relaxed">
              <code className="bg-green-200 px-1 py-0.5 rounded text-xs">try_files</code> забезпечує, 
              що всі маршрути Vue Router працюють (повертає index.html).
            </p>
          </div>
  
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
            <h4 className="font-bold text-purple-700 mb-2 text-sm">⚡ Кешування</h4>
            <p className="text-xs text-purple-800 leading-relaxed">
              Статичні файли (JS, CSS, images) кешуються на 1 рік для максимальної швидкості.
            </p>
          </div>
        </div>
  
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-yellow-700 mb-2 text-lg">Як працює API proxy:</h4>
            <div className="text-sm text-yellow-800 leading-relaxed space-y-2">
              <div>
                <strong>Frontend запит:</strong> <code className="bg-yellow-200 px-2 py-1 rounded">await api.get('/users')</code>
              </div>
              <div>
                <strong>Браузер:</strong> <code className="bg-yellow-200 px-2 py-1 rounded">GET http://localhost/api/users</code>
              </div>
              <div>
                <strong>Nginx rewrite:</strong> <code className="bg-yellow-200 px-2 py-1 rounded">/api/users → /users</code>
              </div>
              <div>
                <strong>Proxy pass:</strong> <code className="bg-yellow-200 px-2 py-1 rounded">http://backend:8000/users</code>
              </div>
              <div className="text-green-600 font-bold">
                ✓ Same origin = CORS не потрібен!
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
 // Слайд 9 - З'єднання з backend (БЕЗ docker-compose)
{
    title: "🔗 З'єднання Frontend → Backend",
    slideNumber: "9 / 12",
    gradient: "from-purple-500 to-indigo-600",
    content: (
      <div className="space-y-6">
        <div className="bg-purple-50 border-4 border-purple-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-purple-700 mb-4 text-center">
            Схема з'єднання:
          </h3>
          <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
            <pre className="text-purple-700 text-xs leading-relaxed">
  {`┌─────────────── DEVELOPMENT ───────────────────────────────┐
  │                                                            │
  │  Browser                                                   │
  │     │                                                      │
  │     ├──► http://localhost:5173 ──► Frontend (Vite)        │
  │     │                                    │                 │
  │     │                                    │ CORS потрібен!  │
  │     │                                    ↓                 │
  │     └──► http://localhost:8000 ──► Backend (FastAPI)      │
  │                                                            │
  │  ✗ Різні порти = Різні origins = CORS required            │
  └────────────────────────────────────────────────────────────┘
  
  ┌─────────────── PRODUCTION ────────────────────────────────┐
  │                                                            │
  │  Browser                                                   │
  │     │                                                      │
  │     └──► http://localhost ──► Nginx (port 80)             │
  │                                   │                        │
  │                  ┌────────────────┴─────────────┐          │
  │                  │                              │          │
  │                  ▼                              ▼          │
  │           /  → Vue SPA                /api/* → Backend     │
  │           (статичні файли)            (proxy_pass)         │
  │                                                            │
  │  ✓ Same origin через proxy = CORS не потрібен!            │
  │                                                            │
  │  Примітка: Backend може бути:                             │
  │  • На іншому сервері (http://api.example.com)             │
  │  • В іншому Docker контейнері                             │
  │  • Локально на host machine                               │
  └────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
            <h4 className="font-bold text-yellow-700 mb-3 text-lg">🔧 Development</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border border-yellow-200">
                <strong>Frontend запит:</strong>
                <pre className="bg-gray-900 text-yellow-400 p-2 rounded mt-2 text-xs">
  {`await api.get('/users')`}
                </pre>
              </div>
              <div className="bg-white p-3 rounded border border-yellow-200">
                <strong>Реальний URL:</strong>
                <pre className="bg-gray-900 text-yellow-400 p-2 rounded mt-2 text-xs">
  {`http://localhost:8000/users`}
                </pre>
              </div>
              <div className="bg-red-100 p-3 rounded border border-red-300">
                <span className="text-red-700 font-bold">✗ CORS потрібен!</span><br/>
                <span className="text-xs text-red-600">5173 ≠ 8000 (різні порти)</span>
              </div>
            </div>
          </div>
  
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h4 className="font-bold text-blue-700 mb-3 text-lg">🚀 Production</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border border-blue-200">
                <strong>Frontend запит:</strong>
                <pre className="bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs">
  {`await api.get('/users')`}
                </pre>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <strong>Реальний URL:</strong>
                <pre className="bg-gray-900 text-blue-400 p-2 rounded mt-2 text-xs">
  {`/api/users
  → Nginx proxy
  → http://backend-server:8000/users`}
                </pre>
              </div>
              <div className="bg-green-100 p-3 rounded border border-green-300">
                <span className="text-green-700 font-bold">✓ CORS не потрібен!</span><br/>
                <span className="text-xs text-green-600">Same origin через proxy</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-5">
          <h4 className="font-bold text-indigo-700 mb-3 text-lg">⚙️ Nginx Proxy конфігурація</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-indigo-700">nginx.conf:</strong>
              <pre className="bg-gray-900 text-indigo-300 p-3 rounded mt-2 text-xs leading-relaxed">
  {`location /api/ {
      rewrite ^/api/(.*) /$1 break;
      
      # Proxy до backend сервера
      proxy_pass http://your-backend:8000;
      
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
  }`}
              </pre>
            </div>
            <div>
              <strong className="text-indigo-700">Варіанти backend:</strong>
              <ul className="mt-2 space-y-2 text-indigo-800 text-xs">
                <li className="bg-white p-2 rounded">
                  • <strong>Інший сервер:</strong><br/>
                  <code className="text-xs">proxy_pass http://api.example.com;</code>
                </li>
                <li className="bg-white p-2 rounded">
                  • <strong>Localhost:</strong><br/>
                  <code className="text-xs">proxy_pass http://host.docker.internal:8000;</code>
                </li>
                <li className="bg-white p-2 rounded">
                  • <strong>IP адреса:</strong><br/>
                  <code className="text-xs">proxy_pass http://192.168.1.100:8000;</code>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-green-700 mb-2 text-lg">Ключові моменти:</h4>
            <div className="text-sm text-green-800 leading-relaxed space-y-1">
              <p>• <strong>Development:</strong> Frontend і Backend на різних портах → потрібен CORS</p>
              <p>• <strong>Production:</strong> Все йде через Nginx на порту 80 → CORS не потрібен</p>
              <p>• <strong>Nginx Proxy:</strong> перенаправляє /api/* запити на backend сервер</p>
              <p>• <strong>Backend може бути:</strong> на іншому сервері, в Docker, або локально</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 10 - CORS налаштування
{
    title: "🌐 CORS налаштування",
    slideNumber: "10 / 12",
    gradient: "from-pink-500 to-rose-600",
    content: (
      <div className="space-y-6">
        <div className="bg-pink-50 border-4 border-pink-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-pink-700 mb-3">
            FastAPI Backend - main.py:
          </h3>
          <pre className="bg-gray-900 text-pink-300 p-5 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`from fastapi import FastAPI, Depends
  from fastapi.middleware.cors import CORSMiddleware
  from fastapi.security import OAuth2PasswordBearer
  
  app = FastAPI()
  
  # ════════════════════════════════════════════════════
  # CORS налаштування для Development
  # ════════════════════════════════════════════════════
  app.add_middleware(
      CORSMiddleware,
      allow_origins=[
          "http://localhost:5173",   # Vite dev server
          "http://localhost:80",      # Production через nginx
          "http://frontend",          # Docker network name
      ],
      allow_credentials=True,
      allow_methods=["*"],
      allow_headers=["*"],
  )
  
  oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
  
  @app.post("/auth/login")
  async def login(username: str, password: str):
      # Ваша логіка авторизації
      return {
          "access_token": "jwt_token_here",
          "token_type": "bearer",
          "user": {"id": 1, "username": username}
      }
  
  @app.get("/users")
  async def get_users(token: str = Depends(oauth2_scheme)):
      # Token автоматично з Authorization header
      return [{"id": 1, "name": "John"}]`}
          </pre>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5">
            <h4 className="font-bold text-red-700 mb-3 text-lg">❌ Development - CORS потрібен</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border border-red-200">
                <strong>Чому?</strong>
                <pre className="bg-gray-900 text-red-400 p-2 rounded mt-2 text-xs leading-relaxed">
  {`Frontend: http://localhost:5173
  Backend:  http://localhost:8000
  
  Різні порти = Різні origins
  → Browser блокує запити без CORS!`}
                </pre>
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                <strong>Рішення:</strong>
                <pre className="bg-gray-900 text-red-400 p-2 rounded mt-2 text-xs">
  {`allow_origins=[
    "http://localhost:5173"
  ]`}
                </pre>
              </div>
              <div className="bg-red-100 p-3 rounded">
                <span className="text-red-700 font-bold">⚠️ Без CORS:</span><br/>
                <span className="text-xs text-red-600">
                  Access to fetch has been blocked by CORS policy
                </span>
              </div>
            </div>
          </div>
  
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3 text-lg">✅ Production - CORS не потрібен</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-white p-3 rounded border border-green-200">
                <strong>Чому?</strong>
                <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs leading-relaxed">
  {`Browser → http://localhost/
           → http://localhost/api/users
  
  Той самий origin (localhost:80)
  → Same origin policy = OK!`}
                </pre>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <strong>Nginx робить proxy:</strong>
                <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2 text-xs">
  {`/api/* → backend:8000
  (внутрішній Docker routing)`}
                </pre>
              </div>
              <div className="bg-green-100 p-3 rounded">
                <span className="text-green-700 font-bold">✓ Same Origin:</span><br/>
                <span className="text-xs text-green-600">
                  Browser бачить все з localhost:80
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
          <h4 className="font-bold text-blue-700 mb-3 text-lg">🔐 JWT Authentication з CORS</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Frontend (api.ts):</strong>
              <pre className="bg-gray-900 text-blue-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`api.interceptors.request.use(config => {
    const token = useAuthStore().token
    if (token) {
      config.headers.Authorization = 
        \`Bearer \${token}\`
    }
    return config
  })`}
              </pre>
            </div>
            <div>
              <strong>Backend перевіряє:</strong>
              <pre className="bg-gray-900 text-blue-400 p-3 rounded mt-2 text-xs leading-relaxed">
  {`@app.get("/users")
  async def get_users(
    token: str = Depends(oauth2_scheme)
  ):
    # oauth2_scheme витягує токен
    # з Authorization header
    return users`}
              </pre>
            </div>
          </div>
        </div>
  
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">💡</div>
          <div>
            <h4 className="font-bold text-yellow-700 mb-2 text-lg">Підсумок:</h4>
            <div className="text-sm text-yellow-800 leading-relaxed space-y-2">
              <p>
                <strong className="text-yellow-900">Development:</strong>
                <br/>• Frontend (5173) → Backend (8000) - різні порти
                <br/>• CORS middleware обов'язковий в FastAPI
                <br/>• <code className="bg-yellow-200 px-1 rounded">allow_origins=["http://localhost:5173"]</code>
              </p>
              <p>
                <strong className="text-yellow-900">Production:</strong>
                <br/>• Browser → Nginx (80) → Backend (internal)
                <br/>• Same origin через proxy = CORS не потрібен
                <br/>• Але краще залишити в коді для сумісності
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 11 - Команди запуску
{
    title: "▶️ Команди запуску контейнерів",
    slideNumber: "11 / 12",
    gradient: "from-emerald-500 to-green-600",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Development */}
          <div className="bg-emerald-50 border-4 border-emerald-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-emerald-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">🔧</span>
              Development
            </h3>
            <pre className="bg-gray-900 text-emerald-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Build development образу
  docker build -f Dockerfile.dev -t vue-app-dev .
  
  # Запуск development контейнера
  docker run -d \\
    --name vue-frontend-dev \\
    -p 5173:5173 \\
    -v $(pwd):/app \\
    -v /app/node_modules \\
    vue-app-dev
  
  # Перегляд логів
  docker logs -f vue-frontend-dev
  
  # Зупинка
  docker stop vue-frontend-dev
  
  # Видалення
  docker rm vue-frontend-dev`}
            </pre>
          </div>
  
          {/* Production */}
          <div className="bg-blue-50 border-4 border-blue-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              Production
            </h3>
            <pre className="bg-gray-900 text-blue-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Build production образу
  docker build \\
    -f Dockerfile.prod \\
    --build-arg VITE_API_BASE=/api \\
    -t vue-app-prod .
  
  # Запуск production контейнера
  docker run -d \\
    --name vue-frontend \\
    -p 80:80 \\
    vue-app-prod
  
  # Перегляд логів
  docker logs -f vue-frontend
  
  # Зупинка
  docker stop vue-frontend
  
  # Видалення
  docker rm vue-frontend`}
            </pre>
          </div>
        </div>
  
        <div className="bg-purple-50 border-4 border-purple-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-purple-700 mb-3">
            🔍 Debugging команди:
          </h3>
          <pre className="bg-gray-900 text-purple-300 p-4 rounded-lg text-sm overflow-x-auto leading-relaxed">
  {`# Зайти в контейнер
  docker exec -it vue-frontend sh
  
  # Переглянути запущені контейнери
  docker ps
  
  # Переглянути всі контейнери (включно зі зупиненими)
  docker ps -a
  
  # Статистика використання ресурсів
  docker stats
  
  # Перезапуск контейнера
  docker restart vue-frontend
  
  # Переглянути образи
  docker images
  
  # Видалити образ
  docker rmi vue-app-prod
  
  # Повне очищення
  docker system prune -a`}
          </pre>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-5">
            <h4 className="font-bold text-yellow-700 mb-3 text-lg">🧪 Тестування:</h4>
            <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Перевірка frontend (prod)
  curl http://localhost
  
  # Перевірка frontend (dev)
  curl http://localhost:5173
  
  # Перевірити nginx конфігурацію
  docker exec vue-frontend \\
    cat /etc/nginx/conf.d/default.conf
  
  # Перевірити статичні файли
  docker exec vue-frontend \\
    ls /usr/share/nginx/html`}
            </pre>
          </div>
  
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3 text-lg">📍 Доступ:</h4>
            <div className="space-y-3 text-xs">
              <div className="bg-white p-3 rounded border border-green-200">
                <strong className="text-green-700">Development:</strong><br/>
                <code className="text-green-600">http://localhost:5173</code>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <strong className="text-blue-700">Production:</strong><br/>
                <code className="text-blue-600">http://localhost</code>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-5 flex gap-4">
          <div className="text-3xl">⚠️</div>
          <div>
            <h4 className="font-bold text-red-700 mb-2 text-lg">Важливо!</h4>
            <div className="text-sm text-red-800 leading-relaxed space-y-1">
              <p>• <strong>-d</strong> - detached mode (у фоновому режимі)</p>
              <p>• <strong>-p host:container</strong> - mapping портів</p>
              <p>• <strong>-v</strong> - volumes для hot-reload в dev</p>
              <p>• <strong>--build-arg</strong> - передача змінних при build</p>
              <p>• <strong>--name</strong> - ім'я контейнера для зручності</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
 // Слайд 12 - Troubleshooting (БЕЗ docker-compose)
{
    title: "🔴 Troubleshooting - Типові проблеми",
    slideNumber: "12 / 12",
    gradient: "from-red-500 to-pink-600",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Проблема 1 */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
            <h4 className="font-bold text-red-800 mb-2 text-sm flex items-center gap-2">
              <span>🔴</span> Контейнер не запускається
            </h4>
            <pre className="bg-gray-900 text-red-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити статус
  docker ps -a
  
  # Подивитись логи
  docker logs vue-frontend
  
  # Перевірити чи порт зайнятий
  lsof -i :80
  lsof -i :5173
  
  # Видалити і створити заново
  docker rm vue-frontend
  docker run -d --name vue-frontend -p 80:80 vue-app-prod`}
            </pre>
          </div>
  
          {/* Проблема 2 */}
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
            <h4 className="font-bold text-yellow-800 mb-2 text-sm flex items-center gap-2">
              <span>🟡</span> CORS помилки в Development
            </h4>
            <pre className="bg-gray-900 text-yellow-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити .env
  cat .env.development
  # Має бути: VITE_API_BASE=http://localhost:8000
  
  # Перевірити чи backend доступний
  curl http://localhost:8000/docs
  
  # Додати в FastAPI CORS
  allow_origins=["http://localhost:5173"]
  
  # Перезапустити контейнер
  docker restart vue-frontend-dev`}
            </pre>
          </div>
  
          {/* Проблема 3 */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4">
            <h4 className="font-bold text-blue-800 mb-2 text-sm flex items-center gap-2">
              <span>🔵</span> Hot-reload не працює
            </h4>
            <pre className="bg-gray-900 text-blue-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити vite.config.ts
  server: {
    watch: {
      usePolling: true  // Для Docker!
    }
  }
  
  # Перевірити volumes при запуску
  docker run -d \\
    -v $(pwd):/app \\
    -v /app/node_modules \\
    ...
  
  # Rebuild і перезапуск
  docker build -f Dockerfile.dev -t vue-app-dev .
  docker rm vue-frontend-dev
  docker run ...`}
            </pre>
          </div>
  
          {/* Проблема 4 */}
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4">
            <h4 className="font-bold text-green-800 mb-2 text-sm flex items-center gap-2">
              <span>🟢</span> Nginx 404 при refresh сторінки
            </h4>
            <pre className="bg-gray-900 text-green-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити nginx.conf
  location / {
    try_files $uri $uri/ /index.html;
  }
  
  # Перевірити чи файли є
  docker exec vue-frontend ls /usr/share/nginx/html
  
  # Перевірити nginx конфігурацію
  docker exec vue-frontend \\
    cat /etc/nginx/conf.d/default.conf
  
  # Rebuild
  docker build -f Dockerfile.prod -t vue-app-prod .
  docker rm vue-frontend
  docker run -d --name vue-frontend -p 80:80 vue-app-prod`}
            </pre>
          </div>
  
          {/* Проблема 5 */}
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4">
            <h4 className="font-bold text-purple-800 mb-2 text-sm flex items-center gap-2">
              <span>🟣</span> JWT 401 Unauthorized
            </h4>
            <pre className="bg-gray-900 text-purple-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити токен в DevTools Console
  localStorage.getItem('token')
  
  # Перевірити header в Network tab
  Authorization: Bearer <token>
  
  # Перевірити Axios interceptor
  console.log(useAuthStore().token)
  
  # Очистити localStorage
  localStorage.clear()
  location.reload()`}
            </pre>
          </div>
  
          {/* Проблема 6 */}
          <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-4">
            <h4 className="font-bold text-orange-800 mb-2 text-sm flex items-center gap-2">
              <span>🟠</span> Build fails / Помилки збірки
            </h4>
            <pre className="bg-gray-900 text-orange-300 p-3 rounded text-xs overflow-x-auto leading-relaxed">
  {`# Очистити Docker кеш
  docker system prune -a
  
  # Видалити всі образи проекту
  docker rmi vue-app-dev vue-app-prod
  
  # Видалити node_modules локально
  rm -rf node_modules package-lock.json
  
  # Build без кешу
  docker build --no-cache -f Dockerfile.prod -t vue-app-prod .
  
  # Перевірити логи build
  docker build -f Dockerfile.prod -t vue-app-prod . 2>&1 | tee build.log`}
            </pre>
          </div>
        </div>
  
        <div className="bg-indigo-50 border-4 border-indigo-500 rounded-xl p-5">
          <h3 className="text-lg font-bold text-indigo-700 mb-3">
            🛠️ Загальні команди для діагностики:
          </h3>
          <pre className="bg-gray-900 text-indigo-300 p-4 rounded-lg text-xs overflow-x-auto leading-relaxed">
  {`# Перевірити всі контейнери
  docker ps -a
  
  # Переглянути логи контейнера
  docker logs -f vue-frontend
  
  # Останні 100 рядків логів
  docker logs --tail 100 vue-frontend
  
  # Перевірити використання ресурсів
  docker stats
  
  # Перевірити образи
  docker images
  
  # Зайти всередину контейнера
  docker exec -it vue-frontend sh
  
  # Перевірити змінні середовища в контейнері
  docker exec vue-frontend env
  
  # Перевірити процеси в контейнері
  docker top vue-frontend
  
  # Інформація про контейнер
  docker inspect vue-frontend
  
  # Видалити зупинені контейнери
  docker container prune
  
  # Видалити невикористані образи
  docker image prune`}
          </pre>
        </div>
  
        <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 flex gap-3">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-bold text-yellow-700 mb-2">Поради:</h4>
            <div className="text-xs text-yellow-800 leading-relaxed space-y-1">
              <p>• Завжди перевіряйте логи: <code className="bg-yellow-200 px-1 rounded">docker logs -f container-name</code></p>
              <p>• При змінах в Dockerfile: обов'язково rebuild образу</p>
              <p>• При проблемах з кешем: <code className="bg-yellow-200 px-1 rounded">--no-cache</code></p>
              <p>• Використовуйте DevTools Network tab для перевірки API запитів</p>
              <p>• Перевіряйте .env файли перед build</p>
              <p>• Docker Desktop показує логи та статус візуально</p>
              <p>• Порти мають бути вільні перед запуском контейнера</p>
            </div>
          </div>
        </div>
  
        <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 flex gap-3">
          <div className="text-2xl">✅</div>
          <div>
            <h4 className="font-bold text-green-700 mb-2">Швидка перевірка працездатності:</h4>
            <div className="text-xs text-green-800 space-y-1">
              <p>1. <code className="bg-green-200 px-1 rounded">docker ps</code> - контейнер запущений?</p>
              <p>2. <code className="bg-green-200 px-1 rounded">docker logs vue-frontend</code> - немає помилок?</p>
              <p>3. <code className="bg-green-200 px-1 rounded">curl http://localhost</code> - frontend працює?</p>
              <p>4. Відкрити DevTools → Network - запити йдуть правильно?</p>
              <p>5. Перевірити nginx конфігурацію всередині контейнера</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  // Слайд 13 - Підсумок/Чеклист
{
    title: "✅ Підсумок - Чеклист готовності",
    slideNumber: "13 / 13",
    gradient: "from-green-500 to-emerald-600",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-4 border-green-500 rounded-xl p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            🎉 Ви навчились розгортати Vue.js у Docker!
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border-2 border-green-300">
              <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                <span className="text-xl">📁</span> Структура
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Best Practices vs Simple</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Організація файлів</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600">✓</span>
                  <span>TypeScript setup</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
              <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Конфігурація
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>.env файли</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>VITE_API_BASE</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>vite.config.ts</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
              <h4 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🔐</span> API & Auth
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Axios instance</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>JWT interceptors</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600">✓</span>
                  <span>Pinia auth store</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg border-2 border-teal-300">
              <h4 className="font-bold text-teal-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🔧</span> Development
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Dockerfile.dev</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Vite dev server</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span>Hot-reload</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🚀</span> Production
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Dockerfile.prod</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Multi-stage build</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Nginx optimization</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
                <span className="text-xl">⚙️</span> Nginx
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>API proxy</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>SPA routing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-600">✓</span>
                  <span>Кешування</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg border-2 border-pink-300">
              <h4 className="font-bold text-pink-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🔗</span> З'єднання
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Frontend → Backend</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Dev vs Prod схеми</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>CORS setup</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg border-2 border-indigo-300">
              <h4 className="font-bold text-indigo-700 mb-3 flex items-center gap-2">
                <span className="text-xl">▶️</span> Команди
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600">✓</span>
                  <span>docker build</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600">✓</span>
                  <span>docker run</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-indigo-600">✓</span>
                  <span>Debugging</span>
                </div>
              </div>
            </div>
  
            <div className="bg-white p-4 rounded-lg border-2 border-red-300">
              <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                <span className="text-xl">🔴</span> Troubleshooting
              </h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Типові проблеми</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Діагностика</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">✓</span>
                  <span>Рішення</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
            <h4 className="font-bold text-blue-700 mb-3 text-lg">📋 Чеклист для Production:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">☐</span>
                <span>.env.production налаштований (VITE_API_BASE=/api)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">☐</span>
                <span>Dockerfile.prod з multi-stage build</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">☐</span>
                <span>nginx.conf з API proxy та SPA routing</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">☐</span>
                <span>Backend налаштований (CORS якщо треба)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">☐</span>
                <span>Протестовано: curl http://localhost/api/</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">☐</span>
                <span>Образ розміром ~25MB (перевірити docker images)</span>
              </div>
            </div>
          </div>
  
          <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-5">
            <h4 className="font-bold text-green-700 mb-3 text-lg">🚀 Наступні кроки:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>Docker Compose</strong> - оркестрація multiple сервісів</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>CI/CD</strong> - автоматизація build і deploy</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>Kubernetes</strong> - масштабування в production</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>SSL/HTTPS</strong> - захищений зв'язок</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>Monitoring</strong> - логування та метрики</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">→</span>
                <span><strong>Performance</strong> - оптимізація та CDN</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-4 border-purple-500 rounded-xl p-6">
          <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">
            🎯 Ключові висновки:
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-purple-800">
                <strong>Development:</strong> Vite dev server + hot-reload = швидка розробка
              </p>
              <p className="text-purple-800">
                <strong>Production:</strong> Multi-stage build + Nginx = оптимальний результат
              </p>
              <p className="text-purple-800">
                <strong>Розмір:</strong> 500MB → 25MB (економія 95%)
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-purple-800">
                <strong>CORS:</strong> Потрібен в dev, не потрібен в prod (proxy!)
              </p>
              <p className="text-purple-800">
                <strong>API:</strong> Axios + JWT interceptors = зручна авторизація
              </p>
              <p className="text-purple-800">
                <strong>Nginx:</strong> API proxy + SPA routing + кешування
              </p>
            </div>
          </div>
        </div>
  
        <div className="text-center mt-6">
          <p className="text-3xl mb-2">🎉</p>
          <p className="text-2xl font-bold text-gray-800 mb-2">Дякую за увагу!</p>
          <p className="text-lg text-gray-600">Vue.js + Docker = ❤️</p>
          <p className="text-sm text-gray-500 mt-3">Наступна тема: Docker Compose для оркестрації сервісів</p>
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