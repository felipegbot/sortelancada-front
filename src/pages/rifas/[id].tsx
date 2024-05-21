import BuyGrid from "@/components/buy-grid";
import OpenRaffleCard from "@/components/common/open-raffle-card";
import { useGetOneRaffle } from "@/hooks/common/use-get-one-raffle.hook";
import { useParams } from "next/navigation";
import { Skeleton } from "@nextui-org/skeleton";
import { RaffleStatus } from "@/common/enum/raffle-status.enum";
import WinnersContainer from "@/components/winners-container";
import RaffleDescription from "@/components/raffle-description";
import { CircularProgress } from "@nextui-org/progress";
import { useState } from "react";
import { Card } from "@nextui-org/card";
import { useAppSelector } from "@/lib/redux/store";
import { toastError } from "@/lib/toastError";
import Api from "@/common/api";
import { toast } from "react-toastify";
import CreateCommonUserModal from "@/components/common/create-common-user-modal";
import { useRouter } from "next/router";

export default function RafflePage() {
  const [creatingPayment, setCreatingPayment] = useState(false);
  const { name, phone } = useAppSelector((state) => state.commonUserReducer);
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { raffle, isLoading } = useGetOneRaffle(
    params?.id ? (params.id as string) : "",
  );

  const handleBuy = async (amount: number) => {
    try {
      setCreatingPayment(true);
      if (!name || !phone) {
        setIsModalOpen(true);
        throw new Error("É necessário estar autenticado para comprar Cotas!");
      }

      const { data } = await Api.post("/payment/generate-payment", {
        phone,
        amount,
        raffle_id: raffle?.id,
      });
      toast.success("Pagamento criado com sucesso!");
      router.push(`/pagamentos/${data.payment.id}`);
    } catch (error) {
      toastError(error);
    } finally {
      setCreatingPayment(false);
    }
  };

  return (
    <Skeleton isLoaded={!isLoading} className="rounded-xl">
      <CreateCommonUserModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />

      <div className="flex flex-col space-y-4">
        {raffle && (
          <OpenRaffleCard
            raffle={raffle}
            canBuy={raffle.status === RaffleStatus.OPEN}
          />
        )}
        {raffle?.status === RaffleStatus.OPEN &&
          (creatingPayment ? (
            <div className="bg-black/65 rounded-xl">
              <Card isBlurred className="p-8 items-center space-y-4">
                <CircularProgress
                  classNames={{ svg: "w-24 h-24" }}
                  label="Criando pagamento..."
                  color="success"
                />
              </Card>
            </div>
          ) : (
            <BuyGrid
              raffle={raffle}
              onBuyCallback={(qtd: number) => handleBuy(qtd)}
            />
          ))}
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
