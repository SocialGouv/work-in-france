import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  max-width: ${props => props.theme.grid.size};
  margin: 0 auto;
`;

export { Layout };
