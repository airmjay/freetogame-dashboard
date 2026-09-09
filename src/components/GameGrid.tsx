import { useDatas } from "../hooks/useDatas";
import { GamesCard } from "./GamesCard";
import { ShadowCard } from "./ShadowCard";
import { Message } from "./message";
import StoreData from "../state_management/DataStore";

import React from "react";
export interface Games {
  id: number;
  thumbnail: string;
  title: string;
  platform: string;
  genre: string;
  publisher: string;
}
export interface GameData {
  data: Games[];
  status: number;
}
export const GameGrid = () => {
  const { gameQuery, NextPage, PreviousPage, page } = StoreData();
  const { error, data, isLoading } = useDatas<GameData>("/games", gameQuery);
  if (error) return <Message message={error.message} />;

  const PAGE_SIZE = 12;
  if (data?.status == 201)
    return <Message message="No Game with following Information" />;
  const allGames = data?.data;
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginatedGames = allGames?.slice(startIndex, startIndex + PAGE_SIZE);
  let totalPages = 400;
  if (allGames) {
    totalPages = Math.ceil(allGames?.length / PAGE_SIZE);
  }

  return (
    <>
      <div className="p-1 grid grid-cols-1 md:grid-cols-2 mt-2 px-2 lg:grid-cols-3 gap-2">
        {isLoading && <ShadowCard />}
        {paginatedGames?.map((item, index) => (
          <React.Fragment key={index}>
            <GamesCard item={item} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex-col gap-4 ml-2 mt-2 items-center">
        <div className="text-slate-600">
          Total Pages: {totalPages} | Present Page: {page}
        </div>
        <div className="join grid grid-cols-2 w-80 mt-2 mb-5">
          <button
            disabled={page == 1}
            onClick={() => PreviousPage()}
            className="join-item btn btn-outline"
          >
            Previous page
          </button>
          <button
            onClick={() => NextPage()}
            className="join-item btn btn-outline"
            disabled={page == totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
