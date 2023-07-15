import { Outlet } from "react-router-dom";
import Navegacion from "../components/Navegacion";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className=" mx-auto">
      <Navegacion />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
