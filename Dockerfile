FROM node:10

RUN mkdir -p /home/Projects/poupa-up/node_modules && chown -R node:node /home/Projects/poupa-up

WORKDIR /home/Projects/poupa-up

COPY package*.json ./

RUN npm install

COPY . .
COPY --chown=node:node . .
USER node

EXPOSE 7777

CMD ["npm", "run", "watch-node"]