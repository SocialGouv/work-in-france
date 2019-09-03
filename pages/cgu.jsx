import React from "react";
import { Box, Flex } from "rebass";
import Head from "next/head";
import { Wrapper } from "../components/commons/Grid";
import CguContent from "../contents/cgu.mdx";

const cgu = () => {
  return (
    <Box bg="white" p={4}>
      <Head>
        <title>Work in France - Bienvenue - Conditions générales d'utilisation</title>
      </Head>
      <Wrapper>
        <Flex>
          <Box p={3}>
            <CguContent />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default cgu;
