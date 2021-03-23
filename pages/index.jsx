import React from "react";
import Head from "next/head";
import { Flex, Box } from "rebass";
import IndexContent from "../contents/index.mdx";
import { Wrapper } from "../components/commons/Grid";

const Home = () => {
  return (
    <>
      <Head>
        <title>Work in France - Votre demande d'autorisation provisoire de travail</title>
      </Head>
      <Wrapper>
        <Flex>
          <Box p={3}>
            <h2 id="index-summary">
              La transition vers le nouveau service dématérialisé du ministère de l'Intérieur, quels
              impacts pour l’usager ?
            </h2>
            <IndexContent />
          </Box>
        </Flex>
      </Wrapper>
    </>
  );
};

export default Home;
