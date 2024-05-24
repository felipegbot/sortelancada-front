import { useGetRafflesHook } from "@/hooks/admin/get-raffles.hook";
import mmt from "@/lib/mmt";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Pencil } from "lucide-react";
import { useRouter } from "next/router";
export function Home() {
  const { raffles } = useGetRafflesHook();
  const router = useRouter();

  return (
    <div className="w-full h-min rounded-xl flex justify-center">
      <Card
        isBlurred
        className="flex space-y-4 max-w-7xl p-8 justify-center items-center w-full"
      >
        <div className="w-full flex flex-row justify-between">
          <span className="text-2xl w-1/2 text-end">Suas rifas</span>
          <Button
            onClick={() => router.push("/admin/rifas/criar")}
            className="bg-green-800"
          >
            Criar nova rifa
          </Button>
        </div>
        <Table className="max-w-3x w-full">
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Prêmio</TableColumn>
            <TableColumn>Criada em</TableColumn>
            <TableColumn>Última atualização em</TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableHeader>
          <TableBody>
            {raffles
              ? raffles.map((raffle) => (
                  <TableRow key={raffle.id}>
                    <TableCell>{raffle.id}</TableCell>
                    <TableCell>{raffle.prize_name}</TableCell>
                    <TableCell>
                      {mmt(raffle.created_at).format("DD-MM-YYYY HH:mm:ss")}
                    </TableCell>
                    <TableCell>
                      {mmt(raffle.updated_at).format("DD-MM-YYYY HH:mm:ss")}
                    </TableCell>
                    <TableCell>
                      <div
                        onClick={() =>
                          router.push(`/admin/rifas/editar/${raffle.id}`)
                        }
                        className="cursor-pointer transition-all hover:text-green-500"
                      >
                        <Pencil />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              : []}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
export default Home;
