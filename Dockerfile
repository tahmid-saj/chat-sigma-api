FROM node:19.8.1

WORKDIR /usr/src/chat-sigma-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]

