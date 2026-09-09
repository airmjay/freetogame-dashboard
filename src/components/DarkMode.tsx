import { useState } from "react";

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const toggleTheme = () => {
    const nextDarkState = !isDark;
    setIsDark(nextDarkState);
    document.documentElement.classList.toggle("dark", nextDarkState);
    localStorage.theme = nextDarkState ? "dark" : "light";
  };
  return (
    <div className="flex items-center gap-2 bg-white text-slate-700 dark:bg-gray-500 dark:text-white">
      <input
        checked={isDark}
        onChange={() => toggleTheme()}
        type="checkbox"
        className="toggle toggle-primary"
      />
      <span className="text-nowrap">Dark Mode</span>
    </div>
  );
};
