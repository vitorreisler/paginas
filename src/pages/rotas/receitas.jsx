import { receitasDataCard } from "@/data/receitasDataCard";
import Image from "next/image";

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
        {receitasDataCard &&
          receitasDataCard.length > 0 &&
          receitasDataCard.map(
            ({ fotoCardReceita, rotaDaReceita, tituloDaReceita }) => {
              return (
                <a
                  key={rotaDaReceita}
                  href={rotaDaReceita}
                  rel="noopener noreferrer"
                >
                  <article
                    className="w-[220px] sm:w-[280px] h-[190px] text-center rounded-lg overflow-hidden shadow-md bg-[#e5e3d8] transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:brightness-105 duration-300 flex flex-col"
                    itemScope
                    itemType="https://schema.org/Course"
                  >
                    {/* IMAGEM PADRONIZADA */}
                    <section className="relative w-full h-[180px]">
                      <Image
                        className="object-cover"
                        src={fotoCardReceita}
                        alt={tituloDaReceita}
                        fill
                        sizes="(max-width: 640px) 220px, 280px"
                        loading="lazy"
                      />

                      {/* TEXTO SOBREPOSTO */}
                      <div className="absolute bottom-0 w-full bg-white/70 backdrop-blur-sm py-1 px-2">
                        <p className="text-xs sm:text-sm font-semibold text-gray-800">
                          {tituloDaReceita}
                        </p>
                      </div>
                    </section>
                  </article>
                </a>
              );
            },
          )}
      </div>
    </div>
  );
};

export default Receitas;
