// @flow
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 20px;
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
  cursor: pointer;
`;

const MenuLink = styled.a`
  &:first-child {
    margin-right: 20px;
  }
  color: ${props => props.theme.colors.text};
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export { HeaderWrapper, LogoLink, Logo, MenuLink };
