const Sobre = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col">
          <img
            className="w-[600px] drop-shadow-lg rounded-lg"
            src="/images/thumb difusor varetas.png"
            alt="silvia artesã com difusor de varetas"
            loading="lazy"
          />
        </div>
        <div className="col max-w-[500px] ">
          <p className="py-3 dm-serif-text-regular">
            Artesã e professora de artesanato, apaixonada por transformar
            matérias-primas simples em peças cheias de beleza, significado e
            bem-estar. Com mais de 10 anos de experiência na criação de
            cosméticos artesanais, ela domina diversas técnicas que vão desde
            sabonetes, velas e difusores de ambiente até shampoos,
            condicionadores, perfumes, hidratantes e aromatizadores
            personalizados.
          </p>
        </div>
      </div>
      <hr />

      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
        <div className="col max-w-[500px]">
          <p className="py-3 dm-serif-text-regular">
            Ao longo de sua trajetória, Silvia sempre acreditou que o artesanato
            é muito mais do que uma profissão — é uma forma de expressão, de
            terapia e de independência. Foi essa visão que a levou a ensinar e
            inspirar outras pessoas a também descobrirem o prazer de criar com
            as próprias mãos.
          </p>
        </div>
        <div className="col">
          <img
            className="w-[500px] pt-3 drop-shadow-lg rounded-lg"
            src="/images/thumb homespray.png"
            alt="silvia artesã com home spray"
            loading="lazy"
          />
        </div>
      </div>
      <hr />

      <div className="flex flex-wrap gap-3 items-center justify-evenly">
        <div className="col py-3">
          <img
            className="w-[500px] drop-shadow-lg rounded-lg"
            src="/images/vela desmoldada.png"
            alt="silvia artesã com vela desmoldada"
            loading="lazy"
          />
        </div>
        <div className="col max-w-[500px]">
          <p className="py-3 dm-serif-text-regular">
            Nos últimos 6 anos, ela se especializou na arte das velas
            aromáticas, desenvolvendo combinações únicas de essências, cores e
            formatos. Seu cuidado em cada detalhe — do derretimento da cera à
            escolha dos aromas — tornou seu trabalho reconhecido pela qualidade
            e acabamento impecável.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap-reverse gap-3 items-center justify-evenly">
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
        <div className="col">
          <img
            className="w-[500px] pt-3 drop-shadow-lg rounded-lg"
            src="/images/Thumb Sab liq Intimo.png"
            alt="silvia artesã com sabonete líquido íntimo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
