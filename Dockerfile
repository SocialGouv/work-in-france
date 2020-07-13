FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.43.2

COPY ./out /usr/share/nginx/html
