import { RaffleStatus } from "@/common/enum/raffle-status.enum";
import RafflesList from "@/components/common/raffles-list";
import { useGetAllRaffles } from "@/hooks/common/use-get-all-raffles.hook";

export default function Home() {
  const { raffles } = useGetAllRaffles({ status: RaffleStatus.FINISHED });
  return (
    <div className="space-y-4 my-8 h-full w-full md:max-w-[70%] lg:max-w-[40%] flex flex-col justify-center items-center">
      <div className="flex flex-row items-center w-full justify-between">
        <span className="text-[25px] md:text-[45px] scale-x-[-1]">👑</span>
        <span className="font-bold text-xl md:text-4xl">
          Veja os ganhadores!
        </span>
        <span className="text-[25px] md:text-[45px]">👑</span>
      </div>
      {raffles && <RafflesList raffles={raffles} />}
    </div>
  );
}
