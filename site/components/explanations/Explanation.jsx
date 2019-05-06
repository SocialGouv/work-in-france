import React from "react";
import { Flex, Box } from "@rebass/grid";
import { LayoutNormal } from "../commons/grid";

const Explanation = () => {
  return (
    <LayoutNormal>
      <Flex>
        <Box p={3} width={1}>
          Une autorisation provisoire de travail, comment ça se passe ?
        </Box>
        <Box p={3} width={1 / 3}>
          Démarrez votre demande d’autorisation provisoire de travail sur notre site et préparez vos
          pièces justificatives.
        </Box>
        <Box p={3} width={1 / 3}>
          Remplissez votre demande d’autorisation provisoire de travail sur le site Démarches
          Simplifiées : c’est sécurisé, rapide et gratuit.
        </Box>
        <Box p={3} width={1 / 3}>
          Recevez l’état d’avancement ainsi que votre autorisation par e-mail, dans un délai moyen
          de 5 jours ouvrés.
        </Box>
      </Flex>
    </LayoutNormal>
  );
};

export default Explanation;
