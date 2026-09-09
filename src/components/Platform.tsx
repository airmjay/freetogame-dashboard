import StoreData from "../state_management/DataStore";

export const Platform = () => {
  const { gameQuery, setPlatform } = StoreData();
  const platform = ["windows", "browser"];

  return (
    <div className="dropdown dropdown-start dark:text-slate-700 dark:bg-gray-600 bg-white mt-2">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 dark:bg-gray-600 dark:text-white"
      >
        {gameQuery.platform ? gameQuery.platform : "Platforms"} ⬇️
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {platform.map((item, index) => (
          <li key={index}>
            <a onClick={() => setPlatform(item)}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
