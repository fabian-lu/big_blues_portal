FROM node:lts

WORKDIR /app

COPY package*.json ./
COPY . .

RUN yarn 
