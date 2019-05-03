// @flow
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 20px 20px 0px 20px;
  height: 80px;
`;

const Logo = styled.div`
  background: url("./static/logo.png") no-repeat;
  background-size: 100%;
  width: 80px;
  height: 46px;
  margin-right: 10px;
`;

const LogoLink = styled.a`
  font-size: 20px;
  display: flex;
  font-weight: bold;
  flex-direction: row;
  align-items: center;
`;

const MenuWrapper = styled.div`
  margin-left: auto;
  align-items: center;
  display: flex;
`;

const MenuLink = styled.a`
  margin-left: 20px;
  color: ${props => props.theme.color.text};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export { HeaderWrapper, LogoLink, Logo, MenuWrapper, MenuLink };
