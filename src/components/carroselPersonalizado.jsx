import * as React from "react";
import { carroselData } from "@/data/carroselData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const CarroselPersonalizado = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [emblaApi, setEmblaApi] = React.useState(null);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="relative px-2 sm:px-6 md:px-10">
      {/* Container principal do carrossel */}
      {carroselData && carroselData.length > 0 && (
        <Carousel setApi={setEmblaApi}>
          <CarouselContent>
            {/* Slides  */}
            {carroselData.map((item) => (
              <CarouselItem key={item.id} className="relative">
                <Image
                  src={item.srcImg}
                  alt={item.textoDentro}
                  width={1200}
                  height={600}
                  className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg"
                />
                <h1 className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-bold text-white bg-black/40 text-center px-2 sm:px-4">
                  {item.textoDentro}
                </h1>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Setas laterais centralizadas */}
          <CarouselPrevious
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 rounded-full p-1 sm:p-2 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
            aria-label="Slide anterior"
          />
          <CarouselNext
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 rounded-full p-1 sm:p-2 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
            aria-label="Próximo slide"
          />

          {/* Indicadores de posição */}
          <div
            className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
            role="tablist"
            aria-label="Navegação do carrossel"
          >
            {carroselData.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 ${
                  currentSlide === index
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
                role="tab"
                aria-selected={currentSlide === index}
                onClick={() => emblaApi?.scrollTo(index)}
                tabIndex={0}
              />
            ))}
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default CarroselPersonalizado;
