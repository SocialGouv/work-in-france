import React, { Fragment } from "react";
import Head from "next/head";
import Search from "../components/search";
import Explanations from "../components/explanations";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Work in France - Votre demande d'autorisation provisoire de travail</title>
      </Head>
      <Search />
      <Explanations />
    </Fragment>
  );
};

export default Home;
