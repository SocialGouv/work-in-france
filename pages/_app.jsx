import React, { Fragment } from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import GlobalStyle from "../theme/globalStyle";
import makeStore from "../lib/store";

import "normalize.css";
import Header from "../components/header";
import Footer from "../components/footer";
import theme from "../theme/index";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Fragment>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </Fragment>
          </ThemeProvider>
        </Provider>
      </Fragment>
    );
  }
}

export default withRedux(makeStore)(MyApp);
