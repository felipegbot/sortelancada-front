import BuyGrid from "@/components/buy-grid";
import OpenRaffleCard from "@/components/common/open-raffle-card";
import { useGetOneRaffle } from "@/hooks/common/use-get-one-raffle.hook";
import { useParams } from "next/navigation";
import { Skeleton } from "@nextui-org/skeleton";
import { RaffleStatus } from "@/common/enum/raffle-status.enum";
import WinnersContainer from "@/components/winners-container";
import RaffleDescription from "@/components/raffle-description";

export default function RifaPage() {
  const params = useParams();
  const { raffle, isLoading } = useGetOneRaffle(
    params?.id ? (params.id as string) : "",
  );

  return (
    <Skeleton isLoaded={!isLoading} className="rounded-xl">
      <div className="flex flex-col space-y-4">
        {raffle && (
          <OpenRaffleCard
            raffle={raffle}
            canBuy={raffle.status === RaffleStatus.OPEN}
          />
        )}
        {raffle?.status === RaffleStatus.OPEN && <BuyGrid raffle={raffle} />}
        {raffle?.status === RaffleStatus.FINISHED && (
          <WinnersContainer raffle={raffle} />
        )}
      </div>
      <div className="mt-4">
        {raffle && <RaffleDescription raffle={raffle} />}
      </div>
    </Skeleton>
  );
}
