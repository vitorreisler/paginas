import Image from "next/image";

const SaboneteMel = () => {
  return (
    <div className="flex flex-col items-center ">
      <Image
        src={"/images/receitas/sabonete-mel.webp"}
        width={520}
        height={200}
        className="rounded-lg drop-shadow-md"
      />
      <p className="pt-2">Ingredientes utilizados:</p>
      <ul className="py-2 lista-receita-sabonete">
        <li>500g Base Glicerinada Transparente</li>
        <li>30ml Essência Cosmética de Mel</li>
        <li>30ml Extrato de Mel</li>
        <li>2 colheres de sopa de Mel Puro</li>
        <li>75ml Lauril</li>
      </ul>
    </div>
  );
};

export default SaboneteMel;
