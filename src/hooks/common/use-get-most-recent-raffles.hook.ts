import Api from "@/common/api";
import { Raffle } from "@/common/interfaces/raffles.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetMostRecentRaffles = () => {
  const fetchMostRecentRaffles = async (): Promise<Raffle[]> => {
    let url = `/raffles/list?page=1&per_page=3`;
    const { data } = await Api.get(url);
    return data.raffles as Raffle[];
  };

  const { data } = useQuery({
    queryKey: ["allRaffles"],
    queryFn: fetchMostRecentRaffles,
  });

  return {
    raffles: data,
  };
};
