import { groupPaymentsByRaffleId } from "@/common/helpers/group-payments-by-raffle-id.helper";
import CreateCommonUserModal from "@/components/common/create-common-user-modal";
import MyTicketsCard from "@/components/common/my-tickets-card";
import { useGetAllPaymentsByPhone } from "@/hooks/common/use-get-all-payments-by-phone.hook";
import { useAppSelector } from "@/lib/redux/store";
import { Skeleton } from "@nextui-org/skeleton";
import { useEffect, useState } from "react";

export default function MyTicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { phone } = useAppSelector((state) => state.commonUserReducer);
  useEffect(() => {
    if (!phone) setIsModalOpen(true);
  }, [phone]);

  const { payments, isLoading } = useGetAllPaymentsByPhone(phone);
  const groupedPayments = groupPaymentsByRaffleId(payments);
  return (
    <Skeleton isLoaded={!isLoading} className="rounded-xl">
      <div className="w-full">
        <CreateCommonUserModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
        {groupedPayments?.map((group) => (
          <MyTicketsCard
            payments={group.payments}
            raffle_id={group.raffle_id}
          />
        ))}
      </div>
    </Skeleton>
  );
}
