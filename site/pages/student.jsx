import React from "react";
import { Box } from "rebass";
import Head from "next/head";
import { DocumentsStudent } from "../components/documents";
import { Wrapper } from "../components/commons/Grid";

const Student = () => {
  return (
    <Box bg="white" p={[1, 4]}>
      <Head>
        <title>Work in France - Liste des documents à préparer pour l'étudiant</title>
      </Head>
      <Wrapper>
        <DocumentsStudent />
      </Wrapper>
    </Box>
  );
};

export default Student;
