import CarroselPersonalizado from "@/components/ui/carroselPersonalizado";
import CardHome from "@/components/card-home";


export default function Home() {

  return (
    <>
      <title>By Silvia Monteiro — Comséticos Artesanais, Velas e Cursos Artesanais</title>
      <main>
        <h1 className={`text-3xl md:text-5xl font-bold mb-6 text-center story-script-regular `} >
          Cosméticos Artesanais, Velas Artesanais, Peças Exclusivas <br /> | By Silvia Monteiro
        </h1>

        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-4 dm-serif-text-regular  ">
            Descubra a arte dos cosméticos artesanais, artesanato com resina e velas artesanais.
            Oferecemos cursos online completos e peças exclusivas feitas à mão
            com técnicas profissionais e materiais de alta qualidade.
          </p>
        </div>

        <section aria-label="Destaques" className="mb-12">
          <CarroselPersonalizado />
        </section>

        <section aria-label="Portfólio" className="mt-8">
          <h2 className="text-center py-4 story-script-regular text-4xl md:text-5xl bg-[#e3d7bf] rounded-t-2xl mb-6">
            Trabalhos Artesanais Exclusivos
          </h2>
          <p className="text-center text-shadow-sm text-lg mb-8 max-w-3xl mx-auto px-4 dm-serif-text-regular">
            Cada peça é cuidadosamente criada com atenção aos detalhes e
            técnicas artesanais aperfeiçoadas. Confira nossa seleção de velas
            decorativas, peças em resina e itens personalizados.
          </p>

          <div className="grid place-items-center md:grid-cols-3 gap-5 md:gap-3 py-10 bg-[#e3d7bf] drop-shadow-lg rounded-xl">
            <CardHome
              srcImg={"/images/video-vela-gruta.mov"}
              titulo={"Vela Gruta Nossa Senhora"}
              descricao={
                "Vela Gruta Nossa Senhora - Peça artesanal em resina com detalhes realistas e acabamento impecável."
              }
              tipo={"video"}
            />
            <CardHome
              srcImg={"/images/video-safari.mp4"}
              titulo={"Sabonetes Temáticos"}
              descricao={
                "Sabonetes Temáticos - Sabonetes artesanais com design exclusivo, perfeitos para lembrancinhas e presentes."
              }
              tipo={"video"}
            />
            <CardHome
              srcImg={"/images/video-vela-desmoldada.mov"}
              titulo={"Vela Desmoldada"}
              descricao={
                "Vela Desmoldada - Vela artesanal com design exclusivo, feita à mão com cera de alta qualidade."
              }
              tipo={"video"}
            />
          </div>
        </section>
      </main>
    </>
  );
}
