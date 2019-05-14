import React from "react";
import { Box } from "rebass";
import { DocumentsStudent } from "../components/documents";
import { Wrapper } from "../components/commons/Grid";

const Student = () => {
  return (
    <Box bg="white" p={[1, 4]}>
      <Wrapper>
        <DocumentsStudent />
      </Wrapper>
    </Box>
  );
};

export default Student;
