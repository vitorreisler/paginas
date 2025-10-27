import Card from "@/components/card";
import { cursosData } from "@/data/cursosData";

const Cursos = () => {
    
  return (
    <div className=" justify-center bg-[#e3d7bf] item-center rounded-lg shadow-md py-3">
        <h2 className="text-center pb-3 text-5xl story-script-regular">Meus Cursos</h2>
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
  );
};

export default Cursos;
