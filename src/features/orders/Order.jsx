import { useLoaderData } from "react-router-dom";
import { getCurrentOrder } from "../../Services/apiOrders";
function Order() {
  const currentOrder = useLoaderData();
  console.log("CURRENT ORDER: " + currentOrder);
  return <div>this is order</div>;
}

export default Order;

export const loader = () => {
  return getCurrentOrder();
};
