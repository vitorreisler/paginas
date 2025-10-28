const ComponenteTextoFoto = ({nomeCurso,breveDescricao,linkPagPagamento, srcImg, altImg}) => {
    return ( 
        <div className="flex flex-wrap-reverse w-full bg-[#e3d7bf] justify-center lg:justify-between">
        <div className=" my-auto w-full lg:w-1/2 text-center px-3">
          <div className="flex flex-col py-2">
            <h2 className="py-3 text-3xl md:text-5xl story-script-regular">
              {nomeCurso}
            </h2>
            <hr />
            <h3 className="py-3 text-xl md:text-xl dm-serif-text-regular">
              {breveDescricao}
            </h3>
            <a
              href={linkPagPagamento}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto py-2 rounded-lg shadow-md text-amber-50 bg-[#9a5833] duration-500 hover:scale-105 hover:bg-[#e3d7bf] hover:text-gray-800 w-3/4 md:w-1/2"
            >
              Comprar Agora
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-1/2 text-center my-2">
          <img
            className="drop-shadow-lg max-w-full h-auto lg:w-[75%]"
            src={srcImg}
            alt={altImg}
            loading="lazy"
          />
        </div>
      </div>
     );
}
 
export default ComponenteTextoFoto;