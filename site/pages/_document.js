// next js document doesn't support jsx extention
/* eslint-disable react/jsx-filename-extension */
// disable class method for custom scripts injection
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-danger */

import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  setHotjar() {
    return {
      __html: `   (function(h, o, t, j, a, r) {
      h.hj =
        h.hj ||
        function() {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 1177745, hjsv: 6 };
      a = o.getElementsByTagName("head")[0];
      r = o.createElement("script");
      r.async = 1;
      r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
    `,
    };
  }

  setPiwik() {
    return {
      __html: `
      var _paq = _paq || [];
      _paq.push(["setDomains", ["*.work-in-france.beta.gouv.fr", "*.workinfrance.beta.gouv.fr"]]);
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
          var u="//stats.data.gouv.fr/";
          _paq.push(['setTrackerUrl', u+'piwik.php']);
          _paq.push(['setSiteId', '46']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
      })();
    `,
    };
  }

  render() {
    return (
      <html lang="fr">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700"
            rel="stylesheet"
          />
          <link href="static/favicon.ico" rel="icon" />
          <meta
            content="Faites votre demande d'autorisation de travail en ligne avec Work In France. Work In France est un service de l'Etat pour les entreprises ou les étudiants étrangers, en contrat d'alternance, en contrat d'apprentissage, ou en contrat de professionnalisation"
            name="description"
          />
          <script dangerouslySetInnerHTML={this.setHotjar()} />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={this.setPiwik()} />
          <noscript>
            <img alt="" src="//stats.data.gouv.fr/piwik.php?idsite=46" style={{ border: 0 }} />
          </noscript>
        </body>
      </html>
    );
  }
}
