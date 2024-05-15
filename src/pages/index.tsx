import { useGetMostRecentRaffles } from "@/common/hooks/use-get-most-recent-raffles.hook";
import RafflesList from "@/components/common/raffles-list";

export default function Home() {
  const { raffles } = useGetMostRecentRaffles();
  return (
    <div className="w-full flex justify-center">
      {raffles && <RafflesList raffles={raffles} />}
    </div>
  );
}
