import BuyGrid from "@/components/buy-grid";
import OpenRaffleCard from "@/components/common/open-raffle-card";
import { useGetOneRaffle } from "@/hooks/common/use-get-one-raffle.hook";
import { useParams } from "next/navigation";
import { Skeleton } from "@nextui-org/skeleton";
import { RaffleStatus } from "@/common/enum/raffle-status.enum";

export default function RifaPage() {
  const params = useParams();
  const { raffle, isLoading } = useGetOneRaffle(
    params?.id ? (params.id as string) : "",
  );
  return (
    <Skeleton isLoaded={!isLoading} className="rounded-xl min-h-screen">
      <div className="flex flex-col space-y-4">
        {raffle && <OpenRaffleCard raffle={raffle} />}
        {raffle?.status === RaffleStatus.OPEN ? (
          <BuyGrid raffle={raffle} />
        ) : null}
      </div>
    </Skeleton>
  );
}
