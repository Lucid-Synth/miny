# 🔗 Miny – URL Shortener

**Miny** is a modern full-stack URL shortener that transforms long URLs into clean, shareable links. It also provides analytics to devices, and locations — all built with a fast, scalable, and type-safe architecture.

---

## ✨ Features

* 🚀 **Lightning Fast** – Generate short URLs instantly
* 🔐 **Secure & Reliable** – Backend validation & middleware protection
* 🧩 **Modern Tech Stack** – TypeScript, Vite, Drizzle ORM,PostgreSQL
* 🎨 **Clean UI** – Minimal and responsive frontend

---

## 🏗️ Project Structure

```
url-shortener/
│
├── client/                      # Frontend (Vite + TypeScript)
│   ├── public/                  # Static assets
│   ├── src/                     # Frontend source code
│   │   ├── components/          # Reusable UI components
│   │   ├── pages/               # Page-level components
│   │   ├── services/            # API calls & helpers
│   │   ├── hooks/               # Custom React hooks
│   │   ├── styles/              # Global & component styles
│   │   ├── utils/               # Utility functions
│   │   ├── App.tsx              # Root component
│   │   └── main.tsx             # App entry point
│   │
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.ts
│   ├── tsconfig*.json
│   ├── vercel.json
│   ├── package.json
│   └── README.md
│
├── server/                      # Backend (Node.js + TypeScript)
│   ├── src/
│   │   ├── config/              # App & environment config
│   │   ├── controllers/         # Request handlers
│   │   ├── routes/              # API routes
│   │   ├── middleware/          # Custom middleware
│   │   ├── queries/             # Database queries
│   │   ├── drizzle/             # ORM schema & migrations
│   │   ├── utils/               # Helper utilities
│   │   └── server.ts            # Server entry point
│   │
│   ├── drizzle.config.ts
│   ├── package.json
│
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend

* **Vite**
* **TypeScript**
* **React**
* **Tailwind CSS**
* **Vercel (Deployment)**

### Backend

* **Node.js**
* **Express**
* **TypeScript**
* **Drizzle ORM**
* **PostgreSQL**

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Lucid-Synth/miny.git
cd miny
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=3000
DATABASE_URL=your_database_url
BASE_URL=http://localhost:3000
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔌 API Overview

### Shorten URL

```
POST /api/shorten
```

**Request Body**

```json
{
  "longUrl": "https://example.com"
}
```

**Response**

```json
{
  "shortUrl": "https://mi-ny.onrender.com/abc123"
}
```

---

### Redirect

```
GET /:shortCode
```

Redirects to the original URL.

---

## 📦 Deployment

* **Frontend**: Vercel
* **Backend**: Render
* **Database**: PostgreSQL

---

## 🧑‍💻 Author

**Lucid-Synth**
Built using TypeScript

---

## 📄 License

Licensed under the **MIT License**.

---