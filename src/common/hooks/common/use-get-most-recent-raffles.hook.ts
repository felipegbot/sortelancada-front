import { useQuery } from "@tanstack/react-query";
import Api from "../api";
import { Raffle } from "../interfaces/raffles.interface";

export const useGetMostRecentRaffles = () => {
  const fetchMostRecentRaffles = async (): Promise<Raffle[]> => {
    let url = `/raffles/list`;
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
