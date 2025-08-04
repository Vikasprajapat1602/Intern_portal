# 🌐 Intern Portal Dashboard

A full-stack intern management and referral dashboard built using **React (Vite)** for the frontend and **Django** for the backend. This portal tracks referral codes, user rankings, donation amounts, and provides a modern dashboard interface for internal reporting and management.

## 🚀 Features

- 🔐 User authentication (login system)
- 📊 Dynamic Leaderboard with rank, referral code, and donation data
- 📁 Report page displaying real-time leaderboard data
- ⚙️ Settings page with update options
- 🎨 Fully responsive modern UI with Tailwind CSS
- 🌈 Gradient-based theme for professional design

## 🛠️ Tech Stack

### Frontend
- **React + Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Recharts (for charts)**
- **Axios**

### Backend
- **Django**
- **Django REST Framework**
- **SQLite / PostgreSQL**
- **CORS + REST APIs**

---

## 📁 Folder Structure (Frontend)

```
intern-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layout/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Leaderboard.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── router/
│       └── index.jsx
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/intern-portal.git
cd intern-portal
```

### 2. Install Frontend Dependencies

```bash
cd intern-frontend
npm install
```

### 3. Run the React Frontend

```bash
npm run dev
```

App will run at: `http://localhost:5173/`

---

## ⚙️ Backend Setup (Django)

> Make sure Python and pip are installed.

```bash
cd intern-backend
python -m venv venv
venv\Scripts\activate   # For Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

API runs at: `http://127.0.0.1:8000/api/`

---

## 📌 Important Notes

- The frontend and backend are decoupled and communicate via REST APIs.
- CORS settings must be properly configured in Django for local frontend access.
- Make sure to update `.env` files with proper API base URLs if needed.

---

## 👨‍💻 Author

- **Vikas Prajapat**
- GitHub: [@vikasprajapat](https://github.com/vikasprajapat)
- LinkedIn: [linkedin.com/in/vikas-prajapat-53a909293](https://linkedin.com/in/vikas-prajapat-53a909293)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
