import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Database, Server, Lock, Network, AlertCircle } from 'lucide-react';

const Presentation = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Розгортання FastAPI додатку в Docker",
            subtitle: "Backend: FastAPI + PostgreSQL + Redis",
            content: (
                <div className="text-center space-y-6">
                    <div className="flex justify-center gap-8 mt-8">
                        <div className="bg-blue-100 p-6 rounded-lg">
                            <Server className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                            <p className="font-semibold">FastAPI</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg">
                            <Database className="w-16 h-16 text-green-600 mx-auto mb-2" />
                            <p className="font-semibold">PostgreSQL</p>
                        </div>
                        <div className="bg-red-100 p-6 rounded-lg">
                            <Database className="w-16 h-16 text-red-600 mx-auto mb-2" />
                            <p className="font-semibold">Redis</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-600 mt-8">Практична лекція з контейнеризації backend сервісів</p>
                </div>
            )
        },
        {
            title: "1. Запуск PostgreSQL в контейнері",
            content: (
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Database className="w-5 h-5" />
                            Запуск PostgreSQL
                        </h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`docker run -d \\
  --name postgres_container \\
  -e POSTGRES_USER=myuser \\
  -e POSTGRES_PASSWORD=mypassword \\
  -e POSTGRES_DB=mydb \\
  -p 5432:5432 \\
  -v postgres_data:/var/lib/postgresql/data \\
  postgres:15`}</pre>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500 text-sm">
                        <p><strong>Важливо:</strong> Volume забезпечує збереження даних після перезапуску контейнера</p>
                    </div>
                </div>
            )
        },
        {
            title: "2. Запуск Redis в контейнері",
            content: (
                <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Database className="w-5 h-5" />
                            Development (без персистентності)
                        </h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`docker run -d \\
  --name redis_container \\
  -p 6379:6379 \\
  redis:7-alpine`}</pre>
                        <p className="text-sm mt-2 text-gray-700">✓ Швидко, просто, дані не критичні</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Database className="w-5 h-5" />
                            Production (з персистентністю)
                        </h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`docker run -d \\
  --name redis_container \\
  -p 6379:6379 \\
  -v redis_data:/data \\
  redis:7-alpine redis-server --appendonly yes`}</pre>
                        <p className="text-sm mt-2 text-gray-700">✓ Дані зберігаються, безпечно для prod</p>
                    </div>
                </div>
            )
        },
        {
            title: "3. Структура проекту FastAPI",
            content: (
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-semibold mb-2">✅ Best Practice (рекомендовано)</h3>
                            <pre className="bg-gray-900 text-green-400 p-3 rounded overflow-x-auto text-xs">
                                {`project/
├── app/
│   ├── __init__.py
│   ├── main.py
│   ├── config.py
│   ├── auth.py
│   ├── crud.py
│   └── models.py
├── .env
├── .env.docker
├── .env.example
├── Dockerfile.dev
├── Dockerfile.prod
├── requirements.txt
└── .gitignore`}</pre>
                            <p className="text-xs mt-2 text-gray-700">Команда: <code>uvicorn app.main:app</code></p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-semibold mb-2">⚠️ Простий варіант</h3>
                            <pre className="bg-gray-900 text-green-400 p-3 rounded overflow-x-auto text-xs">
                                {`project/
├── main.py
├── config.py
├── auth.py
├── crud.py
├── models.py
├── .env
├── .env.docker
├── .env.example
├── Dockerfile.dev
├── Dockerfile.prod
├── requirements.txt
└── .gitignore`}</pre>
                            <p className="text-xs mt-2 text-gray-700">Команда: <code>uvicorn main:app</code></p>
                        </div>
                    </div>
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-500 text-sm">
                        <p><strong>Додайте в .gitignore:</strong></p>
                        <pre className="bg-gray-800 text-white p-2 rounded mt-2 text-xs">{`.env\n.env.docker\n__pycache__/\n*.pyc\n.venv/`}</pre>
                    </div>
                </div>
            )
        },
        {
            title: "4. Файл .env (приклад)",
            content: (
                <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Lock className="w-5 h-5" />
                            .env.example (публічний шаблон)
                        </h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`# Database
POSTGRES_USER=myuser
POSTGRES_PASSWORD=changeme
POSTGRES_DB=mydb
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# Application
SECRET_KEY=your-secret-key-here
DEBUG=True`}</pre>
                    </div>
                    <p className="text-sm text-gray-600">
                        <strong>Примітка:</strong> Створіть копію як <code>.env</code> та <code>.env.docker</code> з реальними значеннями
                    </p>
                </div>
            )
        },
        {
            title: "5. Конфігурація FastAPI (config.py)",
            content: (
                <div className="space-y-4">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                        {`from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

# ВАЖЛИВО: override=False не перезаписує існуючі змінні
load_dotenv(override=False)

class Settings(BaseSettings):
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_HOST: str = "localhost"
    POSTGRES_PORT: int = 5432
    
    REDIS_HOST: str = "localhost"
    REDIS_PORT: int = 6379
    
    ENVIRONMENT: str = "development"
    ALLOWED_ORIGINS: str = "http://localhost:5173"
    SECRET_KEY: str
    DEBUG: bool = False
    
    @property
    def DATABASE_URL(self) -> str:
        return f"postgresql://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_HOST}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}"
    
    @property
    def REDIS_URL(self) -> str:
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}"
    
    class Config:
        env_file = ".env"

settings = Settings()`}</pre>
                </div>
            )
        },
        {
            title: "6. Використання settings в main.py",
            content: (
                <div className="space-y-4">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                        {`from dotenv import load_dotenv

# ВАЖЛИВО: load_dotenv() на самому початку файлу!
load_dotenv(override=False)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import redis
from app.config import settings

app = FastAPI(title="Wish List API", version="1.0.0")

# CORS - використовуємо settings
origins = [origin.strip() for origin in settings.ALLOWED_ORIGINS.split(",")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Redis - використовуємо settings.REDIS_URL
redis_client = redis.from_url(settings.REDIS_URL, decode_responses=True)

# PostgreSQL (приклад для SQLAlchemy)
# from sqlalchemy import create_engine
# engine = create_engine(settings.DATABASE_URL)`}</pre>
                    <div className="bg-blue-50 p-3 rounded text-sm">
                        <p><strong>✓ Переваги:</strong> Вся конфігурація в config.py, легко тестувати, типізація</p>
                    </div>
                </div>
            )
        },
        {
            title: "7. Dockerfile.dev (Development)",
            content: (
                <div className="space-y-4">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                        {`FROM python:3.11-slim

WORKDIR /app

# Встановлення залежностей
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \\
    pip install --no-cache-dir -r requirements.txt

# Копіювання коду
COPY . .

# Порт
EXPOSE 8000

# Запуск з hot-reload для розробки
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", \\
     "--port", "8000", "--reload"]`}</pre>
                    <div className="bg-blue-50 p-3 rounded text-sm">
                        <p><strong>Особливості:</strong> <code>--reload</code> для автоматичного перезавантаження при змінах коду</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded text-sm">
                        <p><strong>⚠️ Важливо:</strong> <code>app.main:app</code> для структури з папкою app/. Якщо main.py в корені → <code>main:app</code></p>
                    </div>
                </div>
            )
        },
        {
            title: "7. Dockerfile.prod (Production)",
            content: (
                <div className="space-y-4">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                        {`FROM python:3.11-slim AS builder

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \\
    pip install --no-cache-dir --prefix=/install -r requirements.txt


FROM python:3.11-slim

WORKDIR /app

COPY --from=builder /install /usr/local

COPY . .

RUN useradd -m -u 1000 appuser && \\
    chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]`}</pre>
                    <div className="bg-green-50 p-3 rounded text-sm">
                        <p><strong>Multi-stage build:</strong> Білдимо залежності окремо → копіюємо тільки результат. Образ менший на 30-40%!</p>
                    </div>
                </div>
            )
        },
        {
            title: "8. Файл .env.docker",
            content: (
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-semibold mb-2">Конфігурація для Docker мережі</h3>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
          {`# Database (використовуємо назви контейнерів!)
          POSTGRES_USER=myuser
          POSTGRES_PASSWORD=strongpassword123
          POSTGRES_DB=mydb
          POSTGRES_HOST=`}<span className="bg-yellow-300 text-gray-900 px-1 font-bold">postgres_container</span>{`
          POSTGRES_PORT=5432
          
          # Redis (назва контейнера!)
          REDIS_HOST=`}<span className="bg-yellow-300 text-gray-900 px-1 font-bold">redis_container</span>{`
          REDIS_PORT=6379
          
          # Application
          SECRET_KEY=super-secret-production-key
          DEBUG=False`}
                  </pre>
                </div>
                
                <div className="bg-yellow-50 p-3 rounded text-sm border-l-4 border-yellow-500">
                  <AlertCircle className="w-5 h-5 inline mr-2 text-yellow-600" />
                  <strong>Ключова відмінність:</strong> HOST використовує <span className="bg-yellow-300 px-1 font-mono font-bold">назви контейнерів</span> замість <span className="line-through text-red-600">localhost</span>
                </div>
          
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <strong>Чому не localhost?</strong> У Docker кожен контейнер — окрема машина. 
                  Docker DNS автоматично резолвить назви контейнерів в IP адреси всередині мережі.
                </div>
              </div>
            )
          },
        {
            title: "9. Створення Docker мережі",
            content: (
                <div className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <Network className="w-5 h-5" />
                            Створення власної мережі
                        </h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`# Створити мережу
docker network create myapp_network

# Перевірити створення
docker network ls

# Переглянути деталі мережі
docker network inspect myapp_network`}</pre>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-sm">
                        <p><strong>Переваги власної мережі:</strong></p>
                        <ul className="list-disc list-inside ml-2 mt-2">
                            <li>DNS резолюція по іменах контейнерів</li>
                            <li>Ізоляція від інших контейнерів</li>
                            <li>Краща безпека</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "10. Додавання існуючих контейнерів до мережі",
            content: (
                <div className="space-y-4">
                    <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                        <h3 className="font-semibold mb-2">Підключення вже запущених контейнерів</h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`# Додати PostgreSQL до мережі
docker network connect myapp_network postgres_container

# Додати Redis до мережі
docker network connect myapp_network redis_container

# Перевірити підключення
docker network inspect myapp_network`}</pre>
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                        <p><strong>Результат inspect:</strong> Побачите контейнери в секції "Containers" з їх IP адресами</p>
                    </div>
                </div>
            )
        },
        {
            title: "11. Запуск контейнерів одразу в мережі",
            content: (
                <div className="space-y-4">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                        {`# PostgreSQL з мережею
docker run -d \\
  --name postgres_container \\
  --network myapp_network \\
  -e POSTGRES_USER=myuser \\
  -e POSTGRES_PASSWORD=mypassword \\
  -e POSTGRES_DB=mydb \\
  -p 5432:5432 \\
  -v postgres_data:/var/lib/postgresql/data \\
  postgres:15

# Redis з мережею
docker run -d \\
  --name redis_container \\
  --network myapp_network \\
  -p 6379:6379 \\
  -v redis_data:/data \\
  redis:7-alpine`}</pre>
                    <div className="bg-green-50 p-3 rounded text-sm">
                        <p><strong>Параметр --network</strong> одразу додає контейнер до мережі при створенні</p>
                    </div>
                </div>
            )
        },
        {
            title: "12. Білд FastAPI Docker образу",
            content: (
                <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <h3 className="font-semibold mb-2">Development образ</h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`# Білд dev образу
docker build -f Dockerfile.dev -t myapp:dev .

# Білд production образу
docker build -f Dockerfile.prod -t myapp:prod .`}</pre>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-sm">
                        <p><strong>Параметри:</strong></p>
                        <ul className="list-disc list-inside ml-2">
                            <li><code>-f</code> - вказує конкретний Dockerfile</li>
                            <li><code>-t</code> - тег для образу</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "13. Запуск FastAPI в мережі",
            content: (
                <div className="space-y-4">
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                        {`# Development
docker run -d \\
  --name fastapi_dev \\
  --network myapp_network \\
  --env-file .env.docker \\
  -p 8000:8000 \\
  -v $(pwd)/app:/app/app \\
  myapp:dev

# Production
docker run -d \\
  --name fastapi_prod \\
  --network myapp_network \\
  --env-file .env.docker \\
  -p 8000:8000 \\
  myapp:prod`}</pre>
                    <div className="bg-yellow-50 p-3 rounded text-sm">
                        <p><strong>Dev особливості:</strong> Volume mount для коду дозволяє hot-reload без перезбирання</p>
                    </div>
                </div>
            )
        },
        {
            title: "14. Перевірка з'єднань",
            content: (
                <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h3 className="font-semibold mb-2">Тестування підключень</h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`# Перевірити логи FastAPI
docker logs fastapi_dev

# Зайти в контейнер для діагностики
docker exec -it fastapi_dev /bin/bash

# Всередині контейнера: перевірити доступність через Python
python -c "import socket; socket.create_connection(('postgres_container', 5432), timeout=2); print('PostgreSQL is available!')"

python -c "import socket; socket.create_connection(('redis_container', 6379), timeout=2); print('Redis is available!')"

# Перевірити змінні оточення
env | grep POSTGRES
env | grep REDIS

# Тест підключення через settings
python -c "from app.config import settings; print(settings.DATABASE_URL)"
python -c "from app.config import settings; print(settings.REDIS_URL)"`}</pre>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded text-sm">
                        <p><strong>Примітка:</strong> В slim образі немає ping/curl, тому використовуємо Python socket</p>
                    </div>
                </div>
            )
        },
        {
            title: "15. Метод --link (застарілий)",
            content: (
                <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            Legacy метод (тільки для старих систем)
                        </h3>
                        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                            {`# Синтаксис: --link <container_name>:<alias>
docker run -d \\
  --name fastapi_app \\
  --link postgres_container:postgres \\
  --link redis_container:redis \\
  --env-file .env.docker \\
  -p 8000:8000 \\
  myapp:dev

# Перевірити /etc/hosts всередині контейнера
docker exec fastapi_app cat /etc/hosts`}</pre>
                    </div>
                    <div className="bg-blue-50 p-3 rounded text-sm space-y-2">
                        <p><strong>Як працює --link:</strong></p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                            <li><code>postgres_container:postgres</code> - контейнер доступний як "postgres"</li>
                            <li><code>redis_container:redis</code> - контейнер доступний як "redis"</li>
                            <li>Docker додає записи в /etc/hosts контейнера</li>
                            <li>Аліас може бути довільним, але логічним</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded text-sm">
                        <p><strong>В .env.docker треба змінити HOST на аліаси:</strong></p>
                        <pre className="bg-gray-800 text-white p-2 rounded mt-1">
                            POSTGRES_HOST=postgres<br />
                            REDIS_HOST=redis
                        </pre>
                        <p className="mt-2"><strong>⚠️ Важливо:</strong> --link застарів. З --link НЕ треба --network! Використовуйте docker network!</p>
                    </div>
                </div>
            )
        },
        {
            title: "16. Корисні команди",
            content: (
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded text-sm mb-3">
                  <strong>💡 Порада:</strong> Використовуйте ці команди для управління Docker контейнерами та очищення системи
                </div>
                
                <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
          {`
          `}<span className="text-cyan-400 font-bold"># === ПЕРЕГЛЯД ===</span>{`
          # Переглянути всі контейнери (включно із зупиненими)
          docker ps -a
          
          # Переглянути тільки запущені контейнери
          docker ps
          
          # Переглянути всі образи
          docker images
          
          # Переглянути volumes
          docker volume ls
          
          # Переглянути мережі
          docker network ls
          
          # Використання диску
          docker system df
          
          `}<span className="text-cyan-400 font-bold"># === ЛОГИ ===</span>{`
          # Переглянути логи в реальному часі
          docker logs -f fastapi_dev
          
          # Останні 100 рядків логів
          docker logs --tail 100 fastapi_dev
          
          `}<span className="text-cyan-400 font-bold"># === ЗУПИНКА ===</span>{`
          # Зупинити всі контейнери
          docker stop fastapi_dev postgres_container redis_container
          
          # Зупинити всі запущені контейнери
          docker stop $(docker ps -q)
          
          `}<span className="text-cyan-400 font-bold"># === ВИДАЛЕННЯ ===</span>{`
          # Видалити контейнери
          docker rm fastapi_dev postgres_container redis_container
          
          # Видалити образи
          docker rmi myapp:dev myapp:prod
          
          # Видалити volume
          docker volume rm redis_data postgres_data
          
          # Видалити мережу
          docker network rm myapp_network
          
          `}<span className="text-yellow-400 font-bold"># === ОЧИЩЕННЯ (обережно!) ===</span>{`
          # Видалити все невикористовуване (БЕЗ volumes)
          docker system prune -a
          
          # Видалити все невикористовуване (З volumes!)
          docker system prune -a --volumes
          
          # Видалити тільки зупинені контейнери
          docker container prune
          
          # Видалити тільки невикористовувані образи
          docker image prune -a
          
          # Видалити тільки невикористовувані volumes
          docker volume prune
          
          `}<span className="text-cyan-400 font-bold"># === ІНСПЕКЦІЯ ===</span>{`
          # Детальна інформація про контейнер
          docker inspect fastapi_dev
          
          # Перевірити IP адресу контейнера
          docker inspect fastapi_dev | grep IPAddress
          
          # Подивитися змінні оточення
          docker inspect fastapi_dev | grep -A 20 "Env"
          
          `}<span className="text-cyan-400 font-bold"># === ВИКОНАННЯ КОМАНД ===</span>{`
          # Увійти в контейнер
          docker exec -it fastapi_dev bash
          
          # Виконати команду в контейнері
          docker exec fastapi_dev ls -la
          
          # Перевірити змінні всередині контейнера
          docker exec fastapi_dev env`}
                </pre>
          
                <div className="bg-red-50 p-3 rounded text-sm border-l-4 border-red-500">
                  <strong>⚠️ Увага:</strong> Команди з <code className="bg-red-200 px-1">--volumes</code> видаляють дані назавжди!
                </div>
              </div>
            )
          },
        {
            title: "17. Troubleshooting",
            content: (
                <div className="space-y-3 text-sm">
                    <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                        <p className="font-semibold">Проблема: Не може підключитися до БД</p>
                        <ul className="list-disc list-inside ml-2 mt-1">
                            <li>Перевірте чи контейнери в одній мережі: <code>docker network inspect</code></li>
                            <li>Перевірте POSTGRES_HOST в .env.docker (має бути назва контейнера)</li>
                            <li>Перевірте load_dotenv(override=False)</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                        <p className="font-semibold">Проблема: Зміни коду не відображаються</p>
                        <ul className="list-disc list-inside ml-2 mt-1">
                            <li>Dev: Перевірте volume mount <code>-v $(pwd)/app:/app/app</code></li>
                            <li>Prod: Потрібно перезібрати образ <code>docker build</code></li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                        <p className="font-semibold">Проблема: Port already allocated</p>
                        <ul className="list-disc list-inside ml-2 mt-1">
                            <li>Зупиніть старий контейнер: <code>docker stop</code></li>
                            <li>Або змініть порт: <code>-p 8001:8000</code></li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Підсумок",
            content: (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Ключові моменти:</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-white p-3 rounded shadow">
                                <p className="font-semibold text-blue-600">✓ Окремі контейнери</p>
                                <p className="text-gray-600">PostgreSQL, Redis, FastAPI</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow">
                                <p className="font-semibold text-green-600">✓ .env файли</p>
                                <p className="text-gray-600">.env, .env.docker (не в git!)</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow">
                                <p className="font-semibold text-purple-600">✓ Два Dockerfile</p>
                                <p className="text-gray-600">dev (reload) та prod (gunicorn)</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow">
                                <p className="font-semibold text-orange-600">✓ Docker Network</p>
                                <p className="text-gray-600">Для зв'язку між контейнерами</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow">
                                <p className="font-semibold text-red-600">✓ override=False</p>
                                <p className="text-gray-600">В load_dotenv()</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow">
                                <p className="font-semibold text-teal-600">✓ Назви контейнерів</p>
                                <p className="text-gray-600">Як HOST в .env.docker</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-gray-600 mt-8">
                        <p className="text-lg">Готово до практики! 🚀</p>
                        <p className="text-sm mt-2">Далі: Docker Compose та Frontend</p>
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
                                        className={`w-2 h-2 rounded-full transition ${index === currentSlide
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