import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./features/components/Layout";
import Product from "./features/products/Product";
import Cart from "./features/cart/Cart";
import Home from "./features/components/Home";
import Wishlist from "./features/wishlist/Wishlist";
import Order from "./features/orders/Order";
import Account from "./features/users/Account";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/user",
        element: <Account />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
