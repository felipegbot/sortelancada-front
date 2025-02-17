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
import RaffleStatusBadge from "./raffle-status-badge";

export default function OpenRaffleCard({
  raffle,
  onClick,
  canBuy = true,
  additionalInfo,
}: {
  raffle: Raffle;
  canBuy?: boolean;
  onClick?: (id: string) => void;
  additionalInfo?: React.ReactNode;
}) {
  return (
    <div className="bg-black/65 rounded-xl">
      <Card className="p-4 rounded-xl bg-background w-full" isBlurred>
        <CardBody className="overflow-visible py-2">
          <div
            onClick={() => canBuy && onClick?.(raffle.id)}
            className="flex items-center justify-center rounded-xl"
            style={{ maxHeight: 450, overflow: "hidden" }}
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
                {[raffle.cover_url, ...raffle.medias_url].map(
                  (image, index) => (
                    <CarouselItem
                      key={index}
                      className="h-[200px] flex items-center justify-center"
                    >
                      <ImageContainer src={image} />
                    </CarouselItem>
                  ),
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </CardBody>
        <CardHeader
          onClick={() => canBuy && onClick?.(raffle.id)}
          className="pb-4 cursor-pointer pt-2 px-4 flex-col items-start space-y-2"
        >
          <span className="font-bold text-large whitespace-pre-line">
            {raffle.name}
          </span>
          <p className="uppercase font-bold">Prêmio: {raffle.prize_name}</p>
          <div className="flex w-full items-center flex-row justify-between">
            <span className="font-bold">
              {currencyFormatter.format(raffle.price_number)}/cota
            </span>
            <RaffleStatusBadge status={raffle.status} />
          </div>
        </CardHeader>
        {canBuy && (
          <CardFooter
            onClick={() => onClick?.(raffle.id)}
            className="flex text-center justify-center bg-green-500 text-white px-2 py-1 rounded-full mt-4 cursor-pointer animate-pulse"
          >
            COMPRAR COTA
          </CardFooter>
        )}
        {additionalInfo}
      </Card>
    </div>
  );
}
