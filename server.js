import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connect from "./database/database.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connect();

// Middleware
app.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000',
    })
);

app.use(bodyParser.json());
app.use("/api", userRouter);
// Define Routes
app.post("/apitest",async(req, res)=>{
    return res.status(200).json({message:"Hii Hii Hii"})
} )
// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  