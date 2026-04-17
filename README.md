# ECOM.TECH FRONT-END

Github Pages: https://mekanxsari.github.io/ecomtech-frontend/

---

## Основной функционал

- Каталог товаров  
- Поиск и фильтрация  
- Модал товара  
- Адаптивный дизайн  

---

## Технологический стек

- Framework: React  
- Язык: JavaScript  
- Стили: CSS3  
- HTTP клиент: Fetch API  
- Сборка: Vite  

---

## Структура проекта

```

.
├── public/
│   ├── data/
│   │   └── data.json
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   └── Modal.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js

```

---

## Источник данных

Данные товаров хранятся в файле:

```

public/data/data.json

```

---

## Установка

```bash
git clone https://github.com/mekanxsari/ecomtech-frontend.git
cd ecomtech-frontend
npm install
```

---

## Запуск проекта

```bash
npm run dev
```

Приложение будет доступно по адресу:

```
http://localhost:5173
```

---

## Сборка для production

```bash
npm run build
```

Собранные файлы появятся в папке:

```
dist/
```

---

## Автор

Мекан Сарыев