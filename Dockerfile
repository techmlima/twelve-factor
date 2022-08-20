FROM node:16

WORKDIR /usr/src/twelve-factor

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD [ "node", "src/server.js" ]