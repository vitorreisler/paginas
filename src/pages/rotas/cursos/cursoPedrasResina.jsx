const CursoPedrasResina = () => {
  return (
    <div className="flex flex-col text-center p-2 bg-[#e3d7bf] rounded-xl drop-shadow-lg">
      <div className="flex flex-wrap-reverse w-full bg-[#e3d7bf] justify-center lg:justify-between">
        <div className=" my-auto w-full lg:w-1/2 text-center px-3">
          <div className="flex flex-col py-2">
            <h2 className="py-3 text-3xl md:text-5xl story-script-regular">
              Curso de Artesanato com Pedras e Resina: Domine a Arte de Criar
              Peças Únicas e Lucrativas
            </h2>
            <hr />
            <h3 className="py-3 text-xl md:text-xl dm-serif-text-regular">
              Transforme suas ideias em peças que encantam e busque sucesso no
              mundo do artesanato com pedras e resina.
            </h3>
            <a
              href="https://pay.hotmart.com/U102469342X?off=frwzmpjz&hotfeature=51&_hi=eyJjaWQiOiIxNzU5MjM2ODA5MTE5ODI1ODExMjE2MjU0MDU2NjAwIiwiYmlkIjoiMTc1OTIzNjgwOTExOTgyNTgxMTIxNjI1NDA1NjYwMCIsInNpZCI6IjRjZTNkOTllNGI1MjQ2OWJhN2UzYjk1Yzk2YWJiNWM0In0=.1761582950625"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto py-2 rounded-lg shadow-md text-amber-50 bg-[#9a5833] duration-500 hover:scale-105 hover:bg-[#e3d7bf] hover:text-gray-800 w-3/4 md:w-1/2"
            >
              Comprar Agora
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-1/2 text-center my-2">
          <img
            className="drop-shadow-lg max-w-full h-auto lg:w-[75%]"
            src="/images/cursoPedras2.png"
            alt="Curso de Artesanato com Pedras e Resina"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex flex-col my-3">
        <div>
          <h2 className="text-4xl p-3 md:text-6xl story-script-regular bg-[#e5e3d8]">
            Sobre o conteúdo
          </h2>
          <p className="p-3 text-lg bg-[#e3d7bf] text-start dm-serif-text-regular">
            Você ama o mundo do artesanato e sonha em transformar suas ideias em
            peças que encantam?
            <br />
            <br />
            No Curso de Artesanato com Pedras e Resina, você vai aprender tudo o
            que precisa para criar peças únicas, sofisticadas e cheias de
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

      {/* Aproveite em qualquer dispositivo */}

      <div className=" w-full flex flex-col py-3 mt-8 mx-auto bg-[#e5e3d8]">
        <img
          className="max-w-[200px] mx-auto mb-3 drop-shadow-lg"
          src="/images/devices.webp"
          alt="Aproveite o conteúdo em qualquer dispositivo."
        />
        <p className="dm-serif-text-regular text-lg">
          Aproveite o conteúdo em qualquer dispositivo.
        </p>
      </div>

      {/* Seção de Preço e Compra */}

      <div className=" w-full flex flex-col justify-center px-1 py-3 mt-8 mx-auto bg-[#e5e3d8]">
        <div className="flex flex-row justify-center items-center gap-3 mb-3">
          <div className="">
            {/* Imagem da vela*/}
            <img
              className="drop-shadow-xl hidden lg:inline"
              src="/images/velaPilarMetade.png"
              alt=""
              loading="lazy"
            />
          </div>
          <div>
            {" "}
            {/* Imagem da placa*/}
            <p className="p-2 dm-serif-text-regular text-3xl md:text-5xl">
              Por apenas{" "}
            </p>
            <img
              className="mx-auto md:max-w-[400px] drop-shadow-xl"
              src="/images/placaPreco.png"
              alt=""
              loading="lazy"
            />
            <p className="dm-serif-text-regular text-sm md:text-lg">
              pagamento 100% seguro com acesso imediato
            </p>
          </div>
          <div className="">
            {" "}
            {/* Imagem da vela*/}
            <img
              className="drop-shadow-xl hidden lg:inline"
              src="/images/velaSantaMetade.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <a
          href="https://pay.hotmart.com/U102469342X?off=frwzmpjz&hotfeature=51&_hi=eyJjaWQiOiIxNzU5MjM2ODA5MTE5ODI1ODExMjE2MjU0MDU2NjAwIiwiYmlkIjoiMTc1OTIzNjgwOTExOTgyNTgxMTIxNjI1NDA1NjYwMCIsInNpZCI6IjRjZTNkOTllNGI1MjQ2OWJhN2UzYjk1Yzk2YWJiNWM0In0=.1761582950625"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto py-2 border border-black rounded-lg shadow-md text-amber-50 bg-[#9a5833] duration-500 hover:scale-105 hover:bg-[#e3d7bf] hover:text-gray-800 w-3/4 md:w-1/2"
        >
          Comprar Agora
        </a>
      </div>

      <div className="flex flex-wrap-reverse py-3 w-full bg-[#e3d7bf] justify-center lg:justify-between">
        <div className=" my-auto w-full lg:w-1/2 text-center px-3">
          <div className="flex flex-col py-2">
            <h2 className="py-3 text-3xl md:text-4xl story-script-regular">
              GARANTIA INCONTESTÁVEL DE 7 DIAS
            </h2>
            <hr />
            <p className="py-3 text-md  dm-serif-text-regular te">
              Milhares de pessoas comuns como você estão mudando suas realidades
              com o poder do digital.
              Isso significa que você também pode mudar
              a sua vida para melhor. Mas caso não goste do que encontrar,
              devolvo seu dinheiro de volta sem perguntas até 7 dias após a
              compra.
            </p>
         
          </div>
        </div>

        <div className="flex justify-center w-full lg:w-1/2 text-center my-2">
          <img
            className="drop-shadow-lg max-w-full h-auto lg:w-[65%]"
            src="/images/garantiaVendas.png"
            alt="Curso de Artesanato com Pedras e Resina"
            loading="lazy"
          />
        </div>
      </div>

      {/* Seção Perguntas Frequentes */}
    </div>
  );
};

export default CursoPedrasResina;
