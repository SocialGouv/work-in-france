FROM node:10-alpine as builder

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

# Require "--shm-size 512M" options !
RUN yarn --frozen-lockfile --cache-folder /dev/shm/yarn

COPY ./.babelrc /app/.babelrc
COPY ./next.config.js /app/next.config.js

COPY ./contents /app/contents
COPY ./utils /app/utils
COPY ./lib /app/lib
COPY ./theme /app/theme
COPY ./constants /app/constants

COPY ./pages /app/pages
COPY ./components /app/components

RUN yarn deploy

FROM nginx:1.17-alpine

COPY --from=builder /app/out /usr/share/nginx/html
COPY ./static /usr/share/nginx/html/static
