import axios from "axios";
export interface FetchedResponse<T> {
    count: number;
    results: T[];
}
export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})