import React from "react";
import styled from "styled-components";

import { Layout } from "../commons/grid";

const Logo = styled.div`
  background: url("./static/logo.png") no-repeat;
  background-size: 100%;
  width: 80px;
  height: 46px;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = props => {
  console.log(props);
  return (
    <Layout>
      <LogoWrapper>
        <Logo />
        <span>Work in france</span>
      </LogoWrapper>
    </Layout>
  );
};

export default Header;
