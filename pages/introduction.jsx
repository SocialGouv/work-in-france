import React from "react";
import { Link, Text } from "rebass";
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
        Le service est uniquement accessible aux établissements de rattachement localisés à Paris.
      </Text>
      <Text bg="greyBg" color="black" p="4" textAlign="center">
        {"Pour les demandes d’Autorisations Provisoires de Travail d’un étudiant étranger, "}
        <Link color="black" href="/">
          cliquez ici
        </Link>
      </Text>
      <IntroductionExplanation />
    </>
  );
};

export default IntroductionPage;
