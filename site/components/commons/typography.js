import styled from "styled-components";

const H1 = styled.h1`
  text-transform: ${props => (props.textTransform ? props.textTransform : "none")};
  font-size: ${props => props.theme.fontSizes.s6};
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.text)};
`;
const H2 = styled.h1`
  text-transform: ${props => (props.textTransform ? props.textTransform : "none")};
  font-size: ${props => props.theme.fontSizes.s5};
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.text)};
`;
const H3 = styled.h1`
  text-transform: ${props => (props.textTransform ? props.textTransform : "none")};
  font-size: ${props => props.theme.fontSizes.s4};
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.text)};
`;
const H4 = styled.h1`
  text-transform: ${props => (props.textTransform ? props.textTransform : "none")};
  font-size: ${props => props.theme.fontSizes.s3};
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.text)};
`;
const H5 = styled.h1`
  text-transform: ${props => (props.textTransform ? props.textTransform : "none")};
  font-size: ${props => props.theme.fontSizes.s2};
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.text)};
`;
const H6 = styled.h1`
  text-transform: ${props => (props.textTransform ? props.textTransform : "none")};
  font-size: ${props => props.theme.fontSizes.s1};
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.text)};
`;
const Text = styled.p`
  text-transform: ${props => (props.textTransform ? props.textTransform : "none")};
  font-size: ${props => props.theme.fontSizes.s3};
  color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.text)};
`;

export { H1, H2, H3, H4, H5, H6, Text };
