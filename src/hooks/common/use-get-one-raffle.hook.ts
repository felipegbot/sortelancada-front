import Api from "@/common/api";
import { Raffle } from "@/common/interfaces/raffles.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetOneRaffle = (id: string) => {
  const fetchRaffle = async (): Promise<Raffle> => {
    let url = `/raffles/${id}`;

    const { data } = await Api.get(url);
    return data.raffle as Raffle;
  };

  const { data } = useQuery({
    queryKey: ["oneRaffle", id],
    queryFn: fetchRaffle,
  });

  return {
    raffle: data,
  };
};
