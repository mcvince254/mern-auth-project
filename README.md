# MERN Authentication System

# 🔐 MERN Authentication System

🚀 **Live Demo:** https://mern-auth-project-beige.vercel.app/ 
🔗 **Backend API:** https://mern-auth-project-jeu8.onrender.com

A production-ready authentication system built with the MERN stack, featuring JWT authentication, OTP-based password reset, and real-world deployment handling.

---

## Features

* User Registration & Login
* JWT Authentication
* Password Reset via Email
* Protected Routes

---


## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (Authentication)
- bcrypt (Password hashing)


---

## Project Structure

server/
client/

---

## Environment Variables

Create a `.env` file in the backend folder:

PORT=4100
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret
SENDER_EMAIL=your_email
EMAIL_PASSWORD=your_password
CLIENT_URL=http://localhost:5173

---

## Run the Project

Backend:
cd server
npm install
npm run dev

Frontend:
cd client
npm install
npm run dev

---


---

## 🌐 Deployment

- Frontend deployed on Vercel  
- Backend deployed on Render  
- MongoDB Atlas used for production database  

---

## ⚠️ Notes

- Email functionality may be disabled in production due to SMTP limitations  
- OTP is generated and stored in the database for testing  

---

## 💡 Key Learnings

- Implemented full authentication flow with JWT  
- Handled real-world deployment issues (CORS, environment variables)  
- Debugged production issues including SMTP/email failures  
- Built and deployed a complete full-stack application  

---

## 👤 Author

Vincent Charagu  
GitHub: https://github.com/your-username  




FOLDER STRUCTURE
/mern-auth-project      <-- project root (contains README.md)
│
├── server/            <-- backend folder
│   ├── controllers/    <-- route logic (auth, user, etc.)
│   ├── models/         <-- Mongoose schemas
│   ├── routes/         <-- Express route files
│   ├── middleware/     <-- auth, error handling, etc.
│   ├── utils/          <-- helper functions (email, token, etc.)
│   ├── server.js       <-- entry point
│   ├── package.json
│   ├── .env.example    <-- template for secrets
│   └── .gitignore
│
├── client/           <-- frontend folder
│   ├── src/
│   │   ├── components/ <-- reusable React components
│   │   ├── pages/      <-- pages like Login, Register, Dashboard
│   │   ├── context/    <-- React context for auth
│   │   ├── assets/     <-- images, icons, etc.
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── .gitignore
│
├── README.md           <-- your combined project README
└── .gitignore          <-- root ignore, e.g., node_modules, .env