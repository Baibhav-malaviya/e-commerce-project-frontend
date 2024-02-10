import { Link, useLoaderData, useNavigation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { useEffect } from "react";
import Item from "../components/Item";
import { fetchCartData } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const { cartData, loading, error } = useSelector((state) => state.cart);

  // console.log(cartData, "....", loading, "....", error);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  // return <div>This is cart</div>;
  if (loading === "loading") return <Loader />;
  return (
    <ul className="flex flex-col justify-around w-full gap-y-5 ">
      {cartData.map((item) => (
        <Item key={item._id} id={item._id} item={item} />
      ))}
    </ul>
  );
}

export default Cart;
