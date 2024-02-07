FROM node:18-alpine

WORKDIR /app

COPY app/package.json app/yarn.lock /app/

RUN yarn 

COPY app/ /app

RUN yarn build

CMD ["yarn", "start"]
