import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpeMenu = () => {
    setIsMenuOpen(true);
    console.log("hello");
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`px-7 py-4 lg:px-10 w-full  lg:py-5 flex items-center justify-between   overflow-hidden z-40`}
    >
      {isMenuOpen && (
        <div className="absolute w-full h-[100vh] top-0 left-0 right-0 bottom-0 overlayBg"></div>
      )}

      <div className="logo">
        <img src={logo} className="w-32 z-10 xs2:w-40" alt="" />
      </div>
      <nav className="sm:hidden">
        <div>
          <FontAwesomeIcon
            className="text-2xl text-[#00B4D8] xs2:text-3xl"
            icon={faBars}
            onClick={handleOpeMenu}
          />
        </div>
        {isMenuOpen && (
          <ul className="w-[60%] h-[100vh] transition-all duration-300 bg-[#F8F8F8] rounded-tl-[40px] absolute right-0 top-0 text-right py-5 flex flex-col gap-y-5 xs:gap-7">
            <li className="text-[#00B4D8] text-3xl px-2">
              <FontAwesomeIcon icon={faXmark} onClick={handleCloseMenu} />
            </li>
            <li className="lg:hidden w-[60%] mx-auto">
              <img className="w-full" src={logo} alt="" />
            </li>
            <li className="mt-5">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "navLink lg:active bg-[#00B4D8] xs:text-lg xs2:text-xl  w-[80%] text-center py-1 rounded-l-md text-white text-sm lg:text-lg font-bold capitalize"
                    : "navLink text-black font-bold  xs:text-lg xs2:text-xl w-[80%] text-center"
                }
              >
                home
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to={"map"}
                className={({ isActive }) =>
                  isActive
                    ? "navLink lg:active bg-[#00B4D8] xs:text-lg xs2:text-xl  w-[80%] text-center py-1 rounded-l-md text-white text-sm lg:text-lg font-bold capitalize"
                    : "navLink text-black font-bold  xs:text-lg xs2:text-xl w-[80%] text-center"
                }
              >
                map
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-x-4 md:gap-x-7">
          <li className="">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "navLink active  text-black text-lg  font-bold capitalize"
                  : "navLink text-[#C9C4C4] text-lg capitalize"
              }
            >
              home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"map"}
              className={({ isActive }) =>
                isActive
                  ? "navLink active  text-black text-lg  font-bold capitalize"
                  : "navLink text-[#C9C4C4] text-lg capitalize"
              }
            >
              map
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="hidden sm:opacity-0 sm:block">
        <button>login</button>
      </div>
    </header>
  );
};

export default Header;
