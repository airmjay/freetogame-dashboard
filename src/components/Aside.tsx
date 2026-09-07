import StoreData from "../state_management/DataStore";

export const Aside = () => {
  const { gameQuery, setGenres } = StoreData();
  const genres = gameQuery.genres;

  const Categories = [
    { name: "MMO", img: "https://www.freetogame.com/g/516/thumbnail.jpg" },
    { name: "MMORPG", img: "https://www.freetogame.com/g/590/thumbnail.jpg" },
    { name: "Shooter", img: "https://www.freetogame.com/g/508/thumbnail.jpg" },
    { name: "Strategy", img: "https://www.freetogame.com/g/340/thumbnail.jpg" },
    { name: "Moba", img: "https://www.freetogame.com/g/625/thumbnail.jpg" },
    { name: "card", img: "https://www.freetogame.com/g/613/thumbnail.jpg" },
    { name: "Racing", img: "https://www.freetogame.com/g/5/thumbnail.jpg" },
    { name: "sports", img: "https://www.freetogame.com/g/625/thumbnail.jpg" },
    { name: "social", img: "https://www.freetogame.com/g/523/thumbnail.jpg" },
    { name: "fighting", img: "https://www.freetogame.com/g/599/thumbnail.jpg" },
  ];
  return (
    <ul className="dark:text-white dark:bg-gray-800  list w-full bg-base-100 rounded-box shadow-md h-[93vh] overflow-x-hidden overflow-y-scroll">
      <li className="p-4 pb-2 text-xs dark:text-white dark:opacity-100 opacity-60 tracking-wide">
        List of Game Categories
      </li>
      {Categories.map((item, index) => (
        <button
          onClick={() => setGenres(item.name)}
          key={index}
          className={
            genres?.toLocaleLowerCase() == item.name.toLocaleLowerCase()
              ? "mb-1 flex space-x-1 items-center p-3 border-t-2 border-slate-300 hover:font-bold font-extrabold"
              : "mb-1 flex space-x-1 items-center p-3 border-t-2 border-slate-300 hover:font-bold"
          }
        >
          <img src={item.img} className="h-10 w-10" alt="" />
          <div className="cursor-pointer text-sm">{item.name}</div>
        </button>
      ))}
    </ul>
  );
};
