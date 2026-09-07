import type { Game } from "./GameGrid";

interface props {
  item: Game;
}
export const GameCard = ({ item }: props) => {
  return (
    <div className="dark:bg-gray-600 dark:text-white dark:border dark:border-slate-100 card bg-base-100 w-auto shadow-sm hover:scale-101 cursor-pointer">
      <figure>
        <img className="w-full" src={item.thumbnail} alt={item.title} />
      </figure>
      <div className="card-body">
        <div className="text-sm dark:text-white card-title flex flex-wrap">
          {item.title}
          <div className="text-sm badge badge-secondary">{item.genre}</div>
        </div>
        <p>Publisher {item.publisher}</p>
      </div>
    </div>
  );
};
