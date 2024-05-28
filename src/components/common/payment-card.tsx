import { PaymentStatus } from "@/common/enum/payment-status.enum";
import { Payment } from "@/common/interfaces/payments.interface";
import currencyFormatter from "@/lib/currency-formatter";
import mmt from "@/lib/mmt";
import { Card } from "@nextui-org/card";
import { useRouter } from "next/router";
import { useState } from "react";
import PaymentStatusBadge from "./payment-status-badge";
import { Button } from "@nextui-org/button";

export default function PaymentCard({ payment }: { payment: Payment }) {
  const router = useRouter();
  const [seeMore, setSeeMore] = useState(false);
  const isExpired =
    mmt(payment.expires_at).isSameOrBefore(mmt()) &&
    payment.status !== PaymentStatus.SUCCESS;

  const handleClick = () => {
    if (isExpired) return;
    router.push(
      `/pagamentos/${payment.id}?redirect-on-success=${payment.status === PaymentStatus.PENDING}`,
    );
  };
  return (
    <div>
      <Card className="p-8 space-y-2">
        <div className="flex flex-col">
          <span>ID: {payment?.id}</span>
          <span>
            Status:{" "}
            <PaymentStatusBadge
              status={isExpired ? PaymentStatus.FAILED : payment.status}
            />
          </span>
          <span>Valor: {currencyFormatter.format(payment.value)}</span>
          {payment?.status === PaymentStatus.SUCCESS ? (
            <span className="text-green-600">
              Pago em: {mmt(payment.paid_at).format("DD-MM-YYYY HH:mm:ss")}
            </span>
          ) : (
            <span className="text-yellow-600 flex flex-col">
              <span>
                {" "}
                {isExpired ? "Expirou" : "Expira"} em:{" "}
                {mmt(payment.expires_at).format("DD-MM-YYYY HH:mm:ss")}
              </span>
              {isExpired && (
                <span>Será removido automaticamente em até 10min</span>
              )}
            </span>
          )}
          {payment.status === PaymentStatus.SUCCESS && (
            <span>
              Cotas geradas:{" "}
              <div>
                {seeMore ? (
                  <span>
                    {payment.users_raffle_number
                      .map((urn) => urn.number)

                      .join(", ")}
                  </span>
                ) : (
                  <span>
                    {payment.users_raffle_number
                      .map((urn) => urn.number)

                      .slice(0, 20)
                      .join(", ") + "..."}
                  </span>
                )}
              </div>
              <span
                className="hover:underline cursor-pointer text-blue-500 z-10"
                onClick={() => setSeeMore(!seeMore)}
              >
                {seeMore ? "ver menos" : "ver mais"}
              </span>
            </span>
          )}
        </div>
        {!isExpired && (
          <Button
            onClick={handleClick}
            className="w-min"
            color="success"
            variant="bordered"
          >
            Ver pagamento
          </Button>
        )}
      </Card>
    </div>
  );
}
