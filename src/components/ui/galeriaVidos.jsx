import { GaleriaVideosData } from "@/data/galeriaVideosData";

const GaleriaVideos = ({ categoriaParaMostrar }) => {
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
        (item) => item.categoria === categoriaParaMostrar
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
    </section>
  );
};

export default GaleriaVideos;
