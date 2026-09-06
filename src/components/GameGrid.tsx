import type { gamesQuery } from "../App";
import { useDatas } from "../hooks/useDatas";
import { GameCard } from "./GameCard";
import { ShadowCard } from "./ShadowCard";
import { Message } from "./message";
export interface Game {
  id: number;
  thumbnail: string;
  title: string;
  platform: string;
  genre: string;
  publisher: string;
}
interface Prop {
  gamesQuery: gamesQuery;
}

export const GameGrid = ({ gamesQuery }: Prop) => {
  const { error, data, isLoading } = useDatas<Game>("/games", gamesQuery);
  if (error) return <Message message={error} />;

  return (
    <div className="p-1 grid grid-cols-1 md:grid-cols-2 mt-2 px-2 lg:grid-cols-3 gap-2">
      {isLoading && <ShadowCard />}
      {data.map((item) => (
        <div className="dark:text-white" key={item.id}>
          <GameCard item={item} />
        </div>
      ))}
    </div>
  );
};
