import React from "react";
import { Flex, Box } from "rebass";
import { Wrapper } from "../components/commons/grid";

const fail = () => {
  return (
    <Wrapper>
      <Flex>
        <Box>
          <h1>Demande d'autorisation provisoire de travail</h1>
          <h3>Ce service n'est pas encore disponible dans votre département.</h3>
          <p>
            La version bêta est disponible uniquement pour les demandes concernant les départements
            13, 45, 69, 75, 76, 77, 78, 91, 92 et 95.
          </p>
          <p>En attendant, veuillez vous adresser à la :</p>
          <address>
            Dieccte Mayotte
            <br />
            3 ter rue Mahabou
            <br />
            BP 174 97600
            <br />
            MAMOUDZOU MAYOTTE
            <br />
            Tél : 02.69.61.16.57
            <br />
            Fax : 02.69.61.03.37
          </address>
          <a href=""> http://mayotte.dieccte.gouv.fr/concurrence-et-consommation,2653</a>
          <p> 976.polec[@]dieccte.gouv.fr</p>
          <a href=""> Revenir à l'accueil</a>
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default fail;
