import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/core/components/Footer";
import Header from "src/core/components/Header";

const MainLayout = () => (
  <div className="flex-col">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default MainLayout;
