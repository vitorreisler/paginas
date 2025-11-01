import Head from "next/head";
import CarroselPersonalizado from "@/components/ui/carroselPersonalizado";
import VideoTexto from "@/components/ui/componenteVideoTexto";
import Image from "next/image";
import CardHome from "@/components/card-home";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          By Silvia Monteiro — Artesanato, Velas e Cursos Artesanais
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      <main>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center story-script-regular">
          Artesanato em Resina e Velas Artesanais | By Silvia Monteiro
        </h1>

        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-4 dm-serif-text-regular ">
            Descubra a arte do artesanato em resina e velas artesanais.
            Oferecemos cursos online completos e peças exclusivas feitas à mão
            com técnicas profissionais e materiais de alta qualidade.
          </p>
        </div>

        <section aria-label="Destaques" className="mb-12">
          <CarroselPersonalizado />
        </section>

        <section aria-label="Portfólio" className="mt-8">
          <h2 className="text-center py-4 story-script-regular text-4xl md:text-5xl bg-[#e3d7bf] rounded-t-2xl mb-6">
            Trabalhos Artesanais Exclusivos
          </h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto px-4 dm-serif-text-regular">
            Cada peça é cuidadosamente criada com atenção aos detalhes e
            técnicas artesanais aperfeiçoadas. Confira nossa seleção de velas
            decorativas, peças em resina e itens personalizados.
          </p>

          <div className="grid place-items-center md:grid-cols-3 gap-5 md:gap-3 py-5 bg-[#aa6238] ">
            <CardHome
              srcImg={"/images/video-vela-gruta.mov"}
              titulo={"Vela Gruta Nossa Senhora"}
              descricao={
                "Vela Gruta Nossa Senhora - Peça artesanal em resina com detalhes realistas e acabamento impecável."
              }
            />
            <CardHome
              srcImg={"/images/video-safari.mp4"}
              titulo={"Sabonetes Temáticos"}
              descricao={
                "Sabonetes Temáticos - Sabonetes artesanais com design exclusivo, perfeitos para lembrancinhas e presentes."
              }
            />
            <CardHome
              srcImg={"/images/video-vela-desmoldada.mov"}
              titulo={"Vela Desmoldada"}
              descricao={
                "Vela Desmoldada - Vela artesanal com design exclusivo, feita à mão com cera de alta qualidade."
              }
            />
          </div>
        </section>
      </main>
    </>
  );
}
