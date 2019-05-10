import styled from "styled-components";

// Forms, inputs

const Form = styled.form``;

const Input = styled.input`
  height: 50px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: "Raleway", sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;

export { Form, Input, Label };
