import React from "react";
import { Box } from "rebass";
import Head from "next/head";
import { Wrapper } from "../components/commons/Grid";
import FailContent from "../components/fail";

const Fail = () => {
  return (
    <Box bg="white">
      <Head>
        <title>Work in France - Liste des documents à préparer</title>
      </Head>
      <Wrapper>
        <FailContent />
      </Wrapper>
    </Box>
  );
};

export default Fail;
