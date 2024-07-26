import express from "express"
import cors from "cors"
import dotenv  from "dotenv"
import { dbConnection } from "./database/dbConnection.js"
import { errorMiddleware } from "./error/error.js"
import reservartionRouter from "./routes/reservationRoute.js"

const app = express()
dotenv.config()

app.use(cors({
    origin:"*",
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/reservation",reservartionRouter)

dbConnection()

app.use(errorMiddleware)

export default app;