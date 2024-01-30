import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={` bg-cyan-500 `}>
      <ul className="flex items-center space-x-2 sm:space-x-4 ">
        <Link to={"/wishlist"} className="px-2 py-px text-sm rounded hover:cursor-pointer hover:text-white">
          <Heart size={32} strokeWidth={1} />
        </Link>
        <Link to={"/cart"} className="px-2 py-px text-sm rounded hover:cursor-pointer hover:text-white">
          <ShoppingCart size={36} strokeWidth={1} />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
