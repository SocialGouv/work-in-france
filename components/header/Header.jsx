// @flow
import React from "react";
import Link from "next/link";

import { Flex, Box } from "rebass";
import { useRouter } from "next/router";
import { Wrapper } from "../commons/Grid";
import { LogoLink, Logo, MenuLink } from "./Style";
import isNouvelleDemarche from "../../lib/isNouvelleDemarche"

const Header = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const isCheckLinkVisible = !isNouvelleDemarche(pathname);

  return (
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
              {isCheckLinkVisible && <Box px={0} py={1} width={[1, "auto"]}>
                <Link href="/validitycheck">
                  <MenuLink> Vérifier une autorisation</MenuLink>
                </Link>
              </Box>}
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
  );
};

export default Header;
