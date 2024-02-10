import { deleteFromCart } from "../../Services/apiCart";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";

function DeleteFromCartButton({ children, type = "lg", productId, setIsLoading, className = "" }) {
  const dispatch = useDispatch();
  const handleDeleteFromCart = async (e) => {
    e.preventDefault();
    setIsLoading(false);
    try {
      setIsLoading(true);
      const removedItem = await deleteFromCart(productId);
      // addedItem.updatedCart.items
      dispatch(removeFromCart(productId));
      setIsLoading(false);
      console.log("Item removed from cart: ", removedItem);
    } catch (error) {
      setIsLoading(false);
      console.log("Error in deleteFromCart: ", error.message);
    }
  };

  return (
    <button
      className={`p-2 px-3 h-auto  ${type === "lg" ? "text-lg" : "text-xs"} font-bold rounded cursor-pointer  hover:bg-stone-700 bg-stone-900 text-stone-100 ${className}`}
      onClick={(e) => handleDeleteFromCart(e)}
    >
      {children}
    </button>
  );
}

export default DeleteFromCartButton;
