FROM node:10-alpine as builder

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

# Require "--shm-size 256M" options !
RUN yarn --frozen-lockfile --cache-folder /dev/shm/yarn
RUN yarn deploy

FROM nginx:1.16-alpine

COPY --from=builder /app/site /www

