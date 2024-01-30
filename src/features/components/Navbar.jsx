import { Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className={` bg-cyan-500 `}>
      <ul className="flex items-center space-x-2 sm:space-x-4 ">
        <li className="px-2 py-px text-sm rounded hover:cursor-pointer hover:text-white">
          <Heart size={32} strokeWidth={1} />
        </li>
        <li className="px-2 py-px text-sm rounded hover:cursor-pointer hover:text-white">
          <ShoppingCart size={36} strokeWidth={1} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
