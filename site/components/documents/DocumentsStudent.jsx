import React from "react";
import { Flex, Box, Button, Link, Heading, Text } from "rebass";
import { ACard } from "./Style";

const Documents = () => {
  return (
    <Flex flexWrap="wrap" justifyContent="center">
      <Heading
        color="text"
        fontFamily="Evolventa"
        fontSize={[3, 4, 5]}
        lineHeight={1.4}
        p={3}
        textAlign="center"
        width={1}
      >
        Quels documents devez-vous fournir ?
      </Heading>
      <Text color="text" fontSize={2} lineHeight={1.4} p={3} textAlign="center" width={[1, 9 / 10]}>
        Avant de remplir le formulaire en ligne, veillez à préparer les documents de l’étudiant
        suivants, en cours de validité. Pour chaque pièce demandée, vous devrez fournir un seul
        document, qui pourra contenir une ou plusieurs pages.
      </Text>
      <Box p={2} width={[1, 1 / 3]}>
        <ACard
          border="2px solid"
          borderColor="blueBg"
          borderRadius={12}
          color="text"
          p={3}
          width={[1]}
        >
          Les 2 premières pages suffisent.
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          {`Pour l’année en cours, au choix :`}
          <br />
          {`- certificat de scolarité,`}
          <br />
          {`- certificat d'inscription ou de pré-inscription dans un établissement scolaire ou un centre
        de formation,`}
          <br />
          {`- carte d’étudiant (recto-verso)`}
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          Vous autorisant à accomplir les démarches administratives pour le compte de votre
          employeur, et signé par ce dernier. Voir un modèle
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          Suivant la situation :
          <br />
          - contrat de droit commun (CDD ou CDI)
          <br />
          - contrat d’alternance (apprentissage ou professionnalisation)
          <br />
          - contrat doctoral
          <br />
          {`- promesse d’embauche`}
        </ACard>
      </Box>
      <Box p={2} width={[1, 2 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          <Flex>
            <Box>
              Au choix : - titre de séjour - VLS-TS (Visa de Long Séjour valant Titre de Séjour)
            </Box>
            <Box>
              En cas de demande de renouvellement en cours, il faut fournir les 3 documents suivants
              : - convocation à la Préfecture ou sous-Préfecture - titre de séjour - récépissé de
              nouvelle demande de titre de séjour
            </Box>
          </Flex>
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 2]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          OPTIONNEL - EN CAS DE PROFESSION RÉGLEMENTÉE
          <br />
          Justificatif permettant d'exercer la profession réglementée Voir la liste des professions
          concernées
        </ACard>
      </Box>
      <Text color="text" fontSize={2} lineHeight={1.4} p={3} textAlign="center" width={[1, 9 / 10]}>
        <b>S’il s’agit d’un renouvellement,</b>
        <br />
        vous devez ajouter aux documents précédents :
      </Text>
      <Box p={2} width={[1, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          L’AUTORISATION DE TRAVAIL PRÉCÉDENTE
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          LES DERNIERS BULLETINS DE PAIE
        </ACard>
      </Box>
      <Text color="text" fontSize={2} lineHeight={1.4} p={3} textAlign="center" width={[1, 9 / 10]}>
        Besoin d’une checklist ? Télécharger la liste en version imprimable
      </Text>
      <Text color="text" fontSize={2} lineHeight={1.4} p={3} textAlign="left" width={[1, 9 / 10]}>
        Vous allez être redirigé vers
        <b> Démarches Simplifiées,</b>
        {` le site officiel de demandes administratives, pour finaliser
        votre demande.`}
        <br />
        <br />
        {`Extrait des CGU de demarches-simplifiees.fr : L'usager remplit en ligne le formulaire et
        valide celui-ci […]. La confirmation `}
        <b>et la transmission du formulaire par l'usager vaut signature de celui-ci.</b>
        {` En utilisant le service, l'usager s'engage sur la véracité des informations transmises lors du
        dépôt de son dossier.`}
      </Text>
      <Link href="https://rebassjs.org" pt={4}>
        <Button bg="blueBg" px={4} py={3}>
          Je finalise ma demande sur Démarches Simplifiées
        </Button>
      </Link>
    </Flex>
  );
};

export default Documents;
