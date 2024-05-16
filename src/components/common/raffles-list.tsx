import { RaffleStatus } from "@/common/enum/raffle-status.enum";
import { Raffle } from "@/common/interfaces/raffles.interface";
import OpenRaffleCard from "./open-raffle-card";
import FinishedRaffleCard from "./finished-raffles-card";

export default function RafflesList({ raffles }: { raffles: Raffle[] }) {
  const openRaffles = raffles.filter(
    (raffle) => raffle.status === RaffleStatus.OPEN,
  );
  const finishedRaffles = raffles.filter(
    (raffle) => raffle.status === RaffleStatus.FINISHED,
  );

  return (
    <div className="space-y-4 h-full w-full ">
      {openRaffles?.map((raffle) => (
        <OpenRaffleCard key={raffle.id} raffle={raffle} />
      ))}
      {finishedRaffles?.map((raffle) => (
        <FinishedRaffleCard key={raffle.id} raffle={raffle} />
      ))}
    </div>
  );
}
