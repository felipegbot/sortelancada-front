import RafflesList from "@/components/common/raffles-list";
import { useGetAllRaffles } from "@/hooks/common/use-get-all-raffles.hook";

export default function Home() {
  const { raffles } = useGetAllRaffles({ page: 1, per_page: 3 });
  return (
    <div className="space-y-4">
      {raffles && <RafflesList raffles={new Array(3).fill(raffles[0])} />}
      {raffles && <RafflesList raffles={new Array(3).fill(raffles[1])} />}
    </div>
  );
}
