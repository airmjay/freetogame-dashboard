interface Props {
  setSortBy: (item: string) => void;
  setCurrentSort: string;
}

export const SortBy = ({ setSortBy, setCurrentSort }: Props) => {
  const sort = [
    { name: "relevance" },
    { name: "popularity" },
    { name: "release-date" },
    { name: "alphabetical" },
  ];
  return (
    <div className="dropdown dropdown-start  dark:bg-gray-600 dark:text-slate-600 bg-white mt-2">
      <div tabIndex={0} role="button" className="btn m-1 bg-white">
        {setCurrentSort ? setCurrentSort : "Sort-by"} ⬇️
      </div>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        {sort.map((item, index) => (
          <li key={index}>
            <a onClick={() => setSortBy(item.name)}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
