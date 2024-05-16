import { Raffle } from "@/common/interfaces/raffles.interface";
import { Card, CardBody } from "@nextui-org/card";
import currencyFormatter from "@/lib/currency-formatter";
import RaffleStatusBadge from "./raffle-status-badge";
import { censorUsername } from "@/common/helpers/censor-username";

export default function FinishedRaffleCard({ raffle }: { raffle: Raffle }) {
  return (
    <Card className="flex flex-row bg-gray-700 rounded-xl w-full min-h-[150px]">
      <CardBody className="max-w-[45%]">
        <img
          className="w-full rounded-xl h-full object-cover flex justify-center items-center"
          src={raffle.cover_url}
        />
      </CardBody>
      <CardBody className="py-4 px-2 flex items-start ms-4 space-y-4 flex-col">
        <p className="text-tiny uppercase font-bold">
          Prêmio: {raffle.prize_name}
        </p>
        <span className="text-tiny font-bold">
          {currencyFormatter.format(raffle.price_number)}/cota
        </span>
        <span className="font-bold"> 🎫{raffle.prize_number}</span>{" "}
        {raffle.winner_common_user && (
          <span className="text-tiny uppercase">
            👑 {censorUsername(raffle.winner_common_user.name)}
          </span>
        )}
        <div className="flex justify-center w-full">
          <RaffleStatusBadge status={raffle.status} />
        </div>
      </CardBody>
    </Card>
  );
}
