import Head from "next/head";
import Image from "next/image";
import AproveiteEmDisp from "@/components/aproveiteEmDisp";
import BotaoPadrao from "@/components/ui/botaoPadrao";
import ComponenteTextoFoto from "@/components/ui/componenteTextoFoto";
import GarantiaIncont from "@/components/ui/garantiaIncont";
import PerguntasFAQSection from "@/components/perguntasFAQ";
import ReviewSection from "@/components/reviewSection";
import GaleriaVideosFotos from "@/components/ui/galeriaVideosFotos";
import Script from "next/script";

const CursoPinturaSabonete = () => {
  return (
    <>
      <Head>
{/*<!-- Google tag (gtag.js) -->*/}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-GGTE2Y6HCR"
  strategy="afterInteractive"
/>

<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-GGTE2Y6HCR', {
        page_path: window.location.pathname,
      });
    `,
  }}
/>

        <title>Curso de Pintura de Frutas — By Silvia Monteiro</title>
        <meta
          name="description"
          content="Curso Saboaria - pintura de frutas — aprenda técnicas práticas para criar peças únicas e vender online."
        />
        <meta
          property="og:title"
          content="Curso Saboaria - pintura de frutas — By Silvia Monteiro"
        />
        <meta
          property="og:description"
          content="Curso Saboaria - pintura de frutas — aprenda técnicas práticas e passo a passo."
        />
        <meta
          property="og:image"
          content="https://cursossilvia.vercel.app/images/capaFrutas.webp"
        />
        <link
          rel="canonical"
          href="https://cursossilvia.vercel.app/rotas/cursos/cursoPinturaSabonete"
        />
      </Head>


      <div className="flex flex-col my-3">
        {/* Seção de foto e compra */}
        <section className="text-center p-2 bg-[#e3d7bf] rounded-xl drop-shadow-lg my-6">
          <ComponenteTextoFoto
            nomeCurso="Curso Saboaria - Pintura de Frutas — Domine a Arte de Criar Peças Únicas e Lucrativas"
            breveDescricao="Transforme suas ideias em peças que encantam e alcance o sucesso no mundo do artesanato com a saboaria."
            linkPagPagamento="https://pay.hotmart.com/I104872786V?off=m24kecjk"
            srcImg="/images/capa-pintura-frutas.webp"
            altImg="Curso Saboaria - pintura de frutas — By Silvia Monteiro"
          />
        </section>
        <GaleriaVideosFotos
          categoriaParaMostrar={"curso-sabonete-pintura-frutas"}
          cursoParaMostrar={"curso-sabonete-pintura-frutas"}
        />
        {/* Seção de apresentação */}
        <section >
          <h1 className="text-4xl text-center p-3 md:text-6xl story-script-regular bg-[#e5e3d8]">
            Sobre o conteúdo
          </h1>
          <p className="p-3 text-lg bg-[#e3d7bf] text-start dm-serif-text-regular">
            Você ama o mundo do artesanato e sonha em transformar suas ideias em
            peças que encantam?
            <br />
            <br />
            No Curso Saboaria - pintura de frutas — você vai aprender tudo o que
            precisa para criar peças únicas, sofisticadas e cheias de
            personalidade, mesmo que seja iniciante.
            <br />
            <br />
            Com aulas práticas e linguagem simples, você vai dominar a criação
            de sabonetes únicos que encantam a todos com pintura realista e
            cheiros que encantam.
          </p>
        </section>

        {/* Seção: O que você vai aprender */}
        <section>
          <h1 className="text-4xl text-center p-3 md:text-6xl story-script-regular bg-[#e5e3d8]">
            Você vai aprender
          </h1>
          <ul className="py-3 px-8 text-lg bg-[#e3d7bf] text-start dm-serif-text-regular list-disc">
            <li className="py-1">
              Como preparar e trabalhar com base glicerinada e pigmentos para
              criar sabonetes artesanais passo a passo;
            </li>
            <li className="py-1">
              Técnicas de pintura para um acabamento realista e encantador;
            </li>
            <li className="py-1">
              Ideias criativas de kits para aumentar suas vendas e encantar seus
              clientes.
            </li>
            <li className="py-1">
              Dicas de embalagem e acabamento profissional para destacar seus
              produtos no mercado.
            </li>
          </ul>
        </section>

        {/* Bônus */}
        <section>
          <h2 className="text-4xl text-center p-3 md:text-6xl story-script-regular bg-[#e5e3d8]">
            Bônus Exclusivo
          </h2>
          <ul className="py-3 px-8 text-lg bg-[#e3d7bf] text-start dm-serif-text-regular list-disc">
            <li className="py-1">
              Aprenda a fazer esferas de banho artesanais, perfeitas para
              relaxar e presentear.
            </li>
            <li className="py-1">Etiquetas de segurança</li>
            <li className="py-1">Ebook com o passo a passo</li>
          </ul>
        </section>

        {/* Depoimentos */}
        <ReviewSection curso="cursoPinturaSabonete" />

        {/* Aproveite em qualquer dispositivo */}
        <AproveiteEmDisp />

        

        {/* Seção de Preço e Compra */}
        <div className="w-full flex flex-col justify-center items-center px-1 py-3 my-8 bg-[#e5e3d8] drop-shadow-2xl rounded-2xl">
          <div className="flex flex-row justify-between items-center gap-3 mb-3 ">
            <Image
              className="drop-shadow-xl hidden lg:inline opacity-60  "
              src="/images/silviaMelancia.webp"
              alt="Silvia com sabonete de melancia"
              width={300}
              height={400}
              loading="lazy"
            />

            <div className="text-center">
              <p className="p-2 dm-serif-text-regular text-3xl md:text-5xl">
                Por apenas
              </p>
              <Image
                className="mx-auto md:max-w-[300px] drop-shadow-xl"
                src="/images/precoSaboaria.webp"
                alt="preço curso pedras e resina"
                width={400}
                height={200}
              />
              <p className="dm-serif-text-regular text-sm md:text-lg">
                pagamento 100% seguro com acesso imediato
                (verifique na caixa de SPAM)
              </p>
            </div>

            <Image
              className="drop-shadow-xl hidden lg:inline opacity-60"
              src="/images/silviaMelancia2.webp"
              alt="Silvia com sabonete de melancia"
              width={300}
              height={400}
            />
          </div>

          <BotaoPadrao hrefLink="https://pay.hotmart.com/I104872786V?off=m24kecjk" />
        </div>

        {/* Garantia e FAQ */}
        <GarantiaIncont />
        <PerguntasFAQSection />
      </div>
    </>
  );
};

export default CursoPinturaSabonete;
