import CardProduto from "@/components/ui/card-produto";
import { produtosRecomendadosData } from "@/data/produtosRecomendadosData";

const ProdutosRecomendados = () => {
  return (
    <div className="flex flex-col items-center">
      <h2>Produtos Recomendados</h2>
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
