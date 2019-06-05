import React, { Fragment } from "react";
import Head from "next/head";
import { Text, Link } from "rebass";
import Search from "../components/search";
import Explanations from "../components/explanations";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Work in France - Votre demande d'autorisation provisoire de travail</title>
      </Head>
      <Search />
      <Text bg="blueBg" color="white" p="4" textAlign="center">
        {`Le service s'ouvre progressivement. Vérifiez que l'adresse qui figure sur le document
        autorisant le séjour en France soit dans un des `}
        <Link color="white" href="/faq/#dans-quels-departements-puis-je-utiliser-work-in-france">
          départements ouverts.
        </Link>
      </Text>
      <Explanations />
    </Fragment>
  );
};

export default Home;
