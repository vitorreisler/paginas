import Card from "@/components/card";
import { cursosData } from "@/data/cursosData";

const Cursos = () => {
    console.log(cursosData);
    
  return (
    <div className="flex flex-wrap justify-center bg-[#e3d7bf] p-3 rounded-lg shadow-md">
      <div className="flex flex-wrap justify-between gap-2  bg-[#e3d7bf]">
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
