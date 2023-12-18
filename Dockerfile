FROM node:20-alpine

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

ADD package.json yarn.lock /app/

RUN yarn

ADD . /app

RUN yarn build:prod

CMD ["yarn","start:prod"]
