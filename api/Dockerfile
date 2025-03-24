FROM node:18-alpine

WORKDIR /api

COPY package.json package-lock.json .

COPY ./api .

RUN npm ci

EXPOSE 4000

CMD ["node", "index.js"]
