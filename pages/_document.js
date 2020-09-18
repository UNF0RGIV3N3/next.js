import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <link rel="preconnect" href="https://www.ifood.it"/>
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
        <script
        dangerouslySetInnerHTML={{
            __html: `var _iub = _iub || [];
                    _iub.csConfiguration = {"whitelabel":false,"lang":"it","siteId":2010922,"enableCMP":true,"googleAdditionalConsentMode":true,"isTCFConsentGlobal":false,"cookiePolicyId":89564238, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-top-center" }};
        `
        }}
        />
        <script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stub-v2.js"></script>
        <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
