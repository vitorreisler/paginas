import Head from "next/head";
import BotaoPadrao from "@/components/ui/botaoPadrao";
import { youtubeData } from "@/data/youtubeData";

const Media = () => {
  return (
    <>
      <Head>
        <title>Canal e Vídeos — By Silvia Monteiro</title>
        <meta
          name="description"
          content="Assista vídeos exclusivos sobre artesanato, técnicas de velas artesanais e trabalhos em resina. Conheça o canal da Silvia Monteiro no YouTube."
        />
        <meta
          property="og:title"
          content="Canal e Vídeos — By Silvia Monteiro"
        />
        <meta
          property="og:description"
          content="Assista vídeos exclusivos sobre artesanato e técnicas artesanais. Conheça o canal da Silvia Monteiro."
        />
        <meta
          property="og:image"
          content="https://cursossilvia.vercel.app/images/curso-pedras.webp"
        />
        <link
          rel="canonical"
          href="https://cursossilvia.vercel.app/rotas/media"
        />
      </Head>
      <main className="bg-[#e3d7bf] pb-5 px-4 text-center">
        <header>
          <h1 className="text-center text-3xl story-script-regular py-8">
            Meu Canal no YouTube
          </h1>
        </header>

        <section
          className="py-3 flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-4 max-w-6xl mx-auto"
          aria-label="Vídeos em destaque"
        >
          {youtubeData &&
            youtubeData.length > 0 &&
            youtubeData.map(({ srcVideo, title = "Vídeo do YouTube" }) => {
              return (
                <article key={srcVideo} className="bg-[#ffffff00]">
                  <iframe
                    className="size-full rounded shadow-md hover:shadow-lg hover:scale-105 duration-400"
                    width="250"
                    src={srcVideo}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </article>
              );
            })}
        </section>

        <div className="mt-4">
          <BotaoPadrao
            hrefLink={"https://www.youtube.com/@SilviaMonteiroArt"}
            texto={"Ir pro Canal"}
          />
        </div>
      </main>
    </>
  );
};

export default Media;
