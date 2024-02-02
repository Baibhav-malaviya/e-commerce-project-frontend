import { useLoaderData, useLocation } from "react-router-dom";
import { getCurrentOrder } from "../../Services/apiOrders";

const address = "Chitkara University, Rajpura, Punjab";
// {
//      products:[{id, quantity, price},...]
//      shippingAddress: "Chitkara University, Rajpura, Punjab"
// }
// const postData = { products, shippingAddress };
function Order() {
  const location = useLocation();
  const { state } = location;
  console.log("State using navigate: ", state);
  if (state) {
  } else {
  }

  const currentOrder = useLoaderData();
  console.log("CURRENT ORDER: " + currentOrder);
  return <div>this is order</div>;
}

export default Order;

export const loader = () => {
  return getCurrentOrder();
};
