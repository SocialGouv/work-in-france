const orderDepartements = (departements, hasInactivateDepartement) => {
  const orderedDepartement = [];
  departements.map(departement => {
    if (departement.isAllowed) {
      orderedDepartement.push(departement);
    }
    return orderedDepartement;
  });
  if (hasInactivateDepartement) {
    orderedDepartement.push({ value: "", label: "", isDisabled: true });
    departements.map(departement => {
      if (!departement.isAllowed) {
        orderedDepartement.push(departement);
      }
      return orderedDepartement;
    });
  }
  return orderedDepartement;
};

export default orderDepartements;
