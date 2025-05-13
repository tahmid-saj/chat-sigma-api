import http from "http"
import { app } from "./app.js";
// import { connectRedis } from "./src/services/redis/redis.service"
import dotenv from "dotenv"

const server = http.createServer(app)
dotenv.config()

const PORT = process.env.PORT

async function startServer() {
  server.listen(PORT, () => {
    // connectRedis()
    console.log(`Listening on PORT ${PORT}`)
  })
}

startServer()

// module.exports = app