# Work in France

> La plateforme de demande d'autorisations provisoires de travail.

Ce dépôt de code contient le site web statique de Work in France qui s'occupe de l'information et de la pré-qualification des utilisateurs, puis les redirige vers [TPS](https://github.com/betagouv/tps) (Téléprocédures Simplifiées) pour finaliser la procédure.

## Site web

### 1. Installation de l'environnement de développement

Nous utilisons [`clay`](http://lucuma.github.io/Clay/) pour générer une version statique du site. `clay` utilise encore `python2.7` pour le moment.

Vous devez donc créer un environnement Python 2.7 isolé avec [`pipenv (>=11.8.3)`](https://github.com/pypa/pipenv) et y installer les dépendances Python du projet :

```bash
$ pipenv --python 2.7
$ pipenv install --dev
```

Installez ensuite les dépendances `npm` (`npm 5+` est utilisé) :

```bash
$ cd site
$ npm install
```

### 2. Lancer le serveur de développement

```bash
$ cd site
$ pipenv run clay run
```

### 3. Lancer le scrutateur CSS pour générer le fichier `bundle.css`

```bash
$ cd site
$ npm run css-watcher
```

## Déployer le site web

Pour déployer le site web, nous en générons une version statique avec `clay` que nous déployons sur GitHub Pages :

```bash
$ cd site
$ npm run deploy
```

## Travailler sur la page de validation des autorisations

Pour pouvoir travailler la page `validity_check.html`, vous devez faire tourner en parallèle le serveur du [back office public de Work in France](https://github.com/SocialGouv/work-in-france-bo-public) qui embarque l'API de vérification des autorisations.

Reportez-vous à la documentation pour lancer le serveur.

## Docker

```sh

# Builder l'image docker
docker build . -t work-in-france

# Lancer le site en mode dev
docker run --rm -v $PWD/site:/app/site -ti -p 8080:8080 --entrypoint pipenv work-in-france run clay run

# Lancer un build du site. l'output se fera dans ./out
docker run --rm -v $PWD/out:/app/site/build work-in-france

```

## CircleCI

La mise à jour de la branche `master` déclenche un déploiement du site statique sur la branche `gh-pages`

## Mettre à jour la F.A.Q.

 1 - Compléter [le fichier de la FAQ](https://github.com/SocialGouv/work-in-france/blob/master/site/source/markdown/faq.md) au [format markdown](https://fr.wikipedia.org/wiki/Markdown).

 2 - Soumettre une pull request