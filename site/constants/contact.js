const CONTACTS = [
  {
    slug: "grand-est",
    departments: ["08", "10", "51", "52", "54", "55", "57", "67", "68", "88"],
    type: "Direccte",
    name: "Grand Est",
    address: ["6 rue Gustave-Adolphe Hirn"],
    post_code: "67085",
    city: "STRASBOURG CEDEX",
    phone: "03.88.75.86.86",
    fax: "03.88.75.86.94",
    url:
      "http://alsace-champagne-ardenne-lorraine.direccte.gouv.fr/Concurrence-et-consommation-4944",
    email: null,
  },
  {
    slug: "nouvelle-aquitaine",
    departments: ["16", "17", "19", "23", "24", "33", "40", "47", "64", "79", "86", "87"],
    type: "Direccte",
    name: "Nouvelle-Aquitaine",
    address: ["Immeuble Le Prisme", "11/19 rue Marguerite Crauste"],
    post_code: "33074",
    city: "BORDEAUX CEDEX",
    phone: "05.56.99.96.00",
    fax: "05.56.99.96.69",
    url: "http://aquitaine-limousin-poitou-charentes.direccte.gouv.fr/Concurrence-et-consommation",
    email: null,
  },
  {
    slug: "auvergne-rhone-alpes",
    type: "Direccte",
    name: "Auvergne-Rhône-Alpes",
    departments: ["01", "03", "07", "15", "26", "38", "42", "43", "63", "73", "74"],
    address: ["Cité administrative", "2, rue Pélissier Bâtiment P"],
    post_code: "63034",
    city: "CLERMONT FERRAND",
    phone: "04.73.43.14.14",
    fax: "04.73.34.03.00",
    url: "http://auvergne-rhone-alpes.direccte.gouv.fr/Concurrence-et-consommation",
    email: null,
  },
  {
    slug: "rhone",
    type: "Direccte",
    name: "Unité départementale (UD) du Rhône",
    departments: ["69"],
    address: ["8-10 rue du Nord"],
    post_code: "69625",
    city: "VILLEURBANNE CEDEX",
    phone: "04.72.65.59.27",
    fax: "04.72.65.57.90",
    url: "http://auvergne-rhone-alpes.direccte.gouv.fr/Contacter-le-service-MOE",
    email: "ara-ud69.moe@direccte.gouv.fr",
  },
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
  {
    slug: "bourgogne-franche-comte",
    type: "Direccte",
    name: "Bourgogne-Franche-Comté",
    departments: ["21", "25", "39", "58", "70", "71", "89", "90"],
    address: ["19 bis-21, Bd Voltaire", "BP 81110"],
    post_code: "21011",
    city: "DIJON CEDEX",
    phone: "03.80.76.99.10",
    fax: "03.80.76.99.20",
    url: "http://bourgogne-franche-comte.direccte.gouv.fr/Concurrence-Consommation",
    email: null,
  },
  {
    slug: "bretagne",
    type: "Direccte",
    name: "Bretagne",
    departments: ["22", "29", "35", "56"],
    address: ['Immeuble "Le Newton"', "3 bis, avenue de Belle Fontaine", "TSA 71732"],
    post_code: "35517",
    city: "CESSON SÉVIGNÉ CEDEX",
    phone: "",
    fax: "",
    url: "http://bretagne.direccte.gouv.fr/Concurrence-et-consommation",
    email: null,
  },
  {
    slug: "centre-val-de-loire",
    type: "Direccte",
    name: "Centre-Val de Loire",
    departments: ["18", "28", "36", "37", "41", "45"],
    address: ["12 place de l'étape", "CS 85809"],
    post_code: "45058",
    city: "ORLÉANS CEDEX 1",
    phone: "02.38.77.68.00",
    fax: "02.38.77.68.01",
    url: "http://centre-val-de-loire.direccte.gouv.fr/Concurrence-et-consommation",
    email: null,
  },
  {
    slug: "corse",
    type: "Direccte",
    name: "Corse",
    departments: ["2a", "2b"],
    address: ["2 chemin de Loretto", "BP 332"],
    post_code: "20180",
    city: "AJACCIO CEDEX 1",
    phone: "04.95.23.90.00",
    fax: "04.95.23.90.05",
    url: "http://corse.direccte.gouv.fr/Concurrence-et-consommation,2875",
    email: null,
  },
  {
    slug: "ile-de-france",
    type: "Direccte",
    name: "Île-de-France",
    departments: ["75", "77", "78", "91", "92", "93", "94", "95"],
    address: ["19 rue Madeleine Vionnet"],
    post_code: "93300",
    city: "Aubervilliers",
    phone: "01.70.96.13.00",
    fax: "01.42.41.22.77",
    url: "http://idf.direccte.gouv.fr/concurrence-et-consommation,77",
    email: null,
  },
  {
    slug: "occitanie",
    type: "Direccte",
    name: "Occitanie",
    departments: ["09", "11", "12", "30", "31", "32", "34", "46", "48", "65", "66", "81", "82"],
    address: ["615 Bd d'Antigone", "CS 19002"],
    post_code: "34064",
    city: "MONTPELLIER CEDEX 2",
    phone: "04.67.22.88.88",
    fax: "04.30.630.632 &amp; 04.30.630.631",
    url: "http://languedoc-roussillon-midi-pyrenees.direccte.gouv.fr/Concurrence-et-consommation",
    email: null,
  },
  {
    slug: "hauts-de-france",
    type: "Direccte",
    name: "Hauts-de-France",
    departments: ["02", "59", "60", "62", "80"],
    address: ["70 rue Saint Sauveur BP 456", "Les Arcades de Flandre"],
    post_code: "59021",
    city: "LILLE CEDEX",
    phone: "03.20.96.48.60",
    fax: "03.20.52.74.63",
    url: "http://nord-pas-de-calais-picardie.direccte.gouv.fr/Concurrence-et-consommation",
    email: null,
  },
  {
    slug: "pays-de-la-loire",
    type: "Direccte",
    name: "Pays de la Loire",
    departments: ["44", "49", "53", "72", "85"],
    address: ["Immeuble Skyline", "22 Mail Pablo Picasso", "BP 24209"],
    post_code: "44042",
    city: "NANTES CEDEX 1",
    phone: "02.53.46.79.00",
    fax: "02.53.46.78.00",
    url: "http://pays-de-la-loire.direccte.gouv.fr/Concurrence-et-consommation,2070",
    email: null,
  },
  {
    slug: "provence-alpes-cote-d-azur",
    type: "Direccte",
    name: "Provence-Alpes-Côte d'Azur",
    departments: ["04", "05", "06", "13", "83", "84"],
    address: ["23/25 rue Borde", "CS 10009"],
    post_code: "13285",
    city: "MARSEILLE CEDEX 08",
    phone: "04.86.67.32.00",
    fax: "04.86.67.32.01",
    url: "http://paca.direccte.gouv.fr/concurrence-et-consommation,64",
    email: null,
  },
  {
    slug: "guadeloupe",
    type: "Dieccte",
    name: "Guadeloupe",
    departments: ["971"],
    address: ["Chemin des bougainvilliers-Guillard"],
    post_code: "97100",
    city: "BASSE-TERRE",
    phone: "05.90.99.35.99",
    fax: "05.90.81.60.05",
    url: "http://guadeloupe.dieccte.gouv.fr/concurrence-et-consommation,2660",
    email: "971-polec[@]dieccte.gouv.fr",
  },
  {
    slug: "martinique",
    type: "Dieccte",
    name: "Martinique",
    departments: ["972"],
    address: ["Hôtel des Finances", "Route de Cluny", "BP 7002"],
    post_code: "97274",
    city: "SCHOELCHER CEDEX",
    phone: "05.96.59.55.14",
    fax: "05.96.60.62.07",
    url: "http://martinique.dieccte.gouv.fr/Concurrence-et-Consommation,2646",
    email: "972-polec[@]dieccte.gouv.fr",
  },
  {
    slug: "guyane",
    type: "Dieccte",
    name: "Guyane",
    departments: ["973"],
    address: ["Angle rues Rouget de l'Isle et Mme Payé", "BP 6009"],
    post_code: "97306",
    city: "CAYENNE CEDEX",
    phone: "05.94.25.61.00",
    fax: "05.94.30.69.60",
    url: "http://guyane.dieccte.gouv.fr/concurrence-et-consommation,2667",
    email: "973-polec[@]dieccte.gouv.fr",
  },
  {
    slug: "reunion",
    type: "Dieccte",
    name: "Réunion",
    departments: ["974"],
    address: ["Rue Bois de Nèfles", "12, Lotissement Lemerle"],
    post_code: "97488",
    city: "SAINT-DENIS CEDEX",
    phone: "02.62.90.21.41",
    fax: "02.62.21.09.97",
    url: "http://reunion.dieccte.gouv.fr/Concurrence-et-Consommation,2673",
    email: "974-polec[@]dieccte.gouv.fr",
  },
  {
    slug: "mayotte",
    type: "Dieccte",
    name: "Mayotte",
    departments: ["976"],
    address: ["3 ter rue Mahabou", "BP 174"],
    post_code: "97600",
    city: "MAMOUDZOU MAYOTTE",
    phone: "02.69.61.16.57",
    fax: "02.69.61.03.37",
    url: "http://mayotte.dieccte.gouv.fr/concurrence-et-consommation,2653",
    email: "976.polec[@]dieccte.gouv.fr",
  },
  {
    slug: "saint-pierre-et-miquelon",
    type: "Dieccte",
    name: "Saint Pierre et Miquelon",
    departments: ["975"],
    address: [
      "Direction de la Cohésion Sociale, du Travail, de l'Emploi et de la Population",
      "Pôle Concurrence, Consommation et Sécurité des Populations",
      "1, rue Ange Gautier",
      "B.P. 4302",
    ],
    post_code: "97500",
    city: "SAINT PIERRE et MIQUELON",
    phone: "05.08.41.16.30",
    fax: "05.08.41.16.39",
    url: null,
    email: "concurrence[@]dcstep.gouv.fr",
  },
];

// eslint-disable-next-line import/prefer-default-export
export { CONTACTS };
