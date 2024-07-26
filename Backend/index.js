import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import { errorMiddleware } from "./error/error.js"; 
import reservartionRouter from "./routes/reservationRoute.js"; 

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database connected successfully"))
    .catch(err => console.error("Database connection error:", err));
};

app.use("/api/v1/reservation", reservartionRouter);

// Database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});