import React from "react";
import { Text } from "rebass";
import Head from "next/head";
import ChangementStatutSearch from "../components/ChangementStatutSearch";
import ChangementStatutExplanation from "../components/ChangementStatutExplanations";

const ChangementStatutPage = () => {
  return (
    <>
      <Head>
        <title>Work in France - Votre demande de changement de statut</title>
      </Head>
      <ChangementStatutSearch />
      <Text bg="blueBg" color="white" p="4" textAlign="center">
        Le service est en test sur Paris.
      </Text>
      <ChangementStatutExplanation />
    </>
  );
};

export default ChangementStatutPage;
