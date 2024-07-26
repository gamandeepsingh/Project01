import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import { errorMiddleware } from "./error/error.js"; 
import reservartionRouter from "./routes/reservationRoute.js"; 

dotenv.config();

const app = express();

// Specify the allowed origin instead of using '*'
const allowedOrigins = ['https://dineme.vercel.app'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, origin);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
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