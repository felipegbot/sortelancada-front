import { RaffleStatus } from "@/common/enum/raffle-status.enum";
import { Payment } from "@/common/interfaces/payments.interface";
import { useGetOneRaffle } from "@/hooks/common/use-get-one-raffle.hook";
import { Skeleton } from "@nextui-org/skeleton";
import FinishedRaffleCard from "./finished-raffles-card";
import OpenRaffleCard from "./open-raffle-card";
import PaymentCard from "./payment-card";

export default function MyTicketsCard({
  raffle_id,
  payments,
}: {
  raffle_id: string;
  payments: Payment[];
}) {
  const { raffle, isLoading } = useGetOneRaffle(raffle_id);
  return (
    <Skeleton isLoaded={!isLoading} className="rounded-xl w-full">
      <div className="space-y-4">
        {raffle?.status === RaffleStatus.FINISHED ? (
          <FinishedRaffleCard raffle={raffle} />
        ) : raffle?.status === RaffleStatus.OPEN ? (
          <OpenRaffleCard raffle={raffle} canBuy={false} />
        ) : null}
        {payments?.map((payment) => (
          <PaymentCard key={payment.id} payment={payment} />
        ))}
      </div>
    </Skeleton>
  );
}
