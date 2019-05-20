// @flow
import styled from "styled-components";

const StyledLink = styled.a`
  text-decoration: underline;
  color: ${props => props.theme.colors.text};
  &:hover {
    cursor: pointer;
  }
`;

// eslint-disable-next-line import/prefer-default-export
export { StyledLink };
