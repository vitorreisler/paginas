const VideoTexto = ({text = ""}) => {
  return (
    <div className=" p-6 rounded-b-2xl shadow-md flex flex-wrap gap-4 justify-center items-center lg:justify-start ">
      <div className="mx-auto">
        <video
          className=" shadow-md rounded-4xl w-[180px]"
          src="/images/1031.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="w-full lg:w-1/2 ">
        <p className="p-4 text-justify">
          {text}
        </p>
      </div>
    </div>
  );
};

export default VideoTexto;
