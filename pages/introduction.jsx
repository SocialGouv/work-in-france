import React, { Fragment } from "react";
import Head from "next/head";
import IntroductionSearch from "../components/introductionSearch";
import IntroductionExplanation from "../components/introductionExplanations";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Work in France - Votre demande d'introduction de salarié</title>
      </Head>
      <IntroductionSearch />
      <IntroductionExplanation />
    </Fragment>
  );
};

export default Home;
