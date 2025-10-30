import Head from "next/head";
import Image from "next/image";
import AproveiteEmDisp from "@/components/aproveiteEmDisp";
import BotaoPadrao from "@/components/botaoPadrao";
import ComponenteTextoFoto from "@/components/componenteTextoFoto";
import GarantiaIncont from "@/components/garantiaIncont";
import PerguntasFAQSection from "@/components/perguntasFAQ";
import ReviewSection from "@/components/reviewSection";
import { reviewData } from "@/data/reviewData";

const CursoPedrasResina = () => {
  return (
    <>
      <Head>
        <title>Curso de Pedras e Resina — By Silvia Monteiro</title>
        <meta
          name="description"
          content="Curso completo de artesanato com pedras e resina — aprenda técnicas práticas para criar peças únicas e vender online."
        />
        <meta
          property="og:title"
          content="Curso de Pedras e Resina — By Silvia Monteiro"
        />
        <meta
          property="og:description"
          content="Curso completo de artesanato com pedras e resina — aprenda técnicas práticas e passo a passo."
        />
        <meta
          property="og:image"
          content="https://seudominio.com/images/cursoPedrasCover.png"
        />
        <link
          rel="canonical"
          href="https://seudominio.com/rotas/cursos/cursoPedrasResina"
        />
      </Head>

      <div className="flex flex-col text-center p-2 bg-[#e3d7bf] rounded-xl drop-shadow-lg">
        <ComponenteTextoFoto
          nomeCurso={
            "Curso de Artesanato com Pedras e Resina: Domine a Arte de Criar Peças Únicas e Lucrativas"
          }
          breveDescricao={
            "Transforme suas ideias em peças que encantam e busque sucesso no mundo do artesanato com pedras e resina."
          }
          linkPagPagamento={
            "https://pay.hotmart.com/U102469342X?off=frwzmpjz&hotfeature=51&_hi=eyJjaWQiOiIxNzU5MjM2ODA5MTE5ODI1ODExMjE2MjU0MDU2NjAwIiwiYmlkIjoiMTc1OTIzNjgwOTExOTgyNTgxMTIxNjI1NDA1NjYwMCIsInNpZCI6IjRjZTNkOTllNGI1MjQ2OWJhN2UzYjk1Yzk2YWJiNWM0In0=.1761582950625"
          }
          srcImg={"/images/curso-pedras-2-vital.webp"}
          altImg={"Curso de Artesanato com Pedras e Resina"}
        />

        <div className="flex flex-col my-3">
          <div>
            <h2 className="text-4xl p-3 md:text-6xl story-script-regular bg-[#e5e3d8]">
              Sobre o conteúdo
            </h2>
            <p className="p-3 text-lg bg-[#e3d7bf] text-start dm-serif-text-regular">
              Você ama o mundo do artesanato e sonha em transformar suas ideias
              em peças que encantam?
              <br />
              <br />
              No Curso de Artesanato com Pedras e Resina, você vai aprender tudo
              o que precisa para criar peças únicas, sofisticadas e cheias de
              personalidade, mesmo que seja iniciante.
              <br />
              <br />
              Com aulas práticas e linguagem simples, você vai dominar o uso da
              resina epóxi e das pedras naturais para produzir velas pilar,
              decorações exclusivas e até a famosa vela gruta, uma tendência que
              encanta os amantes do artesanal.
            </p>
          </div>
          <div>
            <h2 className="text-4xl p-3 md:text-6xl story-script-regular bg-[#e5e3d8] ">
              Você vai aprender
            </h2>
            <ul className="py-3 px-8 text-lg bg-[#e3d7bf] text-start dm-serif-text-regular list-disc">
              <li className="py-1">
                Como preparar e trabalhar com resina e pedras naturais passo a
                passo;
              </li>
              <li className="py-1">
                Técnicas para criar velas artesanais pilar com acabamento
                perfeito;
              </li>
              <li className="py-1">
                Ideias criativas de decoração com resina que valorizam qualquer
                ambiente;
              </li>
              <li className="py-1">
                Como fazer a charmosa vela gruta, com detalhes encantadores;
              </li>
              <li className="py-1">
                Dicas de moldagem, polimento e combinação de cores para um
                resultado profissional.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-4xl p-3 md:text-6xl story-script-regular bg-[#e5e3d8] ">
              Bônus Exclusivo
            </h2>
            <ul className="py-3 px-8 text-lg bg-[#e3d7bf] text-start dm-serif-text-regular list-disc">
              <li className="py-1">
                Aprenda a produzir um difusor de varetas artesanal, elegante e
                perfumado;
              </li>
              <li className="py-1">
                Crie uma saboneteira de pedra e resina, perfeita para presentear
                ou vender.
              </li>
              <li className="py-1">Aprenda a trabalhar com Folhas de Ouro</li>
            </ul>
          </div>
        </div>

        {reviewData && reviewData.length > 0 && (
          <div className="">
            <h2 className="text-4xl p-3 md:text-6xl story-script-regular bg-[#e5e3d8]">
              Depoimentos das Alunas
            </h2>
            <div className="flex flex-wrap gap-3 items-center justify-center mx-auto my-4">
              <ReviewSection />
            </div>
          </div>
        )}

        {/* Aproveite em qualquer dispositivo */}
        <AproveiteEmDisp />

        {/* Seção de Preço e Compra */}
        <div className=" w-full flex flex-col justify-center px-1 py-3 mt-8 mx-auto bg-[#e5e3d8]">
          <div className="flex flex-row justify-center items-center gap-3 mb-3">
            <div className="">
              {/* Imagem da vela*/}
              <Image
                className="drop-shadow-xl hidden lg:inline"
                src="/images/vela-pilar-metade.webp"
                alt="vela pilar fundo do mar"
                width={300}
                height={400}
                priority={false}
              />
            </div>
            <div>
              {" "}
              {/* Imagem da placa*/}
              <p className="p-2 dm-serif-text-regular text-3xl md:text-5xl">
                Por apenas{" "}
              </p>
              <Image
                className="mx-auto md:max-w-[400px] drop-shadow-xl"
                src="/images/placa-preco.webp"
                alt="preço curso pedras e resina"
                width={400}
                height={200}
                priority={false}
              />
              <p className="dm-serif-text-regular text-sm md:text-lg">
                pagamento 100% seguro com acesso imediato
              </p>
            </div>
            <div className="">
              {" "}
              {/* Imagem da vela*/}
              <Image
                className="drop-shadow-xl hidden lg:inline"
                src="/images/vela-santa-metade.webp"
                alt="vela gruta Santa"
                width={300}
                height={400}
                priority={false}
              />
            </div>
          </div>

          <BotaoPadrao
            hrefLink={
              "https://pay.hotmart.com/U102469342X?off=frwzmpjz&hotfeature=51&_hi=eyJjaWQiOiIxNzU5MjM2ODA5MTE5ODI1ODExMjE2MjU0MDU2NjAwIiwiYmlkIjoiMTc1OTIzNjgwOTExOTgyNTgxMTIxNjI1NDA1NjYwMCIsInNpZCI6IjRjZTNkOTllNGI1MjQ2OWJhN2UzYjk1Yzk2YWJiNWM0In0=.1761582950625"
            }
          />
        </div>

        <GarantiaIncont />

        {/* Seção Perguntas Frequentes */}
        <PerguntasFAQSection />
      </div>
    </>
  );
};

export default CursoPedrasResina;
