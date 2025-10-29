import CarroselPersonalizado from "@/components/carroselPersonalizado";
import VideoTexto from "@/components/componenteVideoTexto";
import GaleriaVideos from "@/components/galeriaVidos";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Bem-vindo!</h1>
      <CarroselPersonalizado />

      <h2 className=" mt-8 text-center story-script-regular text-4xl bg-[#e3d7bf] rounded-t-2xl">
        Um pouco dos meus outros trabalhos
      </h2>
      {/*<GaleriaVideos />*/}
      <VideoTexto text="Velas estilizadas sob encomenda." srcImg={"1031.mp4"} />
      <div className="flex flex-wrap-reverse w-full bg-[#e3d7bf] justify-center lg:justify-between">
        <div className=" my-auto w-full lg:w-1/2 text-center px-3">
          <div className="flex flex-col py-2">
            <h3 className="py-3 text-xl md:text-xl ">
              Linhas Completas Exclusivas
            </h3>
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-1/2 text-center my-2 p-4">
          <img
            className="drop-shadow-lg max-w-full h-auto lg:w-[60%] rounded-xl"
            src="/images/LinhaGentleman.jpeg"
            alt="LinhaGentleman"
            loading="lazy"
          />
        </div>
      </div>
      <VideoTexto text="Sabonetes de lembrancinha " srcImg={"videoSafari.mp4"} />

      <div className="flex flex-wrap w-full bg-[#e3d7bf] justify-center lg:justify-between">
         <div className=" my-auto w-full lg:w-1/2 text-center px-3">
          <div className="flex flex-col py-2">
            <h3 className="py-3 text-xl md:text-xl ">
              Linhas Completas Exclusivas
            </h3>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 text-center my-2 p-4">
          <img
            className="drop-shadow-lg max-w-full h-auto lg:w-[60%] rounded-xl"
            src="/images/linhaVanilla.jpeg" 
            alt="LinhaVanilla"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
