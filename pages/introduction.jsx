import React from "react";
import Head from "next/head";
import IntroductionSearch from "../components/introductionSearch";
import IntroductionExplanation from "../components/introductionExplanations";

const IntroductionPage = () => {
  return (
    <>
      <Head>
        <title>Work in France - Votre demande d'introduction de salarié</title>
      </Head>
      <IntroductionSearch />
      <IntroductionExplanation />
    </>
  );
};

export default IntroductionPage;
