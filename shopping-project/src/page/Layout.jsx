import { Outlet } from "react-router-dom";
import NavbarComp from "../components/NavbarComp";

const Layout = () => {
  return (
    <div>
      <NavbarComp />
      {/* Outlet을 통해서 화면 구성 */}
      <div className="mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;