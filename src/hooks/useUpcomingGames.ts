import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient, { FetchedResponse } from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useUpcomingGames = () => {
  const today = new Date().toISOString().split("T")[0];
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  const nextYearStr = nextYear.toISOString().split("T")[0];

  return useQuery<FetchedResponse<Game>>({
    queryKey: ["upcoming-games"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          dates: `${today},${nextYearStr}`,
          ordering: "released",
          page_size: 6,
        },
      }),
    staleTime: ms("1h"),
  });
};

export default useUpcomingGames;
