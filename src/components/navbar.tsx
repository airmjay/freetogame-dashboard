import Logo from "../assets/react.svg";
import { Link } from "react-router-dom";
import { DarkMode } from "./DarkMode";
import StoreData from "../state_management/DataStore";
import { useEffect } from "react";

function Navbar() {
  const { show, setShow } = StoreData();
  useEffect(() => {}, [show]);
  return (
    <div className="navbar p-2 bg-base-100 shadow-sm m-0 flex justify-between dark:text-white dark:bg-gray-800">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex gap-2  items-center">
          <img src={Logo} alt="GameHub Logo" className="w-10 h-10 mr-1" />
          <span className="font-bold text-lg hidden md:block">GameHub</span>
        </Link>
        <div className="md:hidden">
          <button className="btn text-black" onClick={() => setShow()}>
            {!show ? (
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
            ) : (
              "X"
            )}
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <DarkMode />
      </div>
    </div>
  );
}

export default Navbar;
