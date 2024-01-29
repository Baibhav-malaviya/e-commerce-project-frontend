import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Header = () => {
  const [openHamburger, setOpenHamburger] = useState(false);
  const handleClick = () => {
    setOpenHamburger(!openHamburger);
  };
  return (
    <div className="flex items-center justify-between w-full px-3 py-2 bg-cyan-500 sm:flex-wrap">
      <div className="text-3xl font-bold">LOGO</div>
      <SearchBar />
      {openHamburger && <Navbar />}
      <Hamburger onclick={(e) => handleClick(e)} className={`${openHamburger ? "shadow-md" : ""}`} />
    </div>
  );
};

export default Header;
