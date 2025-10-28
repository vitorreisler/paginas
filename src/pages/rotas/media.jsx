import BotaoPadrao from "@/components/botaoPadrao";
import { youtubeData } from "@/data/youtubeData";

const Media = () => {
  return (
    <div className="bg-[#e3d7bf] pb-5 px-4 text-center">
      <h1 className="text-center text-3xl story-script-regular py-8 ">Meu Canal no YouTube</h1>
      <div className="py-3 flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-4 max-w-6xl mx-auto">
        {youtubeData &&
          youtubeData.length > 0 &&
          youtubeData.map(({ srcVideo }) => {
            return (
              <div key={srcVideo} className="bg-[#ffffff00]">
                <iframe
                  className="size-full rounded shadow-md hover:shadow-lg hover:scale-105 duration-400"
                  width="250"
                  src={srcVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            );
          })}
      </div>
      <BotaoPadrao hrefLink={"https://www.youtube.com/@SilviaMonteiroArt"} texto={"Ir pro Canal"} />
    </div>
  );
};

export default Media;
