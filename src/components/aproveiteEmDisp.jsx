import Image from "next/image";

const AproveiteEmDisp = () => {
  return (
    <section
      className="w-full flex flex-col py-3 mt-8 mx-auto bg-[#e5e3d8]"
      aria-label="Disponibilidade em dispositivos"
    >
      <figure>
        <Image
          className="max-w-[200px] mx-auto mb-3 drop-shadow-lg"
          src="/images/devices.webp"
          alt="Aproveite o conteúdo em qualquer dispositivo."
          width={200}
          height={200}
          priority={false}
          srcSet="/images/devices.webp 100w, /images/devices@2x.webp 200w"
          sizes="(max-width: 500px) 80vw, 200px"
        />
        <figcaption className="dm-serif-text-regular text-center text-xl">
          Aproveite o conteúdo em qualquer dispositivo.
        </figcaption>
      </figure>
    </section>
  );
};

export default AproveiteEmDisp;
