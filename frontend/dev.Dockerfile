FROM node:lts

WORKDIR /app

COPY package*.json ./
COPY . .

RUN yarn 



EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]
