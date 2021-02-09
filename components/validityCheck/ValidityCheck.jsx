import React from "react";
import { Box, Heading, Text } from "rebass";
import ValidityCheckFormContainer from "./ValidityCheckFormContainer";

const ValidityCheck = () => {
  return (
    <Box>
      <Heading fontSize="4" pb="1" pt="4">
        <b>Vérifiez la validité </b>
        d'une autorisation provisoire de travail pour un étudiant étranger ou d'une demande
        d'introduction d'un travailleur étranger
      </Heading>
      <Text color="text" pb="4">
        Disponible au plus tard 1 heure après délivrance de l'autorisation. Ne concerne que les
        autorisations délivrées via Work In France
      </Text>
      <ValidityCheckFormContainer />
    </Box>
  );
};

export default ValidityCheck;
