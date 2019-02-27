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
