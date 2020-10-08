import React from "react";
import { ThemeProvider } from "styled-components";
import { createWrapper } from "next-redux-wrapper";
import GlobalStyle from "../theme/globalStyle";
import makeStore from "../lib/store";

import "normalize.css";
import Header from "../components/header";
import Footer from "../components/footer";
import theme from "../theme/index";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </ThemeProvider>
    </>
  );
};

export default createWrapper(makeStore).withRedux(MyApp);
