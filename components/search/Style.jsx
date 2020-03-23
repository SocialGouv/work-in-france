// @flow
import styled from "styled-components";

const Background = styled.div`
  background: ${(props) => props.theme.colors.blueBg};
  padding: 30px 10px;
`;

const SearchTitle = styled.h1`
  text-align: center;
  font-size: 26px;
  flex: 0 0 100%;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.white};
`;

const SearchFormLabel = styled.label`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;

const RadioLabel = styled.label`
  color: ${(props) => props.theme.colors.white};
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  width: 48%;
`;

const RadioInput = styled.input`
  display: none;
`;

export { Background, SearchTitle, SearchFormLabel, RadioLabel, RadioInput };
