import React from "react";
import { Background, SearchTitle } from "./Style";
import { Layout } from "../commons/grid";
import SearchForm from "./SearchForm";

const Search = () => {
  return (
    <Background>
      <Layout>
        <SearchTitle>
          Demandez votre autorisation provisoire de travail pour un
          <br />
          étudiant étranger en quelques clics
        </SearchTitle>
        <SearchForm />
      </Layout>
    </Background>
  );
};

export default Search;
