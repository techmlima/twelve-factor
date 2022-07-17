FROM node:16

WORKDIR /usr/src/twelve-factor

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]