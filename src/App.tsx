import "./App.css";
import { Aside } from "./components/Aside";
import { GameGrid } from "./components/GameGrid";
import Navbar from "./components/navbar";
import { Platform } from "./components/Platform";
import { SortBy } from "./components/SortBy";
import { Capitalize } from "./hooks/capitalize";
import StoreData from "./state_management/DataStore";

function App() {
  const { gameQuery } = StoreData();
  const currentGenres = gameQuery.genres ? Capitalize(gameQuery.genres) : "";
  const currentPlatform = gameQuery.platform
    ? Capitalize(gameQuery.platform)
    : "";
  return (
    <>
      <div className="grid grid-cols-10 relative ">
        <div className="col-span-10 md:col-span-10 bg-slate-200 dark:bg-gray-800">
          <Navbar />
        </div>
        <div
          className="hidden md:block md:col-span-3 lg:col-span-2 
          pl-0 pt-0   dark:bg-gray-700"
        >
          <Aside />
        </div>
        <div className="col-span-10 md:col-span-7 lg:col-span-8 relative dark:text-white dark:bg-gray-600">
          <div className="font-bold text-2xl mt-5 ml-2">
            {currentPlatform} {currentGenres} Games
          </div>
          <Platform />
          <SortBy />
          <GameGrid />
        </div>
      </div>
    </>
  );
}

export default App;
