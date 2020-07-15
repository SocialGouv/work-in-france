import React from "react";
import { Text } from "rebass";
import Head from "next/head";
import IntroductionSearch from "../components/introductionSearch";
import IntroductionExplanation from "../components/introductionExplanations";

const IntroductionPage = () => {
  return (
    <>
      <Head>
        <title>Work in France - Votre demande d'autorisation de travail</title>
      </Head>
      <IntroductionSearch />
      <Text bg="blueBg" color="white" p="4" textAlign="center">
        Le service est en test sur Paris.
      </Text>
      <IntroductionExplanation />
    </>
  );
};

export default IntroductionPage;
