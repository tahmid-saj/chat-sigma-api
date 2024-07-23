const express = require("express")

const { chatRouter } = require("./chat/chat.router")

const api = express.Router()

api.use("/chat", chatRouter)

module.exports = {
  api
}