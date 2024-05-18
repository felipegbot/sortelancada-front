import BuyGrid from "@/components/buy-grid";
import OpenRaffleCard from "@/components/common/open-raffle-card";
import { useGetOneRaffle } from "@/hooks/common/use-get-one-raffle.hook";
import { useParams } from "next/navigation";

export default function RifaPage() {
  const params = useParams();
  const { raffle } = useGetOneRaffle(params?.id ? (params.id as string) : "");
  return (
    <div className="flex flex-col space-y-4">
      {raffle && <OpenRaffleCard raffle={raffle} />}
      <BuyGrid />
    </div>
  );
}
