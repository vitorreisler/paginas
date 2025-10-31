const CardProduto = ({href, srcImg, titulo, categoria = "sem categoria", plataforma }) => {
  return (
 <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
  <a className="relative" href={href} target="_blank" rel="noopener noreferrer">
    <img className="absolute max-w-7 left-21 bottom-23 md:max-w-8 md:left-30 md:bottom-29 rounded-xl " src={plataforma} alt="" />
      <img
        src={srcImg}
        alt={titulo}
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl object-cover mb-3"
      />
  </a>

  <h2 className="text-gray-800 font-semibold text-xs text-center mb-3">
    {titulo && titulo.length > 25 ? `${titulo.slice(0, 25)}...` : titulo}
  </h2>

  <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        className="bg-[#9a5833] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#eb874e] transition-colors"
      >
        Saiba mais
      </button>
  </a>
</div>

  );
};

export default CardProduto;
