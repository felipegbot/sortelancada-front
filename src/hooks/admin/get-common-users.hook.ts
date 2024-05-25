import Api from "@/common/api";
import { CommonUser } from "@/common/interfaces/common-users.interface";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useGetPaginatedUsers = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const fetchUsers = async () => {
    const url = `/common-user/list?page=${page}&per_page=${perPage}&name=${name}`;
    const { data } = await Api.get(url);
    setTotal(data.count);
    return data.commonUsers;
  };

  const { data, isLoading, refetch } = useQuery<CommonUser[]>({
    queryKey: ["getAllUsers", page, perPage, name],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    if (page === 1) {
      refetch();
    } else {
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    commonUsers: data,
    isLoading,
    refetch,
    setName,
    name,
    page,
    setPage,
    perPage,
    setPerPage,
    total,
  };
};
