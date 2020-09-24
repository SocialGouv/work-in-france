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
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
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

  setMatomo() {
    return {
      __html: `
        var _paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="https://matomo.fabrique.social.gouv.fr/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '31']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
    `,
    };
  }

  render() {
    return (
      <html lang="fr">
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/static/favicon.ico" rel="icon" />
          <meta
            content="Faites votre demande d'autorisation de travail en ligne avec Work In France. Work In France est un service de l'Etat pour les entreprises ou les étudiants étrangers, en contrat d'alternance, en contrat d'apprentissage, ou en contrat de professionnalisation"
            name="description"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={this.setMatomo()} />
          <noscript>
            <img alt="" src="//stats.data.gouv.fr/piwik.php?idsite=46" style={{ border: 0 }} />
          </noscript>
        </body>
      </html>
    );
  }
}
