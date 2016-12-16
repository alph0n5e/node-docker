FROM node:6

MAINTAINER alph0n5e <antoine.al.robert@gmail.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]
