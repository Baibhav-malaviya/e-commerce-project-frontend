import { Outlet, useLoaderData } from "react-router-dom";
import { getCurrentOrder } from "../../Services/apiOrders";
import { useState } from "react";

// const address = "Chitkara University, Rajpura, Punjab";
// {
//      products:[{id, quantity, price},...]
//      shippingAddress: "Chitkara University, Rajpura, Punjab"
// }

// const postData = { products, shippingAddress };
function Order() {
  const currentOrder = useLoaderData();
  console.log("CURRENT ORDER: " + currentOrder);
  // if (productId) {
  //   setProducts((prev) => [...prev, { productId, quantity: 1, price: 1234 }]);
  // } else {
  //   setProducts((prev) => [...prev, { productId, quantity: 1, price: 1234 }]);
  // }
  return (
    <div>
      <div className="m-10">This is order </div>
      <Outlet />
    </div>
  );
}

export default Order;

export const loader = () => {
  return getCurrentOrder();
};
