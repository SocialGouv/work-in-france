import React from "react";
import { Box } from "rebass";
import { Wrapper } from "../components/commons/Grid";
import FailContent from "../components/fail";

const Fail = () => {
  return (
    <Box bg="white">
      <Wrapper>
        <FailContent />
      </Wrapper>
    </Box>
  );
};

export default Fail;
