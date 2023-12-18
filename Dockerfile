FROM node:20-alpine

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

ADD yarn.lock /app/

RUN yarn

ADD package.json /app/

ADD . /app

RUN yarn build:prod

CMD ["yarn","start:prod"]
