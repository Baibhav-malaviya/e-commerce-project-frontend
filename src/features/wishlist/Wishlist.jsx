import { useLoaderData } from "react-router-dom";
import { getWishList } from "../../Services/apiWishlist";
function Wishlist() {
  const wishlist = useLoaderData();
  console.log(wishlist);
  return <div>This is wishlist</div>;
}

export default Wishlist;

export const loader = () => {
  return getWishList();
};
