// todo: obfuscate
const demarches = {
  75: {
    company:
      "https://www.demarches-simplifiees.fr/commencer/autorisation-provisoire-de-travail",
    student:
      "https://www.demarches-simplifiees.fr/commencer/autorisation-provisoire-de-travail"
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
