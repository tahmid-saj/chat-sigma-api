const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// temporary databases
const users_activity = [
  {
    userId: "123",
    queried: 0,
    emailed: 0
  }
];

const sessions_chat_transcript = [
  {
    userId: "123",
    chatFullTranscript: [
      {
        userMessage: "How are you?",
        botMessage: "I'm fine thank you, how are you?"
      }
    ]
  }
];

// General GET -> returning all users
app.get("/", (req, res) => {
  res.json(users_activity);
});

// GET -> returning botMessage using requested userMessage
// app.get("/getMessageQuery" (req, res) => {

// });

// POST -> creating new user in users_activity
// (Only when chat is initiated for the first time)
app.post("/initiateChat", (req, res) => {
  try {
    const { userId, userMessage, botMessage } = req.body;

    users_activity.push({
      userId: userId,
      queried: 1,
      emailed: 0
    });

    sessions_chat_transcript.push({
      userId: userId,
      chatFullTranscript: [
        {
          userMessage: userMessage,
          botMessage: botMessage
        }
      ]
    });

    console.log("users_activity: ", users_activity);
    console.log("sessions_chat_transcript: ", userId, 
                                              userMessage, 
                                              botMessage);
  } catch (err) {
    res.status(400).json("error initiating chat");
  }

  res.status(200).json("chat initiated")
});

// PUT -> Adding requested userMessage and botMessage to userId in sessions_chat_transcript
app.put("/sendMessage", (req, res) => {
  try {
    const { userId, userMessage, botMessage } = req.body;

    sessions_chat_transcript.forEach((user) => {
      if (user.userId === userId) {
        user.chatFullTranscript.push({
          userMessage: userMessage,
          botMessage: botMessage
        });
      }
    });

    users_activity.forEach((user) => {
      if (user.userId === userId) {
        user.queried++;
      };
    });

    console.log("users_activity: ", users_activity);
    console.log("sessions_chat_transcript: ", userId, 
                                              userMessage, 
                                              botMessage);
  } catch (err) {
    res.status(400).json("error registering message");
  }

  res.status(200).json("message registered")
});

// GET calls for exports below

app.listen(3000, () => {
  console.log("app is running on port 3000");
});