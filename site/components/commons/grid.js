import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  max-width: ${props => props.theme.grid.size};
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Col100 = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
`;

export { Layout, Col100 };
