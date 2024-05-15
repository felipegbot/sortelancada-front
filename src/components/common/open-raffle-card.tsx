import translateRaffleStatus from "@/common/helpers/translate-raffle-status";
import { Raffle } from "@/common/interfaces/raffles.interface";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import currencyFormatter from "@/lib/currency-formatter";
export default function OpenRaffleCard({ raffle }: { raffle: Raffle }) {
  return (
    <div>
      <Card className="p-4 bg-gray-700 rounded-xl w-full">
        <CardBody className="overflow-visible py-2">
          <div
            className="flex items-center justify-center"
            style={{ maxHeight: 450, overflow: "hidden" }}
          >
            <img
              className="w-full h-max rounded-xl"
              style={{ objectFit: "cover" }}
              src={raffle.medias_url ? raffle.medias_url[0] : ""}
            />
          </div>
        </CardBody>
        <CardHeader className="pb-4 pt-2 px-4 flex-col items-start">
          <span className="font-bold text-large">{raffle.prize_name}</span>
          <p className="text-tiny uppercase font-bold">{raffle.name}</p>
          <div className="flex w-full items-center flex-row justify-between">
            <span className="text-tiny font-bold">
              {currencyFormatter.format(raffle.price_number)}/cota
            </span>
            <span className="bg-green-800 text-tiny text-white p-1 uppercase rounded-full">
              {translateRaffleStatus(raffle.status)}
            </span>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
