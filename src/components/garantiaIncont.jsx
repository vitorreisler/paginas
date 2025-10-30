import Image from "next/image";

const GarantiaIncont = () => {
  return (
    <div className="flex flex-wrap-reverse py-3 w-full bg-[#e3d7bf] justify-center lg:justify-between">
      <div className=" my-auto w-full lg:w-1/2 text-center px-3">
        <div className="flex flex-col py-2">
          <h2 className="py-3 text-3xl md:text-4xl story-script-regular">
            GARANTIA INCONTESTÁVEL DE 7 DIAS
          </h2>
          <hr />
          <p className="py-3 text-md  dm-serif-text-regular te">
            Milhares de pessoas comuns como você estão mudando suas realidades
            com o poder do digital. Isso significa que você também pode mudar a
            sua vida para melhor. Mas caso não goste do que encontrar, devolvo
            seu dinheiro de volta sem perguntas até 7 dias após a compra.
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full lg:w-1/2 text-center my-2">
        <Image
          className="drop-shadow-lg max-w-full h-auto lg:w-[65%]"
          src="/images/garantia-vendas.webp"
          alt="Garantia de 7 dias - Devolução do dinheiro garantida"
          width={800}
          height={600}
          priority={false}
        />
      </div>
    </div>
  );
};

export default GarantiaIncont;
