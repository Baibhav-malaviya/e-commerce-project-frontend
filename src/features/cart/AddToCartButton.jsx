import { addToCart } from "../../Services/apiCart";
function AddToCartButton({ onClick, children, type = "lg", productId, setIsLoading, className = "" }) {
  const handleAddToCart = async (e) => {
    e.preventDefault();
    setIsLoading(false);
    try {
      setIsLoading(true);
      const addedItem = await addToCart(1, productId);
      setIsLoading(false);
      console.log("Item added to cart: ", addedItem);
    } catch (error) {
      setIsLoading(false);
      console.log("Error in addToCart: ", error.message);
    }
  };

  return (
    <button
      className={`p-2 px-3 h-auto  ${type === "lg" ? "text-lg" : "text-xs"} font-bold rounded cursor-pointer  hover:bg-stone-700 bg-stone-900 text-stone-100 ${className}`}
      onClick={(e) => handleAddToCart(e)}
    >
      {children}
    </button>
  );
}

export default AddToCartButton;
