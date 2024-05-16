import RafflesList from "@/components/common/raffles-list";
import { useGetAllRaffles } from "@/hooks/common/use-get-all-raffles.hook";

export default function Home() {
  const { raffles } = useGetAllRaffles({ page: 1, per_page: 3 });
  return (
    <div className="space-y-4 my-8 h-full w-full md:max-w-[70%] lg:max-w-[40%] flex flex-col justify-center items-center">
      <div className="flex flex-row items-center w-full justify-between">
        <span className="text-[25px] md:text-[45px] scale-x-[-1]">🍀</span>
        <span className="font-bold text-xl md:text-4xl">Sua sorte chegou!</span>
        <span className="text-[25px] md:text-[45px]">🍀</span>
      </div>
      <span>Cotas em andamento e finalizadas</span>
      {raffles && <RafflesList raffles={raffles} />}
    </div>
  );
}
