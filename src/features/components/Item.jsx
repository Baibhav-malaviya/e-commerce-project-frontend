import { Link } from "react-router-dom";
import { formatCurrency, formatName } from "../../Helper/Formatter";
import DeleteFromCartButton from "../cart/DeleteFromCartButton";
import { useState } from "react";

function Item({ id, item }) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Link to={`/products/${id}`} className="flex w-full h-20 px-5 py-3 mt-10 sm:h-52 bg-cyan-500 ">
      <img className="w-1/4 h-full " src={item.productImage} alt="" />
      <div className="flex flex-col justify-around flex-grow h-full p-5 ">
        <div className="font-bold">{formatName(item.name)}</div>
        <p className="italic text-gray-300 font-xs">{item.description}</p>
        <div>
          {" "}
          <span>{formatCurrency(item.price)}</span>
          <span className="">
            {" "}
            <span className="mx-2 line-through ">{formatCurrency(item.price * 1.2)} </span>
            <span>
              {" "}
              <span className="font-semibold font-xl">Off</span> <span className="font-sm text-stone-300">(20%)</span>
            </span>
          </span>
        </div>
      </div>
      <div>
        <DeleteFromCartButton setIsLoading={setIsLoading} productId={id}>
          {isLoading ? "Removing..." : "Remove"}
        </DeleteFromCartButton>
      </div>
    </Link>
  );
}

export default Item;
