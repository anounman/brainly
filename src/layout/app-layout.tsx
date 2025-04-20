import { Outlet } from "react-router-dom";
import NavBar from "../components/nav_bar";

const AppLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <NavBar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
