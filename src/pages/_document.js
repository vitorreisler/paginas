import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR">
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
        <meta charSet="utf-8" />
        {/* Resource hints to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="https://cursossilvia.vercel.app/" />
        {/* Preload Google Fonts for faster rendering */}
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400;700&family=Story+Script&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:wght@400;700&family=Story+Script&display=swap"
          media="all"
        />

        <meta
          name="description"
          content="Cursos de artesanato, velas artesanais e peças exclusivas em resina. Aprenda técnicas profissionais de artesanato com Silvia Monteiro. Aulas online, kits completos e suporte personalizado."
        />
        <meta name="author" content="Silvia Monteiro" />
        <meta
          name="keywords"
          content="artesanato, velas artesanais, curso de artesanato, resina epóxi, peças decorativas, arte em resina"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="By Silvia Monteiro — Artesanato, Velas e Cursos Artesanais"
        />
        <meta
          property="og:description"
          content="Cursos de artesanato, velas artesanais e peças exclusivas em resina. Aprenda técnicas profissionais com Silvia Monteiro."
        />
        <meta
          property="og:image"
          content="https://cursossilvia.vercel.app/images/curso-pedras.webp"
        />
        <meta property="og:url" content="https://cursossilvia.vercel.app/" />
        <meta property="og:site_name" content="By Silvia Monteiro" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="By Silvia Monteiro — Artesanato, Velas e Cursos"
        />
        <meta
          name="twitter:description"
          content="Cursos de artesanato, velas artesanais e peças exclusivas em resina. Aprenda técnicas profissionais com Silvia Monteiro."
        />
        <meta
          name="twitter:image"
          content="https://cursossilvia.vercel.app/images/curso-pedras.webp"
        />

        <link rel="canonical" href="https://cursossilvia.vercel.app/" />

        {/* Schema.org JSON-LD para Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "By Silvia Monteiro",
              description: "Artesanato e cursos artesanais especializados",
              url: "https://cursossilvia.vercel.app/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://cursossilvia.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              sameAs: [
                "https://www.instagram.com/silviamonteiro.art/",
                "https://www.facebook.com/silvia.santos.18400700",
              ],
              offers: [
                {
                  "@type": "Offer",
                  name: "Curso de Pedras e Resina",
                  description:
                    "Aprenda a criar peças únicas com pedras e resina",
                  price: "39.90",
                  priceCurrency: "BRL",
                  availability: "https://schema.org/InStock",
                },
              ],
            }),
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
