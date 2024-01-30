import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-cyan-100">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
