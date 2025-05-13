import express, { Router } from "express"

import { httpGetChatResponse } from "./chat.controller.js"

const chatRouter: Router = express.Router()

chatRouter.post("/response", httpGetChatResponse)

export { chatRouter }