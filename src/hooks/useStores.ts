import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../services/api-client";
import Store from "../entities/Store";

const apiClient = new ApiClient<Store>("/stores");

const useStores = () =>
  useQuery({
    queryKey: ["stores"],
    queryFn: () => apiClient.getAll({}),
    staleTime: ms("24h"),
  });

export default useStores;
