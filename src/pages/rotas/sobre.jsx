import Image from "next/image";
import { Fragment } from "react";

const sobreData = [
  {
    id: 1,
    srcImg: "/images/thumb-difusor-varetas.webp",
    alt: "Silvia demonstrando a criação de difusor de varetas",
    ariaLabel: "Introdução",
    texto:
      "Artesã e professora de artesanato, apaixonada por transformar matérias-primas simples em peças cheias de beleza, significado e bem-estar. Com mais de 10 anos de experiência na criação de cosméticos artesanais, ela domina técnicas que vão desde sabonetes, velas e difusores até shampoos, condicionadores, perfumes, hidratantes e aromatizadores personalizados.",
    reverse: false,
  },
  {
    id: 2,
    srcImg: "/images/thumb-homespray.webp",
    alt: "Silvia apresentando seu home spray artesanal",
    ariaLabel: "Trajetória",
    texto:
      "Ao longo de sua trajetória, Silvia sempre acreditou que o artesanato é muito mais do que uma profissão — é uma forma de expressão, terapia e independência. Essa visão a levou a ensinar e inspirar outras pessoas a descobrirem o prazer de criar com as próprias mãos.",
    reverse: true,
  },
  {
    id: 3,
    srcImg: "/images/vela-desmoldada.webp",
    alt: "Silvia demonstrando o processo de desmoldagem de vela artesanal",
    ariaLabel: "Especialização",
    texto:
      "Nos últimos 6 anos, ela se especializou na arte das velas aromáticas, desenvolvendo combinações únicas de essências, cores e formatos. Seu cuidado em cada detalhe — do derretimento da cera à escolha dos aromas — tornou seu trabalho reconhecido pela qualidade e acabamento impecável.",
    reverse: false,
  },
  {
    id: 4,
    srcImg: "/images/thumb-sab-liq-intimo.webp",
    alt: "Silvia apresentando sabonetes líquidos íntimos artesanais",
    ariaLabel: "Missão",
    texto:
      "   Hoje, Silvia dedica-se a compartilhar tudo o que aprendeu ao longo dessa jornada, ensinando suas técnicas em cursos online e presenciais, sempre com linguagem acessível e didática envolvente. Sua missão é mostrar que qualquer pessoa pode aprender, produzir e até viver do artesanato, unindo criatividade, propósito e renda extra. Mais do que ensinar receitas, Silvia ensina o amor pelo processo — o prazer de ver algo nascer do zero e ganhar vida nas mãos de quem cria.",
    reverse: true,
  },
];

const Sobre = () => {
  return (
    <article
      className="flex flex-col"
      itemScope
      itemType="http://schema.org/Person"
    >
      <h1 className="sr-only">Sobre Silvia Monteiro - Artesã e Professora</h1>

      {sobreData.map(({ id, srcImg, alt, ariaLabel, texto, reverse }) => (
        <Fragment key={id}>
          <section
            className={
              reverse
                ? "flex flex-col lg:flex-row-reverse gap-3 items-center justify-evenly"
                : "flex flex-col lg:flex-row gap-3 items-center justify-evenly"
            }
            aria-label={ariaLabel}
          >
            <figure className="col relative w-full max-w-[400px] aspect-3/2 drop-shadow-lg rounded-lg overflow-hidden">
              <Image
                src={srcImg}
                alt={alt}
                fill
                className="object-cover"
                priority={id === 1}
                sizes="(max-width: 600px) 95vw, 600px"
              />
            </figure>

            <div className="col max-w-[500px]">
              <p className="py-3 dm-serif-text-regular text-lg leading-relaxed">
                {texto}
              </p>
            </div>
          </section>
          <hr />

        </Fragment>
      ))}
    </article>
  );
};

export default Sobre;
