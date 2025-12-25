import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient, { FetchedResponse } from "../services/api-client";
import Game from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

// Get games from the last 30 days, ordered by popularity
const useTrendingGames = () => {
  const today = new Date();
  const lastMonth = new Date(today.setDate(today.getDate() - 30));
  const dateStr = lastMonth.toISOString().split("T")[0];

  return useQuery<FetchedResponse<Game>>({
    queryKey: ["trending-games"],
    queryFn: () =>
      apiClient.getAll({
        params: {
          dates: `${dateStr},${new Date().toISOString().split("T")[0]}`,
          ordering: "-added",
          page_size: 6,
        },
      }),
    staleTime: ms("1h"),
  });
};

export default useTrendingGames;
