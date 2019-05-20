import React from "react";
import { Box } from "rebass";
import Head from "next/head";
import { DocumentsCompany } from "../components/documents";
import { Wrapper } from "../components/commons/Grid";

const Company = () => {
  return (
    <Box bg="white" p={4}>
      <Head>
        <title>Work in France - Liste des documents à prépare pour l'employeur</title>
      </Head>
      <Wrapper>
        <DocumentsCompany />
      </Wrapper>
    </Box>
  );
};

export default Company;
