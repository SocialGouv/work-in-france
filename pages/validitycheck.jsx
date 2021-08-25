import React from "react";
import Head from "next/head";
import { Flex, Box } from "rebass";
import { Wrapper } from "../components/commons/Grid";
import ValidityCheck from "../components/validityCheck";

const ValidityCheckPage = () => (
  <Box bg="white">
    <Head>
      <title>
        Work in France - Vérification d'une autorisation provisoire de travail ou d'une demande
        d'introduction d'un travailleur étranger
      </title>
    </Head>
    <Wrapper>
      <Flex justifyContent="center">
        <Box bg="white" p={[2, 4]} width={[1, 2 / 3]}>
          Service non disponible
          {/**<ValidityCheck />*/}
        </Box>
      </Flex>
    </Wrapper>
  </Box>
);

export default ValidityCheckPage;
