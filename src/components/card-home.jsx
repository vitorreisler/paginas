import Image from "next/image";

const CardHome = ({
  srcImg,
  titulo,
  descricao,
  hashtag1,
  hashtag2,
  hashtag3,
  tipo,
}) => {
  return (
    <article
  className="w-[220px] sm:w-[280px] h-[300px] text-center rounded-lg overflow-hidden shadow-md bg-[#e5e3d8] transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:brightness-105 duration-300 flex flex-col"
  itemScope
  itemType="https://schema.org/Course"
>
  {/* IMAGEM PADRONIZADA */}
  <section className="relative w-full h-[180px]">
    <Image
      className="object-cover"
      src={srcImg}
      alt={titulo}
      fill
      sizes="(max-width: 640px) 220px, 280px"
      loading="lazy"
    />

    {/* TEXTO SOBREPOSTO */}
    <div className="absolute bottom-0 w-full bg-white/70 backdrop-blur-sm py-1 px-2">
      <p className="text-xs sm:text-sm font-semibold text-gray-800">
        {titulo}
      </p>
    </div>
  </section>

  {/* CONTEÚDO */}
  <div className="px-3 sm:px-4 pt-2 pb-1 flex-1 flex flex-col justify-between">
    <div className="my-auto">
      <p
        className="text-gray-700 text-xs sm:text-sm pt-2 pb-2 leading-snug"
        itemProp="description"
      >
        {descricao}
      </p>
    </div>

    {/* HASHTAGS */}
    {hashtag1 && (
      <div className="pt-2 flex flex-wrap justify-center gap-1">
        <hr className="border-gray-300" />
        <span className="inline-block bg-[#9a5833] rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium text-amber-50">
          {hashtag1}
        </span>

        {hashtag2 && (
          <span className="inline-block bg-[#9a5833] rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium text-amber-50">
            {hashtag2}
          </span>
        )}

        {hashtag3 && (
          <span className="inline-block bg-[#9a5833] rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium text-amber-50">
            {hashtag3}
          </span>
        )}
      </div>
    )}
  </div>
</article>
  );
};

export default CardHome;
