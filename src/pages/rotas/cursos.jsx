import Head from "next/head";
import CardCurso from "@/components/card-curso";
import { cursosData } from "@/data/cursosData";

const Cursos = () => {
  return (
    <>
      <Head>
        <title>Cursos de Artesanato — By Silvia Monteiro</title>
        <meta
          name="description"
          content="Explore nossa seleção de cursos de artesanato. Aprenda técnicas profissionais de velas artesanais, resina epóxi e criações exclusivas com Silvia Monteiro."
        />
        <meta
          property="og:title"
          content="Cursos de Artesanato — By Silvia Monteiro"
        />
        <meta
          property="og:description"
          content="Explore nossa seleção de cursos de artesanato. Aprenda técnicas profissionais com Silvia Monteiro."
        />
        <meta
          property="og:image"
          content="https://cursossilvia.vercel.app/images/curso-pedras.webp"
        />
        <link
          rel="canonical"
          href="https://cursossilvia.vercel.app/rotas/cursos"
        />
      </Head>
      <section
        className="justify-center bg-[#e3d7bf] item-center rounded-lg shadow-md py-3"
        aria-label="Catálogo de cursos"
      >
        <header>
          <h1 className="text-center pb-3 text-5xl story-script-regular">
            Meus Cursos
          </h1>
        </header>
        <div
          className="flex flex-wrap justify-center md:justify-center gap-8 bg-[#e3d7bf]"
          role="list"
        >
          {cursosData.map((curso, index) => (
            <CardCurso
              key={index}
              rotaProCurso={curso.rotaProCurso}
              srcImg={curso.srcImg}
              tituloCurso={curso.tituloCurso}
              descricaoCurso={curso.descricaoCurso}
              hashtag1={curso.hashtag1}
              hashtag2={curso.hashtag2}
              hashtag3={curso.hashtag3}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Cursos;
