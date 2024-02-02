import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./features/components/Layout";
import Product from "./features/products/Product";
import Cart, { loader as cartLoader } from "./features/cart/Cart";
import Home from "./features/components/Home";
import Wishlist, { loader as wishlistLoader } from "./features/wishlist/Wishlist";
import Order, { loader as orderLoader } from "./features/orders/Order";
import Account, { loader as accountLoader } from "./features/users/Account";
import SignIn from "./features/components/SignIn";
import SignUp from "./features/components/SignUp";
import ProductItem from "./features/products/ProductItem";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <SignIn />,
          },
          {
            path: "/signIn",
            element: <SignIn />,
          },
          {
            path: "/signUp",
            element: <SignUp />,
          },
        ],
      },
      {
        path: "products/:productId",
        element: <ProductItem />,
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: cartLoader,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
        loader: wishlistLoader,
      },
      {
        path: "/orders",
        element: <Order />,
        loader: orderLoader,
      },
      {
        path: "/user",
        element: <Account />,
        loader: accountLoader,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
