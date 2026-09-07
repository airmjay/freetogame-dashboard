import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

class QueryFetch<T> {
   endpoint:string; 

   constructor(endpoint : string){
    this.endpoint = endpoint
   }

   getData = (key: []|[{}],params?: {}) => {
    const data = useQuery<T[],Error,T>({
        queryKey : [...key],
        queryFn : () => apiClient.get(this.endpoint, {params : params}),
        staleTime: 24 * 60 * 60 * 1000,
    })
    return  data
   }

}

export default QueryFetch