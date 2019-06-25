import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Evolventa";
    src: url(/static/fonts/evolventa/woff2/evolventa-bold.woff2) format('woff2'),
        url(/static/fonts/evolventa/woff/evolventa-bold.woff) format('woff');
    font-weight: 800;
  }
  /* source-sans-pro-regular - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
  /* source-sans-pro-italic - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: italic;
    font-weight: 400;
    src: url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('Source Sans Pro Italic'), local('SourceSansPro-Italic'),
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-italic.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-italic.svg#SourceSansPro') format('svg'); /* Legacy iOS */
  }
  /* source-sans-pro-700 - latin */
  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-700.woff') format('woff'), /* Modern Browsers */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
         url('/static/fonts/source-sans-pro/source-sans-pro-v12-latin-700.svg#SourceSansPro') format('svg'); /* Legacy iOS */
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

export default GlobalStyle;
