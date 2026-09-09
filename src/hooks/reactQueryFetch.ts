import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

class QueryFetch<T> {
   endpoint:string; 

   constructor(endpoint : string){
    this.endpoint = endpoint
   }

   getDatas = (key: []|[{}],params?: {}) => {
    const data = useQuery<T[],Error,T>({
        queryKey : [...key],
        queryFn : () => apiClient.get(this.endpoint, {params : params}),
        staleTime: 24 * 60 * 60 * 1000,
    })
    return  data
   }
   getData = (key : string, param: number | string) => {
    const data = useQuery<T[],Error,T>({
        queryKey : [key,param],
        queryFn : () => apiClient.get(this.endpoint, {params : { id : param}}),
        staleTime: 24 * 60 * 60 * 1000,
    })
    return data
   }

}

export default QueryFetch