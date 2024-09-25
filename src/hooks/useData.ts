import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchedResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string)=>{
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true);
        apiClient
            .get<FetchedResponse<T>>(endpoint,{
                signal: controller.signal
            })
            .then(({ data }) => {
                setData(data.results);
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

    return { data, loading, error };
}

export default useData;