import { LogOut, ShoppingBasket, User } from "lucide-react";
import { Link } from "react-router-dom";

function UserSetting({ isHidden }) {
  return (
    <div
      className={`${isHidden ? "hidden" : " "} absolute p-4 bg-cyan-300/50 -left-20 sm:top-12 top-24 w-screen sm:w-full justify-center items-center `}
    >
      <ul className="flex flex-col items-center justify-center space-y-3 ">
        <li className="flex items-center justify-center space-x-2 font-semibold ">
          <Link to={"/user"} className="flex w-full h-full space-x-2">
            <p>Account</p>
            <span>
              <User size={20} />
            </span>
          </Link>
        </li>
        <li className="flex items-center justify-center font-semibold">
          <Link to={"/orders"} className="flex w-full h-full space-x-2">
            <p>Orders</p>
            <span>
              <ShoppingBasket size={20} />
            </span>
          </Link>
        </li>
        <li className="flex items-center justify-center space-x-2 font-semibold">
          <Link to={"/orders"} className="flex w-full h-full space-x-2">
            <p>Logout</p>
            <span>
              <LogOut size={20} />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserSetting;