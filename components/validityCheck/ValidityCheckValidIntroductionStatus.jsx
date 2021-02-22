// @flow
import React from "react";
import { Card, Heading, Text } from "rebass";
import { format } from "date-fns";
import frLocale from "date-fns/locale/fr";
import { List, SubList } from "./Style";

type Props = {
  data: Object,
};

const extractFromChamps = (champs: Object[], libelle: string[]) =>
  champs.find((champ) => champ.type_de_champ.libelle === libelle).value;

const ValidityCheckValidIntroductionStatus = (props: Props) => {
  const {
    data: { ds_id: id, prenom, nom, siret, champs },
  } = props;

  const typeContrat = extractFromChamps(champs, "Type de contrat");
  const emploi = extractFromChamps(champs, "Emploi occupé");
  const dureeTravail = extractFromChamps(champs, "Nombre d'heures");

  return (
    <Card border="1px solid" borderColor="green" borderRadius="6px" mb="4" p={[3, 4]}>
      <Heading color="green" mb="2">
        "Demande d'introduction valide."
      </Heading>
      <List>
        <li>{`- Numéro : ${id}`}</li>
        <li>
          - Pour le salarié :
          <SubList>
            <li>{`- Prénom : ${prenom}`}</li>
            <li>{`- Nom : ${nom}`}</li>
          </SubList>
        </li>
        <li>{`- Pour l'entreprise identifiée par le numéro SIRET ${siret}`}</li>
        <li>{`- Pour un contrat de type : ${typeContrat}`}</li>
        <li>{`- Pour occuper l'emploi : ${emploi}`}</li>
        <li>{`- Pour une durée de travail de ${dureeTravail}`}</li>
      </List>
      <Text fontWeight="bold" mt="3">
        Contactez-nous pour récupérer une copie de l'attestation.
      </Text>
    </Card>
  );
};

export default ValidityCheckValidIntroductionStatus;
