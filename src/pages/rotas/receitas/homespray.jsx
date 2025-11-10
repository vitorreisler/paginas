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
          <li itemProp="itemListElement">
            50ml de Essência de sua preferência
          </li>
          <li itemProp="itemListElement">100ml de Água mineral</li>
        </ul>
        <p>
          🌿 Modo de Fazer No becker, comece adicionando o álcool. Depois, entre
          com a essência e misture bem — essa etapa ajuda a diluir e também a
          “abrir” o aroma, deixando ele mais envolvente. <br /> Em seguida, adicione a
          água e misture novamente até tudo ficar bem homogêneo.<br /><br /> Se quiser um toque extra de qualidade e
          fixação no seu aromatizador, dá pra fazer a maceração pós-produção —
          que basicamente é deixar o perfume “descansar” e evoluir, como um bom
          vinho. 🍷✨<br /><br /> ⏳ Processo Curto Coloque a mistura do becker em um frasco
          transparente, feche bem e guarde no escuro (pode ser dentro de um
          armário) por 18 horas. Depois desse tempo, tire o frasco, deixe-o
          aberto em temperatura ambiente e com luz natural por 6 horas. Repita
          esse processo mais três vezes. <br /><br />❄️ Processo Longo (para quem quer o
          máximo de qualidade) Transfira a mistura do becker para um frasco
          transparente, coloque dentro de um saquinho (pra evitar que o cheiro
          invada os alimentos) e leve ao congelador por 3 dias. Passado esse
          tempo, retire do saquinho, abra o frasco e deixe-o descansar em luz e
          temperatura ambiente por 1 dia. Repita esse ciclo mais três vezes — 3
          dias no congelador, 1 dia fora.<br /><br /> 💫 E pronto! Seu difusor de aromas
          estará macerado e com o perfume muito mais intenso, equilibrado e
          duradouro.
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

export default HomeSpray;
