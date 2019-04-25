// todo: obfuscate
const demarches = {
  75: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud075-apt-etudiants-employeur",
    student:
      " https://www.demarches-simplifiees.fr/commencer/ud075-apt-etudiants"
  },
  69: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud069-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud069-apt-etudiants"
  },
  45: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud045-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud045-apt-etudiants"
  },
  77: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud077-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud077-apt-etudiants"
  },
  95: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud095-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud095-apt-etudiants"
  },
  92: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud092-apt-etudiants-employeur-v0",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud092-apt-etudiants-v0"
  },
  13: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud013-apt-etudiants-employeur-v0",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud013-apt-etudiants-v0"
  },
  76: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud076-apt-etudiants-employeur-emp-v0",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud076-apt-etudiants-employeur-v0"
  },
  91: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud091-apt-etudiants-employeur-v0",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud091-apt-etudiants-v0"
  },
  78: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud078-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud078-apt-etudiants"
  },
  54: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud054-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud054-apt-etudiants"
  },
  88: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud088-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud088-apt-etudiants"
  },
  57: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud057-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud057-apt-etudiants"
  },
  67: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud067-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud067-apt-etudiants"
  },
  94: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud094-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud094-apt-etudiants"
  },
  10: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud010-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud010-apt-etudiants"
  },
  93: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud093-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud093-apt-etudiants"
  },
  42: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud042-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud042-apt-etudiants"
  },
  55: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud055-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud055-apt-etudiants"
  },
  35: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud035-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud035-apt-etudiants"
  },
  52: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/ud052-apt-etudiants-employeur",
    student:
      "https://www.demarches-simplifiees.fr/commencer/ud052-apt-etudiants"
  }
};

window.onload = function() {
  // set the correct destination based on URL + department parameter
  const btn = document.getElementById("button_redirect_ds");
  const department = location.search
    .split("&")[0]
    .replace("?", "")
    .split("=")[1];
  const demarche =
    document.location.pathname.match(/^\/qualify\/(.*)\/qualify-/)[1] ||
    "student";
  // use 75 as default
  const url = (demarches[department] || demarches["75"])[demarche];
  if (btn) {
    btn.href = url;
  }
};
