import { GaleriaVideosData } from "@/data/galeriaVideosData";
import Image from "next/image";

const GaleriaVideosFotos = ({ categoriaParaMostrar, cursoParaMostrar }) => {
  return (
    <section
      className="
        p-6 rounded-b-2xl shadow-md
        grid grid- grid-cols-2 md:grid-cols-4
        gap-4 justify-center items-center
      "
      aria-label="Galeria de vídeos"
    >
      {GaleriaVideosData?.filter(
        (item) => item.categoria === categoriaParaMostrar && item.tipo === "video" && item.curso === cursoParaMostrar
      ).map(({ id, titulo, srcVideo }) => (
        <figure key={id} className="flex justify-center">
          <video
            className="shadow-md w-[100px] rounded-2xl lg:w-[180px] lg:rounded-4xl"
            src={`/images/${srcVideo}`}
            autoPlay
            loop
            muted
            loading="lazy"
            aria-label={titulo}
          />
          
        </figure>
      ))}
      {GaleriaVideosData?.filter(
        (item) => item.categoria === categoriaParaMostrar && item.tipo === "imagem" && item.curso === cursoParaMostrar
      ).map(({ id, titulo, srcVideo }) => (
        <figure key={id} className="flex justify-center">
          <Image
            className="shadow-md w-[120px] rounded-2xl lg:w-[250px] lg:rounded-4xl"
            src={`/images/${srcVideo}`}
            autoPlay
            loop
            muted
            loading="lazy"
            aria-label={titulo}
            width={1200}
            height={600}
          />
          
        </figure>
      ))}
    </section>
  );
};

export default GaleriaVideosFotos;
