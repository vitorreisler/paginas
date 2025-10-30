import Head from "next/head";
import Card from "@/components/card";
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
      <div className="justify-center bg-[#e3d7bf] item-center rounded-lg shadow-md py-3">
        <h2 className="text-center pb-3 text-5xl story-script-regular">
          Meus Cursos
        </h2>
        <div className="flex flex-wrap justify-center md:justify-center gap-8 bg-[#e3d7bf]">
          {cursosData.map((curso, index) => (
            <Card
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
      </div>
    </>
  );
};

export default Cursos;
