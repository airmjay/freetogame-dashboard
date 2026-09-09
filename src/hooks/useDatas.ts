
import type { GameQuery } from "../state_management/DataStore";
import QueryFetch from "./reactQueryFetch";

export const useDatas = <T>(endpoint: string, gamesQuery: GameQuery) => {
  const queryFetch = new QueryFetch<T>(endpoint)
  const category =  gamesQuery.genres ?  gamesQuery.genres : undefined
  const platform =  gamesQuery.platform ? gamesQuery.platform : undefined
  const sort_by =  gamesQuery.sort? gamesQuery.sort : undefined
  const {data,error,isLoading} = queryFetch.getDatas([{...gamesQuery}],{category,platform,'sort-by': sort_by})
  
  return {error,data,isLoading}

}