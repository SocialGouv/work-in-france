FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:0.28.0

COPY ./out /usr/share/nginx/html
