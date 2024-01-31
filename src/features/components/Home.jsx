import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col h-auto sm:flex-row sm:h-full">
      <div className="w-full sm:w-1/2"></div>

      <Outlet />
    </div>
  );
}

export default Home;
