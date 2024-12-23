FROM alpine:latest

RUN apk update && apk add npm nodejs
RUN npm --version
RUN nodejs --version

RUN mkdir -p /usr/src/app/public
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
COPY app.js .
COPY

RUN npm install --production

EXPOSE 8000

CMD [ "npm", "run", "app" ]
