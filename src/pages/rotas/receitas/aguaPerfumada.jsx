import Image from "next/image";

const AguaPerfumada = () => {
  return (
    <div
      className="flex flex-col items-center"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Imagem principal da receita */}
      <figure className="flex flex-col items-center">
        <Image
          src="/images/receitas/agua-perfumada-thumb.webp"
          width={520}
          height={200}
          className="rounded-lg drop-shadow-md mb-4"
          alt="receita água perfumada Artesanal"
          loading="eager"
          fetchPriority="high"
          itemProp="image"
        />
        <figcaption className="text-sm text-gray-600 italic">
          Água perfumada Artesanal
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
        <ul className="py-4 px-3 list-disc" aria-label="Lista de ingredientes">
          <li itemProp="itemListElement">350ml de água mineral</li>
          <li itemProp="itemListElement">
            100ml de álcool de cereais
          </li>
          <li itemProp="itemListElement">50ml de essência cosmética</li>
          <li itemProp="itemListElement">Renex</li>
        </ul>
        <h2 className="w-full rounded-t-lg text-center p-3 text-lg md:text-xl dm-serif-text-regular bg-[#e3d7bf]">
           🌿 Modo de Fazer
        </h2>
        <p>
          No becker, comece adicionando o álcool, depois, entre
          com a essência e misture bem — essa etapa ajuda a diluir e também a
          “abrir” o aroma, deixando ele mais envolvente. <br /> Em seguida, adicione a
          água e misture novamente até tudo ficar bem homogêneo.<br /><br /> Adicione RENEX aos poucos até sua água perfumada ficar transparente  <br /><br /> 💫 E pronto! Sua água aromática
          estará pronta e com o perfume intenso, equilibrado e duradouro. 
        </p>
      </section>

      {/* Seção de propriedades */}
      <section
        className="w-full max-w-3xl my-4"
        itemProp="step"
        itemScope
        itemType="https://schema.org/HowToStep"
      ></section>
    </div>
  );
};

export default AguaPerfumada;
