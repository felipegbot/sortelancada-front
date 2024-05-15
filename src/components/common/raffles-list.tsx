import { RaffleStatus } from "@/common/enum/raffle-status.enum";
import { Raffle } from "@/common/interfaces/raffles.interface";
import OpenRaffleCard from "./open-raffle-card";

export default function RafflesList({ raffles }: { raffles: Raffle[] }) {
  const openRaffles = raffles.filter(
    (raffle) => raffle.status === RaffleStatus.OPEN,
  );
  const finishedRaffles = raffles.filter(
    (raffle) => raffle.status === RaffleStatus.FINISHED,
  );

  return (
    <div>
      {openRaffles?.map((raffle) => (
        <OpenRaffleCard key={raffle.id} raffle={raffle} />
      ))}
      {finishedRaffles.length > 0 &&
        finishedRaffles.map((raffle) => <div>FINISHED RAFFLE {raffle.id}</div>)}
    </div>
  );
}
