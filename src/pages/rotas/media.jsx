import { youtubeData } from "@/data/youtubeData";

const Media = () => {
  return (
    <div className="bg-[#e3d7bf] py-10 px-4">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-6 max-w-6xl mx-auto">
        {youtubeData &&
          youtubeData.length > 0 &&
          youtubeData.map(({srcVideo}) => {
            return (
              <div key={srcVideo} className="bg-[#ffffff00]">
                <iframe
                  className="size-full  rounded"
                  width="250"
                  src={srcVideo}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Media;
