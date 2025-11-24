import Image from "next/image";

const VelaCeraCoco = () => {
  return (
    <div
      className="flex flex-col items-center"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Imagem principal da receita */}
      <figure className="flex flex-col items-center">
        <Image
          src="/images/receitas/thumb-vela-coco.webp"
          width={520}
          height={200}
          className="rounded-lg drop-shadow-md mb-4"
          alt="Vela artesanal com Cera de coco para envase"
          loading="eager"
          fetchPriority="high"
          itemProp="image"
        />
        <figcaption className="text-sm text-gray-600 italic">
          Vela artesanal com Cera de coco para envase.
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
        <ul
          className="py-4 px-3 lista-receita-vela"
          aria-label="Lista de ingredientes"
        >
          <li itemProp="itemListElement">500g de cera de coco</li>
          <li itemProp="itemListElement">
            10% de Essência para Velas (lipossolúvel), nesse caso 50ml
          </li>
          <li itemProp="itemListElement">Vidro ou lata para envase</li>
          <li itemProp="itemListElement">
            Pavio com Ilhós, depende do diâmetro do recipiente
          </li>
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
          Material de apoio
        </h2>

        <ul
          className="p-3 flex flex-col lista-receita-vela"
          aria-label="Material de apoio"
        >
          <li>Panela com bico</li>
          <li>Fogão elétrico (ou outra fonte de calor controlada)</li>
          <li>Espátula de silicone</li>
          <li>Termômetro</li>
          <li>Becker ou dosador para líquidos</li>
          <li>Tesoura</li>
        </ul>
      </section>
      <section
        className="w-full max-w-3xl my-4"
        itemProp="HowTo"
        itemScope
        itemType="https://schema.org/HowTo"
      >
        <h2 className="w-full rounded-t-lg text-center p-3 text-lg md:text-xl dm-serif-text-regular bg-[#e3d7bf]">
          Como fazer:
        </h2>
        <ul
          className="py-4 px-3 lista-receita-vela"
          aria-label="Lista de ingredientes"
        >
          <li itemProp="itemListElement">
            <strong>Prepare a cera:</strong> Pique a cera de coco com uma faca e
            coloque os pedaços na panela. Aqueça em fogo elétrico até que
            derreta completamente, conferindo a temperatura para que não passe
            de 70°C com o termômetro.
          </li>
          <li itemProp="itemListElement">
            <strong>Ajuste os pavios:</strong> Corte os pavios de forma que
            fiquem um pouco mais baixos que a altura do recipiente (com a vela
            pronta, deve sobrar entre 0,5 - 1cm de pavio para ser aceso). Molhe
            o ilhós de cada um na cera ainda líquida e fixe-os no fundo do
            recipiente (você também pode utilizar cola quente, ou adesivos dupla-face). <br /> Utilize a quantidade adequada de pavios para o diâmetro
            do seu recipiente. Reserve.
          </li>
          <li itemProp="itemListElement">
            <strong>Aromatização:</strong> Aguarde a cera baixar para abaixo de
            60°C antes de adicionar a essência. A proporção de essência usada
            nesta receita é de 10%, ou seja, 50 ml para 500 g de cera. Misture
            bem até que tudo fique homogêneo.
          </li>
          <li itemProp="itemListElement">
            <strong>Montagem: </strong>
            Despeje a cera aromatizada dentro do recipiente até preencher
            deixando 0,5 - 1cm de pavio para ser aceso . Deixe descansar até endurecer.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default VelaCeraCoco;
