import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <script
          async
          src='https://www.googletagservices.com/tag/js/gpt.js'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
        `
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
