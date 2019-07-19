# Work in France [![Build Status](https://travis-ci.com/SocialGouv/work-in-france.svg?branch=master)](https://travis-ci.com/SocialGouv/work-in-france)

> La plateforme de demande d'autorisations provisoires de travail.

Ce dépôt de code contient le site web statique de [Work in France](https://workinfrance.beta.gouv.fr) qui s'occupe de l'information et de la pré-qualification des usagers, puis les redirige vers [TPS](https://github.com/betagouv/tps) (Téléprocédures Simplifiées) pour finaliser la procédure.

## Site web

### Modifier du contenu

⚠ Les modifs sur la branche `master` déclenchent une mise à jour du site version dev : http://master.work-in-france.dev.factory.social.gouv.fr.

#### Mettre à jour la F.A.Q.

1 - Compléter [le fichier de la FAQ](https://github.com/SocialGouv/work-in-france/blob/master/contents/faq.mdx) au [format markdown](https://fr.wikipedia.org/wiki/Markdown).

2 - Soumettre une pull request

#### Ajouter un département

1 - créer les formulaires sur DS

2 - autoriser le département sur le front dans [./site/source/qualify/base/qualify-1.html](./site/source/qualify/base/qualify-1.html)

3 - définir les URLS des formulaires [./site/source/static/js/qualify.js](./site/source/static/js/qualify.js)

4 - mettre à jour la page d'accueil avec le(s) nouveau(x) départements : [./site/source/index.html](./site/source/index.html)

5 - mettre à jour la FAQ avec le(s) nouveau(x) départements : [./site/source/markdown/faq.md](./site/source/markdown/faq.md)

#### Mettre à jour les coordonnées MOE

Editer [./site/source/qualify/fail.html](./site/source/qualify/fail.html)

### Installation de l'environnement de développement

Un styleguide est disponible ici : https://workinfrance.beta.gouv.fr/cookbook.html

Nous utilisons [`clay`](http://lucuma.github.io/Clay/) pour générer une version statique du site.

#### avec Docker

Une image docker permet de builder le site sans installer les dépendances.

```sh
# Builder l'image docker
docker build . -t work-in-france

# Lancer le site en mode dev
docker run --rm -v $PWD/site:/app/site -ti -p 8080:8080 --entrypoint pipenv work-in-france run clay run

# récupérer un build du site. l'output se fera dans ./out
docker cp work-in-france-build:/app/site/build /app/site/
```

Voir la config de [circleci](.circleci/config.yml) qui déclenche un déploiement du site statique sur la branche `gh-pages`

#### sans Docker

Vous devez créer un environnement Python 2.7 isolé avec [`pipenv (>=11.8.3)`](https://github.com/pypa/pipenv) et y installer les dépendances Python du projet :

```bash
$ pipenv --python 2.7
$ pipenv install --dev
```

Installez ensuite les dépendances `npm` (`npm 5+` est utilisé) :

```bash
$ cd site
$ npm install
```

##### Lancer le serveur de développement

```bash
$ cd site
$ pipenv run clay run
```

##### Lancer le scrutateur CSS pour générer le fichier `bundle.css`

```bash
$ cd site
$ npm run css-watcher
```

### Déployer le site web

Voir la config [circleci](.circleci/config.yml)

### Travailler sur la page de validation des autorisations

Pour pouvoir travailler la page `validity_check.html`, vous devez faire tourner en parallèle le serveur du [back office public de Work in France](https://github.com/SocialGouv/work-in-france-bo-public) qui embarque l'API de vérification des autorisations.

Reportez-vous à la documentation pour lancer le serveur.

## Release policy

### Auto

Trigger a custom build on [Travis](https://travis-ci.com/SocialGouv/emjpm) (in the "More options" right menu) on the `master` branch with a custom config:

```yml
env:
  global:
    - RELEASE=true
```

You can change the lerna arguments though the `LERNA_ARGS` variable.

```yml
env:
  global:
    - LERNA_ARGS="--force-publish --yes"
    - RELEASE=true
```

### Manual

You need an [Github token](https://github.com/settings/tokens/new) to release.

```sh
#
# Bump, push to git and publish to npm
$ yarn lerna version

#
# Publish the tag change log on the Github Release
$ CONVENTIONAL_GITHUB_RELEASER_TOKEN==************ npx conventional-github-releaser -p angular

#
# You might want to add a Gif to your release to make it groovy ;)
```

## Deployment policy

All branches and tags are automaticly deployed
See https://github.com/SocialGouv/work-in-france/deployments

### Auto

Trigger a custom build on [Travis](https://travis-ci.com/SocialGouv/work-in-france) (in the "More options" right menu) on the tag `v*` you  with a custom config:

```yml
env:
  global:
    - PRODUCTION=true
```

### Manual

```sh
# Run the k8s files
$ kubectl apply -f ./.k8s/frontend/deployment.yml
$ kubectl apply -f ./.k8s/frontend/service.yml
$ kubectl apply -f ./.k8s/frontend/ingress.yml
```
