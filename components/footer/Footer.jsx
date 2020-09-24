// @flow
import React from "react";
import getConfig from "next/config";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Flex, Box, Text, Image } from "rebass";
import { Wrapper } from "../commons/Grid";
import { StyledLink } from "../commons/Link";
import isNouvelleDemarche from "../../lib/isNouvelleDemarche";

const { publicRuntimeConfig } = getConfig();

const GITHUB_REPO = "https://github.com/SocialGouv/work-in-france";

const Footer = () => {
  const router = useRouter();
  const { pathname } = router;
  const nouvelleDemarche = isNouvelleDemarche(pathname);

  const contactEmail = nouvelleDemarche
    ? "support.workinfrance@beta.gouv.fr"
    : "contact@workinfrance.beta.gouv.fr";

  return (
    <Box bg="grey" px={3} py={4}>
      <Wrapper>
        <Flex flexWrap="wrap">
          <Box px={0} width={1}>
            <Flex flexWrap="wrap">
              <Image height="47px" mb={3} pr={3} src="/static/logo.png" width={["81px"]} />
              <Text fontSize={3} lineHeight="1.4" width={[1, 4 / 5]}>
                Site officiel de demande d’autorisation de travail. Service en version
                bêta, créé par le Ministère du Travail en collaboration avec les préfectures de
                département.
              </Text>
            </Flex>
          </Box>
          <Box px={0} py={3} width={1}>
            <Flex flexWrap="wrap" justifyContent="space-around">
              <Text textAlign={["left", "center"]} width={[1, 1 / 6]}>
                <NextLink href="/faq" passHref>
                  <StyledLink>Questions / Réponses</StyledLink>
                </NextLink>
              </Text>
              <Text textAlign={["left", "center"]} width={[1, 1 / 6]}>
                <NextLink href="/cgu" passHref>
                  <StyledLink>CGU</StyledLink>
                </NextLink>
              </Text>
              {!nouvelleDemarche && (
                <Text textAlign={["left", "center"]} width={[1, 1 / 6]}>
                  <NextLink href="/stats" passHref>
                    <StyledLink>Statistiques</StyledLink>
                  </NextLink>
                </Text>
              )}
              <Text textAlign={["left", "center"]} width={[1, 1 / 6]}>
                <StyledLink href={`mailto:${contactEmail}`}>Contactez-nous</StyledLink>
              </Text>
            </Flex>
          </Box>
          <Box px={5} width={1}>
            <Flex flexDirection="row-reverse" flexWrap="wrap" justifyContent="space-around">
              <StyledLink
                href={`${GITHUB_REPO}/tree/${publicRuntimeConfig.VERSION}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Contribuer sur Github
              </StyledLink>
              <StyledLink
                href={`${GITHUB_REPO}/compare/${publicRuntimeConfig.VERSION}...master`}
                rel="noopener noreferrer"
                target="_blank"
              >
                Journal des modifications
              </StyledLink>
              <Text>{`Version ${publicRuntimeConfig.VERSION}`}</Text>
            </Flex>
          </Box>
          <Box px={0} py={3} width={1}>
            <Text fontSize={1} textAlign="center">
              {`Rappel : Article L.8256-1 du code du travail : le fait de se rendre coupable de fraude
            ou fausse déclaration pour obtenir, faire obtenir ou tenter de faire obtenir à un
            étranger le titre mentionné à l'article L.8251­-1 est puni d'un emprisonnement d'un an
            et d'une amende de 3000 €.`}
            </Text>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Footer;
