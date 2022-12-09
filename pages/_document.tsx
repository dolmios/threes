import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React, { ReactElement } from 'react';

import { getCssText } from '../ui';

export default class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang='en'>
        <Head>
          <link href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap' rel='stylesheet' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#13131B' />
          <meta name='msapplication-TileColor' content='#13131b' />
          <meta name='theme-color' content='#13131b' />
          <style dangerouslySetInnerHTML={{ __html: getCssText() }} id='stitches' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script defer strategy='beforeInteractive' src='https://api.pirsch.io/pirsch.js' id='pirschjs' data-code='DX4vXXr8vANkKbnTprdldUzj0VVjn2B5' />
        </body>
      </Html>
    );
  }
}
