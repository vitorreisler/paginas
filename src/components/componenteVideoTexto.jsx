import { useEffect, useRef } from "react";

const VideoTexto = ({ text = "", srcImg }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    let observer;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!videoEl.src) {
              videoEl.src = `/images/${videoEl.dataset.src}`;
              videoEl.load();
              videoEl.play().catch(() => {});
            }
            observer.unobserve(videoEl);
          }
        });
      }, { threshold: 0.25 });

      observer.observe(videoEl);
    } else {
      videoEl.src = `/images/${srcImg}`;
      videoEl.load();
    }

    return () => {
      if (observer && videoEl) observer.unobserve(videoEl);
    };
  }, [srcImg]);

  return (
    <div className="p-6 rounded-b-2xl shadow-md flex flex-wrap gap-4 justify-center items-center lg:justify-start">
      <div className="mx-auto">
        <video
          ref={videoRef}
          className="shadow-md rounded-4xl w-[180px]"
          data-src={srcImg}
          playsInline
          loop
          muted
          preload="none"
          controls={false}
        ></video>
      </div>
      <div className="w-full lg:w-1/2">
        <p className="p-4 text-center">{text}</p>
      </div>
    </div>
  );
};

export default VideoTexto;
