import styled from "styled-components";

const Background = styled.div`
  background: ${props => props.theme.color.blueBg};
  padding: 20px 10px;
`;

const SearchTitle = styled.h1`
  text-align: center;
  font-size: 26px;
  flex: 0 0 100%;
  line-height: 1.4;
  color: ${props => props.theme.color.white};
`;

const SearchFormWrapper = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const SearchFormLabel = styled.label`
  color: ${props => props.theme.color.white};
  font-size: 16px;
  margin-bottom: 20px;
  flex: 0 0 100%;
  text-align: center;
`;

const SelectWrapper = styled.div`
  flex: 0 0 300px;
  margin-bottom: 30px;
`;

const RadioWrapper = styled.div`
  flex: 0 0 300px;
  display: flex;
  justify-content: space-around;
`;

const RadioLabel = styled.label`
  color: ${props => props.theme.color.white};
  font-size: 16px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background: ${props => props.theme.color.white};
  color: ${props => props.theme.color.text};
  font-weight: bold;
  font-size: 16px;
  border-radius: 6px;
  border: 0;
  padding: 10px 30px;
  margin-top: 30px;
  min-width: 300px;
  cursor: pointer;
  outline: none;
`;

export {
  Background,
  SearchTitle,
  SearchFormWrapper,
  SearchFormLabel,
  SelectWrapper,
  RadioWrapper,
  RadioLabel,
  RadioInput,
  SearchButton,
};
