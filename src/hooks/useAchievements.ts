import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import Achievement from "../entities/Achievement";

const useAchievements = (gameId: number) => {
  const apiClient = new ApiClient<Achievement>(`/games/${gameId}/achievements`);

  return useQuery({
    queryKey: ["achievements", gameId],
    queryFn: () => apiClient.getAll({}),
    enabled: !!gameId,
  });
};

export default useAchievements;
