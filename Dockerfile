FROM node:20.11.1-alpine

RUN apk add build-base

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start"]
