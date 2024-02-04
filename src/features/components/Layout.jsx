import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";

const Layout = () => {
  const navigation = useNavigation();
  console.log("NAVIGATION: ", navigation);
  const isLoading = navigation.state === "loading";
  console.log("LOADING: ", isLoading);
  // if (isLoading) return <Loader />;
  return (
    <div className="flex flex-col w-screen h-screen bg-cyan-100">
      <Header />
      <Main>{isLoading ? <Loader /> : <Outlet />}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
