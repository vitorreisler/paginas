const CardHome = ({
  srcImg,
  titulo,
  descricao,
  hashtag1,
  hashtag2,
  hashtag3,
}) => {
  return (
    <article
      className="max-w-[220px] sm:max-w-[280px] md:max-w-[320px] text-center rounded-lg overflow-hidden shadow-md bg-[#e5e3d8] transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:brightness-105 duration-300"
      itemScope
      itemType="https://schema.org/Course"
    >
        <video
          className="object-cover w-full h-32 sm:h-40 md:h-48"
          src={srcImg}
          alt={` ${titulo} - ${descricao}`}
          itemProp="video"
          loading="lazy"
          width={320}
          height={200}
          sizes="(max-width: 500px) 90vw, 320px"
          muted
          autoPlay
          loop
        />
        <div className="px-3 sm:px-4 pt-2 pb-1">
          <h2
            className="font-bold text-base sm:text-lg mb-1 leading-tight"
            itemProp="name"
          >
            {titulo}
          </h2>
          <hr className="border-gray-300" />
          <p
            className="text-gray-700 text-xs sm:text-sm pt-2 pb-2 leading-snug"
            itemProp="description"
          >
            {descricao}
          </p>
          <hr className="border-gray-300" />
        </div>
        <div className="px-3 sm:px-4 pt-1 pb-2 flex flex-wrap justify-center gap-1">
          {hashtag1 && (
            <span
              className="inline-block bg-[#9a5833] rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium text-amber-50"
              itemProp="about"
            >
              {hashtag1}
            </span>
          )}
          {hashtag2 && (
            <span
              className="inline-block bg-[#9a5833] rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium text-amber-50"
              itemProp="about"
            >
              {hashtag2}
            </span>
          )}
          {hashtag3 && (
            <span
              className="inline-block bg-[#9a5833] rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-medium text-amber-50"
              itemProp="about"
            >
              {hashtag3}
            </span>
          )}
        </div>
    </article>
  );
};

export default CardHome;
