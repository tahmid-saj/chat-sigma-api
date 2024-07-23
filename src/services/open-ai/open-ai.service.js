const OpenAI = require("openai")
require("dotenv").config()

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_API_KEY
})

module.exports = {
  openai
}