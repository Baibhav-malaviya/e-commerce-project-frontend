import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./features/components/Layout";
import Product from "./features/products/Product";
import Cart, { loader as cartLoader } from "./features/cart/Cart";
import Home from "./features/components/Home";
<<<<<<< HEAD
import Wishlist, { loader as wishlistLoader } from "./features/wishlist/Wishlist";
import Order, { loader as orderLoader } from "./features/orders/Order";
import Account, { loader as accountLoader } from "./features/users/Account";
=======
import Wishlist from "./features/wishlist/Wishlist";
import Order from "./features/orders/Order";
import Account from "./features/users/Account";
>>>>>>> 29520a450404ef3f022db601ed82b70c6cc88807
import SignIn from "./features/components/SignIn";
import SignUp from "./features/components/SignUp";

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
        path: "/products",
        element: <Product />,
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
