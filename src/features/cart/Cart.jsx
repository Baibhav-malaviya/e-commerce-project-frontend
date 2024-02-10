import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Item from "../components/Item";
import { getCart } from "../../Services/apiCart";

function Cart() {
  const carts = useLoaderData();
  console.log("THIS IS FROM CART PAGE: ", carts);

  return (
    <ul className="flex flex-col justify-around w-full gap-y-5 ">
      {carts[0].items.map((item) => (
        <Item key={item._id} id={item._id} item={item} />
      ))}
    </ul>
  );
}

export default Cart;

export const loader = () => {
  return getCart();
};
