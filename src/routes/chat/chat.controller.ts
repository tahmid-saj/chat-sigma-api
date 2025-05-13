import { Request, Response } from "express"

import { getChatResponse } from "../../utils/requests/chat/chat.requests.js"

// import { redisPublisher, redisClient, connectRedis } from "../../services/redis/redis.service"

// chat response
async function httpGetChatResponse(req: Request, res: Response): Promise<void> {
  try {
    const messageInput = String(req.body)
    const resGetChatResponse = await getChatResponse(messageInput)

    if (resGetChatResponse) res.status(200).json(resGetChatResponse)
  } catch (error) {
    // TODO: handle error
    console.log(error)
  }
}

export {
  httpGetChatResponse
}