import { useLoaderData } from "react-router-dom";
import { getCart } from "../../Services/apiCart";
function Cart() {
  const carts = useLoaderData();
  console.log("THIS IS FROM CART PAGE: ", carts);
  return <div>This is cart</div>;
}

export default Cart;

export const loader = () => {
  return getCart();
};
