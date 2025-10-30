const TextoVideo = ({ text = "", srcImg }) => {
  return (
    <figure className="p-6 rounded-b-2xl shadow-md flex flex-wrap-reverse gap-4 justify-center items-center lg:justify-start">
      <figcaption className="w-full lg:w-1/2">
        <p className="p-4 text-center">{text}</p>
      </figcaption>
      <div className="mx-auto">
        <video
          className="shadow-md rounded-4xl w-[180px]"
          src={`/images/${srcImg}`}
          autoPlay
          loop
          muted
          aria-label="Vídeo demonstrativo"
        />
      </div>
    </figure>
  );
};

export default TextoVideo;
