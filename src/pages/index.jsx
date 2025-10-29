import Head from "next/head";
import CarroselPersonalizado from "@/components/carroselPersonalizado";
import VideoTexto from "@/components/componenteVideoTexto";
import GaleriaVideos from "@/components/galeriaVidos";
import Image from "next/image";

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
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link rel="dns-prefetch" href="https://seudominio.com" />
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
          content="https://seudominio.com/images/cover.jpg"
        />
        <meta property="og:url" content="https://seudominio.com/" />
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
          content="https://seudominio.com/images/cover.jpg"
        />

        <link rel="canonical" href="https://seudominio.com/" />

        {/* Schema.org JSON-LD para Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "By Silvia Monteiro",
              description: "Artesanato e cursos artesanais especializados",
              url: "https://seudominio.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://seudominio.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              sameAs: [
                "https://instagram.com/bysilviam",
                "https://facebook.com/bysilviamonteiro",
              ],
              offers: [
                {
                  "@type": "Offer",
                  name: "Curso de Pedras e Resina",
                  description:
                    "Aprenda a criar peças únicas com pedras e resina",
                  price: "297.00",
                  priceCurrency: "BRL",
                  availability: "https://schema.org/InStock",
                },
              ],
            }),
          }}
        />
      </Head>

      <main>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Artesanato em Resina e Velas Artesanais | By Silvia Monteiro
        </h1>

        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            Descubra a arte do artesanato em resina e velas artesanais.
            Oferecemos cursos online completos e peças exclusivas feitas à mão
            com técnicas profissionais e materiais de alta qualidade.
          </p>
        </div>

        <section aria-label="Destaques" className="mb-12">
          <CarroselPersonalizado />
        </section>

        <section aria-label="Portfólio" className="mt-8">
          <h2 className="text-center story-script-regular text-4xl bg-[#e3d7bf] rounded-t-2xl mb-6">
            Trabalhos Artesanais Exclusivos
          </h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto px-4">
            Cada peça é cuidadosamente criada com atenção aos detalhes e
            técnicas artesanais aperfeiçoadas. Confira nossa seleção de velas
            decorativas, peças em resina e itens personalizados.
          </p>
          {/*<GaleriaVideos />*/}
          <VideoTexto
            text="Velas estilizadas sob encomenda."
          srcImg={"video-1031.mp4"}
          />
          <div className="flex flex-wrap-reverse w-full bg-[#e3d7bf] justify-center lg:justify-between">
            <div className="my-auto w-full lg:w-1/2 text-center px-3">
              <div className="flex flex-col py-2">
                <h3 className="py-3 text-xl md:text-xl">
                  Linhas Completas Exclusivas
                </h3>
              </div>
            </div>

            <div className="flex justify-center w-full lg:w-1/2 text-center my-2 p-4">
              <Image
                className="drop-shadow-lg max-w-full h-auto lg:w-[60%] rounded-xl"
                src="/images/linha-gentleman.webp"
                alt="Linha Gentleman - Velas artesanais premium com aroma sofisticado e acabamento elegante"
                width={1200}
                height={800}
              />
            </div>
          </div>
          <VideoTexto
            text="Sabonetes de lembrancinha "
            srcImg={"video-safari.mp4"}
          />

          <div className="flex flex-wrap w-full bg-[#e3d7bf] justify-center lg:justify-between">
            <div className="my-auto w-full lg:w-1/2 text-center px-3">
              <div className="flex flex-col py-2">
                <h3 className="py-3 text-xl md:text-xl">
                  Linhas Completas Exclusivas
                </h3>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-1/2 text-center my-2 p-4">
              <Image
                className="drop-shadow-lg max-w-full h-auto lg:w-[60%] rounded-xl"
                src="/images/linha-vanilla.webp"
                alt="Linha Vanilla - Coleção exclusiva de velas artesanais com fragrância natural de baunilha"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
