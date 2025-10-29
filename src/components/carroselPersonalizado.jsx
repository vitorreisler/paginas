import { carroselData } from "@/data/carroselData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarroselPersonalizado = () => {
  return (
    <div className="relative px-2 sm:px-6 md:px-10">
      {/* Container principal do carrossel */}
      {carroselData && carroselData.length > 0 && (
        <Carousel>
          <CarouselContent>
            {/* Slides  */}
            {carroselData.map(({index, srcImg, textoDentro}) => {
              return (
                <CarouselItem key={index} className="relative">
                  <img
                  key={srcImg}
                    src={srcImg}
                    alt={textoDentro}
                    className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-lg"
                  />
                  <h1 key={textoDentro} className="absolute inset-0 flex items-center justify-center text-lg sm:text-2xl md:text-3xl font-bold text-white bg-black/40 text-center px-2 sm:px-4">
                    {textoDentro}
                  </h1>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {/* Setas laterais centralizadas */}
          <CarouselPrevious className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 rounded-full p-1 sm:p-2 transition duration-200 shadow-md" />
          <CarouselNext className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-gray-800 rounded-full p-1 sm:p-2 transition duration-200 shadow-md" />
        </Carousel>
      )}
    </div>
  );
};

export default CarroselPersonalizado;
