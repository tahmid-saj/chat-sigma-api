const http = require("http")
require("dotenv").config()
const { app } = require("../src/app")
const server = http.createServer(app)

const PORT = process.env.PORT

async function startServer() {
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
  })
}

startServer()

module.exports = app