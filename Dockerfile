FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.37.2

COPY ./out /usr/share/nginx/html
