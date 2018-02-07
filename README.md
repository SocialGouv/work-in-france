# Work in France

> La plateforme de demande d’autorisations provisoires de travail.

Ce dépôt de code contient le site web de Work in France qui s'occupe de l'information et de la pré-qualification des utilisateurs, puis les redirige vers [TPS](https://github.com/betagouv/tps) (Téléprocédures Simplifiées) pour finaliser la procédure.

## Site web

### 1. Installation de l'environnement de développement

Nous utilisons [`clay`](http://lucuma.github.io/Clay/) pour générer une version statique du site de Work in France. `clay` utilise encore `python2.7` pour le moment.

Créez un environnement Python isolé avec [`virtualenv`](https://virtualenv.pypa.io/).

Vous pouvez utiliser [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.io/) pour faciliter cette étape :

```
$ mkvirtualenv --python=`which python2.7` workinfrance
$ workon workinfrance
```

Installer `clay` :

```
$ pip install clay
```

### 2. Lancer le serveur de développement

```
$ cd site
$ clay run
```
