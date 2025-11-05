import "@/styles/globals.css";
import Layout from "@/components/layout";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-43QS3EYYCV"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-43QS3EYYCV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
