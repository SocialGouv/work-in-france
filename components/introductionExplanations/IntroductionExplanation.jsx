// @flow
import React from "react";
import { Flex, Box, Heading, Text, Image } from "rebass";
import { Wrapper } from "../commons/Grid";

const IntroductionExplanation = () => {
  return (
    <Box bg="white">
      <Wrapper>
        <Box px={3} py={4}>
          <Flex flexWrap="wrap">
            <Box width={[1]}>
              <Heading
                color="black"
                fontFamily="Evolventa"
                fontSize={[3, 4, 5]}
                lineHeight={1.4}
                textAlign="center"
              >
                Une autorisation de travail, comment ça se passe ?
              </Heading>
            </Box>
            <Box p={4} width={[1, 1 / 3]}>
              <Flex alignItems="center" justifyContent="center">
                <Image src="/static/icon-screen.png" width="80px" />
              </Flex>
              <Text color="black" fontSize={2} textAlign="center">
                {`Démarrez votre demande d’autorisation de travail sur notre site et
                préparez vos `}
                <b>pièces justificatives.</b>
              </Text>
            </Box>
            <Box p={4} width={[1, 1 / 3]}>
              <Flex alignItems="center" justifyContent="center">
                <Image src="/static/icon-lock.png" width="80px" />
              </Flex>
              <Text color="black" fontSize={2} textAlign="center">
                {`Remplissez votre demande d’autorisation de travail sur le site Démarches Simplifiées : `}
                <b>c’est sécurisé, rapide et gratuit.</b>
              </Text>
            </Box>
            <Box p={4} width={[1, 1 / 3]}>
              <Flex alignItems="center" justifyContent="center">
                <Image src="/static/icon-mail.png" width="80px" />
              </Flex>
              <Text color="black" fontSize={2} textAlign="center">
                {`Recevez l’état d’avancement ainsi que votre `}
                <b>autorisation par e-mail</b>
              </Text>
            </Box>
          </Flex>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default IntroductionExplanation;
