import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
// import Hamburger from "./Hamburger";
import { useState } from "react";
import Logo from "./Logo";
import UserProfile from "../users/UserProfile";
import UserSetting from "../users/UserSetting";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleIsHidden = (e) => {
    setIsHidden(!isHidden);
  };
  return (
    <div className="relative flex flex-col items-center justify-between w-full px-3 py-2 space-y-4 sm:flex-row bg-cyan-500 sm:space-y-0">
      <div className="relative flex items-center justify-between w-full space-x-16 sm:w-auto ">
        <div className="flex items-center space-x-4">
          {" "}
          <UserProfile onClick={(e) => handleIsHidden(e)} />
          <Logo />
        </div>
        <Navbar />
        <UserSetting isHidden={isHidden} />
      </div>
      <SearchBar />
      {/* <Hamburger onclick={(e) => handleClick(e)} className={`${openHamburger ? "shadow-md" : ""} md:hidden`} /> */}
    </div>
  );
};

export default Header;
