import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient, { FetchedResponse } from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useTopRatedGames = () => {
  return useQuery<FetchedResponse<Game>>({
    queryKey: ["top-rated-games"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          ordering: "-metacritic",
          metacritic: "85,100",
          page_size: 10,
        },
      }),
    staleTime: ms("24h"),
  });
};

export default useTopRatedGames;
