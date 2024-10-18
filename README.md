# chat-sigma-api

API for providing responses from OpenAI API. Developed with Express and OpenAI API.

The directory structure is as follows:

```
chat-sigma-api/
├── api/
│   └── index.js
├── docker-compose.yml
├── Dockerfile
├── package-lock.json
├── package.json
├── README.md
├── src/
│   ├── app.js
│   ├── models/
│   ├── routes/
│   │   ├── api.routes.js
│   │   └── chat/
│   │       ├── chat.controller.js
│   │       └── chat.router.js
│   ├── services/
│   │   └── open-ai/
│   │       └── open-ai.service.js
│   └── utils/
│       ├── constants/
│       │   └── chat.constants.js
│       ├── errors/
│       │   └── chat.errors.js
│       ├── helpers/
│       ├── requests/
│       │   └── chat/
│       │       └── chat.requests.js
│       └── validations/
└── vercel.json
```
