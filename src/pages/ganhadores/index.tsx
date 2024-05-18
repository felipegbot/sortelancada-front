import { RaffleStatus } from "@/common/enum/raffle-status.enum";
import RafflesList from "@/components/common/raffles-list";
import { useGetAllRaffles } from "@/hooks/common/use-get-all-raffles.hook";

export default function Home() {
  const { raffles } = useGetAllRaffles({ status: RaffleStatus.FINISHED });
  return (
    <div className="space-y-4 my-8 h-full w-full md:max-w-[70%] lg:max-w-[40%] flex flex-col justify-center items-center">
      {raffles && <RafflesList raffles={new Array(10).fill(raffles[0])} />}
    </div>
  );
}
