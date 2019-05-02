// @flow
import React from "react";
import Link from "next/link";

import { Layout } from "../commons/grid";
import { HeaderWrapper, LogoLink, Logo, MenuWrapper, MenuLink } from "./Style";

const Header = props => {
  return (
    <HeaderWrapper>
      <Layout>
        <Link href="/">
          <LogoLink>
            <Logo />
            Work in France
          </LogoLink>
        </Link>
        <MenuWrapper>
          <Link href="/validity_check">
            <MenuLink> Vérifier une autorisation</MenuLink>
          </Link>
          <Link href="/faq">
            <MenuLink> Questions / Réponses </MenuLink>
          </Link>
        </MenuWrapper>
      </Layout>
    </HeaderWrapper>
  );
};

export default Header;
