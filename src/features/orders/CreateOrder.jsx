import { useState } from "react";
import { useLocation } from "react-router-dom";

function CreateOrder() {
  //   const [products, setProducts] = useState([]);
  //   const shippingAddress = address;
  const location = useLocation();
  const { state } = location;
  console.log("State using navigate: ", state);
  return (
    <div>
      {state.map((product) => (
        <p key={product._id}>
          This is create order
          <span className="font-bold underline"> #{product._id}</span>
        </p>
      ))}
    </div>
  );
}

export default CreateOrder;
