FROM debian:stable-slim

RUN apt-get update
RUN apt-get -y install wget python2.7 python-pip imagemagick

RUN pip install pipenv

ENV NVM_DIR="/nvm"
ENV APP_DIR="/app"
ENV NODE_VERSION="5.12.0"

# nvm
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

COPY . $APP_DIR

WORKDIR $APP_DIR

RUN pipenv install --dev

WORKDIR $APP_DIR/site

RUN . $NVM_DIR/nvm.sh && npm install

ENTRYPOINT pipenv run clay run

