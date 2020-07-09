import React, { Fragment } from "react";
import Head from "next/head";
import ChangementStatutSearch from "../components/ChangementStatutSearch";
import ChangementStatutExplanation from "../components/ChangementStatutExplanations";

const ChangementStatutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Work in France - Votre demande de changement de statut</title>
      </Head>
      <ChangementStatutSearch />
      <ChangementStatutExplanation />
    </Fragment>
  );
};

export default ChangementStatutPage;
