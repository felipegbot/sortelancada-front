import translateRaffleStatus from "@/common/helpers/translate-raffle-status";
import { Raffle } from "@/common/interfaces/raffles.interface";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import currencyFormatter from "@/lib/currency-formatter";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ImageContainer } from "./image-container";

export default function FinishedRaffleCard({ raffle }: { raffle: Raffle }) {
  return (
    <Card className="p-4 bg-gray-700 rounded-xl w-full shadow-2xl min-h-[500px]">
      <CardBody className="overflow-visible py-2">
        <div
          className="flex items-center justify-center rounded-xl"
          style={{ maxHeight: 450 }}
        >
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent className="items-center">
              {[raffle.cover_url, ...raffle.medias_url].map((image, index) => (
                <CarouselItem
                  key={index}
                  className="h-[200px] flex items-center justify-center"
                >
                  <ImageContainer src={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </CardBody>
      <CardHeader className="pb-4 pt-2 px-4 flex-col items-start space-y-2">
        <span className="font-bold text-large whitespace-pre-line">
          {raffle.name}
        </span>
        <p className="text-tiny uppercase font-bold">
          Prêmio: {raffle.prize_name}
        </p>
        <div className="flex w-full items-center flex-row justify-between">
          <span className="text-tiny font-bold">
            {currencyFormatter.format(raffle.price_number)}/cota
          </span>
          <span className="bg-green-800 text-tiny text-white px-2 py-1 uppercase rounded-full">
            {translateRaffleStatus(raffle.status)}
          </span>
        </div>
      </CardHeader>
      <CardFooter className="flex text-center justify-center bg-green-500 text-white px-2 py-1 rounded-full mt-4 cursor-pointer animate-pulse">
        CLIQUE AQUI PARA COMPRAR SUA COTA
      </CardFooter>
    </Card>
  );
}
