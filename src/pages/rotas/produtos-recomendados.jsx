import CardProduto from "@/components/ui/card-produto";
import { produtosRecomendadosData } from "@/data/produtosRecomendadosData";

const ProdutosRecomendados = () => {
  return (
    <div className="flex flex-col items-center drop-shadow-md">
      <h2 className="w-full text-center text-3xl  rounded-t-2xl  p-4 md:text-5xl bg-[#e3d7bf]  story-script-regular">
        Produtos Recomendados
      </h2>
      <span className="text-xs md:text-sm mb-3">*Nós não somos uma loja, os produtos são apenas indicações.</span>
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-4">
        {produtosRecomendadosData &&
          produtosRecomendadosData.length > 1 &&
          produtosRecomendadosData.map(
            ({ id, href, srcImg, titulo, categoria, plataforma }) => {
              return (
                <CardProduto
                  key={id}
                  href={href}
                  srcImg={srcImg}
                  titulo={titulo}
                  categoria={categoria}
                  plataforma={plataforma}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default ProdutosRecomendados;
