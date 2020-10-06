import React from "react";
import Head from "next/head";
import { Text, Link } from "rebass";
import Search from "../components/search";
import Explanations from "../components/explanations";

const Home = () => {
  return (
    <>
      <Head>
        <title>Work in France - Votre demande d'autorisation provisoire de travail</title>
      </Head>
      <Search />
      <Text bg="blueBg" color="white" p="4" textAlign="center">
        {`Le service s'ouvre progressivement. Vérifiez que l'adresse qui figure sur le document
        autorisant le séjour en France est dans un des `}
        <Link color="white" href="/faq/#dans-quels-departements-puis-je-utiliser-work-in-france">
          départements ouverts.
        </Link>
      </Text>
      <Text bg="greyBg" color="black" p="4" textAlign="center">
        {"Pour les demandes d’introduction d’un salarié étranger, "}
        <Link color="black" href="/introduction">
          cliquez ici
        </Link>
      </Text>
      <Explanations />
    </>
  );
};

export default Home;
