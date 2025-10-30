const Sobre = () => {
  return (
    <article
      className="flex flex-col"
      itemScope
      itemType="http://schema.org/Person"
    >
      <h1 className="sr-only">
        Sobre Silvia Monteiro - Artesã e Professora de Artesanato
      </h1>

      <section
        className="flex flex-wrap gap-3 items-center justify-evenly"
        aria-label="Introdução"
      >
        <figure className="col">
          <img
            className="w-[600px] drop-shadow-lg rounded-lg"
            src="/images/thumb-difusor-varetas.webp"
            alt="Silvia demonstrando a criação de difusor de varetas"
            loading="lazy"
            itemProp="image"
          />
        </figure>
        <div className="col max-w-[500px]">
          <p className="py-3 dm-serif-text-regular" itemProp="description">
            Artesã e professora de artesanato, apaixonada por transformar
            matérias-primas simples em peças cheias de beleza, significado e
            bem-estar. Com mais de 10 anos de experiência na criação de
            cosméticos artesanais, ela domina diversas técnicas que vão desde
            sabonetes, velas e difusores de ambiente até shampoos,
            condicionadores, perfumes, hidratantes e aromatizadores
            personalizados.
          </p>
        </div>
      </section>
      <hr />

      <section
        className="flex flex-wrap-reverse gap-3 items-center justify-evenly"
        aria-label="Trajetória"
      >
        <div className="col max-w-[500px]">
          <p className="py-3 dm-serif-text-regular" itemProp="knowsAbout">
            Ao longo de sua trajetória, Silvia sempre acreditou que o artesanato
            é muito mais do que uma profissão — é uma forma de expressão, de
            terapia e de independência. Foi essa visão que a levou a ensinar e
            inspirar outras pessoas a também descobrirem o prazer de criar com
            as próprias mãos.
          </p>
        </div>
        <figure className="col">
          <img
            className="w-[500px] pt-3 drop-shadow-lg rounded-lg"
            src="/images/thumb-homespray.webp"
            alt="Silvia apresentando seu home spray artesanal"
            loading="lazy"
          />
        </figure>
      </section>
      <hr />

      <section
        className="flex flex-wrap gap-3 items-center justify-evenly"
        aria-label="Especialização"
      >
        <figure className="col py-3">
          <img
            className="w-[500px] drop-shadow-lg rounded-lg"
            src="/images/vela-desmoldada.webp"
            alt="Silvia demonstrando o processo de desmoldagem de vela artesanal"
            loading="lazy"
          />
        </figure>
        <div className="col max-w-[500px]">
          <p className="py-3 dm-serif-text-regular" itemProp="description">
            Nos últimos 6 anos, ela se especializou na arte das velas
            aromáticas, desenvolvendo combinações únicas de essências, cores e
            formatos. Seu cuidado em cada detalhe — do derretimento da cera à
            escolha dos aromas — tornou seu trabalho reconhecido pela qualidade
            e acabamento impecável.
          </p>
        </div>
      </section>
      <hr />

      <section
        className="flex flex-wrap-reverse gap-3 items-center justify-evenly"
        aria-label="Missão"
      >
        <div className="col max-w-[500px]">
          <p className="py-3 dm-serif-text-regular">
            Hoje, Silvia dedica-se a compartilhar tudo o que aprendeu ao longo
            dessa jornada, ensinando suas técnicas em cursos online e
            presenciais, sempre com linguagem acessível e didática envolvente.
            Sua missão é mostrar que qualquer pessoa pode aprender, produzir e
            até viver do artesanato, unindo criatividade, propósito e renda
            extra.
            <br />
            <br />
            Mais do que ensinar receitas, Silvia ensina o amor pelo processo — o
            prazer de ver algo nascer do zero e ganhar vida nas mãos de quem
            cria.
          </p>
        </div>
        <figure className="col">
          <img
            className="w-[500px] pt-3 drop-shadow-lg rounded-lg"
            src="/images/thumb-sab-liq-intimo.webp"
            alt="Silvia apresentando linha de sabonetes líquidos íntimos artesanais"
            loading="lazy"
          />
        </figure>
      </section>
    </article>
  );
};

export default Sobre;
