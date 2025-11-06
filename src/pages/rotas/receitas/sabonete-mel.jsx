import Image from "next/image";

const SaboneteMel = () => {
  return (
    <div
      className="flex flex-col items-center"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Imagem principal da receita */}
      <figure className="flex flex-col items-center">
        <Image
          src="/images/receitas/sabonete-mel.webp"
          width={520}
          height={200}
          className="rounded-lg drop-shadow-md mb-4"
          alt="Sabonete artesanal de mel com textura de colmeia"
          loading="eager"
          fetchPriority="high"
          itemProp="image"
        />
        <figcaption className="text-sm text-gray-600 italic">
          Sabonete artesanal hidratante de mel.
        </figcaption>
      </figure>

      {/* Seção de ingredientes */}
      <section
        className="w-full max-w-3xl my-4"
        itemProp="supply"
        itemScope
        itemType="https://schema.org/HowToSupply"
      >
        <h2 className="w-full rounded-t-lg text-center p-3 text-lg md:text-xl dm-serif-text-regular bg-[#e3d7bf]">
          Ingredientes utilizados:
        </h2>
        <ul className="py-4 px-3 lista-receita-sabonete" aria-label="Lista de ingredientes">
          <li itemProp="itemListElement">500g Base Glicerinada Transparente</li>
          <li itemProp="itemListElement">30ml Essência Cosmética de Mel</li>
          <li itemProp="itemListElement">30ml Extrato de Mel</li>
          <li itemProp="itemListElement">2 colheres de sopa de Mel Puro</li>
          <li itemProp="itemListElement">75ml Lauril</li>
        </ul>
      </section>

      {/* Seção de propriedades */}
      <section
        className="w-full max-w-3xl my-4"
        itemProp="step"
        itemScope
        itemType="https://schema.org/HowToStep"
      >
        <h2 className="w-full text-center bg-[#e3d7bf] rounded-t-lg p-3 text-lg md:text-xl dm-serif-text-regular">
          Propriedades do MEL
        </h2>

        <ul
          className="p-3 flex flex-col gap-4 lista-receita-sabonete-mel"
          aria-label="Propriedades cosméticas do mel"
        >
          <li>
            <strong>1. Hidratante natural (umectante):</strong>
            <br /> O mel atrai e retém a umidade na pele, mantendo-a macia e
            elástica.
          </li>
          <li>
            <strong>2. Regenerador e cicatrizante:</strong>
            <br /> Estimula a renovação celular e auxilia na cicatrização de
            pequenas feridas.
          </li>
          <li>
            <strong>3. Antisséptico e antibacteriano:</strong>
            <br /> Inibe o crescimento de bactérias e fungos, ideal para
            sabonetes purificantes.
          </li>
          <li>
            <strong>4. Antioxidante:</strong>
            <br /> Rico em flavonoides, combate radicais livres e protege a pele
            da poluição e do sol.
          </li>
          <li>
            <strong>5. Emoliente e suavizante:</strong>
            <br /> Deixa a pele com toque sedoso, ideal para peles secas ou
            sensíveis.
          </li>
          <li>
            <strong>6. Calmante e anti-inflamatório:</strong>
            <br /> Alivia irritações, vermelhidão e coceira.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SaboneteMel;
