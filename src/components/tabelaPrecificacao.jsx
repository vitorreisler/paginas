import Image from "next/image";
import BotaoPadrao from "./ui/botaoPadrao";

const TabelaPrecificacao = () => {
  return (
    <section
      className="flex flex-wrap gap-3 items-center justify-evenly pt-10"
      aria-label="tabela de precificacao"
    >
      <figure className="col">
        <Image
          className="w-[600px] drop-shadow-lg rounded-lg"
          src="/images/tabela-precificacao.webp"
          alt="Tabela de precificacao"
          loading="lazy"
          width={800}
          height={400}
          itemProp="image"
          srcSet="/images/tabela-precificacao.webp 300w, /images/tabela-precificacao@2x.webp 600w"
          sizes="(max-width: 500px) 95vw, 600px"
        />
      </figure>
      <div className="flex flex-col  max-w-[700px]">
        <p className="py-3  grow dm-serif-text-regular" itemProp="description">
          Saber precificar seus produtos artesanais é essencial para garantir
          lucro, valorizar seu trabalho e manter seu negócio sustentável. <br />{" "}
          <br /> Quando você entende seus custos e calcula corretamente o preço
          de venda, consegue crescer com segurança e profissionalismo — sem
          trabalhar “no prejuízo”. <br /> <br />
          Baixe gratuitamente nossa Tabela de Precificação e descubra quanto
          realmente vale o seu artesanato!
        </p>
        <BotaoPadrao hrefLink={"https://visil1628.hotmart.host/planilhapreco"} texto={"Receber planilha"} />
      </div>
    </section>
  );
};

export default TabelaPrecificacao;
