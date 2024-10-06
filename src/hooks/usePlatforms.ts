import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";
import ms from "ms";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')

const usePlatforms = () => 
    useQuery({
        queryKey: ["platform"],
        queryFn:  apiClient.getAll,
        staleTime: ms('24h'),
        initialData: platforms
    })

export default usePlatforms;
