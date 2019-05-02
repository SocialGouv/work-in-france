import React, { Fragment } from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";

import Header from "../components/header";
import Footer from "../components/footer";
import theme from "../theme/index";

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
