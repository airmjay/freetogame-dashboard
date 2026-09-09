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
    <div className="hidden md:flex gap-2">
      <input
        checked={isDark}
        onChange={() => toggleTheme()}
        type="checkbox"
        className="toggle toggle-primary"
      />
      <span>Dark Mode</span>
    </div>
  );
};
