import { create } from "zustand";

export interface GameQuery{
    genres?: string;
  platform?: string;
  sort?: string;
}

export interface DataQuery {
  gameQuery: GameQuery;
  page : number;
  NextPage : () => void;
  PreviousPage : () => void;
  setGenres: (genres?: string) => void;
  setPlatform: (platform?: string) => void;
  setSortBy: (sort?: string) => void;
}

const StoreData = create<DataQuery>(set => ({  
   gameQuery : {},
   page : 1,
   setGenres : (genres) => set((store) => ({ gameQuery : {...store.gameQuery, genres} })),
   setPlatform : (platform) => set(store => ({gameQuery : {...store.gameQuery, platform}})),
   setSortBy : (sort)=> set(store => ({gameQuery: {...store.gameQuery, sort} })),
   NextPage : () => set(store => ({ page : store.page + 1 })),
   PreviousPage : () => set(store => ({ page : store.page - 1 }))
}))

export default StoreData