import { generateRaffleDataTableColumn } from "@/components/admin/raffle-column";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { useGetRafflesHook } from "@/hooks/get-raffles.hook";

export default function Home() {
  const { raffles, total, page, perPage } = useGetRafflesHook();
  const columns = generateRaffleDataTableColumn();
  return (
    <div className="w-full mt-8 flex flex-col space-y-4 items-center align-middle">
      <span className="text-xl">Suas rifas</span>
      <div className="w-1/2">
        <DataTable
          columns={columns}
          data={raffles ?? []}
          paginationEnabled
          itemsCount={total}
          pagination={{
            pageIndex: page - 1,
            pageSize: perPage,
          }}
          // onPaginationChange={(pagination) => {
          //   if (pagination.pageSize !== perPage) {
          //     setPerPage(pagination.pageSize);
          //   } else {
          //     setPage(pagination.pageIndex + 1);
          //   }
          // }}
        />
      </div>
    </div>
  );
}
