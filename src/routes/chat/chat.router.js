const express = require("express")

const { httpGetChatResponse } = require("./chat.controller")

const chatRouter = express.Router()

chatRouter.post("/response", httpGetChatResponse)

module.exports = {
  chatRouter
}