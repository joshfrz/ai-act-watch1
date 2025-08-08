import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Daily, plain‑English EU AI Act compliance alerts for teams that need to stay ahead." />
        <meta property="og:title" content="AI Act Watch – EU AI Act Compliance Alerts" />
        <meta property="og:description" content="Get concise, actionable updates from official EU sources, right in your inbox." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" type="application/rss+xml" title="AI Act Watch Alerts" href="/rss.xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
