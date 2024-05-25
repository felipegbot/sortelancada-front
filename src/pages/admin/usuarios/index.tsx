import { CommonUser } from "@/common/interfaces/common-users.interface";
import { useGetPaginatedUsers } from "@/hooks/admin/get-common-users.hook";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import mmt from "@/lib/mmt";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Pagination } from "@nextui-org/pagination";
import { Pencil } from "lucide-react";
import UpdateCommonUser from "@/components/admin/update-common-user";

export default function Home() {
  const { commonUsers, page, setPage, total, setName, perPage, name, refetch } =
    useGetPaginatedUsers();

  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState<CommonUser>();

  const pages = Math.ceil(total / perPage);

  return (
    <div className="w-full h-min rounded-xl flex justify-center">
      <UpdateCommonUser
        isOpen={isEditUserModalOpen}
        closeModal={() => {
          setIsEditUserModalOpen(false);
        }}
        onUpdated={async () => {
          refetch();
        }}
        commonUser={selectedUser as CommonUser}
      />
      <Card
        isBlurred
        className="flex space-y-4 max-w-7xl p-8 justify-center items-center w-full"
      >
        <div className="w-full flex flex-row justify-between">
          <span className="text-2xl w-1/2 text-end">Usuários</span>
          <Input
            className="w-[300px]"
            value={name}
            label="Pesquisar por Nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Table
          className="max-w-3x w-full"
          bottomContent={
            pages > 0 ? (
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            ) : null
          }
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Nome</TableColumn>
            <TableColumn>Telefone</TableColumn>
            <TableColumn>Criado em </TableColumn>
            <TableColumn>Ações</TableColumn>
          </TableHeader>
          <TableBody>
            {commonUsers
              ? commonUsers.map((cUser) => (
                  <TableRow key={cUser.id}>
                    <TableCell>{cUser.id}</TableCell>
                    <TableCell>{cUser.name}</TableCell>
                    <TableCell>{cUser.phone}</TableCell>
                    <TableCell>
                      {mmt(cUser.created_at).format("DD-MM-YYYY HH:mm:ss")}
                    </TableCell>

                    <TableCell className="flex flex-row space-x-2">
                      <div
                        onClick={() => {
                          setSelectedUser(cUser);
                          setIsEditUserModalOpen(true);
                        }}
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
