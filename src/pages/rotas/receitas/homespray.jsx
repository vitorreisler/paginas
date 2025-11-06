import Image from "next/image";

const HomeSpray = () => {
  return (
    <div
      className="flex flex-col items-center"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Imagem principal da receita */}
      <figure className="flex flex-col items-center">
        <Image
          src="/images/thumb-homespray.webp"
          width={520}
          height={200}
          className="rounded-lg drop-shadow-md mb-4"
          alt="HomeSpray Artesanal"
          loading="eager"
          fetchPriority="high"
          itemProp="image"
        />
        <figcaption className="text-sm text-gray-600 italic">
          HomeSpray Artesanal
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
          <li itemProp="itemListElement">350ml de Álcool de cereais</li>
          <li itemProp="itemListElement">50ml de Essência de sua preferência</li>
          <li itemProp="itemListElement">100ml de Água mineral</li>
        </ul>
      </section>

      {/* Seção de propriedades */}
      <section
        className="w-full max-w-3xl my-4"
        itemProp="step"
        itemScope
        itemType="https://schema.org/HowToStep"
      >
      </section>
    </div>
  );
};

export default HomeSpray;
