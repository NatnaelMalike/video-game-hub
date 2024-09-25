import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}
interface FetchedGenres {
    count: number;
    results: Genre[]
}

const useGenre = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true);
        apiClient
            .get<FetchedGenres>("/games",{
                signal: controller.signal
            })
            .then(({ data }) => {
                setGenres(data.results);
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

    return { genres, loading, error };
}

export default useGenre;