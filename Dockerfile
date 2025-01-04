# Dockerfile to run nullboard.
FROM alpine:latest

# Install required packages, tzdata, npm and nodejs.
COPY apk_repositories.txt /etc/apk/respositories
RUN apk update && apk add --no-cache tzdata npm nodejs
RUN npm --version
RUN nodejs --version

# Set timezone for container to Europe/London (GMT/BST).
ENV TZ=Europe/London
RUN date

RUN mkdir -p /opt/nullboard
WORKDIR /opt/nullboard

COPY .

RUN npm install --production

EXPOSE 3001

CMD [ "npm", "run", "app" ]
