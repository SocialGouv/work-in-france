// @flow
import React from "react";
import { Card, Heading, Text } from "rebass";
import { format } from "date-fns";
import frLocale from "date-fns/locale/fr";
import { List, SubList } from "./Style";

type Props = {
  data: Object,
};

const ValidityCheckValidAuthorizationStatus = (props: Props) => {
  const {
    data: { ds_id: id, prenom, nom, siret, date_de_debut_apt: start, date_de_fin_apt: end },
  } = props;
  const startDate = start ? format(new Date(start), "dd-MM-yyyy", { locale: frLocale }) : "";
  const endDate = end ? format(new Date(end), "dd-MM-yyyy", { locale: frLocale }) : "";
  return (
    <Card border="1px solid" borderColor="green" borderRadius="6px" mb="4" p={[3, 4]}>
      <Heading color="green" mb="2">
        Autorisation de travail valide
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
        <li>{`- Valable du ${startDate} au ${endDate}.`}</li>
      </List>
      <Text fontWeight="bold" mt="3">
        Contactez-nous pour récupérer une copie de l'attestation.
      </Text>
    </Card>
  );
};

export default ValidityCheckValidAuthorizationStatus;
