import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import MongoDB from "./database/mongoDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    MongoDB();
    console.log(`🚀 Server is running on port: ${PORT}`);
});