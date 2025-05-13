const http = require("http")
require("dotenv").config()
const { app } = require("./src/app")
const { connectRedis } = require("./src/services/redis/redis.service")
const server = http.createServer(app)

const PORT = process.env.PORT

async function startServer() {
  server.listen(PORT, () => {
    connectRedis()
    console.log(`Listening on PORT ${PORT}`)
  })
}

startServer()

module.exports = app