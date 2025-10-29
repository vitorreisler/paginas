const FotoTexto = ({
  nomeCurso,
  breveDescricao,
  linkPagPagamento,
  srcImg,
  altImg,
}) => {
  return (
    <div className="flex flex-wrap-reverse w-full bg-[#e3d7bf] justify-center lg:justify-between">
      <div className="flex justify-center w-full lg:w-1/2 text-center my-2">
        <img
          className="drop-shadow-lg max-w-full h-auto lg:w-[75%]"
          src={srcImg}
          alt={altImg}
          loading="lazy"
        />
      </div>
      <div className=" my-auto w-full lg:w-1/2 text-center px-3">
        <div className="flex flex-col py-2">
          <h2 className="py-3 text-3xl md:text-5xl story-script-regular">
            {nomeCurso}
          </h2>
          <hr />
          <h3 className="py-3 text-xl md:text-xl dm-serif-text-regular">
            {breveDescricao}
          </h3>
          {linkPagPagamento && <BotaoPadrao hrefLink={linkPagPagamento} />}
        </div>
      </div>
    </div>
  );
};

export default FotoTexto;
