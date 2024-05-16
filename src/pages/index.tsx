import { useGetMostRecentRaffles } from "@/hooks/common/use-get-most-recent-raffles.hook";
import RafflesList from "@/components/common/raffles-list";

export default function Home() {
  const { raffles } = useGetMostRecentRaffles();
  return (
    <div className="w-full h-full flex justify-center h-screen items-start mt-8">
      {raffles && <RafflesList raffles={raffles} />}
    </div>
  );
}
