import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import type { gamesQuery } from "../App";


export const useDatas = <T>(endpoint: string, gamesQuery: gamesQuery) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const category =  gamesQuery.genres ?  gamesQuery.genres : undefined
  const platform =  gamesQuery.platform ? gamesQuery.platform : undefined
  const sort_by =  gamesQuery.sort? gamesQuery.sort : undefined

  
  useEffect(() => {
  const controller = new AbortController()
  setError("");
    setIsloading(true)
    apiClient
      .get(endpoint, {signal : controller.signal, params : {category,platform,'sort-by': sort_by }})
      .then((res) => {
        if(res.status == 200){
        const dataFetch = res.data;
        const limit = dataFetch.slice(0, 12);
        setData(limit);
        }else{
          setError(res.data.status_message)
        }
      setIsloading(false)
      })
      .catch((err) => { 
        if (err instanceof CanceledError) return; 
        setError(err.message)
        setIsloading(false)
    })
  return () => controller.abort()
  }, [gamesQuery]);

  return {error,data,isLoading}

}