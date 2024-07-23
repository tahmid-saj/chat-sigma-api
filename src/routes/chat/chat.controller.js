const { getChatResponse } = require("../../utils/requests/chat/chat.requests")

// chat response
async function httpGetChatResponse(req, res) {
  try {
    const messageInput = String(req.body)
    const resGetChatResponse = await getChatResponse(messageInput)

    if (resGetChatResponse) return res.status(200).json(resGetChatResponse)
  } catch (error) {
    // TODO: handle error
    console.log(error)
  }
}

module.exports = {
  httpGetChatResponse
}