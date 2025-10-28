const BotaoPadrao = ({ hrefLink, texto }) => {
  return (
    <div className="my-3">
      <a
        href={hrefLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 rounded-lg shadow-md text-amber-50 bg-[#9a5833] duration-500 hover:scale-105 hover:bg-[#cb7746] hover:text-gray-200 w-3/4 md:w-1/2"
      >
        {texto ? texto : "Comprar Agora"}
      </a>
    </div>
  );
};

export default BotaoPadrao;
