import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";

async function start() {
    await connectDB()
    app.listen(env.port, () => {
        console.log(`Server Running In ${env.nodeEnv} Mode On http://localhost:${env.port}`)
    })
}

start()

process.on("unhandledRejection", (reason) => {
    console.error("Unhandled Rejection :", reason)
})