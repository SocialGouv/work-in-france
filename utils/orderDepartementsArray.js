export default departements => {
  const orderedDepartement = [];
  departements.map(departement => {
    if (departement.isAllowed) {
      orderedDepartement.push(departement);
    }
    return orderedDepartement;
  });
  orderedDepartement.push({ value: "", label: "", isDisabled: true });
  departements.map(departement => {
    if (!departement.isAllowed) {
      orderedDepartement.push(departement);
    }
    return orderedDepartement;
  });
  return orderedDepartement;
};
