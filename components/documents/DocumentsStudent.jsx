import React, { Fragment } from "react";
import queryString from "query-string";
import { Flex, Box, Button, Link, Heading, Text, Image } from "rebass";
import { ACard, BCard, List } from "./Style";
import DocumentSelect from "./DocumentSelect";

const DocumentsStudent = () => {
  let qualify = { link: null };
  if (process.browser) {
    qualify = queryString.parse(window.location.search);
  }
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
      <Box p={2} width={[1, 1 / 2, 1 / 3]}>
        <ACard
          border="2px solid"
          borderColor="blueBg"
          borderRadius={12}
          color="text"
          p={3}
          width={[1]}
        >
          <Flex justifyContent="center">
            <Image height="50px" src="/static/icon-passport.png" width="50px" />
          </Flex>
          <Heading fontSize={2} mb={3} textAlign="center">
            PASSEPORT
          </Heading>
          <Text textAlign="center">Les 2 premières pages suffisent.</Text>
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 2, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          <Flex justifyContent="center">
            <Image height="50px" src="/static/icon-student.png" width="50px" />
          </Flex>
          <Heading fontSize={2} mb={3} textAlign="center">
            JUSTIFICATIF DE SCOLARITÉ
          </Heading>
          <Text fontSize={1} textAlign="left">
            Suivant la situation :
            <List>
              <li>Pour l’année en cours, au choix :</li>
              <li>- certificat de scolarité,</li>
              <li>
                {`- certificat d'inscription ou de pré-inscription dans un établissement scolaire ou un centre
        de formation,`}
              </li>
              <li>- carte d’étudiant (recto-verso)</li>
            </List>
          </Text>
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 2, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          <Flex justifyContent="center">
            <Image height="50px" src="/static/icon-order.png" width="50px" />
          </Flex>
          <Heading fontSize={2} mb={3} textAlign="center">
            MANDAT
          </Heading>
          <Text fontSize={1} mb={2} textAlign="center">
            Vous autorisant à accomplir les démarches administratives pour le compte de votre
            employeur, et signé par ce dernier.
          </Text>
          <Link href="/static/pdf/mandat.pdf" target="_blank">
            <Text color="text" fontSize={0} textAlign="center">
              Voir un modèle
            </Text>
          </Link>
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 2, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          <Flex justifyContent="center">
            <Image height="50px" src="/static/icon-contract.png" width="50px" />
          </Flex>
          <Heading fontSize={2} mb={3} textAlign="center">
            CONTRAT DE TRAVAIL
          </Heading>
          <Text fontSize={1} textAlign="left">
            Suivant la situation :
            <List>
              <li>- contrat de droit commun (CDD ou CDI)</li>
              <li>- contrat d’alternance (apprentissage ou professionnalisation)</li>
              <li>- contrat doctoral</li>
              <li>- promesse d’embauche</li>
            </List>
          </Text>
        </ACard>
      </Box>
      <Box p={2} width={[1, 1, 2 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          <Flex justifyContent="center">
            <Image height="50px" src="/static/icon-france.png" width="50px" />
          </Flex>
          <Heading fontSize={2} mb={3} textAlign="center">
            DOCUMENT AUTORISANT LE SÉJOUR EN FRANCE
          </Heading>
          <Flex flexWrap="wrap">
            <Box pb={3} pr={3} width={[1, 1 / 3]}>
              <Text fontSize={1} textAlign="left">
                Au choix :
                <List>
                  <li>- titre de séjour </li>
                  <li>- VLS-TS (Visa de Long Séjour valant Titre de Séjour)</li>
                </List>
              </Text>
            </Box>
            <Box pr={3} width={[1, 2 / 3]}>
              <Text fontSize={1} textAlign="left">
                En cas de demande de renouvellement en cours, il faut fournir les 3 documents
                suivants :
                <List>
                  <li>- convocation à la Préfecture ou sous-Préfecture </li>
                  <li>- titre de séjour</li>
                  <li>- récépissé de nouvelle demande de titre de séjour</li>
                </List>
              </Text>
            </Box>
          </Flex>
        </ACard>
      </Box>
      <Box p={2} width={[1, 1 / 2, 1 / 3]}>
        <ACard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          <Flex justifyContent="center">
            <Image height="50px" src="/static/icon-reglementation.png" width="50px" />
          </Flex>
          <Heading fontSize={2} mb={3} textAlign="center">
            OPTIONNEL - EN CAS DE PROFESSION RÉGLEMENTÉE
          </Heading>
          <Text fontSize={1} mb={2} textAlign="center">
            {`Justificatif permettant d'exercer la profession réglementée`}
          </Text>
          <Link
            href="http://www.ciep.fr/enic-naric-page/verifier-si-profession-est-reglementee"
            target="_blank"
          >
            <Text color="text" fontSize={0} textAlign="center">
              Voir la liste des professions concernées
            </Text>
          </Link>
        </ACard>
      </Box>
      <Text color="text" fontSize={2} lineHeight={1.4} p={3} textAlign="center" width={[1, 9 / 10]}>
        <b>S’il s’agit d’un renouvellement,</b>
        <br />
        vous devez ajouter aux documents précédents :
      </Text>
      <Box p={2} width={[1, 1 / 2, 1 / 4]}>
        <BCard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          <Flex justifyContent="center">
            <Image height="50px" mb={3} src="/static/icon-certificate.png" width="50px" />
          </Flex>
          <Heading fontSize={2} mb={3} textAlign="center">
            L’AUTORISATION DE TRAVAIL PRÉCÉDENTE
          </Heading>
        </BCard>
      </Box>
      <Box p={2} width={[1, 1 / 2, 1 / 4]}>
        <BCard border="2px solid" borderColor="blueBg" borderRadius={12} color="text" p={3}>
          <Flex justifyContent="center">
            <Image height="50px" mb={3} src="/static/icon-pay-slip.png" width="50px" />
          </Flex>
          <Heading fontSize={2} fontWeight="600" mb={3} textAlign="center">
            LES DERNIERS BULLETINS DE PAIE
          </Heading>
        </BCard>
      </Box>
      <Text color="text" fontSize={1} lineHeight={1.4} p={3} textAlign="center" width={[1, 9 / 10]}>
        Besoin d’une checklist ?
      </Text>
      <Link
        href="http://www.ciep.fr/enic-naric-page/verifier-si-profession-est-reglementee"
        target="_blank"
      >
        <Text color="text" fontSize={0} textAlign="center">
          Télécharger la liste en version imprimable
        </Text>
      </Link>
      <Text
        color="text"
        fontSize={2}
        lineHeight={1.4}
        mt="4"
        p={3}
        textAlign="left"
        width={[1, 9 / 10]}
      >
        Vous allez être redirigé vers
        <b> Démarches Simplifiées,</b>
        {` le site officiel de demandes administratives, pour finaliser
      votre demande.`}
      </Text>
      <Text color="text" fontSize={2} lineHeight={1.4} p={3} textAlign="left" width={[1, 9 / 10]}>
        Vous êtes un Etudiant, vous allez être redirigé vers Démarches Simplifiées, le site officiel
        de demandes administratives, pour finaliser votre demande. Elle sera directement transmise
        au service de la main d'oeuvre étrangère de la Direccte du département que vous avez
        sélectionné :
      </Text>
      {qualify.link && (
        <Fragment>
          <Box width={1 / 2}>
            <Flex flexWrap="wrap">
              <Box width={1}>
                <DocumentSelect isStudent />
              </Box>
            </Flex>
          </Box>
          <Text
            color="text"
            fontSize={2}
            lineHeight={1.4}
            p={3}
            textAlign="left"
            width={[1, 9 / 10]}
          >
            Assurez-vous d'avoir bien sélectionné le département où se situe l'adresse figurant sur
            le document de séjour de l'étudiant.
          </Text>
          <Box width={1 / 2}>
            <Flex flexWrap="wrap">
              <Link
                href={`https://www.demarches-simplifiees.fr/commencer/${qualify.link}`}
                pt={2}
                width={1}
              >
                <Button bg="blueBg" px={4} py={3} width={1}>
                  Je finalise ma demande sur Démarches Simplifiées
                </Button>
              </Link>
            </Flex>
          </Box>
          <Text
            color="text"
            fontSize={2}
            lineHeight={1.4}
            p={3}
            textAlign="left"
            width={[1, 9 / 10]}
          >
            {`Extrait des CGU de demarches-simplifiees.fr : L'usager remplit en ligne le formulaire et
        valide celui-ci […]. La confirmation `}
            <b>et la transmission du formulaire par l'usager vaut signature de celui-ci.</b>
            {` En utilisant le service, l'usager s'engage sur la véracité des informations transmises lors du
        dépôt de son dossier.`}
          </Text>
        </Fragment>
      )}
    </Flex>
  );
};

export default DocumentsStudent;
