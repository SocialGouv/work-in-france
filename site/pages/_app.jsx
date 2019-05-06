import React, { Fragment } from "react";
import App, { Container } from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "normalize.css";
import Header from "../components/header";
import Footer from "../components/footer";
import theme from "../theme/index";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Evolventa";
    src: url(static/fonts/evolventa/woff2/evolventa-bold.woff2) format('woff2'),
        url(static/fonts/evolventa/woff/evolventa-bold.woff) format('woff');
    font-weight: 800;
  }
  
  div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    background: #EBEFF3;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Fragment>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
