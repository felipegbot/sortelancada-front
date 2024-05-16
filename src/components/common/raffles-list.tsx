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
    <div className="space-y-4 w-full md:max-w-[70%] lg:max-w-[40%] flex flex-col justify-center items-center">
      <div className="flex flex-row items-center w-full justify-between">
        <span className="text-[25px] md:text-[45px] scale-x-[-1]">🍀</span>
        <span className="font-bold text-xl md:text-4xl">Sua sorte chegou!</span>
        <span className="text-[25px] md:text-[45px]">🍀</span>
      </div>
      <span>Cotas em andamento e finalizadas</span>
      {openRaffles?.map((raffle) => (
        <OpenRaffleCard key={raffle.id} raffle={raffle} />
      ))}
      {finishedRaffles?.map((raffle) => (
        <FinishedRaffleCard key={raffle.id} raffle={raffle} />
      ))}
    </div>
  );
}
