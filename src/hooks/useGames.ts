import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchedResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import ApiClient from "../services/api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchedResponse<Game>>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam}) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                },
            }),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1: undefined
    });

export default useGames;
