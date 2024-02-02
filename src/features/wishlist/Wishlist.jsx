import { useLoaderData } from "react-router-dom";
import { getWishList } from "../../Services/apiWishlist";
function Wishlist() {
  const wishlist = useLoaderData();

  console.log(wishlist);
  return (
    <div>
      {" "}
      <ul className="">
        {wishlist[0].items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Wishlist;

export const loader = () => {
  return getWishList();
};
