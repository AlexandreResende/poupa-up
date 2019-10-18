FROM node:10

ARG SRV_DIR="src/poupa-up"

WORKDIR $SRV_DIR

COPY . $SRV_DIR

RUN cd $SRV_DIR && npm install

ENV PORT=7777
ENV NODE_ENV=development

EXPOSE ${PORT}

CMD ["npm", "start"]