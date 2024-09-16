import { Outlet } from "react-router-dom"; // Updated import to reflect the correct package
import Navbar from '../ui/Navbar';

const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
