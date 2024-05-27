import { Card } from "@nextui-org/card";
import { useParams, useSearchParams } from "next/navigation";
import { useGetOnePayment } from "@/hooks/get-payment.hook";
import { Skeleton } from "@nextui-org/skeleton";
import currencyFormatter from "@/lib/currency-formatter";
import { PaymentStatus } from "@/common/enum/payment-status.enum";
import mmt from "@/lib/mmt";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useTimer } from "react-timer-hook";
import { Payment } from "@/common/interfaces/payments.interface";
import { useEffect } from "react";
import PaymentStatusBadge from "@/components/common/payment-status-badge";
import { toastError } from "@/lib/toastError";
import { useRouter } from "next/router";

export default function PaymentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const {
    payment = {} as Payment,
    isLoading,
    refetch,
  } = useGetOnePayment(params?.id ? (params.id as string) : "");

  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: payment?.expires_at,
    onExpire: () => {
      if (payment.status === PaymentStatus.PENDING)
        toastError(new Error("Pagamento expirado!"));
    },
  });

  useEffect(() => {
    restart(mmt(payment?.expires_at).toDate());
    const shouldRedirect = searchParams.get("redirect-on-success");
    if (payment.status === PaymentStatus.SUCCESS && shouldRedirect)
      router.push("/minhas-cotas");
  }, [payment]);

  const fifteen_sec = 15000;

  useEffect(() => {
    const interval = setInterval(async () => {
      console.log("refetching");
      await refetch();
    }, fifteen_sec);

    return () => clearInterval(interval);
  }, []);
  if (!params?.id) return null;
  return (
    <Skeleton isLoaded={!isLoading} className="rounded-xl">
      <div className="bg-black/65 rounded-xl w-full h-full">
        {payment && (
          <Card isBlurred className="p-8 space-y-4">
            {payment.status === PaymentStatus.PENDING && (
              <div className="text-center bg-red-700/40 w-fit self-center p-3 rounded-xl">
                <span>Este pagamento irá expirar em </span>
                <div>
                  <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
                  {` minuto${minutes != 1 ? "s" : ""} e `}
                  <span>{seconds < 10 ? `0${seconds}` : seconds}</span>{" "}
                  {`segundo${seconds != 1 ? "s" : ""}`}
                </div>
              </div>
            )}
            <span className="md:text-2xl">
              Aqui estão os dados do seu pagamento!
            </span>
            <div className="flex flex-col text-tiny md:text-medium">
              <span className="font-bold uppercase">detalhes</span>
              <span>ID: {payment?.id}</span>
              <span>
                Status: <PaymentStatusBadge status={payment.status} />{" "}
              </span>
              <span>Valor: {currencyFormatter.format(payment.value)}</span>
              {payment?.status === PaymentStatus.SUCCESS && (
                <span className="text-green-500">
                  Pago em: {mmt(payment.paid_at).format("DD-MM-YYYY HH:mm:ss")}
                </span>
              )}
            </div>
            <div className="flex rounded-xl justify-center w-full">
              <img
                className="rounded-xl md:max-h-96 md:max-w-96"
                src={`data:image/gif;base64,${payment.pix_qr_code}`}
              />
            </div>
            <span className="text-center">
              Se preferir, copie o código abaixo
            </span>
            <div className="flex flex-row space-x-4">
              <Input value={payment.pix_code} disabled id="pix_code" />
              <CopyToClipboard text={payment.pix_code}>
                <Button
                  color="success"
                  className="w-min"
                  onClick={() => {
                    toast.success("Copiado com sucesso!");
                  }}
                >
                  Copiar
                </Button>
              </CopyToClipboard>
            </div>
          </Card>
        )}
      </div>
    </Skeleton>
  );
}
