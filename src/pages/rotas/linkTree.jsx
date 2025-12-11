import Image from "next/image";

const LinkTree = () => {
  return (
    <section className="flex flex-col items-center gap-5 mt-5">
      <h1 className="story-script-regular text-4xl text-center">
        Minhas Redes Sociais
      </h1>
      <div className="flex gap-8">
        <a
          className="hover:scale-110 duration-300"
          href="https://youtube.com/channel/UCg7JpGJz9oINQJQZRNkGHBQ/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/youtube-logo.webp"
            alt="Logo youtube"
            width={60}
            height={60}
          />
        </a>
        <a
          className="hover:scale-110 duration-300"
          href="https://www.instagram.com/silviamonteiro.art/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-xl"
            src="/images/instagram-logo.webp"
            alt="Logo instagram"
            width={60}
            height={60}
          />
        </a>
        <a
          className="hover:scale-110 duration-300"
          href="https://www.tiktok.com/@silviamonteiro.art?_r=1&_t=ZS-928NgBSPtZQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="rounded-xl"
            src="/images/tiktok-logo.webp"
            alt="Logo tiktok"
            width={60}
            height={60}
          />
        </a>
      </div>
      <hr className="border border-black w-[300px] my-4"  />
      <h1 className="story-script-regular text-4xl text-center">
        Meus cursos On-line
      </h1>
      <div className="flex gap-8">
        <a
          className="bg-[#9a5833] border border-black p-4 rounded-xl text-center drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 duration-400"
          href="https://cursossilvia.vercel.app/rotas/cursos/cursoPedrasResina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong className="text-white">
            Curso de velas com pedras e resina.
          </strong>
        </a>
      </div>
    </section>
  );
};

export default LinkTree;
