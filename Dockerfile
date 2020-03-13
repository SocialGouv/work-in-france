FROM node:13-alpine as builder

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
COPY ./public /app/public
COPY ./theme /app/theme
COPY ./constants /app/constants

COPY ./pages /app/pages
COPY ./components /app/components

ARG VERSION
ENV VERSION=${VERSION}

RUN yarn deploy

FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:0.28.0

COPY --from=builder /app/out /usr/share/nginx/html
