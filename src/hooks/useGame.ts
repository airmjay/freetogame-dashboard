
import QueryFetch from "./reactQueryFetch"
interface Requirements{
   "os": string;
    "processor": string;
    "memory": string;
    "graphics": string;
    "storage": string
}
interface ScreenShot {
    id : number;
    image : string
}
interface Game {
  id: number;
  thumbnail: string;
  title: string;
  platform: string;
  genre: string;
  publisher: string;
  description : string;
  status : string;
  game_url : string;
  developer : string;
  freetogame_profile_url : string;
  minimum_system_requirements : Requirements[];
  screenshots: ScreenShot[];
  release_date : string
}
export interface GameObject{
    status : number;
    data: Game
}
export const useGame = (id : number | string) => {
  const fetch =  new QueryFetch<GameObject>('/game');;
  return fetch.getData('game',id);
}
