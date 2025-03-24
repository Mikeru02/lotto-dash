FROM node:18-alpine

WORKDIR /src

COPY package.json package-lock.json vite.config.js .

COPY ./src .

RUN npm ci

COPY ./public ./public

RUN npm run build_vite

CMD ["node", "index.js"]
