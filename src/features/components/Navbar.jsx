const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-2">
        <li className="px-2 py-px border-[1px] border-black rounded hover:cursor-pointer hover:text-white text-sm">
          TEST1
        </li>
        <li className="px-2 py-px border-[1px] border-black rounded hover:cursor-pointer hover:text-white text-sm">
          TEST2
        </li>
        <li className="px-2 py-px border-[1px] border-black rounded hover:cursor-pointer hover:text-white text-sm">
          Wishlist
        </li>
        <li className="px-2 py-px border-[1px] border-black rounded hover:cursor-pointer hover:text-white text-sm">
          Cart
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
