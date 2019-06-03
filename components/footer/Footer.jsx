// @flow
import React from "react";
import NextLink from "next/link";
import { Flex, Box, Text, Image } from "rebass";
import { Wrapper } from "../commons/Grid";
import { StyledLink } from "../commons/Link";

const Footer = () => {
  return (
    <Box bg="grey" px={3} py={4}>
      <Wrapper>
        <Flex flexWrap="wrap">
          <Box px={0} width={1}>
            <Flex flexWrap="wrap">
              <Image height="47px" mb={3} pr={3} src="/static/logo.png" width={["81px"]} />
              <Text fontSize={3} lineHeight="1.4" width={[1, 4 / 5]}>
                Site officiel de demande d’autorisation provisoire de travail. Service en version
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
              <Text textAlign={["left", "center"]} width={[1, 1 / 6]}>
                <NextLink href="https://wif-dashboard.num.social.gouv.fr/national" passHref>
                  <StyledLink>Statistiques</StyledLink>
                </NextLink>
              </Text>
              <Text textAlign={["left", "center"]} width={[1, 1 / 6]}>
                <NextLink href="mailto:contact@workinfrance.beta.gouv.fr" passHref>
                  <StyledLink>Contactez-nous</StyledLink>
                </NextLink>
              </Text>
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
