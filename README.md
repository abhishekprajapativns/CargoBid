# 🚚 CargoBid

A full-stack **cargo bidding platform** that connects shippers with transporters. Shippers can post cargo shipments, while transporters can view available shipments and place competitive price quotes.

## 🌐 Live Demo

* **Frontend:** https://cargo-bid.vercel.app
* **Backend API:** https://cargobid.onrender.com

---

## ✨ Features

### 🔐 Authentication & Authorization
* JWT-based authentication
* Secure user registration and login
* Role-based access control
* Separate **Shipper** and **Transporter** roles
* Protected frontend and backend routes

### 📦 Shipper
* Create and post cargo shipments
* View posted shipments
* Receive transporter quotes
* Compare competitive quotes
* Accept the best quote

### 🚛 Transporter
* View available cargo shipments
* Submit price quotes
* Manage submitted bids
* Participate in competitive bidding

### ⚡ General
* RESTful API architecture
* MongoDB database integration
* Form validation
* Error handling
* Responsive UI

---

## 🛠️ Tech Stack

### Frontend
* React.js
* Tailwind CSS
* Axios
* React Router DOM
* Context API
* Vite

### Backend
* Node.js
* Express.js
* JWT
* bcryptjs

### Database
* MongoDB

### Deployment
* Vercel — Frontend
* Render — Backend

---

## 🏗️ Project Structure

```text
CargoBid/
│
├── src/                              # Frontend (React)
│   ├── assets/                       # Images and static files
│   ├── components/
│   │   └── Shared/
│   │       ├── Navbar.jsx
│   │       └── ProtectedRoute.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── shipper/
│   │   │   ├── PostCargo.jsx
│   │   │   └── ViewQuotes.jsx
│   │   ├── transporter/
│   │   │   └── AvailableCargos.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── ShipperDashboard.jsx
│   │   └── TransporterDashboard.jsx
│   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── server/                           # Backend (Node.js + Express)
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cargoController.js
│   │   └── cargoQuoteController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Cargo.js
│   │   └── CargoQuote.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cargoRoutes.js
│   │   └── cargoQuoteRoutes.js
│   ├── .env
│   └── index.js
│
├── .gitignore
└── README.md
```

---

## 🔄 Application Flow

```text
          ┌──────────────┐
          │    Shipper   │
          └──────┬───────┘
                 │
                 ▼
          Post Cargo
                 │
                 ▼
       ┌──────────────────┐
       │  Available Cargo │
       └────────┬─────────┘
                │
                ▼
          ┌──────────────┐
          │  Transporter │
          └──────┬───────┘
                 │
                 ▼
           Place Quote
                 │
                 ▼
          ┌──────────────┐
          │    Shipper   │
          └──────┬───────┘
                 │
                 ▼
          Accept Best Quote
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abhishekprajapativns/CargoBid.git
cd CargoBid
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
node index.js
```

### 3. Frontend Setup

Open a new terminal in the root folder:

```bash
npm install
npm run dev
```

The frontend will start on `http://localhost:5173`

---

## 🔑 Environment Variables

| Variable     | Description                        |
| ------------ | ---------------------------------- |
| `PORT`       | Port for the backend server        |
| `MONGO_URI`  | MongoDB connection string          |
| `JWT_SECRET` | Secret key for JWT authentication  |

> ⚠️ Never commit your `.env` file to GitHub.

---

## 📡 API Overview

```text
/api/auth
    ├── POST /register
    └── POST /login

/api/cargo
    ├── POST /post              (Protected - Shipper)
    ├── GET  /my-cargos         (Protected - Shipper)
    └── GET  /all               (Protected - Transporter)

/api/quotes
    ├── POST /place             (Protected - Transporter)
    ├── GET  /:cargoId          (Protected - Shipper)
    └── PUT  /:quoteId/accept   (Protected - Shipper)
```

---

## 🔒 Security

* JWT authentication
* Password hashing with bcryptjs
* Protected API routes with middleware
* Role-based authorization
* Environment variables for sensitive config
* `.env` excluded from version control

---

## 🔮 Future Enhancements

* 🔔 Real-time notifications using Socket.io
* 📍 Live GPS tracking using Google Maps API
* 💳 Payment gateway integration
* 📱 React Native mobile application
* 💬 Real-time chat between shippers and transporters
* ⭐ Ratings and reviews system

---

## 👨‍💻 Author

**Abhishek Prajapati**
MERN Stack Developer | Full Stack Web Developer

GitHub: https://github.com/abhishekprajapativns