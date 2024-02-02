import { Outlet } from "react-router-dom";

function Product() {
  return (
    <div className="bg-red-500">
      This is Product <Outlet />
    </div>
  );
}

export default Product;
