import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />

      <main className="flex-1 m-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
