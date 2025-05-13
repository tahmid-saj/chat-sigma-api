const { getChatResponse } = require("../../utils/requests/chat/chat.requests")

const { redisPublisher, redisClient, connectRedis } = require("../../services/redis/redis.service")

// chat response
async function httpGetChatResponse(req, res) {
  try {
    const messageInput = String(req.body)

    // check if the key exists in Redis
    redisClient.get(messageInput, async (err, cachedResponse) => {
      if (err) {
        console.log("Redis error: ", err)
        return res.status(500).json({ error: "Internal server error" })
      }

      // if a cached value exists, return it
      if (cachedResponse) {
        console.log("Cache hit: ", messageInput)
        return res.status(200).json(JSON.parse(cachedResponse))
      }
    })

    // original request
    // const resGetChatResponse = await getChatResponse(messageInput)
    // if (resGetChatResponse) return res.status(200).json(resGetChatResponse)

    const ressponse = await fetch(`${process.env.CHAT_WORKER_API_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: String(messageInput)
    })

    const resGetChatResponse = await ressponse.json()
    if (resGetChatResponse) return res.status(200).json(resGetChatResponse)
  } catch (error) {
    // TODO: handle error
    console.log(error)
  }
}

module.exports = {
  httpGetChatResponse
}