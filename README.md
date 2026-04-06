# MERN Authentication System

Full-stack authentication app using React (frontend) and Node.js/Express (backend).

---

## Features

* User Registration & Login
* JWT Authentication
* Password Reset via Email
* Protected Routes

---

## Tech Stack

* Frontend: React (Vite)
* Backend: Node.js, Express
* Database: MongoDB

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

## Notes


* Use `.env.example` as a guide




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