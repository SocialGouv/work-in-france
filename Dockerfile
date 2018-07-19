FROM debian:stable-slim as builder

#
# build the final website in volume mounted at /app/site/build
#
# docker build . -t work-in-france
# docker run --rm -v $PWD/out2:/app/site/build work-in-france
#

RUN apt-get update
RUN apt-get -y install wget python2.7 python-pip imagemagick git

RUN pip install pipenv

ENV NVM_DIR="/nvm"
ENV APP_DIR="/app"
ENV NODE_VERSION="5.12.0"
ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8
ENV NPM_CONFIG_LOGLEVEL error

# nvm
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

#
# plays with WORKDIR and COPY to take most of docker caching layers
#

WORKDIR $APP_DIR

COPY Pipfile .
COPY Pipfile.lock .

RUN pipenv install --dev

COPY ./site/package.json ./site/
COPY ./site/package-lock.json ./site/

WORKDIR $APP_DIR/site

RUN . $NVM_DIR/nvm.sh && npm install --no-optional

WORKDIR $APP_DIR

# no more cache from that point

COPY . .

WORKDIR $APP_DIR/site

# build CSS then build the static website

ENTRYPOINT . $NVM_DIR/nvm.sh && npm run css-build && pipenv run clay build

