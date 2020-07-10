import React from "react";
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
      <IntroductionExplanation />
    </>
  );
};

export default IntroductionPage;
