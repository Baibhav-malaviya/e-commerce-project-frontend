import { Link } from "react-router-dom";

function Item({ id, item }) {
  return (
    <Link to={`/products/${id}`} className="w-full px-5 py-3 bg-cyan-500 sm:w-1/2 md:w-1/3">
      {item.name}
    </Link>
  );
}

export default Item;
