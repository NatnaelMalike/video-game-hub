import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} []
}

interface FetchedGames {
    count: number;
    results: Game[];
}
export default function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true);
        apiClient
            .get<FetchedGames>("/games",{
                signal: controller.signal
            })
            .then(({ data }) => {
                setGames(data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return
                setError(err.message);
                setLoading(false);
            });

            return ()=>{
                controller.abort()
            }
    }, []);

    return { games, loading, error };
}
