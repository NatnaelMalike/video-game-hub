import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/api-client";

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
        staleTime: 1 * 60 * 60 * 1000,
        initialData: platforms
    })

export default usePlatforms;
