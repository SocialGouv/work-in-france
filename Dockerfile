FROM registry.gitlab.factory.social.gouv.fr/socialgouv/docker/nginx4spa:1.37.3

COPY ./out /usr/share/nginx/html
