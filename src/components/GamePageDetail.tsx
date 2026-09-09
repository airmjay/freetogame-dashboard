import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { GamePageCard } from "./GamePageCard";
import StoreData from "../state_management/DataStore";
import { DarkMode } from "./DarkMode";

export const GamePageDetail = () => {
  const { show } = StoreData();
  const { id } = useParams();
  const { data } = useGame(id!);
  const getAll = data?.data;

  //   if (!data) throw new Error();
  return (
    <div className="dark:text-white dark:bg-gray-600">
      <div
        className={`bg-slate-500 flex items-center justify-center w-full h-dvh ${!show && "hidden"}`}
      >
        <div className="bg-slate-100 p-2">
          <DarkMode />
        </div>
      </div>
      <div className={`${show && "hidden"}`}>
        <div className="font-extrabold  dark:text-slate-200 text-3xl pl-4 pt-4 text-gray-900">
          {getAll?.title}
        </div>
        <div className="grid  md:grid-cols-2  gap-4">
          <GamePageCard style="col-span-1" title="Description">
            <p className="text-justify">{getAll?.description}</p>
          </GamePageCard>
          <GamePageCard style="col-span-1 h-['200px']" title="Thumbnail">
            <img
              src={getAll?.thumbnail}
              className="w-full h-full"
              alt={getAll?.title}
            />
          </GamePageCard>
        </div>
        <div>
          <GamePageCard style="pb-2" title="Screenshot">
            <div className="grid  md:grid-cols-2 gap-4">
              <div className="col-span-1 grid grid-cols-3 gap-3">
                {getAll?.screenshots.map((item) => (
                  <img
                    className="col-span-1"
                    src={item.image}
                    alt="game screenshot"
                    key={item.id}
                  />
                ))}
              </div>
              <div className="col-span-1 ml-2 grid grid-cols-2">
                <GamePageCard style="col-span-1" title="Genres">
                  {getAll?.genre}
                </GamePageCard>
                <GamePageCard style="col-span-1" title="Platform">
                  {getAll?.platform}
                </GamePageCard>
                <GamePageCard style="col-span-1" title="Developer">
                  {getAll?.developer}
                </GamePageCard>
                <GamePageCard style="col-span-1" title="Release Date">
                  {getAll?.release_date}
                </GamePageCard>
                <GamePageCard style="col-span-1" title="Publisher">
                  {getAll?.publisher}
                </GamePageCard>
                <GamePageCard style="col-span-1" title="Status">
                  {getAll?.status}
                </GamePageCard>
              </div>
            </div>
          </GamePageCard>
        </div>
      </div>
    </div>
  );
};
