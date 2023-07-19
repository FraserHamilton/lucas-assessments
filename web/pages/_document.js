import Document, { Head, Html, Main, NextScript } from "next/document";

import React from "react";
import client from "../client";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return client.fetch('*[_id == "global-config"] {lang}.lang[0]').then((lang) => {
      return { ...initialProps, lang };
    });
  }

  render() {
    return (
      <Html lang={this.props.lang || "en"}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <meta name="description" content="Dyslexia assessments throughout central Scotland" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
