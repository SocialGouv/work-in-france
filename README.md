# Work in France

> La plateforme de demande d’autorisations provisoires de travail.

Ce dépôt de code contient le site web statique de Work in France qui s'occupe de l'information et de la pré-qualification des utilisateurs, puis les redirige vers [TPS](https://github.com/betagouv/tps) (Téléprocédures Simplifiées) pour finaliser la procédure.

## Site web

### 1. Installation de l'environnement de développement

Nous utilisons [`clay`](http://lucuma.github.io/Clay/) pour générer une version statique du site. `clay` utilise encore `python2.7` pour le moment. Vous devez donc créer un environnement Python 2.7 isolé avec [`virtualenv`](https://virtualenv.pypa.io/) et y installer les dépendances Python du projet. Vous pouvez utiliser [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.io/) pour faciliter cette étape :

```
$ mkvirtualenv --python=`which python2.7` workinfrance
$ workon workinfrance
$ pip install -r requirements.txt
```

Installez ensuite les dépendances `npm` (`npm 5+` est utilisé) :

```
$ cd site
$ npm install
```

### 2. Lancer le serveur de développement

```
$ cd site
$ clay run
```

### 3. Lancer le scrutateur CSS pour générer le fichier `bundle.css`

```
$ cd site
$ npm run css-watcher
```

Nous utilisons [`postcss-cli`](https://github.com/postcss/postcss-cli) pour observer le fichier `source/static/css/_root.css`. Celui-ci importe tous les fichiers CSS nécessaires et fonctionne grâce à [`postcss-import`](https://github.com/postcss/postcss-import) ; ça nous permet d'avoir un seul fichier en entrée qui nous permet de détecter les changements dans les fichiers qu'il importe. Le tout est ensuite passé dans la moulinette de [`postcss-cssnext`](https://github.com/MoOx/postcss-cssnext).

## Déployer le site web

Nous utilisons GitHub Pages pour héberger le site statique dans un premier temps. L'idée est faire générer un build du site par `clay` puis de pousser le résultat dans la branche `gh-pages` :

Puis lancez ces commandes :

```
$ cd site
$ npm run deploy
```
