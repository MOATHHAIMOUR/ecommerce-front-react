import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div className="mx-auto flex h-[100vh] w-3/4 flex-col">
    <Header />
    <div className="flex-grow-[1]"></div>
    <Footer />
  </div>
);

export default MainLayout;
