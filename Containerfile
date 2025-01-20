FROM registry.access.redhat.com/ubi9/nodejs-22

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

RUN pnpm build

CMD ["pnpm", "start"]


FROM nginx:1.27.3-alpine3.20 AS nginx

