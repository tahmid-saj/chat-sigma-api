import http from "http"
import dotenv from "dotenv"
import { app } from "../src/app.js"

dotenv.config()

const server = http.createServer(app)

const PORT = process.env.PORT

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
  })
}

startServer()

export default app