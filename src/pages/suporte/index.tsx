import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Card } from "@nextui-org/card";
import { CircleHelp, MoveRight } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="bg-black/65 w-full rounded-xl">
      <Card isBlurred className="p-8 items-center space-y-4">
        <div className="py-2 w-full space-x-1 flex justify-center rounded-xl text-white bg-green-800">
          <CircleHelp />
          <span>Perguntas frequentes</span>
        </div>
        <Accordion variant="splitted" selectionMode="multiple">
          <AccordionItem
            key="1"
            aria-label="Como acessar minhas compras?"
            title="Como acessar minhas compras?"
            startContent={<MoveRight />}
          >
            Fazendo login no site e abrindo o Menu Principal, você consegue
            consultar suas últimas compras no menu "MINHAS COTAS".
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Como envio o comprovante?ccordion 2"
            title="Como envio o comprovante?"
            startContent={<MoveRight />}
          >
            Caso você tenha feito o pagamento via Pix QR Code ou copiando o
            código, não é necessário enviar o comprovante, aguardando até 5
            minutos após o pagamento, o sistema irá dar baixa automaticamente,
            para mais dúvidas entre em contato conosco{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => window.open("https://bit.ly/3tVdllq", "_blank")}
            >
              clicando aqui.
            </span>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  );
}
