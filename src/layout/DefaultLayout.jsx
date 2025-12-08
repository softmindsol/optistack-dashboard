import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";

const DefaultLayout = () => {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export default DefaultLayout;
