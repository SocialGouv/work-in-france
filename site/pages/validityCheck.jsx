import React from "react";

import { Flex, Box } from "rebass";
import { Wrapper } from "../components/commons/Grid";
import ValidityCheckForm from "../components/validityCheck";

const ValidityCheck = () => (
  <Box bg="white">
    <Wrapper>
      <Flex justifyContent="center">
        <Box bg="white" p={[2, 4]} width={[1, 2 / 3]}>
          <ValidityCheckForm />
        </Box>
      </Flex>
    </Wrapper>
  </Box>
);

export default ValidityCheck;
