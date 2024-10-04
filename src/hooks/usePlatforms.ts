import { useQuery } from "@tanstack/react-query";
import { FetchedResponse } from "../services/api-client";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () => 
    useQuery({
        queryKey: ["platform"],
        queryFn: () => apiClient.get<FetchedResponse<Platform>>("/platforms/lists/parents").then(res => res.data),
        staleTime: 1 * 60 * 60 * 1000,
        initialData: {count: platforms.length, results: platforms}
    })

export default usePlatform;
