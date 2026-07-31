import express from "express"
import cors from "cors"

import { env } from "./config/env.js"
import { errorHandler, notFound } from "./middleware/errorHandler.js"

import authRoute from "./routes/authRoutes.js"
import formRoute from "./routes/formRoutes.js"
import responseRoute from "./routes/responseRoutes.js"
import insightsRoute from "./routes/insightsRoutes.js"
import aiRoute from "./routes/aiRoutes.js"

const app = express()

app.use(cors({
    origin(origin, callback) {
        if(!origin || env.clientUrls.includes(origin)) return callback(null, true)
        return callback(new Error(`Origin ${origin} Not Allowed By CORS`))
    },
    credentials: true
}))

app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ extended: true }))

app.get("/api/health", (_req, res) => {
    res.json({ success: true, message: "API Is Healthy", uptime: process.uptime() })
})

app.use("/api/auth", authRoute)
app.use("/api/forms", formRoute)
app.use("/api", responseRoute)
app.use("/api", insightsRoute)
app.use("/api/ai", aiRoute)

app.use(notFound)
app.use(errorHandler)

export default app