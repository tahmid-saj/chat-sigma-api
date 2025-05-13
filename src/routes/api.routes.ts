import express, { Router } from "express"

import { chatRouter } from "./chat/chat.router.js"

const api: Router = express.Router()

api.use("/chat", chatRouter)

export { api }