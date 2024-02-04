import { Link, useLoaderData } from "react-router-dom";
import Item from "../components/Item";
import { getCart } from "../../Services/apiCart";
function Cart() {
  const carts = useLoaderData();
  console.log("THIS IS FROM CART PAGE: ", carts);
  return (
    <div className="my-10">
      {" "}
      <ul className="flex flex-col justify-around w-full gap-5 sm:flex-row gap-x-5">
        {carts[0].items.map((item) => (
          <Item key={item._id} id={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;

export const loader = () => {
  return getCart();
};
