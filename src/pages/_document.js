import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta charSet="utf-8" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <Document
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Story+Script&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-43QS3EYYCV"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-43QS3EYYCV', { page_path: window.location.pathname });`,
          }}
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
