import React from "react";
import { Box } from "rebass";
import { DocumentsCompany } from "../components/documents";
import { Wrapper } from "../components/commons/Grid";

const Company = () => {
  return (
    <Box bg="white" p={4}>
      <Wrapper>
        <DocumentsCompany />
      </Wrapper>
    </Box>
  );
};

export default Company;
