# development
FROM node:12.13.0-alpine as dev-env
ENV APP_HOME /app
ENV NUXT_HOST 0.0.0.0
ENV PORT 3000
WORKDIR ${APP_HOME}
COPY package*.json ./
COPY yarn.lock ./
RUN apk update --no-cache && \
    yarn && \
    rm -rf /var/cache/apk/*
COPY . ${APP_HOME}
EXPOSE ${PORT}
CMD [ "yarn", "dev"]