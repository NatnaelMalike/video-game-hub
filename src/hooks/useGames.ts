import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import ApiClient, { FetchedResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = () =>{
    const gameQuery = useGameQueryStore(s=>s.gameQuery)

    return useInfiniteQuery<FetchedResponse<Game>>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam}) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                },
            }),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1: undefined,
            staleTime: ms('24h')
        });
    }
    

export default useGames;
