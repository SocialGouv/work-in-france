import React from "react";
import { Box, Heading } from "rebass";

import { Wrapper } from "../commons/grid";
import SearchForm from "./SearchForm";

const Search = () => {
  return (
    <Box bg="blueBg" px={3} py={[4, 5]}>
      <Wrapper>
        <Heading
          color="white"
          fontFamily="Evolventa"
          fontSize={[3, 4, 5]}
          lineHeight={1.4}
          textAlign="center"
        >
          Demandez votre autorisation provisoire de travail pour un étudiant étranger en quelques
          clics
        </Heading>
        <SearchForm />
      </Wrapper>
    </Box>
  );
};

export default Search;
