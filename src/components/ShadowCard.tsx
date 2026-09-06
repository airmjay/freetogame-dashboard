export const ShadowCard = () => {
  const count10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {count10.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="hidden">{item}</div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </>
  );
};
