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
  h1, h2, h3 {
    font-family: "Evolventa";
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 26px;
  }
  hr {
    width: 100%;
    border: 1px solid #c9d3df;
    border-width: 1px 0 0 0;
  }
  p > a, li > a {
    color: #0081d5;
    text-decoration: underline;
  }
  div#__next, html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    background: #EBEFF3;
    line-height: 1.6;
    color: #1c1c1c;
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
