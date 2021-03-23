// @flow
import React from "react";

import { Flex, Box, Text, Link } from "rebass";
import { useRouter } from "next/router";
import { Wrapper } from "../commons/Grid";
import { LogoLink, Logo, MenuLink } from "./Style";
import isNouvelleDemarche from "../../lib/isNouvelleDemarche";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;
  const isCheckLinkVisible = !isNouvelleDemarche(pathname);

  return (
    <>
      <Box bg="white">
        <Wrapper>
          <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
            <Box pl={3} pr={3} py={3} width={[1, 2 / 5, 1 / 3]}>
              <Link href="/">
                <LogoLink>
                  <Logo />
                  Work in France
                </LogoLink>
              </Link>
            </Box>
            <Box pb={[3, 0]} pt={0} px={3} width={[1, 3 / 5, 2 / 3]}>
              <Flex flexWrap="wrap" justifyContent="flex-end">
                {isCheckLinkVisible && (
                  <Box px={0} py={1} width={[1, "auto"]}>
                    <Link href="/validitycheck">
                      <MenuLink> Vérifier une autorisation</MenuLink>
                    </Link>
                  </Box>
                )}
                <Box px={0} py={1} width={[1, "auto"]}>
                  <Link href="/faq">
                    <MenuLink> Questions / Réponses </MenuLink>
                  </Link>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Wrapper>
      </Box>
      <Text bg="red" color="white" p="4">
        <Wrapper>
          <p>Information importante</p>
          <p>
            La délivrance des autorisations de travail et des autorisations provisoires de travail
            pour les travailleurs et étudiants non membres de l’UE sera prise en charge à compter du
            6 avril par nouveau service dématérialisé du ministère de l'Intérieur : 
            <a href="https://administration-etrangers-en-france.interieur.gouv.fr/">
            https://administration-etrangers-en-france.interieur.gouv.fr/</a>.
          </p>
          <p>
            Il n'est désormais 
            plus possible de déposer des dossiers sur la plateforme Work in France 
            23 mars afin de permettre aux services de terminer l’instruction des dossiers en cours
          </p>
        </Wrapper>
      </Text>
    </>
  );
};

export default Header;
