import styled from "styled-components";

// Forms, inputs

const Form = styled.form``;

const Input = styled.input`
  height: 50px;
  font-size: 16px;
  border: 1px solid ${props => (props.hasError ? "#d1335b" : "#cccccc")};
  background-color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  position: relative;
  margin-bottom: 13px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SubList = styled.ul`
  margin: 0 0 0 10px;
  padding: 0;
  list-style: none;
`;

export { Form, Input, Label, List, SubList };
