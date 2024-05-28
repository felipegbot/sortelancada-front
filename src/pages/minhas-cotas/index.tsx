import { groupPaymentsByRaffleId } from "@/common/helpers/group-payments-by-raffle-id.helper";
import CreateCommonUserModal from "@/components/common/create-common-user-modal";
import MyTicketsCard from "@/components/common/my-tickets-card";
import { useGetAllPaymentsByPhone } from "@/hooks/common/use-get-all-payments-by-phone.hook";
import { useAppSelector } from "@/lib/redux/store";
import { Card } from "@nextui-org/card";
import { CircularProgress } from "@nextui-org/progress";
import { useEffect, useState } from "react";

export default function MyTicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const commonUser = useAppSelector((state) => state.commonUserReducer);
  useEffect(() => {
    if (!commonUser) setIsModalOpen(true);
  }, [commonUser]);

  const { payments, isLoading } = useGetAllPaymentsByPhone(
    commonUser?.phone ?? "",
  );
  const groupedPayments = groupPaymentsByRaffleId(payments);
  return isLoading ? (
    <Card isBlurred className="flex items-center p-8">
      <CircularProgress
        classNames={{
          svg: "w-36 h-36 drop-shadow-md",
          indicator: "stroke-white",
          value: "text-3xl font-semibold text-white",
        }}
      />
      <span className="text-white">Aguarde enquanto buscamos suas compras</span>
    </Card>
  ) : (
    <div className="w-full space-y-4">
      <CreateCommonUserModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
      {groupedPayments?.map((group, index) => (
        <MyTicketsCard
          key={index}
          payments={group.payments}
          raffle_id={group.raffle_id}
        />
      ))}
    </div>
  );
}
