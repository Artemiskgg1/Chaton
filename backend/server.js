import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import authRoutes from "./routes/message.routes.js";
import connectDB from "./db/connect.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on PORT: ${PORT}`);
});
