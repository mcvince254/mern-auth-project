import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';

import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 4100;

/* -------------------------------
   Database Connection
-------------------------------- */
connectDB();

/* -------------------------------
   Global Middleware
-------------------------------- */

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

/* -------------------------------
   Health Check
-------------------------------- */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Authentication API is running",
  });
});

/* -------------------------------
   Routes
-------------------------------- */

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

/* -------------------------------
   Global Error Handler
-------------------------------- */

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* -------------------------------
   Start Server
-------------------------------- */

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});