import CardHome from "@/components/card-home";
import { receitasData } from "@/data/receitasData";

const Receitas = () => {
  return (
    <div className="flex flex-col items-center drop-shadow-md">
      <h2 className="w-full text-center text-3xl  rounded-t-2xl  p-4 md:text-5xl bg-[#e3d7bf]  story-script-regular">
        Nossas Receitinhas
      </h2>
      <span className="text-xs md:text-sm mb-3">
        *Para melhor visualização, se inscreva no canal do{" "}
        <a
          href="https://www.youtube.com/channel/UCg7JpGJz9oINQJQZRNkGHBQ"
          rel="noopener noreferrer"
          className="underline"
        >
          <strong>
            <i>YouTube</i>
          </strong>
        </a>
        .
      </span>
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4">
        {receitasData &&
          receitasData.length > 0 &&
          receitasData.map(
            ({
              fotoCardReceita,
              rotaDaReceita,
              tituloDaReceita,
            }) => {
              return (
                <a key={rotaDaReceita} href={rotaDaReceita}  rel="noopener noreferrer">
                    <CardHome
                      tipo={"imagem"}
                      titulo={tituloDaReceita}
                      srcImg={fotoCardReceita}
                    />
                </a>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Receitas;
