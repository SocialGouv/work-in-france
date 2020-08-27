FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.53.1

COPY ./out /usr/share/nginx/html
