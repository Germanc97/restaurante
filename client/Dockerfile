FROM node:8.7.0-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json
COPY package-lock.json

RUN npm install

COPY . /usr/src/app

CMD ["npm", "start"]
