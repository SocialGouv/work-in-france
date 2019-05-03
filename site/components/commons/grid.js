import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  max-width: ${props => props.theme.grid.size};
  margin: 0 auto;
  flex-wrap: wrap;
`;

const LayoutNormal = styled.div`
  max-width: ${props => props.theme.grid.size};
  margin: 0 auto;
`;

const Col100 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Col50 = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export { Layout, Col100, Col50, LayoutNormal };
