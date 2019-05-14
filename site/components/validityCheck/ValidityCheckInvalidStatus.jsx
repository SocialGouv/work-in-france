import React from "react";
import { Card, Heading, Text } from "rebass";

const ValidityCheckInvalidStatus = () => {
  return (
    <Card border="1px solid" borderColor="red" borderRadius="6px" mb="4" p={[3, 4]}>
      <Heading color="red">Autorisation provisoire de travail invalide.</Heading>
      <Text>Vérifiez les informations saisies. Contactez-nous pour plus de précisions.</Text>
    </Card>
  );
};

export default ValidityCheckInvalidStatus;
