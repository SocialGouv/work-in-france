# Work in France [![Build Status](https://travis-ci.com/SocialGouv/work-in-france.svg?branch=master)](https://travis-ci.com/SocialGouv/work-in-france)

> La plateforme de demande d'autorisations provisoires de travail.

Ce dépôt de code contient le site web statique de [Work in France](https://workinfrance.beta.gouv.fr) qui s'occupe de l'information et de la pré-qualification des usagers, puis les redirige vers [TPS](https://github.com/betagouv/tps) (Téléprocédures Simplifiées) pour finaliser la procédure.

## Site web

### Modifier du contenu

⚠ Les modifs sur la branche `master` déclenchent une mise à jour du site.

#### Mettre à jour la F.A.Q.

1 - Compléter [le fichier de la FAQ](https://github.com/SocialGouv/work-in-france/blob/master/site/source/markdown/faq.md) au [format markdown](https://fr.wikipedia.org/wiki/Markdown).

2 - Soumettre une pull request

#### Ajouter un département

1 - créer les formulaires sur DS

2 - autoriser le département sur le front dans [./departements.js](./departements.js)

ajouter la clef valeur dans le département voulu
```
isAllowed: true,
```

3 - définir les URLS des formulaires [./departements.js](./departements.js) 

ajouter les clefs valeurs pour les deux types d'url

```
{
  company: "ud063-apt-etudiants-employeur",
  student: "ud063-apt-etudiants",
}
```

la valeur est l'id trouvé dans l'url du formulaire DS par exemple
```
ud010-apt-etudiants-employeur
```

4 - mettre à jour la FAQ avec le(s) nouveau(x) départements : [./contents/faq.md](./contents/faq.md)

#### Mettre à jour les coordonnées MOE

Editer [./constants/contact.js](./constants/contact.js)
et ajouter les departements dans le tableau des "departements" de la région corresponsante.

```
departments: ["14", "27", "50", "61", "76"],
```

si on veut ajouter un departement il suffit d'ajouter un département en entier
en reprennant la config d'un autre par exemple : 

```
  {
    slug: "normandie",
    type: "Direccte",
    name: "Normandie",
    departments: ["14", "27", "50", "61", "76"],
    address: ["3 place Saint Clair", "BP 70034"],
    post_code: "14202",
    city: "HEROUVILLE SAINT CLAIR CEDEX",
    phone: "02.31.47.73.00",
    fax: "02.31.47.73.01",
    url: "http://normandie.direccte.gouv.fr/Concurrence-et-consommation",
    email: null,
  },
```

il sera matché automatiquement avec la liste des département ouverts

### Installation de l'environnement de développement

Un styleguide est disponible ici : https://workinfrance.beta.gouv.fr/cookbook.html

Nous utilisons [`NextJS`](https://nextjs.org/) pour générer une version statique du site.

##### Lancer le serveur de développement

```bash
$ yarn
$ yarn dev
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
