import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import Developer from "../entities/Developer";

const apiClient = new ApiClient<Developer>("/developers");

const useDevelopers = (page: number = 1, pageSize: number = 10) =>
  useQuery({
    queryKey: ["developers", page, pageSize],
    queryFn: () =>
      apiClient.getAll({
        params: {
          page,
          page_size: pageSize,
        },
      }),
    staleTime: ms("24h"),
  });

export default useDevelopers;
