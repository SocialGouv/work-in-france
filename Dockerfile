FROM ghcr.io/socialgouv/docker/nginx4spa:6.47.5

COPY ./out /usr/share/nginx/html
