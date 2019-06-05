// @flow
import styled from "styled-components";
import { Card } from "rebass";

const ACard = styled(Card)`
  min-height: 290px;
`;

const BCard = styled(Card)`
  min-height: 200px;
`;

const List = styled.ul`
  list-style: none;
  margin: 8px 0 0 0;
  padding: 0;
`;

export { ACard, BCard, List };
