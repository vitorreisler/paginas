const GaleriaVideos = () => {
  const videos = [
    {
      titulo: "Video 1",
      srcVideo: "1031.mp4",
    },
    {
      titulo: "Video 2",
      srcVideo: "videoSafari.mp4",
    },
  ];
  return (
    <div className=" p-6 rounded-b-2xl shadow-md flex flex-wrap gap-4 justify-center items-center lg:justify-start ">
      {videos &&
        videos.length > 0 &&
        videos.map(({ srcVideo }) => {
          return (
            <div key={srcVideo} className="mx-auto">
              <video
                className=" shadow-md w-[100px] rounded-2xl lg:w-[180px] lg:rounded-4xl  "
                src={`/images/${srcVideo}`}
                autoPlay
                loop
                muted
                loading="lazy"
              />
            </div>
          );
        })}
    </div>
  );
};

export default GaleriaVideos;
