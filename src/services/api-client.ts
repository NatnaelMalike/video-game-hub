import axios, { AxiosRequestConfig } from "axios";
export interface FetchedResponse<T> {
    count: number;
    next : string | null;
    results: T[];
}
const axoisInstance =  axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: import.meta.env.VITE_API_KEY
    }
})
class ApiClient<T>{
    constructor(public endpoint:string){}
    getAll= (config: AxiosRequestConfig)=>{
        return axoisInstance.get<FetchedResponse<T>>(this.endpoint, config).then(res => res.data)
    }
}
export default ApiClient