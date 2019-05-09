import React from "react";
import { Box } from "rebass";
import Documents from "../components/documents";
import { Wrapper } from "../components/commons/Grid";

const student = () => {
  return (
    <Box bg="white" p={4}>
      <Wrapper>
        <Documents />
      </Wrapper>
    </Box>
  );
};

export default student;
