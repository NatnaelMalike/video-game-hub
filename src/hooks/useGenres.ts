import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchedResponse } from "../services/api-client";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: () =>
            apiClient
                .get<FetchedResponse<Genre>>("/genres")
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genres.length, results: genres },
    });

export default useGenre;
