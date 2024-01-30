import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  // const [openHamburger, setOpenHamburger] = useState(true);
  // const handleClick = () => {
  //   setOpenHamburger(!openHamburger);
  // };
  return (
    <div className="relative flex flex-col items-center justify-between w-full px-3 py-2 space-y-4 sm:flex-row bg-cyan-500 sm:space-y-0">
      <div className="flex items-center justify-between w-full space-x-16 sm:w-auto ring-2 ring-red-600">
        <Logo />
        <Navbar />
      </div>
      <SearchBar />
      {/* <Hamburger onclick={(e) => handleClick(e)} className={`${openHamburger ? "shadow-md" : ""} md:hidden`} /> */}
    </div>
  );
};

export default Header;
