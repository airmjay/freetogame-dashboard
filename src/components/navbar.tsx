import { useState } from "react";
import Logo from "../assets/react.svg";

function Navbar() {
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
    <div className="navbar p-2 bg-base-100 shadow-sm m-0 justify-between dark:text-white dark:bg-gray-800">
      <div className="flex justify-center items-center space-x-1">
        <img src={Logo} className="w-10 h-10" />
        <div className="text-bold">GameHub</div>
      </div>
      <div className="flex gap-2">
        <span>Dark Mode</span>
        <input
          checked={isDark}
          onChange={() => toggleTheme()}
          type="checkbox"
          className="toggle toggle-primary"
        />
      </div>
    </div>
  );
}

export default Navbar;
