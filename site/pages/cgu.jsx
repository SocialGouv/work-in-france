import React from "react";
import { Box, Flex } from "rebass";
import ReactMarkdown from "react-markdown";
import { Wrapper } from "../components/commons/Grid";
import cguContent from "../contents/cgu.md";

const cgu = () => {
  return (
    <Box bg="white" p={4}>
      <Wrapper>
        <Flex>
          <Box p={3}>
            <ReactMarkdown source={cguContent} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default cgu;
