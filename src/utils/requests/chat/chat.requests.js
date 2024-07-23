const { errorOnGetChatBotResponse } = require("../../errors/chat.errors")
const { DEFAULT_CHAT_MAX_TOKENS } = require("../../constants/chat.constants")
const { openai } = require("../../../services/open-ai/open-ai.service")

async function getChatResponse(messageInput) {
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: process.env.REACT_APP_OPEN_API_ROLE, content: messageInput }],
      model: process.env.REACT_APP_OPEN_API_MODEL,
      max_tokens: DEFAULT_CHAT_MAX_TOKENS
    });

    return {
      message: response.choices[0].message.content
    }
  } catch (error) {
    console.log("Error getting chat response")
    errorOnGetChatBotResponse()
  }
}

module.exports = {
  getChatResponse
}