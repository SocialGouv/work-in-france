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


## Docker

Builder l'image avec `docker build .` puis :

`docker run -it -p 8080:8080 -v $PWD:/app image-name`

Le dossier courant (`$PWD`) est monté dans l'instance
