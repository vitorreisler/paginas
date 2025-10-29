import CarroselPersonalizado from "@/components/carroselPersonalizado";
import TextoVideo from "@/components/componenteTextoVideo";
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
      <GaleriaVideos/>
      <VideoTexto text="abc" srcImg={"1031.mp4"} />
      <TextoVideo text="abc" srcImg={"videoSafari.mp4"} />

    </div>
  );
}
