import { Outlet } from "react-router-dom";
import Footer from "src/core/components/Footer";
import Header from "src/core/components/Header";
import Home from "src/features/Home/pages/Home";

const MainLayout = () => (
  <div className="flex-col">
    <Header />

    <Home />
  </div>
);

export default MainLayout;
